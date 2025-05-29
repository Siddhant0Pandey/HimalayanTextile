import React from "react";

const AnimatedImage = ({ index, currentElement, isSmallScreen, image, size, theme }) => {
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
    <div className={`${animationClass()} ${size} z-10`}>
      <img
        src={image.url}
        alt={image.alt}
        className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform"
        style={{ boxShadow: `0 4px 6px ${theme.secondary}50` }}
      />
    </div>
  );
};

export default AnimatedImage;
