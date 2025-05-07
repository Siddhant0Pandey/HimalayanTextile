import React, { useState } from 'react';
import CountryInfo from './CountryInfo';
import MapContainerComponent from './MapContainerComponent';


const MyMap = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    { lat: 51.5074, lng: -0.1278, name: 'United Kingdom' },
    { lat: 48.8566, lng: 2.3522, name: 'France' },       
    { lat: 40.7128, lng: -74.0060, name: 'United States' }, 
    { lat: 35.6762, lng: 139.6503, name: 'Japan' },      
    { lat: -33.8688, lng: 151.2093, name: 'Australia' },   
    { lat: 55.7558, lng: 37.6173, name: 'Russia' },        
 
  ];

  const handleMarkerClick = (countryName) => {
    setSelectedCountry(countryName);
  };

  return (
    <div className="relative w-full h-screen bg-gray-100">
 
      <MapContainerComponent
        countries={countries}
        onMarkerClick={handleMarkerClick}
      />
      <CountryInfo countryName={selectedCountry} />
    </div>
  );
};

export default MyMap;
