import React, { useState, useEffect } from "react";
import {
  FaSeedling, // For Fiber Sourcing
  FaIndustry, // For Yarn Spinning
  FaPalette, // For Dyeing & Finishing
  FaShieldAlt, // For Quality Control
  FaBolt,
} from "react-icons/fa";

const timelineData = [
  {
    id: 1,
    title: "Fiber Sourcing",
    description:
      "Carefully selected cotton, wool, and synthetic blends from trusted suppliers.",
    bgImage: "https://via.placeholder.com/800x500",
    icon: FaSeedling,
  },
  {
    id: 2,
    title: "Yarn Spinning",
    description:
      "Precision spinning ensures strength, softness, and consistency.",
    bgImage: "https://via.placeholder.com/800x500",
    icon: FaIndustry,
  },
  {
    id: 3,
    title: "Dyeing & Finishing",
    description: "Eco-conscious dyeing with vibrant, long-lasting colors.",
    bgImage: "https://via.placeholder.com/800x500",
    icon: FaPalette,
  },
  {
    id: 4,
    title: "Weaving & Knitting",
    description:
      "Traditional craftsmanship meets modern machinery for perfect fabric.",
    bgImage: "https://via.placeholder.com/800x500",
    icon: FaBolt,
  },
  {
    id: 5,
    title: "Quality Control",
    description:
      "Every batch undergoes strict inspection to meet international standards.",
    bgImage: "https://via.placeholder.com/800x500",
    icon: FaShieldAlt,
  },
];

export default function VerticalTimeline() {
  const [activeItems, setActiveItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".timeline-card");
      let newActiveItems = [];

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.75;

        if (inView) {
          newActiveItems.push(index);
        }
      });

      setActiveItems(newActiveItems);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100 px-4 pt-20">
      {/* <div className="flex flex-col items-center min-h-screen bg-gray-100 py-12 px-4"> */}
      <h1 className="text-4xl font-bold mb-12 text-center">Our Process</h1>

      <div className="flex justify-center w-full max-w-6xl">
        <div className="relative w-full">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#1fa951] z-0"></div>

          <div className="relative">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`timeline-card mb-20 flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center justify-between relative`}
                >
                  {/* Connector Line (only on md+) */}
                  <div
                    className={`hidden md:flex w-1/2 justify-${
                      isLeft ? "end" : "start"
                    } pr-4 pl-4`}
                  >
                    <div
                      className={`w-1 ${
                        activeItems.includes(index)
                          ? "bg-[#1fa951] h-full"
                          : "h-0"
                      } transition-all duration-700`}
                    ></div>
                  </div>

                  {/* Card Content */}
                  <div
                    className={`w-full md:w-5/12 transition-all duration-700 ease-in-out transform ${
                      activeItems.includes(index)
                        ? "translate-y-0 opacity-100"
                        : isLeft
                        ? "-translate-x-10 opacity-0"
                        : "translate-x-10 opacity-0"
                    }`}
                  >
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="h-48 overflow-hidden relative">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${item.bgImage})` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Icon Centered (only on md+) */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-[#1fa951] shadow-lg transition-all duration-500 ${
                        activeItems.includes(index) ? "scale-100" : "scale-0"
                      }`}
                    >
                      {Icon && <Icon className="text-white" size={18} />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator  
      <div className="mt-6 animate-bounce">
        <FaChevronDown size={32} className="text-[#1fa951]" />
      </div> / */}
    </div>
  );
}
