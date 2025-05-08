  import React from 'react';
  import { MapContainer, TileLayer } from 'react-leaflet';
  import 'leaflet/dist/leaflet.css';
  import MarkerComponent from './MarkerComponent';

  const MapContainerComponent = ({ countries, onMarkerClick }) => {
    return (
      <MapContainer
        center={[20, 0]}  
        zoom={2}    
        scrollWheelZoom={false}    
        style={{ width: '100%', height: '100%' }}
      >
      
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        
        {countries.map((country, index) => (
          <MarkerComponent
            key={index}
            country={country}
            onClick={onMarkerClick}
          />
        ))}
      </MapContainer>
    );
  };

  export default MapContainerComponent;
