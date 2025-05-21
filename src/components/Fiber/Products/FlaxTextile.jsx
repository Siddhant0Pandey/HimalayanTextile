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
      "Flax seeds are sown densely in cool soil during early spring. In most regions, planting typically occurs between March and May, with cooler climates being ideal for flax cultivation.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSeedling,
  },
  {
    id: 2,
    title: "Growing",
    description:
      "Flax plants grow rapidly, reaching about 3-4 feet tall in just 100 days. The plants produce beautiful blue flowers that last only a day, and seed-containing bolls develop afterward.",
    bgImage: "/api/placeholder/600/400",
    icon: FaLeaf,
  },
  {
    id: 3,
    title: "Harvesting",
    description:
      "Unlike most crops, flax is typically pulled from the ground rather than cut to preserve the full length of the valuable fibers. Harvesting occurs when the stems begin to turn yellow and the seed bolls are ripening.",
    bgImage: "/api/placeholder/600/400",
    icon: FaTractor,
  },
  {
    id: 4,
    title: "Retting",
    description:
      "Harvested flax undergoes retting, a process where bundles are submerged in water or laid in fields to allow bacteria and moisture to break down the pectin that binds the fibers to the woody stem.",
    bgImage: "/api/placeholder/600/400",
    icon: FaWater,
  },
  {
    id: 5,
    title: "Breaking",
    description:
      "After retting and drying, the flax stems are broken using a flax break, which cracks the woody core without damaging the fibers, making it easier to separate them from the stem.",
    bgImage: "/api/placeholder/600/400",
    icon: FaTools,
  },
  {
    id: 6,
    title: "Scutching",
    description:
      "The broken flax stems are scutched (beaten) to remove the broken woody parts (shives) from the fibers. This can be done by hand or machine, scraping away the unwanted material.",
    bgImage: "/api/placeholder/600/400",
    icon: FaHandsHelping,
  },
  {
    id: 7,
    title: "Hackling",
    description:
      "The scutched fibers are drawn through metal combs called hackles, separating the short fibers (tow) from the long, valuable fibers (line). This process aligns and refines the fibers.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSort,
  },
  {
    id: 8,
    title: "Sorting",
    description:
      "Flax fibers are sorted based on quality, length, and fineness. The highest quality long fibers (line flax) are used for fine linen, while shorter fibers (tow) are used for coarser products.",
    bgImage: "/api/placeholder/600/400",
    icon: FaWind,
  },
  {
    id: 9,
    title: "Spinning Preparation",
    description:
      "Before spinning, flax fibers are often softened by beating or by chemical processes. The fibers are then formed into continuous ribbons called slivers.",
    bgImage: "/api/placeholder/600/400",
    icon: FaTools,
  },
  {
    id: 10,
    title: "Drawing & Roving",
    description:
      "Multiple slivers are combined and drawn out to create a more uniform thickness and increase fiber alignment before being slightly twisted into roving, preparing the fibers for spinning.",
    bgImage: "/api/placeholder/600/400",
    icon: FaIndustry,
  },
  {
    id: 11,
    title: "Spinning",
    description:
      "The prepared flax roving is spun into yarn through various methods. Traditionally, flax was wet-spun to produce a smoother, stronger yarn, though dry spinning is also used for certain applications.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSync,
  },
  {
    id: 12,
    title: "Weaving Linen Fabric",
    description:
      "The spun flax yarn is woven on looms into linen fabric using different weave patterns. The resulting textile is known for its exceptional coolness, absorbency, and natural luster.",
    bgImage: "/api/placeholder/600/400",
    icon: FaThLarge,
  },
];

export default function FlaxTextile() {
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
        Flax Fiber Creation Process
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
          About Flax Fabric (Linen)
        </h2>
        <p className="mb-4 text-gray-700">
          Flax has been cultivated for over 10,000 years, making it one of the
          oldest textile fibers in human history. The resulting fabric, linen,
          is renowned for its exceptional strength (30% stronger than cotton),
          remarkable durability, and natural luster that actually improves with
          age. Linen's most distinctive quality is its superior breathability
          and moisture-wicking properties, making it the premier fabric for hot
          climates. Environmentally, flax is considered one of the most
          sustainable textile crops as it requires minimal water, pesticides,
          and fertilizers to thrive. Every part of the flax plant can be
          utilized—fibers for textiles, seeds for linseed oil, and remaining
          parts for paper or insulation—creating virtually zero waste. The
          labor-intensive process of transforming flax into linen contributes to
          its premium status, but its unmatched longevity and timeless elegance
          have secured its place as a luxury textile throughout millennia.
        </p>
        <div className="flex justify-center">
          <img
            src="/api/placeholder/800/400"
            alt="Flax fabric production"
            className="rounded-lg shadow-md w-full max-w-xl"
          />
        </div>
      </div>
    </div>
  );
}
