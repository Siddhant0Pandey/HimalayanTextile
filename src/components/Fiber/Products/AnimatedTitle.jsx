    import React, { useEffect, useState } from "react";

const AnimatedTitle = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <h1
      className={`text-3xl font-bold text-center mb-12 text-[#1fa951] transition-all duration-1000 transform ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
      }`}
    >
      {children}
    </h1>
  );
};

export default AnimatedTitle;
