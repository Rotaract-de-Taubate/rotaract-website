import React from 'react';
import { Icon, Point } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import pin from './rotary-pin.svg';

const RotaractIcon = new Icon({
  iconUrl: pin,
  iconRetinaUrl: pin,
  iconSize: new Point(50, 50),
  iconAnchor: [25, 50],
  popupAnchor: [0, -30],
});

const MapPage = () => {
  return (
    <div style={{height: 300}}>
      <MapContainer center={[-23.0309, -45.5683]} zoom={13} scrollWheelZoom={false} style={{height: 300}}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-23.031696, -45.567005]} icon={RotaractIcon}>
          <Popup>
            DCBM Medicina<br />Av. Tiradentes do Brasil, 500 - Jardim das Nações, Taubaté - SP, 12030-180
          </Popup>
        </Marker>
        <Marker position={[-23.0238909, -45.5544782]} icon={RotaractIcon}>
          <Popup>
            <strong>La Vista Eyewear</strong><br />R. Visc. do Rio Branco, 100 - sala 11 - Centro, Taubaté - SP, 12020-040.
          </Popup>
        </Marker>
        <Marker position={[-23.039937300000002, -45.584567799999995]} icon={RotaractIcon}>
          <Popup>
            Viva Eventos<br />Rua Umberto Passareli, 150 - Vila das Jaboticabeiras, Taubaté - SP, 12031-225
          </Popup>
        </Marker>
      </MapContainer>
  </div>
  );
}

export default MapPage;