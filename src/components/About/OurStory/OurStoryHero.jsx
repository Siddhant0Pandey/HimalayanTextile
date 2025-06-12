import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import bgImg from "/assets/img/HANDCARDING.jpg";

const OurStoryHero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgeRef = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)" },
        "-=0.5"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.7"
      )
      .fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.3)" },
        "-=0.6"
      )
      .fromTo(
        waveRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power1.out" },
        "-=0.4"
      );

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
      className="relative w-full h-[70vh] text-white flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-30"
      />

      {/* Slight Dark Overlay */}
      <div className="absolute bg-black top-0 left-0  opacity-50 z-40 w-[100%] h-[100%]"></div>

      {/* Wavy border bottom */}
      {/* <div
          ref={waveRef}
          className="absolute bottom-0 w-full overflow-hidden z-20"
        >
          <svg viewBox="0 0 1440 100" className="w-full">
            <path
              fill="white"
              d="M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z"
            ></path>
          </svg>
        </div> */}

      {/* Main content */}
      <div className="text-center px-4 z-50">
        <h1
          ref={textRef}
          className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
        >
          Our Story
        </h1>
        <p ref={subtitleRef} className="text-lg md:text-xl font-medium mb-6">
          Crafted by hands, cherished by hearts.
        </p>

        {/* Badge (optional) */}
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

export default OurStoryHero;
