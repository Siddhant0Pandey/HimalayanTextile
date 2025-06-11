/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const AnimatedMapPins = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const mapRef = useRef(null);
  const isInView = useInView(mapRef, { 
    threshold: 0.3, // Trigger when 30% of the map is visible
    once: false // Allow re-triggering when scrolling back into view
  });

  const MAP_IMAGE_URL = "/assets/MAP.png";
  const PIN_SVG = "/assets/img/hempp.svg";

  const countries = [
    { name: "India", left: 68, top: 50 },
    { name: "United States", left: 22, top: 35 },
    { name: "Canada", left: 20, top: 25 },
    { name: "Belgium", left: 48, top: 30 },
    { name: "Spain", left: 45, top: 35 },
    { name: "Netherlands", left: 49, top: 28 },
    { name: "England", left: 44, top: 30 },
    { name: "Germany", left: 46, top: 32 },
    { name: "Uruguay", left: 29, top: 75 },
    { name: "Brazil", left: 28, top: 60 },
    { name: "Italy", left: 48, top: 38 },
    { name: "Japan", left: 85, top: 38 },
    { name: "South Korea", left: 82, top: 38 },
    { name: "Australia", left: 82, top: 75 },
  ];

  const handlePinClick = (country) => {
    setSelectedCountry(country);
  };

  const handleMouseEnter = (country) => {
    setHoveredCountry(country);
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };

  const closeModal = () => {
    setSelectedCountry(null);
  };

  return (
    <section className='w-full min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-6 lg:py-12'>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center pb-4"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Global Trade Flow  Map
        </h1>
        <p className="text-gray-600 text-lg">
          Discover our growing trading region around the world
        </p>
      </motion.div>
    
      <div className="flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl" ref={mapRef}>
          {/* World Map Container */}
          <div className="relative w-full h-auto rounded-2xl shadow-2xl overflow-hidden bg-highlight  ">
            {/* World Map Image */}
            <img
              src={MAP_IMAGE_URL}
              alt="World Map"
              className="w-full h-auto block"
              style={{ maxHeight: '80vh' }}
            />
            
            <div className="absolute inset-0">
              {countries.map((country, index) => {
                const isHovered = hoveredCountry?.name === country.name;
                
                return (
                  <motion.div
                    key={`${country.name}-${isInView}`} // Force re-render when isInView changes
                    className="absolute cursor-pointer hover:z-50"
                    style={{
                      left: `${country.left}%`,
                      top: `${country.top}%`,
                      transform: 'translate(-50%, -100%)',
                    }}
                    initial={{ y: -100, opacity: 0, scale: 0 }}
                    animate={isInView ? { 
                      y: 0, 
                      opacity: 1, 
                      scale: 1,
                      transition: {
                        delay: index * 0.15,
                        duration: 0.8,
                        type: "spring",
                        damping: 12,
                        stiffness: 100
                      }
                    } : { y: -100, opacity: 0, scale: 0 }}
                    whileHover={{ 
                      scale: 1.3,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={() => handleMouseEnter(country)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handlePinClick(country)}
                  >
                    {/* Pin Shadow */}
                    <motion.div
                      className="absolute w-6 h-3 bg-black rounded-full opacity-20 blur-sm"
                      style={{
                        bottom: '-8px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { 
                        opacity: 0.2,
                        transition: { delay: index * 0.15 + 0.5 }
                      } : { opacity: 0 }}
                    />
                    
                    {/* Hemp Pin */}
                    <motion.div
                      className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg bg-white"
                    >
                      <img
                        src={PIN_SVG}
                        alt={`Hemp pin for ${country.name}`}
                        className="w-6 h-6"
                      />
                    </motion.div>
                    
                    {/* Country Name Tooltip - Shows on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 z-50"
                          initial={{ opacity: 0, y: -10, scale: 0.8 }}
                          animate={{ 
                            opacity: 1, 
                            y: 0,
                            scale: 1,
                            transition: { duration: 0.2 }
                          }}
                          exit={{ 
                            opacity: 0, 
                            y: -10, 
                            scale: 0.8,
                            transition: { duration: 0.15 }
                          }}
                        >
                          <div className="bg-emerald-800 text-white px-3 py-1 rounded-md shadow-lg text-sm font-medium whitespace-nowrap">
                            {country.name}
                          </div>
                          <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-emerald-700 mx-auto -mt-1"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Ripple Effect */}
                    <motion.div
                      className="absolute w-12 h-12 border-2 border-green-400 rounded-full"
                      style={{
                        top: '-2px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                      animate={isInView ? {
                        scale: [1, 1.8, 1],
                        opacity: [0.6, 0, 0.6],
                      } : { scale: 1, opacity: 0 }}
                      transition={isInView ? {
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.15 + 1.2,
                      } : {}}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Country Info Modal */}
          <AnimatePresence>
            {selectedCountry && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                onClick={closeModal}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 10 }}
                  transition={{ type: "spring", damping: 15, stiffness: 300 }}
                  className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
                    >
                      <img
                        src={PIN_SVG}
                        alt="Hemp icon"
                        className="w-8 h-8"
                      />
                    </motion.div>
                    
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl font-bold text-gray-800 mb-4"
                    >
                      {selectedCountry.name}
                    </motion.h2>
                    
                    {/* <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-600 mb-6"
                    >
                      <p className="text-lg">
                        Our Trade Region
                      </p>
                      <p className="text-sm mt-2">
                        Click to learn more about our trade flow in this region
                      </p>
                    </motion.div> */}
                    
                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}  
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={closeModal}
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      Close
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence> 
        </div>
      </div>
    </section>
  );
};

export default AnimatedMapPins;