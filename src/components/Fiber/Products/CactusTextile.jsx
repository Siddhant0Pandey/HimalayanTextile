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
    title: "Cactus Cultivation",
    description:
      "Prickly pear cacti (Opuntia ficus-indica) are cultivated on plantations in arid regions. These drought-resistant plants require minimal water and can thrive in poor soil conditions. Each cactus pad (cladode) takes 6-8 months to mature and reach optimal size for harvesting.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSeedling,
  },
  {
    id: 2,
    title: "Harvesting",
    description:
      "Mature cactus pads are carefully harvested by hand using specialized tools to avoid the spines. Only the older, thicker pads are selected as they contain the highest concentration of mucilage and fiber. Harvesting is typically done in the early morning when moisture content is optimal.",
    bgImage: "/api/placeholder/600/400",
    icon: FaCut,
  },
  {
    id: 3,
    title: "Cleaning & Preparation",
    description:
      "Harvested cactus pads are thoroughly cleaned to remove spines, dirt, and debris. The outer waxy layer is scraped off, and any diseased or damaged portions are removed. The pads are then cut into smaller, manageable pieces for processing.",
    bgImage: "/api/placeholder/600/400",
    icon: FaLeaf,
  },
  {
    id: 4,
    title: "Juice Extraction",
    description:
      "The cleaned cactus pieces are crushed and pressed to extract the mucilaginous juice rich in natural polymers. This viscous liquid contains the binding agents necessary for fiber formation and will be processed separately for use in the textile creation process.",
    bgImage: "/api/placeholder/600/400",
    icon: FaWater,
  },
  {
    id: 5,
    title: "Drying Process",
    description:
      "The remaining cactus pulp is spread in thin layers and dried under controlled conditions, either by solar drying or using specialized dehydrators. This process removes excess moisture while preserving the fibrous structure of the plant material.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSun,
  },
  {
    id: 6,
    title: "Biomass Processing",
    description:
      "The dried cactus biomass is ground into a fine powder using industrial mills. This powder contains cellulose fibers and other organic compounds that will be transformed into textile fibers through chemical and mechanical processes.",
    bgImage: "/api/placeholder/600/400",
    icon: FaFire,
  },
  {
    id: 7,
    title: "Fiber Formation",
    description:
      "The cactus powder is mixed with the extracted mucilage and other natural binders to create a fiber-forming solution. This mixture is processed through specialized equipment to form continuous fibers with the desired thickness and strength properties.",
    bgImage: "/api/placeholder/600/400",
    icon: FaHandsHelping,
  },
  {
    id: 8,
    title: "Fiber Spinning",
    description:
      "The formed cactus fibers are spun into yarn using traditional spinning techniques adapted for plant-based materials. Multiple fibers are twisted together to create stronger threads suitable for textile production, with varying thicknesses for different applications.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSort,
  },
  {
    id: 9,
    title: "Strengthening Treatment",
    description:
      "The spun cactus yarn undergoes strengthening treatments to improve durability and reduce brittleness. This may involve treatment with natural oils, moisture conditioning, or other eco-friendly processes to enhance the fiber's textile properties.",
    bgImage: "/api/placeholder/600/400",
    icon: FaTools,
  },
  {
    id: 10,
    title: "Quality Control",
    description:
      "Each batch of cactus fiber yarn is tested for strength, elasticity, moisture absorption, and other quality parameters. Consistent quality is ensured through rigorous testing protocols before the yarn proceeds to dyeing and finishing processes.",
    bgImage: "/api/placeholder/600/400",
    icon: FaCog,
  },
  {
    id: 11,
    title: "Natural Dyeing",
    description:
      "Cactus fibers are dyed using eco-friendly dyes, often derived from other plant sources to maintain the sustainable nature of the product. The natural fiber structure accepts dyes well, creating vibrant colors while maintaining the material's biodegradable properties.",
    bgImage: "/api/placeholder/600/400",
    icon: FaIndustry,
  },
  {
    id: 12,
    title: "Yarn Preparation",
    description:
      "Dyed cactus yarn is prepared for textile production by winding onto spools, creating warps, or organizing into batches according to color and weight specifications. The yarn is inspected one final time to ensure consistency and quality.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSync,
  },
  {
    id: 13,
    title: "Textile Production",
    description:
      "Cactus fiber yarn is woven or knitted into sustainable textiles using eco-friendly production methods. The resulting fabrics are breathable, moisture-wicking, and biodegradable, suitable for clothing, accessories, and home textiles with a unique texture and environmental benefits.",
    bgImage: "/api/placeholder/600/400",
    icon: FaThLarge,
  },
];

export default function CactusTextile() {
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
          src="/api/placeholder/1200/800"
          alt="cactus fiber production background"
          className="h-full w-full object-cover"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#1fa951]">
        Cactus Fiber Creation Process
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
          About Cactus Fiber
        </h2>
        <p className="mb-4 text-gray-700">
          Cactus fiber represents the cutting edge of sustainable textile
          innovation, transforming the prickly pear cactus (Opuntia
          ficus-indica) into luxurious, eco-friendly fabric. This revolutionary
          material combines ancient agricultural knowledge with modern textile
          technology to create one of the most environmentally responsible
          fibers available today. Cactus leather and textiles require
          significantly less water than traditional materials - using 96% less
          water than cotton and producing zero toxic waste. The cactus plants
          are incredibly sustainable, regenerating from the same root system
          without replanting, and can be harvested every 6-8 months without
          harming the plant. The resulting fiber is naturally breathable,
          moisture-wicking, and surprisingly soft to the touch, with excellent
          durability and flexibility. Cactus textiles are completely
          biodegradable, breaking down naturally at the end of their lifecycle
          without harming the environment. The material has natural
          antimicrobial properties and UV resistance, making it ideal for both
          fashion and technical applications. From luxury handbags and shoes to
          clothing and automotive interiors, cactus fiber is revolutionizing
          sustainable fashion. Major brands are increasingly adopting this
          innovative material as consumers demand more environmentally conscious
          alternatives. The production process also supports rural communities
          in arid regions, providing sustainable livelihoods while preserving
          traditional farming practices and contributing to desertification
          prevention.
        </p>
        <div className="flex justify-center">
          <img
            src="/api/placeholder/800/400"
            alt="Cactus fiber production"
            className="rounded-lg shadow-md w-full max-w-xl"
          />
        </div>
      </div>
    </div>
  );
}
