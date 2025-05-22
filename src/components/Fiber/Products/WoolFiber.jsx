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
    title: "Sheep Raising",
    description:
      "Sheep are raised in pastures where they graze on natural grasses and vegetation. Different breeds produce varying qualities of wool, from fine merino to coarser breeds. Sheep are cared for year-round, with proper nutrition, shelter, and veterinary care ensuring healthy wool growth.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSeedling,
  },
  {
    id: 2,
    title: "Wool Shearing",
    description:
      "Sheep are sheared annually, typically in spring before hot weather arrives. Professional shearers use electric clippers to carefully remove the fleece in one piece. This process doesn't harm the sheep and is essential for their health and comfort during warmer months.",
    bgImage: "/api/placeholder/600/400",
    icon: FaCut,
  },
  {
    id: 3,
    title: "Fleece Sorting",
    description:
      "Raw fleeces are sorted by quality, with different parts of the sheep producing different grades of wool. The shoulders and sides yield the finest wool, while areas like the legs and belly produce coarser fibers. Damaged or heavily soiled wool is separated out.",
    bgImage: "/api/placeholder/600/400",
    icon: FaLeaf,
  },
  {
    id: 4,
    title: "Wool Scouring",
    description:
      "Raw wool contains lanolin, dirt, and vegetable matter that must be removed. The wool is washed in a series of hot water baths with detergents to remove grease and impurities. This scouring process is carefully controlled to preserve the wool's natural properties.",
    bgImage: "/api/placeholder/600/400",
    icon: FaWater,
  },
  {
    id: 5,
    title: "Drying Process",
    description:
      "After scouring, the clean wool is dried using controlled temperature and humidity. Proper drying prevents damage to the wool fibers while removing excess moisture. The wool may be dried naturally or using specialized drying equipment in commercial operations.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSun,
  },
  {
    id: 6,
    title: "Wool Carbonizing",
    description:
      "Vegetable matter remaining in the wool is removed through carbonizing, where the wool is treated with sulfuric acid and heated. This process destroys plant materials without damaging the wool fibers, leaving clean, pure wool ready for further processing.",
    bgImage: "/api/placeholder/600/400",
    icon: FaFire,
  },
  {
    id: 7,
    title: "Wool Combing",
    description:
      "Wool fibers are combed to align them parallel and remove shorter fibers. This creates two products: combed top (long, aligned fibers for worsted yarn) and noil (shorter fibers for woolen yarn). Combing produces smooth, strong yarn suitable for fine fabrics.",
    bgImage: "/api/placeholder/600/400",
    icon: FaHandsHelping,
  },
  {
    id: 8,
    title: "Wool Carding",
    description:
      "For woolen processing, wool is carded using wire-covered rollers that separate and mix the fibers. This creates a loose preparation where fibers lie in various directions, resulting in loftier, more insulating yarn perfect for warm clothing.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSort,
  },
  {
    id: 9,
    title: "Wool Spinning",
    description:
      "Prepared wool is spun into yarn using spinning frames or wheels. The twist given during spinning provides strength and determines the yarn's character. Worsted spinning creates smooth, strong yarn while woolen spinning produces softer, more elastic yarn.",
    bgImage: "/api/placeholder/600/400",
    icon: FaTools,
  },
  {
    id: 10,
    title: "Quality Control",
    description:
      "Spun wool yarn undergoes rigorous testing for tensile strength, twist level, evenness, and moisture content. Quality control ensures consistency across batches and determines the appropriate end use for each grade of yarn.",
    bgImage: "/api/placeholder/600/400",
    icon: FaCog,
  },
  {
    id: 11,
    title: "Dyeing Process",
    description:
      "Wool yarn is dyed using various methods and colorants. Wool's protein structure accepts dyes exceptionally well, creating vibrant, long-lasting colors. Both natural and synthetic dyes can be used, with careful temperature control to prevent fiber damage.",
    bgImage: "/api/placeholder/600/400",
    icon: FaIndustry,
  },
  {
    id: 12,
    title: "Yarn Finishing",
    description:
      "Dyed wool yarn is wound onto bobbins, cones, or prepared in hanks according to specifications. Final treatments may include anti-moth protection or softening. The yarn is inspected for color consistency and quality before packaging.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSync,
  },
  {
    id: 13,
    title: "Textile Production",
    description:
      "Wool yarn is woven or knitted into fabrics using traditional or modern techniques. Wool textiles offer excellent insulation, moisture management, and durability. The natural crimp in wool fibers creates fabrics with superior drape, resilience, and comfort.",
    bgImage: "/api/placeholder/600/400",
    icon: FaThLarge,
  },
];

export default function WoolFiber() {
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
          alt="wool fiber production background"
          className="h-full w-full object-cover"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#1fa951]">
        Wool Fiber Creation Process
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
          About Wool Fiber
        </h2>
        <p className="mb-4 text-gray-700">
          Wool fiber represents one of humanity's oldest and most versatile
          natural textiles, prized for thousands of years for its exceptional
          properties and renewable nature. Harvested annually from sheep without
          harm to the animals, wool is a completely sustainable fiber that grows
          continuously throughout the sheep's life. The unique structure of wool
          fibers, with their natural crimp and scales, provides outstanding
          insulation properties, keeping wearers warm in cold weather and cool
          in warm conditions through excellent moisture management. Wool's
          natural elasticity allows garments to maintain their shape while
          providing comfort and freedom of movement. The fiber's inherent flame
          resistance and UV protection make it ideal for both everyday wear and
          specialized applications. Wool production supports rural communities
          worldwide, providing livelihoods for millions of farmers and workers
          in the textile industry. The lanolin naturally present in wool
          provides antibacterial and water-resistant properties, while the
          fiber's ability to absorb moisture without feeling damp creates
          exceptional comfort. From fine merino wool used in luxury garments to
          sturdy tweeds for outerwear, wool offers a range of textures and
          weights suitable for countless applications. Modern wool processing
          techniques have enhanced the fiber's natural properties while
          maintaining its biodegradable characteristics. Wool textiles naturally
          resist odors, wrinkles, and stains, making them both practical and
          luxurious. The global wool industry continues to innovate with
          sustainable practices, ensuring this remarkable natural fiber remains
          relevant for future generations while honoring traditional
          craftsmanship and animal welfare standards.
        </p>
        <div className="flex justify-center">
          <img
            src="/api/placeholder/800/400"
            alt="Wool fiber production"
            className="rounded-lg shadow-md w-full max-w-xl"
          />
        </div>
      </div>
    </div>
  );
}
