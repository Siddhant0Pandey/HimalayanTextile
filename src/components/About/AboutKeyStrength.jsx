import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const cardData = [
  {
    title: "Quality Fabrics",
    description: "Top-grade textiles with durability and comfort.",
    icon: "🧵",
  },
  {
    title: "Innovative Designs",
    description: "Trendy and modern patterns tailored to client needs.",
    icon: "🎨",
  },
  {
    title: "Global Reach",
    description: "Supplying clients across continents with ease.",
    icon: "🌍",
  },
  {
    title: "Sustainable Production",
    description: "Eco-conscious processes and ethical sourcing.",
    icon: "♻️",
  },
  {
    title: "Reliable Delivery",
    description: "On-time delivery and professional handling.",
    icon: "🚚",
  },
];

const AboutKeyStrength = () => {
  const containerRef = useRef(null);
  const autoScrollTween = useRef(null);
  const isDragging = useRef(false);

  // Wobble animation
  useEffect(() => {
    gsap.utils.toArray(".card").forEach((card, i) => {
      gsap.to(card, {
        y: i % 2 === 0 ? -10 : 10,
        duration: 1.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.2,
      });
    });
  }, []);

  // Auto scroll
  useEffect(() => {
    const el = containerRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;

    autoScrollTween.current = gsap.to(el, {
      scrollLeft: maxScroll,
      duration: 6, // faster scroll
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      autoScrollTween.current?.kill();
    };
  }, []);

  // Drag to scroll
  useEffect(() => {
    const el = containerRef.current;
    let startX = 0;
    let scrollLeft = 0;

    const startDrag = (e) => {
      isDragging.current = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      autoScrollTween.current?.pause();
      el.style.cursor = "grabbing";
    };

    const stopDrag = () => {
      isDragging.current = false;
      autoScrollTween.current?.resume();
      el.style.cursor = "grab";
    };

    const onDrag = (e) => {
      if (!isDragging.current) return;
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", startDrag);
    el.addEventListener("mouseleave", stopDrag);
    el.addEventListener("mouseup", stopDrag);
    el.addEventListener("mousemove", onDrag);

    return () => {
      el.removeEventListener("mousedown", startDrag);
      el.removeEventListener("mouseleave", stopDrag);
      el.removeEventListener("mouseup", stopDrag);
      el.removeEventListener("mousemove", onDrag);
    };
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <h2 className="text-center text-3xl font-bold mb-8 text-[#1FA951]">
        Our Key Strengths
      </h2>
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto px-6 scroll-container no-scrollbar"
        style={{ cursor: "grab", userSelect: "none" }}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`card bg-white shadow-xl rounded-2xl p-6 w-72 flex-shrink-0 ${
              index % 2 === 0 ? "mt-0" : "mt-10"
            }`}
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#1FA951]">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutKeyStrength;
