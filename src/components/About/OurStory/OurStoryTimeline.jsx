import React, { useState, useEffect } from "react";
import {
  FaYarn,
  FaPaintBrush,
  FaGlobe,
  FaCog,
  FaLeaf,
  FaChevronDown,
  FaMicrochip,
  FaHandsHelping,
  FaIndustry,
} from "react-icons/fa";

const timelineData = [
  {
    id: 1,
    date: "1985 – Humble Beginnings",
    description:
      "Founded as a small weaving unit, we began with a simple vision: to weave quality and trust into every thread.",
    icon: FaYarn, // Represents weaving/thread
  },
  {
    id: 2,
    date: "1992 – Expanding Our Threads",
    description:
      "We expanded into dyeing and finishing processes, introducing eco-friendly practices that set us apart early on.",
    icon: FaPaintBrush, // Represents dyeing and finishing
  },
  {
    id: 3,
    date: "2001 – Global Footprint",
    description:
      "Our first international export shipment marked a major milestone, establishing our presence in European and Middle Eastern markets.",
    icon: FaGlobe, // Represents global expansion
  },
  {
    id: 4,
    date: "2008 – Technology Meets Tradition",
    description:
      "We modernized our manufacturing units with cutting-edge textile machinery while preserving the artistry of traditional craftsmanship.",
    icon: FaCog, // Represents technology/innovation
  },
  {
    id: 5,
    date: "2015 – Sustainability First",
    description:
      "We launched our sustainable fabric line, using organic cotton and recycled fibers, reinforcing our commitment to the environment.",
    icon: FaLeaf, // Represents sustainability and eco-friendliness
  },
  {
    id: 6,
    date: "2020 – Smart Textiles & Innovation",
    description:
      "Ventured into smart textiles and performance fabrics, merging comfort with innovation for next-gen consumers.",
    icon: FaMicrochip, // Represents smart textiles/technology
  },
  {
    id: 7,
    date: "2024 – Community & Culture",
    description:
      "Initiated skill development programs to empower local artisans, reinforcing our dedication to social responsibility and cultural heritage.",
    icon: FaHandsHelping, // Represents community/social responsibility
  },
  {
    id: 8,
    date: "Today",
    description:
      "From local roots to global reach, we continue to evolve—blending heritage, innovation, and sustainability to shape the future of textiles.",
    icon: FaIndustry, // Represents modern industry and growth
  },
];

export default function OurStoryTimeline() {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".timeline-card");
      const newVisible = [];

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          newVisible.push(index);
        }
      });

      setVisibleItems(newVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-highlight py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-16 text-[#1FA951]">
        Our Journey
      </h1>
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-400 rounded-md z-0" />

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          const Icon = item.icon;
          const isVisible = visibleItems.includes(index);

          return (
            <div
              key={item.id}
              className={`timeline-card relative flex flex-col md:flex-row items-center justify-between my-16 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Spacer for line */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card Content */}
              <div
                className={`relative z-10 bg-white/90 backdrop-blur-lg rounded-full shadow-xl overflow-hidden w-full md:w-[45%] transition-all duration-700 ease-in-out transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : isLeft
                    ? "-translate-x-10 opacity-0"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <div className="p-8 px-18">
                  <h3 className="text-2xl font-semibold mb-2">{item.date}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>

              {/* Icon in center */}
              <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-14 h-14 flex items-center justify-center bg-green-500 text-white rounded-full border-4 border-white shadow-lg ring-2 ring-green-300">
                  <Icon size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="mt-12 text-center animate-bounce">
        <FaChevronDown size={28} className="text-green-500" />
      </div> */}
    </div>
  );
}
