import React, { useState, useEffect } from "react";
import {
  FaLeaf,
  FaSun,
  FaWater,
  FaHammer,
  FaCloudSun,
  FaShower,
  FaTools,
  FaCut,
  FaSync,
  FaThLarge,
  FaExpand,
  FaTimes,
} from "react-icons/fa";

const timelineData = [
  {
    id: 1,
    title: "Peeling of Nettle Bark",
    description:
      "Carefully stripping the outer bark from nettle stalks to expose the valuable fibers beneath.",
    bgImage: "public/assets/img/nettle/1.png",
    icon: FaLeaf,
  },
  {
    id: 2,
    title: "Drying Bark",
    description:
      "Initial drying process to remove moisture and prepare the bark for further processing.",
    bgImage: "public/assets/img/nettle/2.1.png",
    icon: FaSun,
  },
  {
    id: 3,
    title: "Retting",
    description:
      "Controlled decomposition process that separates the fibrous material from the woody core.",
    bgImage: "public/assets/img/nettle/3.1.png",
    icon: FaWater,
  },
  {
    id: 4,
    title: "Washing",
    description:
      "Thorough cleaning to remove impurities and residues from the retting process.",
    bgImage: "public/assets/img/nettle/4.1.png",
    icon: FaWater,
  },
  {
    id: 5,
    title: "Beating with Wooden Club",
    description:
      "First mechanical softening of the fibers to break down their rigid structure.",
    bgImage: "public/assets/img/nettle/5.1.png",
    icon: FaHammer,
  },
  {
    id: 6,
    title: "Drying in the Sun",
    description:
      "Broken fibers are dried in direct sunlight for a full day to prepare for further processing.",
    bgImage: "public/assets/img/nettle/6.1.png",
    icon: FaCloudSun,
  },
  {
    id: 7,
    title: "Second Washing",
    description:
      "Additional washing to further remove impurities and prepare for final softening.",
    bgImage: "public/assets/img/nettle/7.1.png",
    icon: FaShower,
  },
  {
    id: 8,
    title: "Second Beating",
    description:
      "Additional beating with wooden clubs to achieve optimal fiber softness and flexibility.",
    bgImage: "public/assets/img/nettle/8.png",
    icon: FaTools,
  },
  {
    id: 9,
    title: "Hackling",
    description:
      "Combing the fibers to align them and remove any remaining short fibers or debris.",
    bgImage: "public/assets/img/nettle/9.png",
    icon: FaCut,
  },
  {
    id: 10,
    title: "Spinning",
    description:
      "Transforming the prepared fibers into strong, consistent yarn ready for weaving.",
    bgImage: "public/assets/img/nettle/10.jpg",
    icon: FaSync,
  },
  {
    id: 11,
    title: "Weaving Nettle Fabric",
    description:
      "Traditional methods combined with careful attention to detail create durable, sustainable nettle fabric.",
    bgImage: "public/assets/img/nettle/11.jpg",
    icon: FaThLarge,
  },
];

export default function Nettle() {
  const [activeItems, setActiveItems] = useState([]);
  const [fullscreenImage, setFullscreenImage] = useState(null);

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

  const openFullscreen = (item) => setFullscreenImage(item);
  const closeFullscreen = () => setFullscreenImage(null);

  return (
    <div className="overflow-x-hidden">
      <div className="relative flex flex-col items-center px-4 pt-20">
        <div className="absolute top-0 left-0 h-full w-full -z-10 blur-sm overflow-hidden">
          <img
            src="assets/img/hero-section1.jpg"
            alt="nettle background"
            className="h-full w-full object-cover"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#00fe5d]">
          Nettle Fabric Creation Process
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
                      <div
                        className="h-48 sm:h-64 overflow-hidden relative group cursor-pointer"
                        onClick={() => openFullscreen(item)}
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                          style={{ backgroundImage: `url(${item.bgImage})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 bg-black/60 text-white px-2 py-1 rounded-full text-sm">
                          Step {index + 1}
                        </div>
                        <div className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <FaExpand size={14} />
                        </div>
                      </div>
                      <div className="p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black">
                          {item.title}
                        </h3>
                        <p className="text-black">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
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
            About Nettle Fabric
          </h2>
          <p className="mb-4 text-gray-700">
            Nettle fabric has been traditionally made for centuries,
            particularly in Himalayan regions. This sustainable textile is known
            for its durability, natural antibacterial properties, and
            breathability. The process shown above illustrates the
            labor-intensive traditional methods that transform the wild nettle
            plant into functional, beautiful fabric.
          </p>
          <div className="flex justify-center">
            <img
              // src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop"
              // alt="Nettle fabric production"
              // className="rounded-lg shadow-md w-full max-w-xl cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() =>
                openFullscreen({
                  title: "Nettle Fabric Production",
                  bgImage:
                    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
                  description:
                    "Traditional nettle fabric weaving process showcasing the final product.",
                })
              }
            />
          </div>
        </div>

        {/* Fullscreen Modal */}
        {fullscreenImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-full max-h-full">
              <button
                onClick={closeFullscreen}
                className="absolute top-4 right-4 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors duration-200 z-10"
              >
                <FaTimes size={20} />
              </button>

              <div className="relative">
                <img
                  src={fullscreenImage.bgImage}
                  alt={fullscreenImage.title}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                    {fullscreenImage.title}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base">
                    {fullscreenImage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
