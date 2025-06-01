import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerComponent from "./MarkerComponent";

const MapContainerComponent = ({ countries, onMarkerClick }) => {
  const [shouldAnimateMarkers, setShouldAnimateMarkers] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts (when user reaches map section)
    const timer = setTimeout(() => {
      setShouldAnimateMarkers(true);
    }, 300); // Small delay to ensure map is loaded

    return () => clearTimeout(timer);
  }, []);

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {countries.map((country, index) => (
        <MarkerComponent
          key={index}
          country={country}
          onClick={onMarkerClick}
          index={index}
          shouldAnimate={shouldAnimateMarkers}
        />
      ))}
    </MapContainer>
  );
};

export default MapContainerComponent;
