import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NavBarSection = () => {
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
      const badgeEl = badgeRef.current;

      const handleMouseEnter = () =>
        gsap.to(badgeEl, { scale: 1.1, duration: 0.3, ease: "power1.out" });
      const handleMouseLeave = () =>
        gsap.to(badgeEl, { scale: 1, duration: 0.3, ease: "power1.in" });

      badgeEl.addEventListener("mouseenter", handleMouseEnter);
      badgeEl.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        badgeEl.removeEventListener("mouseenter", handleMouseEnter);
        badgeEl.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[70vh] bg-cover bg-center text-white flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('assets/img/yarn/hero_yarn.jpg')", // ✅ Corrected syntax
      }}
    >
      <div className="absolute bg-black top-0 left-0 opacity-50 z-40 w-full h-full"></div>

      <div className="text-center px-4 z-50">
        <h1
          ref={textRef}
          className="text-5xl md:text-6xl font-semibold mb-4 drop-shadow-lg"
        >
          Yarn
        </h1>
        <p ref={subtitleRef} className="text-lg md:text-xl font-light mb-6">
          Made for Goodness. Made for Performance.
        </p>

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

export default NavBarSection; // ✅ Fixed export statement
