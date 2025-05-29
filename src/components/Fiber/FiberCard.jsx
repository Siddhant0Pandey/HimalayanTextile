import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FiberCard = ({ imageSrc, title, description, index, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100 * index);
    return () => clearTimeout(timer);
  }, [index]);

  const isExternal = link?.startsWith("http");

  return (
    <div
      className={`relative bg-white shadow-lg overflow-hidden cursor-pointer w-full h-96 rounded-lg transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 z-10 animate-shine" />
      )}

      <figure className={`h-full w-full overflow-hidden transition-all duration-500 ${isHovered ? "scale-105" : ""}`}>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700"
        />
      </figure>

      <div
        className={`absolute bottom-0 left-0 w-full bg-white bg-opacity-90 p-6 transition-all duration-500 transform ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <h2 className={`text-xl font-bold text-[#1fa951] mb-2 transition-all duration-300 ${isHovered ? "translate-x-0" : "-translate-x-4"}`}>
          {title}
        </h2>
        <p className={`text-sm text-gray-700 transition-all duration-500 delay-100 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          {description}
        </p>
        {link && (
          <div className="mt-3 text-right">
            <Link
              to={link}
              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`inline-block bg-[#1fa951] hover:bg-[#178c42] text-white font-medium py-1.5 px-4 rounded text-sm transition-transform duration-300 ${
                isHovered ? "scale-105" : "scale-100"
              }`}
            >
              Learn More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FiberCard;
