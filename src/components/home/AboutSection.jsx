/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const paragraphText =
  "Himalayan Textile and Industries Ltd., promoted by Baburam Dangi, has evolved into a one-stop shop for all types of yarn and premium ranges of exclusives. We craft innovative textiles for home fabrics and Green Fibre — serving marquee clients across Nepal and 15+ global markets.";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const linesRef = useRef([]);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const lineArray = paragraphText
      .split('. ')
      .map((line) => line.trim())
      .filter(Boolean);
    setLines(lineArray);
  }, []);

  useEffect(() => {
    if (lines.length === 0) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 80, skewY: 5, opacity: 0 },
        {
          y: 0,
          skewY: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      // Line-by-line paragraph animation
      linesRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 95%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });

      // Button animation
      gsap.fromTo(
        buttonRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'bounce.out',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 90%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      // Image "stand-up" animation
     // Image "stand-up toward you" animation
gsap.fromTo(
  imageRef.current,
  {
    rotateX: 90,
    transformOrigin: 'bottom center',
    opacity: 0,
  },
  {
    rotateX: 0,
    opacity: 1,
    duration: 1.5,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 85%',
      toggleActions: 'play reverse play reverse',
    },
  }
);

    }, sectionRef);

    return () => ctx.revert();
  }, [lines]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-gradient-to-br from-[#e6fff4] to-[#f0fff9] overflow-hidden"
    >
      {/* Animated Image with Perspective */}
      <div className="absolute bottom-0 left-0 z-1 perspective">
        <img
          ref={imageRef}
          src="assets/img/animate/abt-svg1.svg"
          alt="about image"
          className="transform-style-preserve"
        />
      </div>

      <h2
        ref={titleRef}
        className="text-6xl md:text-7xl font-extrabold mb-6 text-[#1fa951] opacity-0"
      >
        ABOUT US
      </h2>

      <div className="max-w-3xl text-lg md:text-xl mb-6 leading-relaxed text-[#154d30] space-y-4 z-2">
        {lines.map((line, i) => (
          <p
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
            className="opacity-0 translate-y-4"
          >
            {line}.
          </p>
        ))}
      </div>

      <button
        ref={buttonRef}
        className="px-8 py-3 text-lg border-2 border-[#1fa951] text-[#1fa951] hover:bg-[#1fa951] hover:text-white transition duration-300 shadow-md opacity-0 scale-50 z-2"
      >
        Read More
      </button>

      {/* Decorative Circles */}
      <div className="absolute bottom-0 w-full flex justify-between items-end px-10 pointer-events-none">
        <div className="h-32 w-32 rounded-full opacity-10 border-2 border-[#1fa951]" />
        <div className="h-32 w-32 rounded-full opacity-10 border-2 border-[#1fa951]" />
      </div>
    </section>
  );
};

export default AboutSection;
