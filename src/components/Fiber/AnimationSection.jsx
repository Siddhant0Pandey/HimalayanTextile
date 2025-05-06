import React, { useState, useEffect } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

// Desktop and mobile image data
const desktopImageData = [
  {
    url: "/assets/img/Fiber/raw4.png", // Original desktop images
    alt: "Image 1",
  },
  {
    url: "/assets/img/Fiber/raw5.png",
    alt: "Image 2",
  },
  {
    url: "/assets/img/Fiber/raw8.png",
    alt: "Image 3",
  },
];

const mobileImageData = [
  {
    url: "/assets/img/Fiber/raw1.png", // Mobile images as requested
    alt: "Image 1",
  },
  {
    url: "/assets/img/Fiber/raw.png",
    alt: "Image 2",
  },
  {
    url: "/assets/img/Fiber/raw3.png",
    alt: "Image 3",
  },
];

const AnimationSection = () => {
  // Use a single state to track which element is currently entering
  const [currentElement, setCurrentElement] = useState(0);
  const [resetTrigger, setResetTrigger] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size when component mounts and when window resizes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // 768px is a common breakpoint for medium screens
    };

    // Check on mount
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Sequential animation effect - one element at a time
  useEffect(() => {
    // Clear animation first
    setCurrentElement(0);

    // Element 1: First image
    const timer1 = setTimeout(() => setCurrentElement(1), 500);

    // Element 2: First arrow
    const timer2 = setTimeout(() => setCurrentElement(2), 2000);

    // Element 3: Second image
    const timer3 = setTimeout(() => setCurrentElement(3), 3500);

    // Element 4: Second arrow
    const timer4 = setTimeout(() => setCurrentElement(4), 5000);

    // Element 5: Third image
    const timer5 = setTimeout(() => setCurrentElement(5), 6500);

    // Reset animation after showing all elements
    const timerReset = setTimeout(() => {
      setCurrentElement(0);
      setResetTrigger((prev) => prev + 1);
    }, 10000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timerReset);
    };
  }, [resetTrigger]);

  // Choose which image set to use based on screen size
  const imageData = isSmallScreen ? mobileImageData : desktopImageData;

  return (
    <div
      className={`w-full ${
        isSmallScreen ? "h-96" : "h-64"
      } bg-gray-100 relative overflow-hidden rounded-lg`}
    >
      <div className="w-full h-full flex items-center justify-center relative">
        {/* First Image */}
        <div
          className={`absolute transition-all duration-1000 ease-in-out ${
            isSmallScreen ? "w-20 h-20" : "w-30 h-40"
          } z-10 transform ${
            currentElement >= 1
              ? isSmallScreen
                ? "-translate-y-32"
                : "-translate-x-72"
              : isSmallScreen
              ? "translate-y-full"
              : "translate-x-full"
          }`}
        >
          <img
            src={imageData[0].url}
            alt={imageData[0].alt}
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* First Arrow */}
        <div
          className={`absolute transition-all duration-1000 ease-in-out z-20 ${
            isSmallScreen && currentElement >= 2 ? "mt-2" : ""
          } transform ${
            currentElement >= 2
              ? isSmallScreen
                ? "-translate-y-16"
                : "-translate-x-36"
              : isSmallScreen
              ? "translate-y-full"
              : "translate-x-full"
          }`}
        >
          {isSmallScreen ? (
            <FaArrowDown className="text-gray-700 w-10 h-7" />
          ) : (
            <FaArrowRight className="text-gray-700 w-8 h-8" />
          )}
        </div>

        {/* Second Image */}
        <div
          className={`absolute transition-all duration-1000 ease-in-out ${
            isSmallScreen ? "w-20 h-20" : "w-30 h-35"
          } z-10 transform ${
            currentElement >= 3
              ? isSmallScreen
                ? "translate-y-0"
                : "translate-x-0"
              : isSmallScreen
              ? "translate-y-full"
              : "translate-x-full"
          }`}
        >
          <img
            src={imageData[1].url}
            alt={imageData[1].alt}
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Second Arrow */}
        <div
          className={`absolute transition-all duration-1000 ease-in-out z-20 transform ${
            currentElement >= 4
              ? isSmallScreen
                ? "translate-y-16"
                : "translate-x-36"
              : isSmallScreen
              ? "translate-y-full"
              : "translate-x-full"
          }`}
        >
          {isSmallScreen ? (
            <FaArrowDown className="text-gray-700 w-10 h-7" />
          ) : (
            <FaArrowRight className="text-gray-700 w-8 h-8" />
          )}
        </div>

        {/* Third Image */}
        <div
          className={`absolute transition-all duration-1000 ease-in-out ${
            isSmallScreen ? "w-20 h-20" : "w-30 h-35"
          } z-10 transform ${
            currentElement >= 5
              ? isSmallScreen
                ? "translate-y-32"
                : "translate-x-72"
              : isSmallScreen
              ? "translate-y-full"
              : "translate-x-full"
          }`}
        >
          <img
            src={imageData[2].url}
            alt={imageData[2].alt}
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimationSection;
