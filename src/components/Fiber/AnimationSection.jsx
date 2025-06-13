import React, { useState, useEffect, useCallback } from "react";

const AnimationSection = () => {
  const [currentElement, setCurrentElement] = useState(0);
  const [animationActive, setAnimationActive] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const theme = {
    darkBg: "#0A0B0D",
    primary: "#1fa951",
    secondary: "#729a78",
    light: "#edfeee",
    highlight: "#F0F7F4",
    lightText: "#eaeeff",
    darkText: "#1d1f10",
  };

  const imageCollections = {
    desktop: [
      {
        url: "/assets/img/Fiber/raw01.png",
        alt: "Starting point of the process",
      },
      {
        url: "/assets/img/Fiber/raw02.png",
        alt: "Middle stage of the process",
      },
      {
        url: "/assets/img/Fiber/raw03.png",
        alt: "Final outcome of the process",
      },
    ],
    mobile: [
      {
        url: "/assets/img/Fiber/raw01.png",
        alt: "Starting point of the process",
      },
      {
        url: "/assets/img/Fiber/raw02.png",
        alt: "Middle stage of the process",
      },
      {
        url: "/assets/img/Fiber/raw03.png",
        alt: "Final outcome of the process",
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const resetAnimation = useCallback(() => {
    setCurrentElement(0);
    setAnimationActive(false);
    setTimeout(() => setAnimationActive(true), 100);
  }, []);

  useEffect(() => {
    if (!animationActive) return;

    const timers = [
      setTimeout(() => setCurrentElement(1), 800),
      setTimeout(() => setCurrentElement(2), 2200),
      setTimeout(() => setCurrentElement(3), 3600),
      setTimeout(() => setCurrentElement(4), 5000),
      setTimeout(() => setCurrentElement(5), 6400),
      setTimeout(resetAnimation, 10000),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [animationActive, resetAnimation]);

  const imageData = isSmallScreen
    ? imageCollections.mobile
    : imageCollections.mobile;

  // Animation styles - fixed positioning for mobile
  const getAnimationClass = (elementIndex) => {
    const baseClasses = "transition-all duration-700 ease-out absolute";
    const activeState = currentElement >= elementIndex;

    if (isSmallScreen) {
      // Mobile animations (vertical flow) - increased spacing
      switch (elementIndex) {
        case 1:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 -translate-y-40"
              : "opacity-0 translate-y-8"
          }`;
        case 2:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 -translate-y-20"
              : "opacity-0 translate-y-4"
          }`;
        case 3:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`;
        case 4:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 translate-y-20"
              : "opacity-0 translate-y-4"
          }`;
        case 5:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 translate-y-40"
              : "opacity-0 translate-y-4"
          }`;
        default:
          return baseClasses;
      }
    } else {
      // Desktop animations (horizontal flow)
      switch (elementIndex) {
        case 1:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 -translate-x-48"
              : "opacity-0 translate-x-4"
          }`;
        case 2:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 -translate-x-24"
              : "opacity-0 translate-x-4"
          }`;
        case 3:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4"
          }`;
        case 4:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 translate-x-24"
              : "opacity-0 translate-x-4"
          }`;
        case 5:
          return `${baseClasses} ${
            activeState
              ? "opacity-100 translate-x-48"
              : "opacity-0 translate-x-4"
          }`;
        default:
          return baseClasses;
      }
    }
  };

  return (
    <div
      className={`w-full ${
        isSmallScreen ? "h-[40rem]" : "h-80"
      } relative overflow-hidden `}
      style={{ backgroundColor: theme.highlight }}
    >
      <div className="w-full h-full flex items-center justify-center relative">
        {/* Minimal Progress Indicator */}
        <div className="absolute top-6 left-0 right-0 flex justify-center">
          <div
            className="h-px w-32"
            style={{ backgroundColor: theme.secondary }}
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
            isSmallScreen ? "w-20 h-20" : "w-28 h-28"
          } z-10`}
        >
          <img
            src={imageData[0].url}
            alt={imageData[0].alt}
            className="w-full h-full object-cover border rounded-lg"
            style={{
              backgroundColor: theme.light,
              borderColor: theme.secondary,
            }}
          />
        </div>

        {/* First Arrow */}
        <div className={`${getAnimationClass(2)} z-20`}>
          {isSmallScreen ? (
            <div className="flex flex-col items-center px-4">
              <div className="w-5 h-5 flex items-center justify-center mb-1">
                <svg
                  className="w-5 h-5 text-[#1fa951]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                    transform="rotate(90 10 10)"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-[#1fa951] bg-white px-2 py-1 rounded shadow-sm">
                Process
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#1fa951]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3 10a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm mt-2 text-[#1fa951] font-medium">
                Process
              </span>
            </div>
          )}
        </div>

        {/* Second Image */}
        <div
          className={`${getAnimationClass(3)} ${
            isSmallScreen ? "w-20 h-20" : "w-28 h-28"
          } z-10`}
        >
          <img
            src={imageData[1].url}
            alt={imageData[1].alt}
            className="w-full h-full object-cover border rounded-lg"
            style={{
              backgroundColor: theme.light,
              borderColor: theme.secondary,
            }}
          />
        </div>

        {/* Second Arrow */}
        <div className={`${getAnimationClass(4)} z-20`}>
          {isSmallScreen ? (
            <div className="flex flex-col items-center px-4">
              <div className="w-5 h-5 flex items-center justify-center mb-1">
                <svg
                  className="w-5 h-5 text-[#1fa951]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                    transform="rotate(90 10 10)"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-[#1fa951] bg-white px-2 py-1 rounded shadow-sm">
                Result
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#1fa951]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3 10a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm mt-2 text-[#1fa951] font-medium">
                Result
              </span>
            </div>
          )}
        </div>

        {/* Third Image */}
        <div
          className={`${getAnimationClass(5)} ${
            isSmallScreen ? "w-20 h-20" : "w-28 h-28"
          } z-10`}
        >
          <img
            src={imageData[2].url}
            alt={imageData[2].alt}
            className="w-full h-full object-cover border rounded-lg"
            style={{
              backgroundColor: theme.light,
              borderColor: theme.secondary,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimationSection;
