import React, { useState, useEffect } from "react";

// Card Component
const FiberCard = ({ imageSrc, title, description, index, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 * index);
    return () => clearTimeout(timer);
  }, [index]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const isExternalLink =
    link && (link.startsWith("http://") || link.startsWith("https://"));

  return (
    <div
      className={`relative bg-white shadow-lg overflow-hidden cursor-pointer w-full h-96 rounded-lg transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 z-10 animate-shine" />
      )}

      <figure
        className={`h-full w-full overflow-hidden transition-all duration-500 ${
          isHovered ? "scale-105" : ""
        }`}
      >
        <img
          src={imageSrc || "assets/img/Fiber/hemp.jpg"}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700"
        />
      </figure>

      <div
        className={`absolute bottom-0 left-0 w-full bg-white bg-opacity-90 p-6 transition-all duration-500 transform ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <h2
          className={`text-xl font-bold text-[#1fa951] mb-2 transition-all duration-300 ${
            isHovered ? "translate-x-0" : "-translate-x-4"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-sm text-gray-700 transition-all duration-500 delay-100 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {description}
        </p>
        {link && (
          <div className="mt-3 text-right">
            <a
              href={link}
              {...(isExternalLink
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`inline-block bg-[#1fa951] hover:bg-[#178c42] text-white font-medium py-1.5 px-4 rounded text-sm transition-all duration-300 transform ${
                isHovered ? "scale-105" : "scale-100"
              }`}
            >
              Learn More
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// Animated Title
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

// Fiber Data
const fiberData = [
  {
    id: 1,
    title: "Hemp Fiber",
    imageSrc: "assets/img/Fiber/hemp.jpg",
    description:
      "Hemp fiber offers exceptional strength while remaining eco-friendly. Cultivated with minimal resources, it supports sustainable innovation in modern textiles and construction.",
    link: "/Hemp",
  },
  {
    id: 2,
    title: "Cotton Fiber",
    imageSrc: "assets/img/Fiber/cotton.jpg",
    description:
      "Soft and breathable cotton is a versatile natural fiber. Its comfort and absorbency make it ideal for everyday clothing and personal care products.",
    link: "https://example.com/cotton-fiber",
  },
  {
    id: 3,
    title: "Flax Fiber",
    imageSrc: "assets/img/Fiber/flax.jpg",
    description:
      "Flax produces linen, a lightweight and moisture-wicking fabric. Known for its durability and natural cooling properties, it's perfect for warm climates.",
    link: "https://example.com/flax-fiber",
  },
  {
    id: 4,
    title: "Jute Fiber",
    imageSrc: "assets/img/Fiber/jute.jpg",
    description:
      "Jute is among the most affordable natural fibers with low environmental impact. Its coarse texture makes it excellent for rugs, bags, and packaging materials.",
    link: "https://example.com/jute-fiber",
  },
  {
    id: 5,
    title: "Nettle Fiber",
    imageSrc: "assets/img/Fiber/nettle.jpg",
    description:
      "Nettle fiber is strong, breathable, and eco-friendly. Traditionally used in Europe, it has resurfaced as a sustainable textile option with a silky texture similar to linen.",
    link: "/Nettle",
  },
  {
    id: 6,
    title: "Silk Fiber",
    imageSrc: "assets/img/Fiber/silk.jpg",
    description:
      "Legendary for its lustrous appearance and smooth texture, silk remains one of the most luxurious natural fibers. Its protein structure gives it unique insulating properties.",
    link: "https://example.com/silk-fiber",
  },
  {
    id: 7,
    title: "Cactus Fiber",
    imageSrc: "assets/img/Fiber/cactus.jpg",
    description:
      "Cactus fiber, derived mainly from prickly pear, is a sustainable and biodegradable alternative to leather. It's durable, flexible, and produced with minimal water usage.",
    link: "https://example.com/cactus-fiber",
  },
  {
    id: 8,
    title: "Banana Fiber",
    imageSrc: "assets/img/Fiber/banana.jpg",
    description:
      "Banana fiber is extracted from the banana plant's pseudostems. It's strong, lightweight, and biodegradable—used in textiles, ropes, and eco-conscious packaging.",
    link: "https://example.com/banana-fiber",
  },
  {
    id: 9,
    title: "Wool Fiber",
    imageSrc: "assets/img/Fiber/wool.jpg",
    description:
      "Wool is a natural protein fiber from sheep, prized for its warmth, elasticity, and moisture-wicking abilities. It’s commonly used in garments, blankets, and insulation.",
    link: "https://example.com/wool-fiber",
  },
];

// Main Component
const FiberMain = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <style jsx="true">{`
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out forwards;
          position: absolute;
          top: 0;
          bottom: 0;
          width: 200%;
        }
      `}</style>

      <AnimatedTitle>Natural Fiber Collection</AnimatedTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {fiberData.map((fiber, index) => (
          <FiberCard
            key={fiber.id}
            title={fiber.title}
            imageSrc={fiber.imageSrc}
            description={fiber.description}
            index={index}
            link={fiber.link}
          />
        ))}
      </div>
    </div>
  );
};

export default FiberMain;
