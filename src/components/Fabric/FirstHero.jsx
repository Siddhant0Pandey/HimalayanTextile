import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FirstHero = () => {
  // Create refs for animated elements
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgeRef = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    // Create GSAP timeline for sequenced animations
    const tl = gsap.timeline();

    // Main hero section animation
    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      // Heading animation with slight delay
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)" },
        "-=0.5"
      )
      // Subtitle animation
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.7"
      )
      // Badge animation with bounce effect
      .fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.3)" },
        "-=0.6"
      )
      // Wave animation
      .fromTo(
        waveRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power1.out" },
        "-=0.4"
      );

    // Create hover animation for badge
    if (badgeRef.current) {
      badgeRef.current.addEventListener("mouseenter", () => {
        gsap.to(badgeRef.current, {
          scale: 1.1,
          duration: 0.3,
          ease: "power1.out",
        });
      });

      badgeRef.current.addEventListener("mouseleave", () => {
        gsap.to(badgeRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power1.in",
        });
      });
    }

    // Clean up event listeners on unmount
    return () => {
      if (badgeRef.current) {
        badgeRef.current.removeEventListener("mouseenter", () => {});
        badgeRef.current.removeEventListener("mouseleave", () => {});
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[70vh] bg-cover bg-center text-white flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#1FA951", // Fixed syntax error in original code
      }}
    >
      {/* Wavy border bottom */}
      <div ref={waveRef} className="absolute bottom-0 w-full overflow-hidden">
        <svg viewBox="0 0 1440 100" className="w-full">
          <path
            fill="white"
            d="M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      {/* Main content */}
      <div className="text-center px-4 z-10">
        <h1
          ref={textRef}
          className="text-5xl md:text-6xl font-semibold mb-4 drop-shadow-lg"
        >
          Fabric
        </h1>
        <p ref={subtitleRef} className="text-lg md:text-xl font-light mb-6">
          Made for Goodness. Made for Performance.
        </p>

        {/* Badge element */}
        {/* <div
          ref={badgeRef}
          className="bg-white text-green-600 text-sm font-bold py-2 px-4 rounded-full inline-block mt-4 cursor-pointer shadow-md"
        >
          Explore Our Collection
        </div> */}
      </div>
    </section>
  );
};

export default FirstHero;
