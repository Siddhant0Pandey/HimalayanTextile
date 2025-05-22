import React, { useState, useEffect } from "react";
import {
  FaEgg,
  FaBug,
  FaLeaf,
  FaHome,
  FaFire,
  FaWater,
  FaHandsHelping,
  FaSort,
  FaTools,
  FaCut,
  FaIndustry,
  FaSync,
  FaThLarge,
} from "react-icons/fa";

const timelineData = [
  {
    id: 1,
    title: "Egg Stage",
    description:
      "Silkworm moths lay tiny eggs on mulberry leaves. These eggs are carefully collected and stored in controlled conditions. Each female moth can lay 300-500 eggs, which will hatch into silkworms in about 10-14 days under proper temperature and humidity.",
    bgImage: "/api/placeholder/600/400",
    icon: FaEgg,
  },
  {
    id: 2,
    title: "Larva Hatching",
    description:
      "Silkworm larvae (caterpillars) emerge from eggs and begin feeding exclusively on fresh mulberry leaves. These tiny worms are about 3mm long when they hatch and have voracious appetites, eating continuously to fuel their rapid growth.",
    bgImage: "/api/placeholder/600/400",
    icon: FaBug,
  },
  {
    id: 3,
    title: "Feeding & Growth",
    description:
      "For 4-6 weeks, silkworms eat mulberry leaves constantly, growing through five molting stages (instars). They increase their body weight by 3,000 times, becoming plump, white caterpillars about 3 inches long before they're ready to spin cocoons.",
    bgImage: "/api/placeholder/600/400",
    icon: FaLeaf,
  },
  {
    id: 4,
    title: "Cocoon Formation",
    description:
      "Mature silkworms begin spinning their cocoons by secreting liquid silk protein from special glands. They create a protective oval shell around themselves, spinning continuously for 2-3 days to produce up to 1,000 meters of continuous silk fiber.",
    bgImage: "/api/placeholder/600/400",
    icon: FaHome,
  },
  {
    id: 5,
    title: "Cocoon Selection",
    description:
      "Fresh cocoons are carefully sorted and selected for quality. The best cocoons are firm, well-shaped, and free from stains or defects. Some cocoons are set aside for breeding to continue the lifecycle, while others proceed to silk extraction.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSort,
  },
  {
    id: 6,
    title: "Killing (Stifling)",
    description:
      "To prevent the pupae from emerging and breaking the silk fibers, cocoons are exposed to hot air or steam at 60-80°C. This stifling process preserves the continuous silk filament while stopping the metamorphosis process.",
    bgImage: "/api/placeholder/600/400",
    icon: FaFire,
  },
  {
    id: 7,
    title: "Softening",
    description:
      "Stifled cocoons are immersed in hot water (95-97°C) to soften the sericin gum that binds the silk fibers together. This process makes it easier to find the end of the silk filament and begins the unwinding process.",
    bgImage: "/api/placeholder/600/400",
    icon: FaWater,
  },
  {
    id: 8,
    title: "Reeling",
    description:
      "The softened cocoons are carefully unwound to extract the continuous silk filament. Multiple filaments (4-8) are combined and twisted together to form a single silk thread strong enough for textile production. This requires great skill and precision.",
    bgImage: "/api/placeholder/600/400",
    icon: FaHandsHelping,
  },
  {
    id: 9,
    title: "Twisting & Winding",
    description:
      "The reeled silk threads are twisted together to create stronger yarn with desired thickness and strength. The yarn is wound onto bobbins and prepared for further processing. Different twist levels create various silk yarn qualities.",
    bgImage: "/api/placeholder/600/400",
    icon: FaTools,
  },
  {
    id: 10,
    title: "Degumming",
    description:
      "Raw silk yarn undergoes degumming to remove residual sericin gum, which makes the silk softer, more lustrous, and lighter. This process involves boiling the silk in soapy water, reducing its weight by 20-25%.",
    bgImage: "/api/placeholder/600/400",
    icon: FaIndustry,
  },
  {
    id: 11,
    title: "Dyeing",
    description:
      "The degummed silk is dyed in various colors using natural or synthetic dyes. Silk's protein structure readily accepts dyes, resulting in vibrant, long-lasting colors. The dyeing process requires careful temperature and pH control.",
    bgImage: "/api/placeholder/600/400",
    icon: FaCut,
  },
  {
    id: 12,
    title: "Spinning & Preparation",
    description:
      "Dyed silk yarn is prepared for weaving by winding it onto spools, warping beams, or bobbins depending on its intended use. The yarn is inspected for quality and organized according to color and weight specifications.",
    bgImage: "/api/placeholder/600/400",
    icon: FaSync,
  },
  {
    id: 13,
    title: "Weaving",
    description:
      "Silk yarn is woven into luxurious fabrics using various techniques on handlooms or power looms. Different weaving patterns create distinct silk fabrics like satin, chiffon, taffeta, and brocade, each with unique properties and uses.",
    bgImage: "/api/placeholder/600/400",
    icon: FaThLarge,
  },
];

export default function SilkTextile() {
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
          alt="silk production background"
          className="h-full w-full object-cover"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#1fa951]">
        Silk Fiber Creation Process
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
          About Silk Fabric
        </h2>
        <p className="mb-4 text-gray-700">
          Known as the "Queen of Textiles," silk has been prized for over 5,000
          years as one of the most luxurious natural fibers in the world. Silk
          production (sericulture) originated in ancient China and remains
          largely concentrated in Asia, with China, India, and Japan being the
          primary producers. The resulting fabric is celebrated for its
          exceptional luster, smooth texture, strength, and natural
          temperature-regulating properties. Silk fibers are naturally lustrous
          with a distinctive sheen and feel, and are completely biodegradable
          and renewable. The unique triangular protein structure of silk fibers
          reflects light at different angles, creating silk's characteristic
          shimmer. Silk is incredibly strong - a silk fiber is stronger than
          steel wire of the same thickness. It's also naturally hypoallergenic
          and has moisture-wicking properties, making it comfortable in both
          warm and cool climates. Traditional uses include clothing, bedding,
          and ceremonial textiles, while modern applications have expanded to
          include medical sutures, parachutes, bicycle tires, and
          high-performance textiles. The labor-intensive process of silk
          production has preserved ancient techniques for millennia, supporting
          traditional craftsmanship and rural economies across Asia. From
          elegant evening gowns to practical athletic wear, silk continues to be
          the gold standard for luxury textiles.
        </p>
        <div className="flex justify-center">
          <img
            src="/api/placeholder/800/400"
            alt="Silk fabric production"
            className="rounded-lg shadow-md w-full max-w-xl"
          />
        </div>
      </div>
    </div>
  );
}
