import React from 'react';
import { BloodDonationMapArea } from './styles';
import mapMarkerImg from '../../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function BloodDonationMap() {
    return(
        <BloodDonationMapArea>
            <aside>
                <header>
                    <img className="marker-img" src={mapMarkerImg} alt="Doe Sangue"/>

                    <h2>Escolhar um local para doar sangue no mapa</h2>
                    <p>Você irá ajudar muitas pessoas!</p>
                </header>

                <footer>
                    <strong>Cidade</strong>
                    <span>Estado</span>
                </footer>
            </aside>
            <Map
                center={[-23.0860544,-45.7872443]}
                zoom={15}
                style={{
                    width: '100%', height: '100%'
                }}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
                <Marker
                    icon={mapIcon}
                    position={[-23.0860544,-45.7872443]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-poup">
                        Hemonúcleo
                        <Link to="blood_donation/1"><FiArrowRight size={20} color="#FFF"/></Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/blood_donation/create" className="create-blood-donation">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </BloodDonationMapArea>
    );
}

export default BloodDonationMap;