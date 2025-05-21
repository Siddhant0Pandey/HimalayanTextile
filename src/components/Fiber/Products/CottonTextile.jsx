import React, { useState, useEffect } from "react";
import processBg from "/assets/img/processBg.jpg";
import {
  FaSeedling,
  FaSun,
  FaLeaf,
  FaHandsHelping,
  FaWind,
  FaSort,
  FaTools,
  FaWater,
  FaIndustry,
  FaSync,
  FaThLarge,
  FaTractor,
} from "react-icons/fa";

const timelineData = [
  {
    id: 1,
    title: "Planting",
    description:
      "Cotton seeds are planted in warm soil when temperatures reach 60°F (16°C). In the United States, planting typically occurs between March and June.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSeedling,
  },
  {
    id: 2,
    title: "Growing",
    description:
      "Cotton plants grow for 5-6 months, developing fruit called bolls that contain seeds surrounded by cotton fibers. Each plant can produce up to 100 bolls.",
    bgImage: "/api/placeholder/600/400",
    icon: FaLeaf,
  },
  {
    id: 3,
    title: "Harvesting",
    description:
      "When bolls burst open revealing fluffy white cotton, they're harvested either by hand-picking or more commonly with mechanical cotton pickers that strip the cotton from the plants.",
    bgImage: "/api/placeholder/600/400",
    icon: FaTractor,
  },
  {
    id: 4,
    title: "Ginning",
    description:
      "The harvested cotton goes through a cotton gin, which separates the fibers (lint) from the seeds. This crucial invention by Eli Whitney revolutionized cotton processing.",
    bgImage: "/api/placeholder/600/400",
    icon: FaTools,
  },
  {
    id: 5,
    title: "Baling",
    description:
      "The separated cotton lint is compressed into bales weighing approximately 500 pounds (227 kg) each, which are then wrapped, tied, and tagged for identification.",
    bgImage: "/api/placeholder/600/400",
    icon: FaHandsHelping,
  },
  {
    id: 6,
    title: "Classing",
    description:
      "Cotton fibers are graded based on color, length, strength, micronaire (fineness), and cleanliness to determine quality and value.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSort,
  },
  {
    id: 7,
    title: "Opening & Cleaning",
    description:
      "Bales are opened and the cotton passes through machinery that removes impurities like dirt, leaves, and other plant materials.",
    bgImage: "/api/placeholder/600/400",
    icon: FaWind,
  },
  {
    id: 8,
    title: "Carding",
    description:
      "Cotton fibers are passed through wire brushes that align them into a thin web, which is then condensed into a continuous untwisted strand called a sliver.",
    bgImage: "/api/placeholder/600/400",
    icon: FaTools,
  },
  {
    id: 9,
    title: "Combing",
    description:
      "For finer yarns, the cotton sliver is combed to remove shorter fibers and further straighten the remaining longer fibers.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSort,
  },
  {
    id: 10,
    title: "Drawing & Roving",
    description:
      "Multiple slivers are combined and drawn out to create a more uniform thickness and increase fiber parallelization before being slightly twisted into roving.",
    bgImage: "/api/placeholder/600/400",
    icon: FaIndustry,
  },
  {
    id: 11,
    title: "Spinning",
    description:
      "Roving is drawn out and twisted to create yarn of desired thickness. This can be done through various methods including ring spinning, open-end spinning, or air-jet spinning.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSync,
  },
  {
    id: 12,
    title: "Weaving Cotton Fabric",
    description:
      "The spun cotton yarn is woven on looms into various types of fabric with different weave patterns, creating materials for clothing, bedding, and other textile products.",
    bgImage: "/api/placeholder/600/400",
    icon: FaThLarge,
  },
];

export default function CottonTextile() {
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
    <div className="relative flex flex-col items-center px-4 pt-20">
      <div className="absolute top-0 left-0 h-full w-full -z-10 blur-sm">
        <img
          src={processBg}
          alt="process background"
          className="h-full w-full object-cover"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#1fa951]">
        Cotton Fiber Creation Process
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
                className={`timeline-card mb-16 flex flex-col-reverse md:flex-row items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } relative`}
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
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">
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
      <div className="w-full max-w-4xl bg-white/90 p-4 sm:p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#1fa951]">
          About Cotton Fabric
        </h2>
        <p className="mb-4 text-gray-700">
          Cotton has been cultivated for over 7,000 years and remains one of the
          most important natural fibers in the world, accounting for about 25%
          of global textile fiber use. Prized for its softness, breathability,
          and versatility, cotton fabric is hypoallergenic and naturally absorbs
          moisture, making it ideal for clothing in various climates. While
          cotton is renewable, conventional production often requires
          significant water and pesticide use. Sustainable alternatives like
          organic cotton are becoming increasingly popular, using methods that
          reduce environmental impact while maintaining the superior comfort and
          durability that has made cotton a staple in human civilization for
          millennia.
        </p>
        <div className="flex justify-center">
          <img
            src="/api/placeholder/800/400"
            alt="Cotton fabric production"
            className="rounded-lg shadow-md w-full max-w-xl"
          />
        </div>
      </div>
    </div>
  );
}
