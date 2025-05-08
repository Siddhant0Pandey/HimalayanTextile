import React, { useEffect, useRef } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import gsap from 'gsap';

const getIcon = (type) => {
  const iconUrl =
    type === 'export'
      ? 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png'
      : 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png';

  return L.divIcon({
    className: '',
    html: `<img src="${iconUrl}" style="height:41px; width:25px;" />`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
  });
};

const MarkerComponent = ({ country, onClick }) => {
  const markerRef = useRef(null);

  useEffect(() => {
    const el = markerRef.current;
    if (!el) return;

    // Initial setup so it's off-screen before any intersection
    gsap.set(el, { y: -100, opacity: 0 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(el, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'bounce.out',
          });
        } else {
          // Reset on exit so it can animate again when it re-enters
          gsap.set(el, { y: -100, opacity: 0 });
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <Marker
      position={[country.lat, country.lng]}
      eventHandlers={{
        click: () => onClick(country.name),
      }}
      icon={getIcon(country.type)}
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
