import React, { useEffect, useRef, useState } from "react";
import { Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";

const NEPAL_COORDS = [28.3949, 84.124];

const getIcon = (type, currentRotation = 0, scale = 1) => {
  const iconUrl =
    type === "export"
      ? "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png"
      : "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png";

  return L.divIcon({
    className: "flying-pin-marker",
    html: `
      <div style="
        transform: rotate(${currentRotation}deg) scale(${scale});
        transition: all 0.1s ease-out;
        filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
      ">
        <img src="${iconUrl}" style="height:41px; width:25px; display: block;" />
      </div>
    `,
    iconSize: [25 * scale, 41 * scale],
    iconAnchor: [12 * scale, 41 * scale],
    popupAnchor: [1, -34 * scale],
  });
};

const MarkerComponent = ({
  country,
  onClick,
  index,
  shouldAnimate = false,
  animationTrigger,
}) => {
  const markerRef = useRef(null);
  const [animatedPosition, setAnimatedPosition] = useState(NEPAL_COORDS);
  const [opacity, setOpacity] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [flightPath, setFlightPath] = useState([NEPAL_COORDS]);
  const [showMarker, setShowMarker] = useState(false);

  useEffect(() => {
    // Reset state for new animation
    setFlightPath([NEPAL_COORDS]);
    setShowMarker(false);
    setAnimatedPosition(NEPAL_COORDS);
    setRotation(0);
    setScale(1);
    setOpacity(1);

    if (shouldAnimate) {
      const delay = index * 10;

      setTimeout(() => {
        const startLat = NEPAL_COORDS[0];
        const startLng = NEPAL_COORDS[1];
        const targetLat = country.lat;
        const targetLng = country.lng;

        const distance = Math.sqrt(
          Math.pow(targetLat - startLat, 2) + Math.pow(targetLng - startLng, 2)
        );
        const duration = Math.max(1500, distance * 30);

        let progress = 0;
        const startTime = Date.now();
        const angle =
          Math.atan2(targetLng - startLng, targetLat - startLat) *
          (180 / Math.PI);

        const animate = () => {
          const elapsed = Date.now() - startTime;
          progress = Math.min(elapsed / duration, 1);
          const flightProgress = 1 - Math.pow(1 - progress, 2);

          const arcHeight = Math.sin(progress * Math.PI) * (distance * 0.3);
          const currentLat = startLat + (targetLat - startLat) * flightProgress;
          const currentLng = startLng + (targetLng - startLng) * flightProgress;
          const arcOffset = arcHeight * 0.1;
          const arcLat = currentLat + arcOffset;

          const newPos = [arcLat, currentLng];
          setAnimatedPosition(newPos);
          setFlightPath((prevPath) => [...prevPath, newPos]);

          if (progress < 0.1) {
            setRotation(angle + progress * 10 * 360);
            setScale(1 + progress * 0.2);
          } else if (progress < 0.9) {
            const wobble = Math.sin(progress * Math.PI * 8) * 5;
            setRotation(angle + wobble);
            setScale(1.1 + Math.sin(progress * Math.PI) * 0.3);
          } else {
            const landingProgress = (progress - 0.9) / 0.1;
            setRotation(angle * (1 - landingProgress));
            setScale(1.3 - landingProgress * 0.3);
          }

          if (progress < 0.05) {
            setOpacity(0.7 + progress * 6);
          } else if (progress > 0.95) {
            const fadeProgress = (progress - 0.95) / 0.05;
            setOpacity(1 - fadeProgress * 0.2);
          } else {
            setOpacity(1);
          }

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setAnimatedPosition([targetLat, targetLng]);
            setRotation(0);
            setScale(1);
            setOpacity(1);
            setShowMarker(true);

            setTimeout(() => {
              setScale(1.2);
              setTimeout(() => setScale(1), 150);
            }, 50);
          }
        };

        requestAnimationFrame(animate);
      }, delay);
    } else {
      setAnimatedPosition([country.lat, country.lng]);
      setOpacity(1);
      setRotation(0);
      setScale(1);
      setFlightPath([NEPAL_COORDS, [country.lat, country.lng]]);
      setShowMarker(true);
    }
  }, [shouldAnimate, animationTrigger]);

  return (
    <>
      {flightPath.length > 1 && (
        <Polyline
          positions={flightPath}
          pathOptions={{
            color: "#ff4000",
            weight: 2,
            opacity: 0.7,
            dashArray: "10, 5",
            lineCap: "round",
            lineJoin: "round",
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
    </>
  );
};

export default MarkerComponent;
