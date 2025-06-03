import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerComponent from "./MarkerComponent";

const MapContainerComponent = ({ countries, onMarkerClick }) => {
  const [shouldAnimateMarkers, setShouldAnimateMarkers] = useState(false);
  const [mapHeight, setMapHeight] = useState("100vh");
  const mapRef = useRef(null);

  // Update height ONLY for mobile devices
  useEffect(() => {
    const setAccurateMobileHeight = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        const actualHeight = window.innerHeight;
        setMapHeight(`${actualHeight}px`);
      } else {
        setMapHeight("100vh");
      }
    };

    setAccurateMobileHeight();
    window.addEventListener("resize", setAccurateMobileHeight);
    window.addEventListener("orientationchange", setAccurateMobileHeight);

    return () => {
      window.removeEventListener("resize", setAccurateMobileHeight);
      window.removeEventListener("orientationchange", setAccurateMobileHeight);
    };
  }, []);

  const fitMarkersInView = (mapInstance) => {
    if (!countries || countries.length === 0) return;

    const coordinates = countries
      .filter(
        (country) =>
          (country.lat || country.latitude) &&
          (country.lng || country.longitude || country.lon)
      )
      .map((country) => [
        country.lat || country.latitude,
        country.lng || country.longitude || country.lon,
      ]);

    if (coordinates.length === 0) return;

    const L = window.L;
    if (!L) return;

    const bounds = new L.LatLngBounds();
    coordinates.forEach((coord) => bounds.extend(coord));

    mapInstance.fitBounds(bounds, {
      padding: [40, 40],
      maxZoom: 6,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => setShouldAnimateMarkers(true), 300);
    const fitTimer = setTimeout(() => {
      if (mapRef.current) fitMarkersInView(mapRef.current);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(fitTimer);
    };
  }, [countries]);

  const mapContainerStyle = {
    width: "100vw",
    height: mapHeight,
    minHeight: "300px",
    position: "relative",
    overflow: "hidden",
  };

  return (
    <div style={mapContainerStyle}>
      <MapContainer
        ref={mapRef}
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={false} // ❌ disable zoom on scroll
        doubleClickZoom={true} // ✅ allow double-click zoom
        touchZoom={true} // ✅ allow pinch zoom
        dragging={false} // ✅ allow dragging
        keyboard={false}
        zoomControl={true} // ✅ show zoom buttons
        style={{ width: "100%", height: "100%" }}
        whenReady={(map) => {
          mapRef.current = map.target;
          setTimeout(() => {
            map.target.invalidateSize();
            fitMarkersInView(map.target);
          }, 100);
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {countries?.map((country, index) => (
          <MarkerComponent
            key={`marker-${index}-${country.name || country.id || index}`}
            country={country}
            onClick={onMarkerClick}
            index={index}
            shouldAnimate={shouldAnimateMarkers}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default MapContainerComponent;
