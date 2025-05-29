import React from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const ArrowIndicator = ({ index, currentElement, isSmallScreen, label, theme }) => {
  const baseClasses = "transition-all duration-1000 ease-in-out absolute";
  const activeState = currentElement >= index;

  const animationClass = () => {
    if (isSmallScreen) {
      const translateY = [-48, -24, 0, 24, 48];
      return `${baseClasses} ${
        activeState ? `opacity-100 -translate-y-${translateY[index - 1]}` : "opacity-0 translate-y-full"
      }`;
    } else {
      const translateX = [-64, -32, 0, 32, 64];
      return `${baseClasses} ${
        activeState ? `opacity-100 translate-x-${translateX[index - 1]}` : "opacity-0 translate-x-full"
      }`;
    }
  };

  return (
    <div className={`${animationClass()} z-20`}>
      <div className="flex flex-col items-center">
        {isSmallScreen ? (
          <FaArrowDown className="w-6 h-6 animate-bounce" style={{ color: theme.primary }} />
        ) : (
          <FaArrowRight className="w-6 h-6 animate-pulse" style={{ color: theme.primary }} />
        )}
        <span className="text-xs font-medium mt-1" style={{ color: theme.darkText }}>
          {label}
        </span>
      </div>
    </div>
  );
};

export default ArrowIndicator;
