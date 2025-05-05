import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GoodnessSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRefs = useRef([]);
  const textRef = useRef(null);
  const overlayRefs = useRef([]);
  const buttonRef = useRef(null);
  const hoverTimelines = useRef([]);
  const textOverlayRefs = useRef([]); // New ref for text overlays

  useEffect(() => {
    // Clear refs
    imageRefs.current = [];
    overlayRefs.current = [];
    textOverlayRefs.current = [];
    hoverTimelines.current = [];

    // Animate section background
    gsap.fromTo(
      sectionRef.current,
      { backgroundColor: "rgba(245,245,245,0)" },
      {
        backgroundColor: "rgba(245,245,245,0.8)",
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Description animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Image animations
    imageRefs.current.forEach((img, i) => {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0.8, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (overlayRefs.current[i]) {
        gsap.fromTo(
          overlayRefs.current[i],
          { width: "100%" },
          {
            width: "0%",
            duration: 1,
            delay: 0.3 + i * 0.2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate text overlays
      if (textOverlayRefs.current[i]) {
        gsap.fromTo(
          textOverlayRefs.current[i],
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: 0.8 + i * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Hover animations
      const caption = img.querySelector(".image-caption");
      const hoverTl = gsap.timeline({ paused: true });

      hoverTl.to(img, {
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        duration: 0.4,
        ease: "power2.out",
      });

      if (caption) {
        hoverTl.to(
          caption,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2"
        );
      }

      const onEnter = () => hoverTl.play();
      const onLeave = () => hoverTl.reverse();

      img.addEventListener("mouseenter", onEnter);
      img.addEventListener("mouseleave", onLeave);

      // Store for cleanup
      hoverTimelines.current.push({ img, onEnter, onLeave });
    });

    // Button animation
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      hoverTimelines.current.forEach(({ img, onEnter, onLeave }) => {
        img.removeEventListener("mouseenter", onEnter);
        img.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  const addToImageRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) imageRefs.current.push(el);
  };

  const addToOverlayRefs = (el) => {
    if (el && !overlayRefs.current.includes(el)) overlayRefs.current.push(el);
  };

  const addToTextOverlayRefs = (el) => {
    if (el && !textOverlayRefs.current.includes(el))
      textOverlayRefs.current.push(el);
  };

  const images = [
    {
      name: "fire.jpg",
      title: "Fire-Resistant",
      description: "Engineered for safety and durability",
      overlayText: "PREVENT BURNING",
    },
    {
      name: "bio.jpeg",
      title: "Biodegradable",
      description: "Environmentally conscious materials",
      overlayText: "BIODEGRADABLE",
    },
    {
      name: "water.jpg",
      title: "Water-Repellent",
      description: "Advanced protection technology",
      overlayText: "SAVE WATER",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500"></div>

      <div className="max-w-6xl mx-auto">
        <h1
          ref={headingRef}
          className="text-center py-10 text-4xl md:text-5xl font-semibold text-green-800"
        >
          Goodness is woven into every fiber we produce.
        </h1>

        <p
          ref={textRef}
          className="text-center max-w-3xl mx-auto text-lg text-gray-600 mb-12"
        >
          Our commitment to sustainability and performance drives every aspect
          of our fiber technology. From raw materials to finished products, we
          ensure ethical and eco-friendly practices.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 p-4 md:p-10">
          {images.map((img, index) => (
            <div
              key={index}
              ref={addToImageRefs}
              className="relative h-60 w-60 md:h-72 md:w-72 rounded-lg overflow-hidden cursor-pointer shadow-lg transition-all duration-300"
            >
              {/* Reveal overlay */}
              <div
                ref={addToOverlayRefs}
                className="absolute top-0 right-0 h-full bg-green-600 z-20"
              ></div>

              {/* Image with blur effect */}
              <div className="relative h-full w-full">
                <img
                  src={`/assets/img/Fiber/${img.name}`}
                  alt={img.name}
                  className="h-full w-full object-cover blur-[1px]" // Added blur-sm class
                />

                {/* Text overlay with featured phrase */}
                <div
                  ref={addToTextOverlayRefs}
                  className="absolute inset-0 flex items-center justify-center z-10"
                >
                  <h2 className="text-white font-bold text-3xl tracking-wider drop-shadow-lg text-center px-4">
                    {img.overlayText}
                  </h2>
                </div>
              </div>

              {/* Caption overlay on hover */}
              <div className="image-caption absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transform translate-y-4 z-10">
                <h3 className="text-white font-bold text-xl">{img.title}</h3>
                <p className="text-white/90 text-sm">{img.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            ref={buttonRef}
            className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors duration-300 shadow-md"
          >
            Discover Our Process
          </button>
        </div>
      </div>
    </section>
  );
};
export default GoodnessSection;
