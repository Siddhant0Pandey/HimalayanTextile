import React, { useState, useEffect } from "react";
import processBg from "/assets/img/processBg.jpg";
import {
  FaSeedling,
  FaSun,
  FaWater,
  FaHammer,
  FaWind,
  FaShower,
  FaTools,
  FaCut,
  FaSync,
  FaThLarge,
  FaTractor,
  FaIndustry,
} from "react-icons/fa";

const timelineData = [
  {
    id: 1,
    title: "Harvesting",
    description:
      "Hemp plants are cut and collected when they reach optimal maturity, usually 70-90 days after planting for fiber production.",
    bgImage: "/api/placeholder/600/400",
    icon: FaTractor,
  },
  {
    id: 2,
    title: "Field Retting",
    description:
      "Cut hemp stalks are left in the field for 2-3 weeks, allowing dew, rain, and sun to begin breaking down the pectin binding the fibers.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSun,
  },
  {
    id: 3,
    title: "Water Retting",
    description:
      "Alternatively, stalks are submerged in water (ponds, tanks, or slow-moving streams) to accelerate the breakdown of pectin through bacterial action.",
    bgImage: "/api/placeholder/600/400",
    icon: FaWater,
  },
  {
    id: 4,
    title: "Drying",
    description:
      "After retting, the stalks are thoroughly dried to stop the decomposition process and prepare for breaking.",
    bgImage: "/api/placeholder/600/400",
    icon: FaWind,
  },
  {
    id: 5,
    title: "Breaking",
    description:
      "The dried stalks are crushed between fluted rollers to break the woody core (hurd) into small pieces while preserving the long outer fibers.",
    bgImage: "/api/placeholder/600/400",
    icon: FaHammer,
  },
  {
    id: 6,
    title: "Scutching",
    description:
      "The broken stalks are beaten to separate the broken hurds from the valuable long bast fibers.",
    bgImage: "/api/placeholder/600/400",
    icon: FaTools,
  },
  {
    id: 7,
    title: "Hackling",
    description:
      "Fibers are drawn through metal combs of increasing fineness to remove short fibers and align the long fibers in parallel.",
    bgImage: "/api/placeholder/600/400",
    icon: FaCut,
  },
  {
    id: 8,
    title: "Washing",
    description:
      "Fibers are washed to remove any remaining impurities and prepare them for processing into yarn.",
    bgImage: "/api/placeholder/600/400",
    icon: FaShower,
  },
  {
    id: 9,
    title: "Softening",
    description:
      "Chemical or mechanical treatments are applied to soften the naturally stiff hemp fibers for textile applications.",
    bgImage: "/api/placeholder/600/400",
    icon: FaIndustry,
  },
  {
    id: 10,
    title: "Spinning",
    description:
      "The prepared fibers are spun into yarn of various thicknesses depending on the intended final product.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSync,
  },
  {
    id: 11,
    title: "Weaving Hemp Fabric",
    description:
      "The spun hemp yarn is woven into fabric using traditional or modern weaving techniques to create durable textiles.",
    bgImage: "/api/placeholder/600/400",
    icon: FaThLarge,
  },
];

export default function HempTextile() {
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
    <section className="w-full overflow-x-hidden">
      <div className="relative flex flex-col items-center px-4 sm:px-6 pt-20">
        <div className="absolute top-0 left-0 h-full w-full -z-10 blur-sm overflow-hidden">
          <img
            src={processBg}
            alt="process background"
            className="h-full w-full object-cover"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#1fa951]">
          Hemp Fiber Creation Process
        </h1>

        <div className="w-full max-w-6xl">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#1fa951] z-0" />

            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`timeline-card mb-16 flex flex-col items-center md:${
                    isLeft ? "flex-row" : "flex-row-reverse"
                  } relative`}
                >
                  {/* Icon (Mobile) */}
                  <div className="block md:hidden mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-[#1fa951] shadow-lg">
                      <Icon className="text-white" size={18} />
                    </div>
                  </div>

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
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Icon (Desktop Centered) */}
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
        <div className="w-full max-w-4xl bg-white/90 p-4 sm:p-6 rounded-lg shadow-lg mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#1fa951]">
            About Hemp Fabric
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            Hemp fabric is one of the oldest textile materials in human history,
            with evidence of its use dating back 10,000 years. Known for
            exceptional strength, durability, and breathability, hemp fabric
            becomes softer with each wash while maintaining its structural
            integrity. Hemp is also highly sustainable - it grows quickly
            without pesticides, requires minimal water, improves soil health,
            and is 100% biodegradable. The process above illustrates the
            traditional methods used to transform the versatile hemp plant into
            high-quality, eco-friendly textiles.
          </p>
          <div className="flex justify-center">
            <img
              src="/api/placeholder/800/400"
              alt="Hemp fabric production"
              className="rounded-lg shadow-md w-full max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
