import React, { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";

import Sidebar from "../../components/Sidebar";
import { BloodDonationDetails, PageBloodDonation } from "./styles";
import mapIcon from "../../utils/mapIcon";
import api from "../../services/api";
import { useParams } from "react-router-dom";

interface BloodDonation {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  work_hours: string;
  images: Array<{
    url: string;
  }>
}

interface BloodDonationParams {
  id: string;
}

export default function BloodDonation() {
  const params = useParams<BloodDonationParams>();
  const [blood_donations, setBloodDonation] = useState<BloodDonation>();

  useEffect(() => {
    api.get(`blood_donations/${params.id}`).then(response => {
      console.log(response.data);
      setBloodDonation(response.data);
  }).catch(error => {
    throw new Error(error);
  });
  },[params.id]);

  if (!blood_donations) {
    return <p>Carregando...</p>
  }

  return (
    <PageBloodDonation>
      <Sidebar></Sidebar>
      <main>
        <BloodDonationDetails>
          <img src={blood_donations.images[0].url} alt="Lar das meninas" />
          
          <div className="orphanage-details-content">
          <h1>{blood_donations.name}</h1>
        <p>{ blood_donations.about }</p>

            <div className="map-container">
              <Map 
                center={[blood_donations.latitude, blood_donations.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={mapIcon} position={[blood_donations.latitude, blood_donations.longitude]} />
              </Map>

              <footer>
                <a rel="noopener noreferrer" target="_blank" href={`https://www.google.com/maps/@${blood_donations.latitude},${blood_donations.longitude},17z`}>Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
        <p>{ blood_donations.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                {blood_donations.work_hours}
              </div>
            </div>
          </div>
        </BloodDonationDetails>
      </main>
    </PageBloodDonation>
  );
}