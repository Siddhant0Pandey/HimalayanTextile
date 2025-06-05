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
      "Banana plants (Musa species) thrive in tropical climates and are grown globally for their fruit. The plants grow rapidly, reaching maturity within 9–12 months. While the fruit is the primary product, the plant’s pseudostem contains fibrous material that is often discarded—yet it holds tremendous potential for sustainable fiber production.",
    bgImage: "public/assets/img/banana/1.png",
    icon: FaSeedling,
  },
  {
    id: 2,
    title: "Pseudostem Harvesting",
    description:
      "Once banana fruits are harvested, the pseudostems (the trunk-like structures made of tightly packed leaf sheaths) are cut down. These are normally treated as waste, but here they serve as the raw material for fiber extraction, making the entire process more eco-conscious and circular.",
    bgImage: "public/assets/img/cactus/2.png",
    icon: FaCut,
  },
  {
    id: 3,
    title: "Cleaning & Sorting",
    description:
      "The harvested pseudostems are cleaned to remove surface impurities, leaves, and excess moisture. They are then sorted based on diameter and quality to prepare them for mechanical processing, ensuring consistent fiber output in later stages.",
    bgImage: "public/assets/img/cactus/3.png",
    icon: FaLeaf,
  },
  {
    id: 4,
    title: "Fiber Extraction",
    description:
      "Using decorticating machines or manual tools, the outer layers of the pseudostem are scraped to separate long fibers. These machines crush the stem and pull out fibrous strands, which are collected for further processing. This step is key to unlocking the value from the plant waste.",
    bgImage: "public/assets/img/cactus/4.png",
    icon: FaWater,
  },
  {
    id: 5,
    title: "Washing & Drying",
    description:
      "The raw banana fibers are washed thoroughly to remove any remaining sap, dirt, or organic residues. Once clean, the fibers are sun-dried in controlled conditions to prevent mildew and ensure strength retention, contributing to their natural luster and durability.",
    bgImage: "public/assets/img/cactus/5.png",
    icon: FaSun,
  },
  {
    id: 6,
    title: "Fiber Grading",
    description:
      "After drying, the fibers are graded manually based on characteristics like length, fineness, color, and strength. Grading ensures uniformity in the final product and allows premium-quality fibers to be reserved for textiles, while coarser grades may be used in composites or handicrafts.",
    bgImage: "public/assets/img/cactus/6.png",
    icon: FaFire,
  },
  {
    id: 7,
    title: "Combing & Alignment",
    description:
      "Fibers are combed using fine tools to remove short, uneven strands and align the long fibers parallel to each other. This step improves fiber texture and is crucial for producing smooth, strong yarn, ready for spinning or blending with other natural fibers.",
    bgImage: "public/assets/img/cactus/7.png",
    icon: FaHandsHelping,
  },
  {
    id: 8,
    title: "Fiber Spinning",
    description:
      "The aligned banana fibers are spun into yarn using traditional hand-spinning wheels or mechanized spindles. Spinning converts loose fiber into a continuous thread, which is flexible yet strong enough to be woven or knitted into fabrics.",
    bgImage: "public/assets/img/cactus/8.png",
    icon: FaSort,
  },
  {
    id: 9,
    title: "Yarn Treatment",
    description:
      "To improve the yarn's performance, treatments such as softening, anti-bacterial washing, or moisture-wicking finishes may be applied. This enhances the banana yarn’s suitability for clothing, upholstery, or interior decor applications.",
    bgImage: "public/assets/img/cactus/9.png",
    icon: FaTools,
  },
  {
    id: 10,
    title: "Quality Testing",
    description:
      "Each yarn batch is tested for tensile strength, moisture resistance, and color fastness. Consistent quality is essential for textile production, ensuring the banana fiber yarn meets modern sustainability and durability standards.",
    bgImage: "public/assets/img/cactus/10.png",
    icon: FaCog,
  },
  {
    id: 11,
    title: "Natural Dyeing",
    description:
      "Banana fiber’s high cellulose content allows it to absorb natural dyes beautifully. Using plant-based and non-toxic dyes, the yarn is colored in earthy tones—highlighting both the aesthetic and environmental values of the material.",
    bgImage: "public/assets/img/cactus/11.png",
    icon: FaIndustry,
  },
  {
    id: 12,
    title: "Yarn Finishing",
    description:
      "Dyed yarns are wound onto bobbins and carefully inspected for uniformity in thickness and color. Any inconsistencies are corrected before the yarn is packaged for weaving, knitting, or braiding into fabric structures.",
    bgImage: "public/assets/img/cactus/12.png",
    icon: FaSync,
  },
  {
    id: 13,
    title: "Textile Manufacturing",
    description:
      "In the final stage, banana fiber yarn is crafted into rugs, garments, accessories, or eco-textiles. Weaving or knitting is done using either traditional looms or modern techniques, resulting in a durable, biodegradable, and elegant fabric ideal for sustainable living.",
    bgImage: "public/assets/img/cactus/13.png",
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
            src="assets\img\hero-section1.jpg"
            alt="banana fiber production background"
            className="h-full w-full object-cover"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#00fe5d]">
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
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black">
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
            agricultural waste into a premium sustainable textile. Extracted
            from the pseudostem of the banana plant, this fiber is not only
            biodegradable but also naturally strong, lightweight, and
            breathable. The production process is largely mechanical, requiring
            minimal chemical treatment—making it environmentally safer than most
            synthetic alternatives. Banana fiber’s versatility allows it to be
            used in textiles, rugs, home decor, paper, and even automotive
            components. Its natural golden sheen, durability, and eco-friendly
            origin have earned it a spot in modern sustainable design and
            ethical fashion. As global demand for green alternatives grows,
            banana fiber stands out as an innovative, circular solution to the
            textile industry’s environmental challenges.
          </p>

          <div className="flex justify-center">
            {/* <img
              src="/api/placeholder/800/400"
              alt="Banana fiber production"
              className="rounded-lg shadow-md w-full max-w-xl"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
