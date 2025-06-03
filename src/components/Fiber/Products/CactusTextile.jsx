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
      "Prickly pear cacti (Opuntia ficus-indica) are cultivated on plantations in arid and semi-arid regions due to their low water requirements and resilience. These plants are grown without pesticides or synthetic fertilizers, making them an environmentally friendly raw material.",
    bgImage: "public/assets/img/cactus/1.png",
    icon: FaSeedling,
  },
  {
    id: 2,
    title: "Harvesting",
    description:
      "Mature cactus pads are carefully harvested by hand using specialized tools to prevent damage to the plant. The harvesting process is designed to be sustainable, ensuring that the mother plant continues to grow and produce new pads over time.",
    bgImage: "public/assets/img/cactus/2.png",
    icon: FaCut,
  },
  {
    id: 3,
    title: "Cleaning & Preparation",
    description:
      "Harvested cactus pads are thoroughly cleaned to remove spines, dirt, and debris. This step is essential to ensure the quality of the final product and to prepare the cactus pads for juice extraction and biomass processing.",
    bgImage: "public/assets/img/cactus/3.png",
    icon: FaLeaf,
  },
  {
    id: 4,
    title: "Juice Extraction",
    description:
      "The cleaned cactus pieces are crushed and pressed to extract the mucilaginous juice, which contains natural gums and binders. This juice is a key component used later in the fiber formation process.",
    bgImage: "public/assets/img/cactus/4.png",
    icon: FaWater,
  },
  {
    id: 5,
    title: "Drying Process",
    description:
      "The remaining cactus pulp is spread in thin layers and dried under controlled conditions to reduce moisture content. This drying can be done naturally using solar energy or in low-energy drying units to preserve eco-efficiency.",
    bgImage: "public/assets/img/cactus/5.png",
    icon: FaSun,
  },
  {
    id: 6,
    title: "Biomass Processing",
    description:
      "The dried cactus biomass is ground into a fine powder using industrial mills. This powder serves as the base for developing biodegradable and versatile cactus fibers for textile applications.",
    bgImage: "public/assets/img/cactus/6.png",
    icon: FaFire,
  },
  {
    id: 7,
    title: "Fiber Formation",
    description:
      "The cactus powder is mixed with the extracted mucilage and other natural binders to form a fibrous material. This mixture is mechanically processed to align fiber particles and produce continuous filaments.",
    bgImage: "public/assets/img/cactus/7.png",
    icon: FaHandsHelping,
  },
  {
    id: 8,
    title: "Fiber Spinning",
    description:
      "The formed cactus fibers are spun into yarn using traditional spinning techniques adapted for plant-based fibers. The process ensures the yarn retains the desirable strength and flexibility needed for fabric production.",
    bgImage: "public/assets/img/cactus/8.png",
    icon: FaSort,
  },
  {
    id: 9,
    title: "Strengthening Treatment",
    description:
      "The spun cactus yarn undergoes strengthening treatments to improve its durability and longevity. Natural enzymes or low-impact chemical processes may be used to increase tensile strength while keeping the fiber biodegradable.",
    bgImage: "public/assets/img/cactus/9.png",
    icon: FaTools,
  },
  {
    id: 10,
    title: "Quality Control",
    description:
      "Each batch of cactus fiber yarn is rigorously tested for strength, elasticity, moisture absorption, and overall texture. Quality checks ensure the fiber meets sustainability and performance standards before dyeing.",
    bgImage: "public/assets/img/cactus/10.png",
    icon: FaCog,
  },
  {
    id: 11,
    title: "Natural Dyeing",
    description:
      "Cactus fibers are dyed using eco-friendly dyes derived from plants, minerals, and insects. This natural dyeing process avoids harmful synthetic chemicals and reduces water and energy consumption.",
    bgImage: "public/assets/img/cactus/11.png",
    icon: FaIndustry,
  },
  {
    id: 12,
    title: "Yarn Preparation",
    description:
      "Dyed cactus yarn is prepared for textile production by winding onto spools, aligning fiber direction, and organizing the yarns by color, thickness, and strength for efficient weaving or knitting.",
    bgImage: "public/assets/img/cactus/12.png",
    icon: FaSync,
  },
  {
    id: 13,
    title: "Textile Production",
    description:
      "Cactus fiber yarn is woven or knitted into sustainable textiles using modern looms. These fabrics are used in fashion, upholstery, and eco-friendly packaging due to their strength, softness, and biodegradability.",
    bgImage: "public/assets/img/cactus/13.png",
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
    <div className="relative flex flex-col items-center px-4 pt-20 overflow-x-hidden max-w-full">
      {/* Background Image */}
      <div className="absolute top-0 left-0 h-full w-full -z-10 overflow-hidden">
        <img
          src="/api/placeholder/1200/800"
          alt="cactus fiber production background"
          className="h-full w-full object-cover max-w-none"
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#1fa951]">
        Cactus Fiber Creation Process
      </h1>

      {/* Timeline */}
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
                {/* Line Progress */}
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

                {/* Card */}
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
      <div className="w-full max-w-4xl bg-white/90 p-4 sm:p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#1fa951]">
          About Cactus Fiber
        </h2>
        <p className="mb-4 text-gray-700">
          Cactus fiber represents the cutting edge of sustainable textile
          innovation. Derived from the resilient prickly pear cactus, this fiber
          offers an eco-conscious alternative to synthetic and water-intensive
          natural fibers. It is cultivated without pesticides or synthetic
          fertilizers, and processed using low-impact, biodegradable methods.
          The resulting fabric is soft, breathable, durable, and suitable for a
          variety of applications—from clothing and accessories to home
          furnishings. By utilizing cactus as a raw material, manufacturers
          reduce water consumption, lower their carbon footprint, and contribute
          to a more sustainable fashion industry. This revolutionary approach
          not only preserves biodiversity and natural resources but also sets a
          new standard for responsible textile production.
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
