import React, { useEffect, useRef } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import gsap from "gsap";

const getIcon = (type) => {
  const iconUrl =
    type === "export"
      ? "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png"
      : "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png";

  return L.divIcon({
    className: "animated-marker",
    html: `<img src="${iconUrl}" style="height:41px; width:25px;" />`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });
};

const MarkerComponent = ({ country, onClick, index }) => {
  const markerRef = useRef(null);

  useEffect(() => {
    if (!markerRef.current) return;

    // Set initial position off-screen & transparent
    gsap.set(markerRef.current, { y: -100, opacity: 0 });

    // Animate dropping in, staggered by index
    gsap.to(markerRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "bounce.out",
      delay: index * 0.2, // stagger delay (adjust as needed)
    });
  }, [index]);

  return (
    <Marker
      position={[country.lat, country.lng]}
      icon={getIcon(country.type)}
      eventHandlers={{
        click: () => onClick(country.name),
      }}
      ref={(marker) => {
        if (marker) {
          const el = marker.getElement();
          if (el) markerRef.current = el;
        }
      }}
    >
      <Popup>{country.name}</Popup>
    </Marker>
  );
};

export default MarkerComponent;
