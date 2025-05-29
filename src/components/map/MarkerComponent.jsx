import React, { useEffect, useRef, useState } from "react";
import { Marker, Popup, Polyline } from "react-leaflet";
import { useInView } from "react-intersection-observer";
import L from "leaflet";
import { gsap } from "gsap";

const NEPAL_COORDS = [28.3949, 84.124];

const getIcon = (type, currentRotation = 0, scale = 1) => {
  const iconUrl =
    type === "export"
      ? "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png"
      : "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png";

  return L.divIcon({
    className: "flying-pin-marker",
    html: `
      <div style="
        transform: rotate(${currentRotation}deg) scale(${scale});
        transition: transform 0.2s ease-out;
        filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
      ">
        <img src="${iconUrl}" style="height:41px; width:25px;" />
      </div>
    `,
    iconSize: [25 * scale, 41 * scale],
    iconAnchor: [12.5 * scale, 41 * scale],
    popupAnchor: [1, -34 * scale],
  });
};

// Calculate bearing between two points
const getBearing = (startLat, startLng, endLat, endLng) => {
  const y = Math.sin(endLng - startLng) * Math.cos(endLat);
  const x =
    Math.cos(startLat) * Math.sin(endLat) -
    Math.sin(startLat) * Math.cos(endLat) * Math.cos(endLng - startLng);
  return (Math.atan2(y, x) * 180) / Math.PI;
};

const MarkerComponent = ({
  country,
  onClick,
  index,
  shouldAnimate = false,
}) => {
  const markerRef = useRef(null);
  const [animatedPosition, setAnimatedPosition] = useState(NEPAL_COORDS);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [flightPath, setFlightPath] = useState([NEPAL_COORDS]);
  const [showMarker, setShowMarker] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!shouldAnimate || !inView) return;

    // Reset states
    setFlightPath([NEPAL_COORDS]);
    setShowMarker(false);
    setAnimatedPosition(NEPAL_COORDS);
    setRotation(0);
    setScale(1);
    setOpacity(0);

    const startLat = NEPAL_COORDS[0];
    const startLng = NEPAL_COORDS[1];
    const targetLat = country.lat;
    const targetLng = country.lng;
    const distance = Math.sqrt(
      Math.pow(targetLat - startLat, 2) + Math.pow(targetLng - startLng, 2)
    );
    const duration = Math.max(1500, distance * 30);

    const bearing = getBearing(
      startLat * (Math.PI / 180),
      startLng * (Math.PI / 180),
      targetLat * (Math.PI / 180),
      targetLng * (Math.PI / 180)
    );

    let progress = 0;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      progress = Math.min(elapsed / duration, 1);
      const flightProgress = 1 - Math.pow(1 - progress, 2);

      const arcHeight = Math.sin(progress * Math.PI) * (distance * 0.3);
      const currentLat = startLat + (targetLat - startLat) * flightProgress;
      const currentLng = startLng + (targetLng - startLng) * flightProgress;
      const arcLat = currentLat + arcHeight * 0.1;

      const newPos = [arcLat, currentLng];
      setAnimatedPosition(newPos);
      setFlightPath((prev) => [...prev, newPos]);

      // Animate rotation and scale using GSAP
      if (markerRef.current) {
        gsap.to(markerRef.current._icon, {
          rotate: bearing + "deg",
          scale: 1 + 0.3 * Math.sin(progress * Math.PI),
          duration: 0.2,
        });
      }

      setOpacity(1);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setAnimatedPosition([targetLat, targetLng]);
        setShowMarker(true);

        gsap.to(markerRef.current._icon, {
          scale: 1.2,
          duration: 0.2,
          onComplete: () => {
            gsap.to(markerRef.current._icon, { scale: 1, duration: 0.2 });
          },
        });
      }
    };

    setTimeout(() => requestAnimationFrame(animate), index * 150);
  }, [inView, shouldAnimate, country.lat, country.lng]);

  return (
    <div ref={ref}>
      {flightPath.length > 1 && (
        <Polyline
          positions={flightPath}
          pathOptions={{
            color: "#ff6b6b",
            weight: 3,
            opacity: 0.8,
            dashArray: "6, 8",
          }}
        />
      )}
      {showMarker && (
        <Marker
          ref={markerRef}
          position={animatedPosition}
          icon={getIcon(country.type, rotation, scale)}
          opacity={opacity}
          eventHandlers={{
            click: () => onClick(country.name),
          }}
        >
          <Popup>{country.name}</Popup>
        </Marker>
      )}
    </div>
  );
};

export default MarkerComponent;
