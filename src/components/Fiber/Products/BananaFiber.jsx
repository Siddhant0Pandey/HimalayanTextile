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
      "Banana plants (Musa species) are cultivated in tropical regions worldwide. These fast-growing plants produce fruit within 9-12 months and generate substantial agricultural waste in the form of pseudostems after harvesting. Each plant produces only one bunch of bananas before being cut down.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSeedling,
  },
  {
    id: 2,
    title: "Pseudostem Harvesting",
    description:
      "After banana fruit is harvested, the pseudostems (false trunks) are cut down as they would naturally die. These thick, fibrous stems, normally considered agricultural waste, are collected immediately to prevent decomposition and maximize fiber quality.",
    bgImage: "/api/placeholder/600/400",
    icon: FaCut,
  },
  {
    id: 3,
    title: "Cleaning & Sorting",
    description:
      "Harvested banana pseudostems are cleaned to remove dirt, leaves, and damaged portions. The stems are sorted by quality and size, with the outer layers being the strongest for fiber extraction. Any rotting or diseased sections are carefully removed.",
    bgImage: "/api/placeholder/600/400",
    icon: FaLeaf,
  },
  {
    id: 4,
    title: "Fiber Extraction",
    description:
      "The pseudostems are processed through decorticating machines that scrape away the pulpy material, leaving behind strong natural fibers. Traditional hand-scraping methods are also used in smaller operations. The extracted fibers vary in fineness depending on the layer of the stem.",
    bgImage: "/api/placeholder/600/400",
    icon: FaWater,
  },
  {
    id: 5,
    title: "Washing & Drying",
    description:
      "Extracted banana fibers are thoroughly washed in clean water to remove remaining plant juices and impurities. The clean fibers are then spread out to dry naturally in the sun or using controlled drying methods to achieve optimal moisture content.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSun,
  },
  {
    id: 6,
    title: "Fiber Grading",
    description:
      "Dried banana fibers are sorted and graded based on length, strength, and fineness. Fine fibers from inner layers are used for delicate textiles, while coarser outer fibers are suitable for stronger applications like ropes and mats.",
    bgImage: "/api/placeholder/600/400",
    icon: FaFire,
  },
  {
    id: 7,
    title: "Combing & Alignment",
    description:
      "Banana fibers are combed using specialized tools to align them parallel and remove any remaining impurities or short fibers. This process ensures uniform length and smoothness, preparing the fibers for the spinning process.",
    bgImage: "/api/placeholder/600/400",
    icon: FaHandsHelping,
  },
  {
    id: 8,
    title: "Fiber Spinning",
    description:
      "Aligned banana fibers are spun into yarn using traditional spinning wheels or modern spinning machines. The natural lignin in banana fibers provides strength, while their flexibility allows for various yarn weights suitable for different textile applications.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSort,
  },
  {
    id: 9,
    title: "Yarn Treatment",
    description:
      "Spun banana yarn undergoes treatment processes to enhance its properties. This may include natural softening treatments, strengthening with plant-based binders, or moisture conditioning to improve workability and durability.",
    bgImage: "/api/placeholder/600/400",
    icon: FaTools,
  },
  {
    id: 10,
    title: "Quality Testing",
    description:
      "Each batch of banana fiber yarn is rigorously tested for tensile strength, elongation, moisture regain, and uniformity. Quality control ensures consistent performance and helps determine the best applications for each grade of yarn.",
    bgImage: "/api/placeholder/600/400",
    icon: FaCog,
  },
  {
    id: 11,
    title: "Natural Dyeing",
    description:
      "Banana yarn accepts natural dyes exceptionally well due to its porous structure. Eco-friendly dyes from plants, minerals, or other sustainable sources are used to create vibrant colors while maintaining the fiber's biodegradable properties.",
    bgImage: "/api/placeholder/600/400",
    icon: FaIndustry,
  },
  {
    id: 12,
    title: "Yarn Finishing",
    description:
      "Dyed banana yarn is wound onto bobbins, prepared into hanks, or organized according to specifications. Final inspection ensures color consistency and yarn quality before proceeding to textile manufacturing processes.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSync,
  },
  {
    id: 13,
    title: "Textile Manufacturing",
    description:
      "Banana fiber yarn is woven or knitted into sustainable textiles using traditional or modern techniques. The resulting fabrics are lightweight, breathable, and naturally antimicrobial, perfect for clothing, home textiles, and specialty applications with excellent drape and texture.",
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
    <div className="relative flex flex-col items-center px-4 pt-20">
      <div className="absolute top-0 left-0 h-full w-full -z-10 blur-sm">
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
          About Banana Fiber
        </h2>
        <p className="mb-4 text-gray-700">
          Banana fiber represents one of nature's most remarkable examples of
          zero-waste agriculture, transforming what was once considered
          agricultural waste into premium sustainable textiles. Extracted from
          the pseudostems of banana plants after fruit harvest, this
          eco-friendly fiber utilizes materials that would otherwise be
          discarded or burned, creating valuable products while reducing
          environmental impact. Banana fiber is naturally strong, lightweight,
          and biodegradable, with excellent moisture-wicking properties and
          natural antimicrobial characteristics. The fiber production process
          supports rural farming communities by providing additional income
          streams from banana cultivation, turning waste into wealth. With its
          silk-like appearance and cotton-like feel, banana fiber creates
          textiles that are surprisingly soft and luxurious while being
          completely sustainable. The material requires no additional water or
          land resources since it uses existing agricultural byproducts, making
          it one of the most environmentally responsible fiber choices
          available. Banana textiles are naturally UV-resistant and have
          excellent drape qualities, making them ideal for both casual and
          formal wear. The fiber's natural golden-yellow color reduces the need
          for chemical dyeing, though it accepts natural dyes beautifully when
          color variation is desired. From traditional Japanese washi paper to
          modern fashion garments, banana fiber has a rich history and promising
          future in sustainable textile production. Major fashion brands are
          increasingly incorporating banana fiber into their sustainable
          collections, recognizing its superior environmental credentials and
          unique aesthetic qualities.
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
  );
}
