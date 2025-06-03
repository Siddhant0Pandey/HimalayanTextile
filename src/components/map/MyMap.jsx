import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import CountryInfo from "./CountryInfo";
import MapContainerComponent from "./MapContainerComponent";
import useInView from "./useInView";

const MyMap = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const titleRef = useRef(null);
  const mapRef = useRef(null);
  const titleAnimated = useRef(false);
  const mapAnimated = useRef(false);

  const titleInView = useInView(titleRef, { threshold: 0.2 });
  const mapInView = useInView(mapRef, { threshold: 0.2 });

  useEffect(() => {
    if (titleInView && !titleAnimated.current) {
      titleAnimated.current = true;

      gsap
        .timeline()
        .from(titleRef.current.querySelectorAll("h1, .legend-item"), {
          opacity: 0,
          y: 40,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
        });
    }
  }, [titleInView]);

  useEffect(() => {
    if (mapInView && !mapAnimated.current) {
      mapAnimated.current = true;

      gsap.fromTo(
        mapRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, [mapInView]);

  const countries = [
    { lat: 40.7128, lng: -74.006, name: "United States" },
    { lat: 45.4215, lng: -75.6972, name: "Canada" },
    { lat: 50.8503, lng: 4.3517, name: "Belgium" },
    { lat: 40.4637, lng: -3.7492, name: "Spain" },
    { lat: 52.3676, lng: 4.9041, name: "Netherlands" },
    { lat: 51.5074, lng: -0.1278, name: "England" },
    { lat: 52.52, lng: 13.405, name: "Germany" },
    { lat: -34.9011, lng: -56.1645, name: "Uruguay" },
    { lat: -14.235, lng: -51.9253, name: "Brazil" },
    { lat: 41.8719, lng: 12.5674, name: "Italy" },
    { lat: 35.6762, lng: 139.6503, name: "Japan" },
    { lat: 37.5665, lng: 126.978, name: "South Korea" },
    { name: "Australia", lat: -22.8688, lng: 138.2093 }, // Sydney
    { name: "India", lat: 18.6139, lng: 77.209 },
  ];

  const handleMarkerClick = (countryName) => {
    setSelectedCountry(countryName);
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100 pt-16">
      {/* Title Section */}
      <div
        ref={titleRef}
        className="w-full px-4 py-6 md:px-10 bg-white shadow-md text-center z-10"
      >
        <h1 className="text-[clamp(2rem,5vw,6rem)] uppercase font-extrabold leading-tight text-darkText">
          Global Trade Flows
        </h1>
      </div>

      {/* Map Section */}
      <div
        ref={mapRef}
        className="relative opacity-0 w-full"
        style={{ height: "calc(var(--vh, 1vh) * 85)" }} // Adjust for your design
      >
        <MapContainerComponent
          countries={countries}
          onMarkerClick={handleMarkerClick}
        />
        <div className="absolute bottom-4 left-4 right-4 sm:left-8 sm:right-8 z-[1000]">
          <CountryInfo countryName={selectedCountry} />
        </div>
      </div>
    </div>
  );
};

export default MyMap;
