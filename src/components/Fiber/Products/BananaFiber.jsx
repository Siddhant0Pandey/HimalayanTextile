import React, { useState, useEffect } from "react";
import {
  FaSeedling,
  FaCut,
  FaLeaf,
  FaWater,
  FaSun,
  FaFire,
  FaHandsHelping,
  FaSort,
  FaTools,
  FaCog,
  FaIndustry,
  FaSync,
  FaThLarge,
} from "react-icons/fa";

const timelineData = [
  {
    id: 1,
    title: "Banana Plantation",
    description:
      "Banana plants (Musa species) are cultivated in tropical regions worldwide...",
    bgImage: "/api/placeholder/600/400",
    icon: FaSeedling,
  },
  {
    id: 2,
    title: "Pseudostem Harvesting",
    description:
      "After banana fruit is harvested, the pseudostems (false trunks)...",
    bgImage: "/api/placeholder/600/400",
    icon: FaCut,
  },
  {
    id: 3,
    title: "Cleaning & Sorting",
    description:
      "Harvested banana pseudostems are cleaned to remove dirt, leaves...",
    bgImage: "/api/placeholder/600/400",
    icon: FaLeaf,
  },
  {
    id: 4,
    title: "Fiber Extraction",
    description:
      "The pseudostems are processed through decorticating machines...",
    bgImage: "/api/placeholder/600/400",
    icon: FaWater,
  },
  {
    id: 5,
    title: "Washing & Drying",
    description:
      "Extracted banana fibers are thoroughly washed in clean water...",
    bgImage: "/api/placeholder/600/400",
    icon: FaSun,
  },
  {
    id: 6,
    title: "Fiber Grading",
    description:
      "Dried banana fibers are sorted and graded based on length, strength...",
    bgImage: "/api/placeholder/600/400",
    icon: FaFire,
  },
  {
    id: 7,
    title: "Combing & Alignment",
    description:
      "Banana fibers are combed using specialized tools to align them...",
    bgImage: "/api/placeholder/600/400",
    icon: FaHandsHelping,
  },
  {
    id: 8,
    title: "Fiber Spinning",
    description:
      "Aligned banana fibers are spun into yarn using traditional spinning...",
    bgImage: "/api/placeholder/600/400",
    icon: FaSort,
  },
  {
    id: 9,
    title: "Yarn Treatment",
    description:
      "Spun banana yarn undergoes treatment processes to enhance properties...",
    bgImage: "/api/placeholder/600/400",
    icon: FaTools,
  },
  {
    id: 10,
    title: "Quality Testing",
    description:
      "Each batch of banana fiber yarn is rigorously tested for tensile strength...",
    bgImage: "/api/placeholder/600/400",
    icon: FaCog,
  },
  {
    id: 11,
    title: "Natural Dyeing",
    description:
      "Banana yarn accepts natural dyes exceptionally well due to its structure...",
    bgImage: "/api/placeholder/600/400",
    icon: FaIndustry,
  },
  {
    id: 12,
    title: "Yarn Finishing",
    description:
      "Dyed banana yarn is wound onto bobbins and inspected for consistency...",
    bgImage: "/api/placeholder/600/400",
    icon: FaSync,
  },
  {
    id: 13,
    title: "Textile Manufacturing",
    description:
      "Banana fiber yarn is woven or knitted into sustainable textiles...",
    bgImage: "/api/placeholder/600/400",
    icon: FaThLarge,
  },
];

export default function BanaanaFiber() {
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
    <div className="overflow-x-hidden">
      <div className="relative flex flex-col items-center px-4 pt-20">
        <div className="absolute top-0 left-0 h-full w-full -z-10 blur-sm overflow-hidden">
          <img
            src="/api/placeholder/1200/800"
            alt="banana fiber production background"
            className="h-full w-full object-cover"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#1fa951]">
          Banana Fiber Creation Process
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

        <div className="w-full max-w-4xl bg-white/90 p-4 sm:p-6 rounded-lg shadow-lg mb-12 mt-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#1fa951]">
            About Banana Fiber
          </h2>
          <p className="mb-4 text-gray-700">
            Banana fiber represents one of nature's most remarkable examples of
            zero-waste agriculture, transforming what was once considered
            agricultural waste into premium sustainable textiles...
          </p>
          <div className="flex justify-center">
            <img
              src="/api/placeholder/800/400"
              alt="Banana fiber production"
              className="rounded-lg shadow-md w-full max-w-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
