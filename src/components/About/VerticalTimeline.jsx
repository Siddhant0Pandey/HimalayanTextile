import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";

const timelineData = [
  {
    id: 1,
    title: "Project Inception",
    date: "January 2025",
    description:
      "Initial ideation and project planning. Gathered requirements and assembled the core team.",
    bgImage: "https://via.placeholder.com/800x500",
    icon: FaCalendarAlt,
  },
  {
    id: 2,
    title: "Design Phase",
    date: "February 2025",
    description:
      "Created wireframes, mockups, and finalized the visual design. Conducted user testing on initial prototypes.",
    bgImage: "https://via.placeholder.com/800x500",
    icon: FaMapMarkerAlt,
  },
  {
    id: 3,
    title: "Development Sprint",
    date: "March 2025",
    description:
      "Core functionality implemented. Backend systems set up and initial frontend components created.",
    bgImage: "https://via.placeholder.com/800x500",
    icon: FaCode,
  },
  {
    id: 4,
    title: "Testing & Refinement",
    date: "April 2025",
    description:
      "Extensive QA testing, bug fixing, and performance optimization. Prepared documentation for release.",
    bgImage: "https://via.placeholder.com/800x500",
    icon: FaCheckCircle,
  },
  {
    id: 5,
    title: "Launch Day",
    date: "May 2025",
    description:
      "Official product launch with marketing campaign. Monitoring systems and support team in place.",
    bgImage: "https://via.placeholder.com/800x500",
    icon: FaRocket,
  },
];

export default function VerticalTimeline() {
  const [activeItems, setActiveItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".timeline-card");
      let newActiveItems = [];

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.75;

        if (inView) {
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
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-12 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Project Timeline</h1>

      <div className="flex justify-center w-full max-w-6xl">
        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500 z-0"></div>

          <div className="relative">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`timeline-card mb-20 flex ${
                    isLeft ? "flex-row" : "flex-row-reverse"
                  } items-center justify-between`}
                >
                  {/* Connector line */}
                  <div
                    className={`w-1/2 flex justify-${
                      isLeft ? "end" : "start"
                    } pr-4 pl-4`}
                  >
                    <div
                      className={`w-1 h-1 ${
                        activeItems.includes(index)
                          ? "bg-green-500 h-full"
                          : "h-0"
                      } transition-all duration-700`}
                    ></div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-5/12 transition-all duration-700 ease-in-out transform ${
                      activeItems.includes(index)
                        ? "translate-y-0 opacity-100"
                        : isLeft
                        ? "-translate-x-10 opacity-0"
                        : "translate-x-10 opacity-0"
                    }`}
                  >
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="h-48 overflow-hidden relative">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${item.bgImage})` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                          <p className="text-lg font-semibold">{item.date}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Icon in the center */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-green-500 shadow-lg transition-all duration-500 ${
                        activeItems.includes(index) ? "scale-100" : "scale-0"
                      }`}
                    >
                      {Icon && <Icon className="text-white" size={18} />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-6 animate-bounce">
        <FaChevronDown size={32} className="text-green-500" />
      </div>
    </div>
  );
}
