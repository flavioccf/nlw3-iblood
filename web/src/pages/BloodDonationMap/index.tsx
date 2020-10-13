import React from 'react';
import { BloodDonationMapArea } from './styles';
import mapMarkerImg from '../../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

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
            </Map>

            <Link to="" className="create-blood-donation">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </BloodDonationMapArea>
    );
}

export default BloodDonationMap;