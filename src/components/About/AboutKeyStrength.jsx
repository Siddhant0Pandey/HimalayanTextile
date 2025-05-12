import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { FaStar } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaRecycle } from "react-icons/fa6";
import { GrDeliver } from "react-icons/gr";

const cardData = [
  {
    title: "Quality Fabrics",
    description: "Top-grade textiles with durability and comfort.",
    icon: <FaStar />,
  },
  {
    title: "Innovative Designs",
    description: "Trendy and modern patterns tailored to client needs.",
    icon: <IoIosColorPalette />,
  },
  {
    title: "Global Reach",
    description: "Supplying clients across continents with ease.",
    icon: <FaEarthAmericas />,
  },
  {
    title: "Sustainable Production",
    description: "Eco-conscious processes and ethical sourcing.",
    icon: <FaRecycle />,
  },
  {
    title: "Reliable Delivery",
    description: "On-time delivery and professional handling.",
    icon: <GrDeliver />,
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

  // Auto scroll (desktop only)
  useEffect(() => {
    const el = containerRef.current;
    if (window.innerWidth < 768) return; // Only on md and up

    const maxScroll = el.scrollWidth - el.clientWidth;

    autoScrollTween.current = gsap.to(el, {
      scrollLeft: maxScroll,
      duration: 6,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      autoScrollTween.current?.kill();
    };
  }, []);

  // Drag to scroll (desktop only)
  useEffect(() => {
    const el = containerRef.current;
    if (window.innerWidth < 768) return;

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
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8 text-[#1FA951]">
        Our Key Strengths
      </h2>
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row gap-6 md:gap-6 px-4 md:px-6 overflow-x-hidden md:overflow-x-auto scroll-container no-scrollbar"
        style={{
          cursor: "grab",
          userSelect: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`card bg-white shadow-xl rounded-2xl p-6 w-full md:w-72 flex-shrink-0 ${
              index % 2 === 0 ? "md:mt-0" : "md:mt-10"
            }`}
          >
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-[#1FA951]">
              {card.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-600">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutKeyStrength;
