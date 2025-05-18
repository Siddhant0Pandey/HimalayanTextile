import { useState, useEffect } from "react";

export default function CollectionsSection() {
  const [collectionsVisible, setCollectionsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const collections = [
    {
      title: "Hemp Fabric",
      desc: "Luxurious warmth with traditional patterns",
    },
    { title: "Cotton Fabric", desc: "Intricate designs with stories woven in" },
    {
      title: "Flax Fabric",
      desc: "Modern interpretations of classic techniques",
    },
    {
      title: "Jute Fabric",
      desc: "Modern interpretations of classic techniques",
    },
    {
      title: "Bamboo Fabric",
      desc: "Modern interpretations of classic techniques",
    },
    {
      title: "Silk Fabric",
      desc: "Modern interpretations of classic techniques",
    },
  ];

  useEffect(() => {
    const collectionsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCollectionsVisible(true);
          collectionsObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const collectionsElement = document.getElementById("collections-section");
    if (collectionsElement) collectionsObserver.observe(collectionsElement);

    return () => {
      if (collectionsElement) collectionsObserver.unobserve(collectionsElement);
    };
  }, []);

  return (
    <section id="collections-section" className="py-16 md:py-24 bg-[#F0F7F4]">
      <div className="container mx-auto px-6">
        <h3
          className="text-3xl font-bold mb-12 text-center text-[#1fa951] transition-all duration-700 ease-out"
          style={{
            opacity: collectionsVisible ? 1 : 0,
            transform: collectionsVisible
              ? "translateY(0)"
              : "translateY(-20px)",
          }}
        >
          Featured Collections
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item, idx) => (
            <div
              key={idx}
              className="group cursor-pointer"
              style={{
                opacity: collectionsVisible ? 1 : 0,
                transform: collectionsVisible
                  ? "translateY(0)"
                  : "translateY(40px)",
                transition: "opacity 700ms ease-out, transform 700ms ease-out",
                transitionDelay: `${300 + idx * 150}ms`,
              }}
              onMouseEnter={() => setHoveredItem(idx)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src="public/assets/img/yarn/paswool.jpg"
                  alt={item.title}
                  className="w-full h-auto transition-transform duration-700 ease-out"
                  style={{
                    transform: hoveredItem === idx ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </div>
              <h4
                className="text-xl font-semibold text-[#1fa951] transition-all duration-300 ease-out"
                style={{
                  transform:
                    hoveredItem === idx ? "translateX(5px)" : "translateX(0)",
                }}
              >
                {item.title}
              </h4>
              <p
                className="text-[#1d1f10] mt-2 transition-all duration-300 ease-out"
                style={{
                  transform:
                    hoveredItem === idx ? "translateX(5px)" : "translateX(0)",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
