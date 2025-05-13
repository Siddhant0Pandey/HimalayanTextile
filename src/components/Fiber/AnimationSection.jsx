import React, { useState, useEffect, useCallback } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

/**
 * AnimationSection - A sequential image flow animation component
 * Features smooth transitions, responsive design, and polished animations
 * Using the green theme with Roboto Slab font family
 */
const AnimationSection = () => {
  // Animation state management
  const [currentElement, setCurrentElement] = useState(0);
  const [animationActive, setAnimationActive] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Theme colors
  const theme = {
    primary: "#1fa951",
    secondary: "#729a78",
    light: "#edfeee",
    lightText: "#eaeeff",
    darkText: "#1d1f10",
  };

  // Image collections
  const imageCollections = {
    desktop: [
      {
        url: "/assets/img/Fiber/raw4.png",
        alt: "Starting point of the process",
      },
      {
        url: "/assets/img/Fiber/raw5.png",
        alt: "Middle stage of the process",
      },
      {
        url: "/assets/img/Fiber/raw8.png",
        alt: "Final outcome of the process",
      },
    ],
    mobile: [
      {
        url: "/assets/img/Fiber/raw1.png",
        alt: "Starting point of the process",
      },
      {
        url: "/assets/img/Fiber/raw.png",
        alt: "Middle stage of the process",
      },
      {
        url: "/assets/img/Fiber/raw3.png",
        alt: "Final outcome of the process",
      },
    ],
  };

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Set up listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset and restart animation
  const resetAnimation = useCallback(() => {
    setCurrentElement(0);
    setAnimationActive(false);

    // Small delay before reactivating animation
    setTimeout(() => setAnimationActive(true), 100);
  }, []);

  // Manage sequential animation
  useEffect(() => {
    if (!animationActive) return;

    // Animation timeline with progressive delays
    const timers = [
      setTimeout(() => setCurrentElement(1), 800),
      setTimeout(() => setCurrentElement(2), 2200),
      setTimeout(() => setCurrentElement(3), 3600),
      setTimeout(() => setCurrentElement(4), 5000),
      setTimeout(() => setCurrentElement(5), 6400),
      setTimeout(resetAnimation, 10000),
    ];

    // Cleanup all timers on unmount or when animation restarts
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [animationActive, resetAnimation]);

  // Select appropriate image set
  const imageData = isSmallScreen
    ? imageCollections.mobile
    : imageCollections.mobile;

  // Animation styles
  const getAnimationClass = (elementIndex) => {
    const baseClasses = "transition-all duration-1000 ease-in-out absolute";
    const activeState = currentElement >= elementIndex;

    if (isSmallScreen) {
      // Mobile animations (vertical flow)
      switch (elementIndex) {
        case 1:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 -translate-y-48"
              : "opacity-0 translate-y-full"
          }`;
        case 2:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 -translate-y-24"
              : "opacity-0 translate-y-full"
          }`;
        case 3:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-full"
          }`;
        case 4:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 translate-y-24"
              : "opacity-0 translate-y-full"
          }`;
        case 5:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 translate-y-48"
              : "opacity-0 translate-y-full"
          }`;
        default:
          return baseClasses;
      }
    } else {
      // mobile animations (horizontal flow)
      switch (elementIndex) {
        case 1:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 -translate-x-64"
              : "opacity-0 translate-x-full"
          }`;
        case 2:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 -translate-x-32"
              : "opacity-0 translate-x-full"
          }`;
        case 3:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`;
        case 4:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 translate-x-32"
              : "opacity-0 translate-x-full"
          }`;
        case 5:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 translate-x-64"
              : "opacity-0 translate-x-full"
          }`;
        default:
          return baseClasses;
      }
    }
  };

  return (
    <div
      className={`w-full ${
        isSmallScreen ? "h-128" : "h-96"
      } relative overflow-hidden rounded-xl shadow-lg`}
      style={{
        fontFamily: '"Roboto Slab", sans-serif',
      }}
    >
      <h1></h1>
      <div className="w-full h-full flex items-center justify-center relative">
        {/* Progress Indicator */}
        <div className="absolute top-4 left-0 right-0 flex justify-center">
          <div
            className="h-1 w-48 rounded-full overflow-hidden"
            style={{ backgroundColor: `${theme.light}` }}
          >
            <div
              className="h-full transition-all duration-300 ease-out"
              style={{
                width: `${Math.min(100, (currentElement / 5) * 100)}%`,
                backgroundColor: theme.primary,
              }}
            ></div>
          </div>
        </div>

        {/* First Image */}
        <div
          className={`${getAnimationClass(1)} ${
            isSmallScreen ? "w-16 h-16" : "w-32 h-32"
          } z-10 mt-5`}
        >
          <img
            src={imageData[0].url}
            alt={imageData[0].alt}
            className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform"
            style={{ boxShadow: `0 4px 6px ${theme.secondary}50` }}
          />
        </div>

        {/* First Arrow */}
        <div className={`${getAnimationClass(2)} z-20`}>
          {isSmallScreen ? (
            <div className="flex flex-col items-center">
              <FaArrowDown
                className="w-6 h-6 animate-bounce"
                style={{ color: theme.primary }}
              />
              <span
                className="text-xs font-medium mt-1"
                style={{ color: theme.darkText }}
              >
                Process
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <FaArrowRight
                className="w-6 h-6 animate-pulse"
                style={{ color: theme.primary }}
              />
              <span
                className="text-xs font-medium mt-1"
                style={{ color: theme.darkText }}
              >
                Process
              </span>
            </div>
          )}
        </div>

        {/* Second Image */}
        <div
          className={`${getAnimationClass(3)} ${
            isSmallScreen ? "w-20 h-20" : "w-32 h-32"
          } z-10`}
        >
          <img
            src={imageData[1].url}
            alt={imageData[1].alt}
            className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform"
            style={{ boxShadow: `0 4px 6px ${theme.secondary}50` }}
          />
        </div>

        {/* Second Arrow */}
        <div className={`${getAnimationClass(4)} z-20`}>
          {isSmallScreen ? (
            <div className="flex flex-col items-center">
              <FaArrowDown
                className="w-6 h-6 animate-bounce"
                style={{ color: theme.primary }}
              />
              <span
                className="text-xs font-medium mt-1"
                style={{ color: theme.darkText }}
              >
                Result
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <FaArrowRight
                className="w-6 h-6 animate-pulse"
                style={{ color: theme.primary }}
              />
              <span
                className="text-xs font-medium mt-1"
                style={{ color: theme.darkText }}
              >
                Result
              </span>
            </div>
          )}
        </div>

        {/* Third Image */}
        <div
          className={`${getAnimationClass(5)} ${
            isSmallScreen ? "w-20 h-20" : "w-32 h-32"
          } z-10`}
        >
          <img
            src={imageData[2].url}
            alt={imageData[2].alt}
            className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform"
            style={{ boxShadow: `0 4px 6px ${theme.secondary}50` }}
          />
        </div>

        {/* Restart button */}
        {/* <button
          onClick={resetAnimation}
          className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-medium transition-colors"
          style={{
            backgroundColor: theme.primary,
            color: theme.lightText,
            boxShadow: `0 2px 4px ${theme.secondary}60`,
          }}
          aria-label="Restart animation"
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = theme.secondary)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = theme.primary)
          }
        >
          Restart
        </button> */}
      </div>
    </div>
  );
};

export default AnimationSection;
