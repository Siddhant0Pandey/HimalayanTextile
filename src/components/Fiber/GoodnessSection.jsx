import React from "react";
import GoodnessCard from "./GoodnessCard";
import { FaLeaf, FaRecycle, FaBolt, FaHeart } from "react-icons/fa";

const GoodnessSection = () => {
  const theme = {
    primary: "#1fa951",
    secondary: "#729a78",
    light: "#edfeee",
    darkText: "#1d1f10",
  };

  const goodnessItems = [
    {
      icon: <FaLeaf />,
      title: "Eco-Friendly",
      description: "Made with sustainable materials and processes that care for the Earth.",
    },
    {
      icon: <FaRecycle />,
      title: "Recyclable",
      description: "All parts are fully recyclable, supporting a circular economy.",
    },
    {
      icon: <FaBolt />,
      title: "Energy Efficient",
      description: "Designed to consume less power during manufacturing and use.",
    },
    {
      icon: <FaHeart />,
      title: "Ethical Sourcing",
      description: "All materials are ethically sourced, promoting fair labor and trade.",
    },
  ];

  return (
    <section
      className="lg:py-24 py-16 px-4 md:px-12 bg-white"
      style={{ fontFamily: '"Roboto Slab", sans-serif' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.darkText }}>
          Our Commitment to Goodness
        </h2>
        <p className="text-md md:text-lg text-gray-600 mb-12">
          We're proud to follow sustainable and ethical practices at every step.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {goodnessItems.map((item, index) => (
            <GoodnessCard key={index} item={item} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoodnessSection;
