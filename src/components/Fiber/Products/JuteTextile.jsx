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
    description:
      "Jute cultivation begins with the sowing of seeds in well-prepared soil. Farmers typically plant the seeds during the early monsoon season to take advantage of natural rainfall. The seeds are sown in rows, either by hand or using simple tools, ensuring that there is enough space for the plants to grow properly. The soil is rich in nutrients, well-drained, and has a slightly acidic to neutral pH level, which is ideal for jute cultivation.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSeedling,
  },
  {
    id: 2,
    title: "Growing",
    description:
      "Once germinated, jute plants grow rapidly, reaching a height of 10 to 12 feet within just a few months. The plants thrive in warm, humid climates with adequate rainfall. During this phase, farmers regularly monitor the crop, ensuring the plants are healthy and free from pests. Weeding and thinning are carried out to allow each plant sufficient space and nutrients to grow strong and straight.",
    bgImage: "/api/placeholder/600/400",
    icon: FaLeaf,
  },
  {
    id: 3,
    title: "Harvesting",
    description:
      "Jute is harvested when the plants are in the flowering stage, usually 100 to 120 days after planting. At this stage, the fiber quality is optimal. Farmers cut the jute stalks close to the ground using sickles. Timing is critical — harvesting too early results in weak fibers, while harvesting too late can make the fibers coarse and brittle.",
    bgImage: "/api/placeholder/600/400",
    icon: FaTractor,
  },
  {
    id: 4,
    title: "Bundling",
    description:
      "After cutting, the stalks are tied into bundles and left in the field for a few days to shed excess moisture. This makes them lighter and easier to transport. Proper bundling ensures uniform retting and fiber quality in the next stages of processing.",
    bgImage: "/api/placeholder/600/400",
    icon: FaBoxOpen,
  },
  {
    id: 5,
    title: "Retting",
    description:
      "Retting is a microbial process where jute bundles are submerged in slow-moving water (such as ponds or streams) for about 10 to 15 days. This breaks down the plant tissues and separates the fibers from the woody stalks. Proper retting is crucial for obtaining fine, strong fibers. Natural retting is preferred for producing high-quality fiber over chemical or mechanical retting.",
    bgImage: "/api/placeholder/600/400",
    icon: FaWater,
  },
  {
    id: 6,
    title: "Stripping",
    description:
      "Once retting is complete, the outer fibers are stripped from the stalks by hand. This labor-intensive process involves holding the stalks in one hand and pulling the fibers with the other. The separated fibers are then washed in clean water to remove any remaining plant residue.",
    bgImage: "/api/placeholder/600/400",
    icon: FaHandsHelping,
  },
  {
    id: 7,
    title: "Drying",
    description:
      "The stripped fibers are spread out or hung in the sun to dry thoroughly. Proper drying is essential to prevent mold or degradation of the fiber. Sun-drying also helps to naturally bleach and soften the fibers, improving their texture and appearance.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSun,
  },
  {
    id: 8,
    title: "Grading & Sorting",
    description:
      "Once dried, the jute fibers are graded based on length, color, strength, and fineness. Grading ensures consistency in the quality of jute used for different applications. The fibers are then sorted into bundles according to their grade, ready for baling or further processing.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSort,
  },
  {
    id: 9,
    title: "Baling",
    description:
      "The sorted fibers are compressed into bales for ease of transport and storage. Baling preserves the quality of the fibers by reducing exposure to moisture and contaminants. These bales are then transported to jute mills for industrial processing.",
    bgImage: "/api/placeholder/600/400",
    icon: FaTools,
  },
  {
    id: 10,
    title: "Softening & Batching",
    description:
      "At the mill, raw jute fibers are treated with oil-in-water emulsions to soften them and make them easier to process. Batching involves mixing fibers from different grades to achieve uniform quality, depending on the final product's requirements.",
    bgImage: "/api/placeholder/600/400",
    icon: FaIndustry,
  },
  {
    id: 11,
    title: "Carding & Drawing",
    description:
      "Softened fibers are passed through carding machines that disentangle and align them. Drawing combines several carded slivers to form a single, stronger sliver with consistent thickness. This step is critical for preparing the fibers for spinning into yarn.",
    bgImage: "/api/placeholder/600/400",
    icon: FaCut,
  },
  {
    id: 12,
    title: "Spinning",
    description:
      "In the spinning process, jute slivers are twisted and drawn out to form yarns of the desired thickness and strength. These yarns can be further treated or blended with other fibers for specific applications. Spinning determines the durability and quality of the final fabric.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSync,
  },
  {
    id: 13,
    title: "Weaving",
    description:
      "The final stage involves weaving the jute yarn into fabric using traditional handlooms or modern power looms. The resulting fabric is used for various applications, from gunny sacks and carpets to eco-friendly fashion and home decor products. Weaving patterns and tightness can vary depending on the product requirements.",
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
