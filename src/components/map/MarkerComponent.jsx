import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Define marker icons for export and import
const getIcon = (type) => {
  const iconUrl =
    type === 'export'
      ? 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png'
      : 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png';

  return new L.Icon({
    iconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl:
      'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
  });
};

const MarkerComponent = ({ country, onClick }) => {
  return (
    <Marker
      position={[country.lat, country.lng]}
      eventHandlers={{
        click: () => onClick(country.name),
      }}
      icon={getIcon(country.type)}
    >
      <Popup>{country.name}</Popup>
    </Marker>
  );
};

export default MarkerComponent;
