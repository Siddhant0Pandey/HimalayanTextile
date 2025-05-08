import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import CountryInfo from './CountryInfo';
import MapContainerComponent from './MapContainerComponent';

const MyMap = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const titleRef = useRef(null); 

  useEffect(() => {
  
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      }
    );
  }, []);

  const countries = [
    { lat: 51.5074, lng: -0.1278, name: 'United Kingdom', type: 'export' },
    { lat: 48.8566, lng: 2.3522, name: 'France', type: 'import' },
    { lat: 40.7128, lng: -74.0060, name: 'United States', type: 'export' },
    { lat: 35.6762, lng: 139.6503, name: 'Japan', type: 'import' },
    { lat: -33.8688, lng: 151.2093, name: 'Australia', type: 'export' },
    { lat: 55.7558, lng: 37.6173, name: 'Russia', type: 'import' },
  ];

  const handleMarkerClick = (countryName) => {
    setSelectedCountry(countryName);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100 pt-16">
      {/* Title section */}
      <div
        ref={titleRef}
        className="w-full p-6 bg-white shadow-md text-center z-10"
      >
        <h1 className="text-[clamp(2rem,5vw,7rem)] uppercase font-extrabold leading-[1] text-darkText">
          Global Trade Flows
        </h1>
        <div className="flex gap-8 px-4 w-full justify-center mt-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-blue-600"></div>
            <span className="text-sm font-bold text-darkText">Export</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-yellow-600"></div>
            <span className="text-sm font-bold text-darkText">Import</span>
          </div>
        </div>
      </div>

   
      <div className="flex-1 relative">
        <MapContainerComponent
          countries={countries}
          onMarkerClick={handleMarkerClick}
        />
        <CountryInfo countryName={selectedCountry} />
      </div>
    </div>
  );
};

export default MyMap;
