/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import bgImg from "/assets/img/brand-hero.jpg";

const OurBrandHero = () => {
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
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute bg-black top-0 left-0  opacity-50 z-40 w-[100%] h-[100%]"></div>

      {/* Main content */}
      <div className="text-center px-4 z-50">
        <h1
          ref={textRef}
          className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
        >
          Our Brand
        </h1>
        <p ref={subtitleRef} className="text-lg md:text-xl font-medium mb-6">
          "From Fiber to Fashion — Quality You Can Feel."
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

export default OurBrandHero;
