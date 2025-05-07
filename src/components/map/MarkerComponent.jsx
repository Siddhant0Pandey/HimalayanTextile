import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const MarkerComponent = ({ country, onClick }) => {
  return (
    <Marker
      position={[country.lat, country.lng]}
      eventHandlers={{
        click: () => onClick(country.name),
      }}
      icon={new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41], 
      })}
    >
      <Popup>{country.name}</Popup>
    </Marker>
  );
};

export default MarkerComponent;
