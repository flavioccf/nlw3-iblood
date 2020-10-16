import React, { useEffect, useState } from 'react';
import { BloodDonationMapArea } from './styles';
import mapMarkerImg from '../../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';
import geoLocation from '../../utils/geoLocation';

interface BloodDonation {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

interface UserLocation {
    latitude: number,
    longitude: number,
    zoom: number
}

interface GeoLocation {
    coords: {
        accuracy: number
        altitude: null
        altitudeAccuracy: null
        heading: null
        latitude: number
        longitude: number
        speed: null
    }
    timestamp: number
}

function BloodDonationMap() {
    const [blood_donations, setBloodDonations] = useState<BloodDonation[]>([]);
    const [userLocation, setUserLocation] = useState<UserLocation>({
        latitude: -12.3150658,
        longitude: -51.2908187,
        zoom: 5
    });
    const geo:any = geoLocation();

    useEffect(() => {
        geo.then((res:GeoLocation) => {
            const coords = res.coords;
            setUserLocation({
                latitude: coords.latitude,
                longitude: coords.longitude,
                zoom: 9
            })
        });
        api.get('blood_donations').then(response => {
            setBloodDonations(response.data);
        });
    }, []);

    return(
        <BloodDonationMapArea>
            <aside>
                <header>
                    <img className="marker-img" src={mapMarkerImg} alt="Doe Sangue"/>

                    <h2>Escolhar um local no mapa para doar sangue</h2>
                    <p>Você irá ajudar muitas pessoas!</p>
                </header>

                <footer>
                    <strong>Cidade</strong>
                    <span>Estado</span>
                </footer>
            </aside>
            <Map
                center={[userLocation.latitude, userLocation.longitude]}
                zoom={userLocation.zoom}
                style={{
                    width: '100%', height: '100%'
                }}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
                {blood_donations.map(blood_donation => {
                    return (
                    <Marker
                    key={blood_donation.id}
                    icon={mapIcon}
                    position={[blood_donation.latitude, blood_donation.longitude]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-poup">
                        {blood_donation.name}
                        <Link to={`blood_donation/${blood_donation.id}`}><FiArrowRight size={20} color="#FFF"/></Link>
                    </Popup>
                    </Marker>
                    );
                })}                
            </Map>

            <Link to="/blood_donation/create" className="create-blood-donation">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </BloodDonationMapArea>
    );
}

export default BloodDonationMap;