import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useInView } from "react-intersection-observer";
import MarkerComponent from "./MarkerComponent";

const countries = [
  { name: "India", lat: 28.6139, lng: 77.209, type: "export" },
  { name: "China", lat: 39.9042, lng: 116.4074, type: "export" },
  { name: "Japan", lat: 35.6895, lng: 139.6917, type: "export" },
];

const MapView = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [animationTrigger, setAnimationTrigger] = useState(0);

  useEffect(() => {
    if (inView) {
      setAnimationTrigger((prev) => prev + 1);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <MapContainer
        center={[28.3949, 84.124]}
        zoom={4}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {countries.map((country, index) => (
          <MarkerComponent
            key={country.name}
            country={country}
            index={index}
            shouldAnimate={inView}
            animationTrigger={animationTrigger}
            onClick={(name) => alert(name)}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
