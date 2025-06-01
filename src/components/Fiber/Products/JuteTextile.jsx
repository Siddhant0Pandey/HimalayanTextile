import React, { useState, useEffect } from "react";
import processBg from "/assets/img/processBg.jpg";
import {
  FaSeedling,
  FaWater,
  FaSun,
  FaLeaf,
  FaHandsHelping,
  FaSort,
  FaTools,
  FaCut,
  FaIndustry,
  FaSync,
  FaThLarge,
  FaTractor,
  FaBoxOpen,
} from "react-icons/fa";

const timelineData = [
  {
    id: 1,
    title: "Planting",
    description: "Jute seeds are sown closely...",
    bgImage: "/api/placeholder/600/400",
    icon: FaSeedling,
  },
  {
    id: 2,
    title: "Growing",
    description: "Jute plants grow rapidly...",
    bgImage: "/api/placeholder/600/400",
    icon: FaLeaf,
  },
  {
    id: 3,
    title: "Harvesting",
    description: "Jute is harvested when...",
    bgImage: "/api/placeholder/600/400",
    icon: FaTractor,
  },
  {
    id: 4,
    title: "Bundling",
    description: "After cutting, jute stalks are bundled...",
    bgImage: "/api/placeholder/600/400",
    icon: FaBoxOpen,
  },
  {
    id: 5,
    title: "Retting",
    description: "Bundles of jute stems are submerged...",
    bgImage: "/api/placeholder/600/400",
    icon: FaWater,
  },
  {
    id: 6,
    title: "Stripping",
    description: "After retting, farmers manually strip...",
    bgImage: "/api/placeholder/600/400",
    icon: FaHandsHelping,
  },
  {
    id: 7,
    title: "Drying",
    description: "The extracted jute fibers are hung...",
    bgImage: "/api/placeholder/600/400",
    icon: FaSun,
  },
  {
    id: 8,
    title: "Grading & Sorting",
    description: "Dried jute fibers are sorted...",
    bgImage: "/api/placeholder/600/400",
    icon: FaSort,
  },
  {
    id: 9,
    title: "Baling",
    description: "The graded fibers are compressed...",
    bgImage: "/api/placeholder/600/400",
    icon: FaTools,
  },
  {
    id: 10,
    title: "Softening & Batching",
    description: "At the mill, jute fibers are treated...",
    bgImage: "/api/placeholder/600/400",
    icon: FaIndustry,
  },
  {
    id: 11,
    title: "Carding & Drawing",
    description: "The softened fibers pass through machines...",
    bgImage: "/api/placeholder/600/400",
    icon: FaCut,
  },
  {
    id: 12,
    title: "Spinning",
    description: "The jute slivers are spun into yarn...",
    bgImage: "/api/placeholder/600/400",
    icon: FaSync,
  },
  {
    id: 13,
    title: "Weaving",
    description: "Jute yarn is woven into various fabrics...",
    bgImage: "/api/placeholder/600/400",
    icon: FaThLarge,
  },
];

export default function JuteTextile() {
  const [activeItems, setActiveItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".timeline-card");
      const newActiveItems = [];
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
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
    <div className="relative flex flex-col items-center px-4 pt-20 overflow-x-hidden w-full">
      <div className="absolute top-0 left-0 h-full w-full -z-10 blur-sm">
        <img
          src={processBg}
          alt="process background"
          className="h-full w-full object-cover"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#1fa951]">
        Jute Fiber Creation Process
      </h1>

      <div className="w-full max-w-6xl overflow-x-hidden">
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-1 bg-[#1fa951] z-0" />

          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`timeline-card mb-16 flex flex-col-reverse md:flex-row items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } relative w-full`}
              >
                {/* Line Progress (Desktop) */}
                <div
                  className={`hidden md:flex w-1/2 ${
                    isLeft ? "justify-end pr-4" : "justify-start pl-4"
                  }`}
                >
                  <div
                    className={`w-1 ${
                      activeItems.includes(index)
                        ? "bg-[#1fa951] h-full"
                        : "h-0"
                    } transition-all duration-700`}
                  />
                </div>

                {/* Card Content */}
                <div
                  className={`w-full md:w-5/12 transform transition-all duration-700 ease-in-out ${
                    activeItems.includes(index)
                      ? "translate-y-0 opacity-100"
                      : isLeft
                      ? "-translate-x-10 opacity-0"
                      : "translate-x-10 opacity-0"
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-48 sm:h-64 overflow-hidden relative">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.bgImage})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 bg-black/60 text-white px-2 py-1 rounded-full text-sm">
                        Step {index + 1}
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-[#1fa951] shadow-lg transition-all duration-500 ${
                      activeItems.includes(index) ? "scale-100" : "scale-0"
                    }`}
                  >
                    <Icon className="text-white" size={18} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* About Section */}
      <div className="w-full max-w-4xl bg-white/90 p-4 sm:p-6 rounded-lg shadow-lg mb-12 overflow-x-hidden">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#1fa951]">
          About Jute Fabric
        </h2>
        <p className="mb-4 text-gray-700">
          Known as the "Golden Fiber," jute has been cultivated for centuries
          and is one of the most affordable natural fibers in the world. Jute is
          predominantly grown in the fertile delta regions of Bangladesh and
          India, where the warm, humid climate provides ideal growing
          conditions. The resulting fabric is celebrated for its remarkable
          tensile strength, biodegradability, and versatility. Jute fibers are
          naturally lustrous, with a golden to brownish sheen, and are 100%
          biodegradable and recyclable. Environmentally, jute is exceptionally
          sustainable — it requires minimal fertilizers and pesticides, enriches
          the soil, absorbs CO2 rapidly, and releases oxygen during cultivation.
          One hectare of jute plants can absorb up to 15 tons of carbon dioxide
          while releasing 11 tons of oxygen. Traditionally used for sacking and
          packaging (burlap/hessian), modern applications have expanded to
          include home textiles, carpets, high-fashion accessories, composites,
          geotextiles, and even as a substitute for plastic and wood. The
          labor-intensive processing methods have remained largely unchanged for
          generations, preserving traditional skills while supporting rural
          economies in South Asia.
        </p>
        <div className="flex justify-center">
          <img
            src="/api/placeholder/800/400"
            alt="Jute fabric production"
            className="rounded-lg shadow-md w-full max-w-xl"
          />
        </div>
      </div>
    </div>
  );
}
