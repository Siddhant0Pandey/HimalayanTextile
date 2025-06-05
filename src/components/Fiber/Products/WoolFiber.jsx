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

// Inside timelineData (replace the existing descriptions)
const timelineData = [
  {
    id: 1,
    title: "Sheep Raising",
    description:
      "Sheep are raised in pastures where they graze on natural grasses and vegetation. Healthy, well-fed sheep produce the best quality wool. Farmers monitor their diet, shelter, and health to ensure the fleece grows strong and consistent throughout the year.",
    bgImage: "public/assets/img/wool/1.png",
    icon: FaSeedling,
  },
  {
    id: 2,
    title: "Wool Shearing",
    description:
      "Sheep are sheared annually, typically in spring before hot weather arrives. This humane and painless process involves carefully removing the fleece in one large piece using electric clippers, ensuring both animal welfare and fiber quality.",
    bgImage: "public/assets/img/wool/2.png",
    icon: FaCut,
  },
  {
    id: 3,
    title: "Fleece Sorting",
    description:
      "Raw fleeces are sorted by quality, with different parts of the sheep producing different grades of wool. High-quality wool from the back and sides is separated from coarser fiber found on the legs or belly. This ensures uniformity in processing.",
    bgImage: "public/assets/img/wool/3.png",
    icon: FaLeaf,
  },
  {
    id: 4,
    title: "Wool Scouring",
    description:
      "Raw wool contains lanolin (natural grease), dirt, and vegetable matter that must be removed. Scouring involves washing the wool in a series of detergent and water baths to clean it without damaging the delicate fiber.",
    bgImage: "public/assets/img/wool/4.png",
    icon: FaWater,
  },
  {
    id: 5,
    title: "Drying Process",
    description:
      "After scouring, the clean wool is dried using controlled temperature and humidity systems. This ensures the fibers retain their natural crimp and resilience while preventing shrinkage or damage.",
    bgImage: "public/assets/img/wool/5.png",
    icon: FaSun,
  },
  {
    id: 6,
    title: "Wool Carbonizing",
    description:
      "Vegetable matter remaining in the wool is removed through carbonizing — a chemical process where wool is treated with acid and then heated to carbonize the impurities. This step is important for producing smooth, high-quality yarn.",
    bgImage: "public/assets/img/wool/6.png",
    icon: FaFire,
  },
  {
    id: 7,
    title: "Wool Combing",
    description:
      "Wool fibers are combed to align them parallel and remove shorter fibers and any residual impurities. This results in a smoother, more lustrous fiber that’s ideal for spinning into fine yarns, especially in worsted yarn production.",
    bgImage: "public/assets/img/wool/7.png",
    icon: FaHandsHelping,
  },
  {
    id: 8,
    title: "Wool Carding",
    description:
      "For woolen processing, wool is carded using wire-covered rollers that separate and fluff the fibers. This creates a loose, airy web of fibers known as a batt, which is ideal for spinning soft, warm yarns.",
    bgImage: "public/assets/img/wool/8.png",
    icon: FaSort,
  },
  {
    id: 9,
    title: "Wool Spinning",
    description:
      "Prepared wool is spun into yarn using spinning frames or traditional spinning wheels. The fibers are twisted together to form a continuous thread, with adjustments made for thickness, ply, and twist direction based on the intended end use.",
    bgImage: "public/assets/img/wool/9.png",
    icon: FaTools,
  },
  {
    id: 10,
    title: "Quality Control",
    description:
      "Spun wool yarn undergoes rigorous testing for tensile strength, twist level, evenness, and moisture content. Any irregularities are corrected to ensure that the yarn meets industry standards for durability and consistency.",
    bgImage: "public/assets/img/wool/10.png",
    icon: FaCog,
  },
  {
    id: 11,
    title: "Dyeing Process",
    description:
      "Wool yarn is dyed using various methods and colorants, including natural and synthetic dyes. The process can occur before or after spinning, depending on the desired color pattern. Dyeing is followed by rinsing and setting the color for permanence.",
    bgImage: "public/assets/img/wool/11.png",
    icon: FaIndustry,
  },
  {
    id: 12,
    title: "Yarn Finishing",
    description:
      "Dyed wool yarn is wound onto bobbins, cones, or prepared in hanks, then finished by steaming or washing to relax the twist and set the yarn. This final preparation ensures it is ready for weaving, knitting, or other textile production.",
    bgImage: "public/assets/img/wool/12.png",
    icon: FaSync,
  },
  {
    id: 13,
    title: "Textile Production",
    description:
      "Wool yarn is woven or knitted into fabrics using traditional looms or modern machines. Depending on the product, these fabrics may go through additional finishing processes like fulling, brushing, or pressing to enhance their properties.",
    bgImage: "public/assets/img/wool/13.png",
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
    <div className="relative flex flex-col items-center px-4 pt-20 overflow-x-hidden">
      <div className="absolute top-0 left-0 h-full w-full -z-10 blur-sm overflow-hidden">
        <img
          src="assets/img/hero-section1.jpg"
          alt="wool fiber production background"
          className="h-full w-full object-cover"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#00fe5d]">
        Wool Fiber Creation Process
      </h1>

      <div className="w-full max-w-6xl overflow-hidden">
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
      <div className="w-full max-w-4xl bg-white/90 p-4 sm:p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#1fa951]">
          About Wool Fiber
        </h2>
        <p className="mb-4 text-gray-700">
          Wool fiber represents one of humanity's oldest and most versatile
          materials, with a history that dates back thousands of years.
          Harvested from sheep, wool is a natural, renewable, and biodegradable
          fiber known for its warmth, durability, and resilience. Unlike
          synthetic materials, wool can absorb moisture while still providing
          insulation, making it ideal for a wide range of climates and
          applications. Its crimped structure gives it natural elasticity,
          allowing wool garments to stretch and recover their shape. Wool also
          resists wrinkles, odors, and flames, making it a preferred choice for
          clothing, upholstery, and industrial textiles. From traditional
          handspun yarn to advanced textile innovations, wool continues to play
          a vital role in sustainable fashion and eco-conscious living.
        </p>

        <div className="flex justify-center"></div>
      </div>
    </div>
  );
}
