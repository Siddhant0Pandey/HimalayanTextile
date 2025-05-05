import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

// Add your image URLs here
const imageData = [
  {
    url: "/assets/img/Fiber/raw1.png", // Make sure path is from public folder
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
  const [animationState, setAnimationState] = useState(0);
  const [resetTrigger, setResetTrigger] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationState(1), 500);
    const timer2 = setTimeout(() => setAnimationState(2), 2000);
    const timer3 = setTimeout(() => setAnimationState(3), 3500);
    const timer4 = setTimeout(() => setAnimationState(4), 5000);
    const timer5 = setTimeout(() => setAnimationState(5), 6500);
    const timerReset = setTimeout(() => {
      setAnimationState(0);
      setResetTrigger((prev) => prev + 1);
    }, 9000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timerReset);
    };
  }, [resetTrigger]);

  return (
    <div className="w-full h-64 bg-gray-100 relative overflow-hidden rounded-lg">
      <div className="w-full h-full flex items-center justify-center relative">
        {/* First Image */}
        <div
          className={`absolute transition-all duration-1000 ease-in-out w-28 h-28 ${
            animationState >= 1
              ? "transform -translate-x-72"
              : "transform translate-x-full"
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
          className={`absolute transition-all duration-1000 ease-in-out ${
            animationState >= 2
              ? "transform -translate-x-36"
              : "transform translate-x-full"
          }`}
        >
          <FaArrowRight className="text-gray-700 w-10 h-10" />
        </div>

        {/* Second Image */}
        <div
          className={`absolute transition-all duration-1000 ease-in-out w-28 h-28 ${
            animationState >= 3
              ? "transform translate-x-0"
              : "transform translate-x-full"
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
          className={`absolute transition-all duration-1000 ease-in-out ${
            animationState >= 4
              ? "transform translate-x-36"
              : "transform translate-x-full"
          }`}
        >
          <FaArrowRight className="text-gray-700 w-10 h-10" />
        </div>

        {/* Third Image */}
        <div
          className={`absolute transition-all duration-1000 ease-in-out w-28 h-28 ${
            animationState >= 5
              ? "transform translate-x-72"
              : "transform translate-x-full"
          }`}
        >
          <img
            src={imageData[2].url}
            alt={imageData[2].alt}
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>

      {/* Restart Button */}
      {/* <button
        onClick={() => {
          setAnimationState(0);
          setTimeout(() => setResetTrigger((prev) => prev + 1), 100);
        }}
        className="absolute bottom-2 right-2 bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-sm"
      >
        Restart Animation
      </button> */}
    </div>
  );
};

export default AnimationSection;
