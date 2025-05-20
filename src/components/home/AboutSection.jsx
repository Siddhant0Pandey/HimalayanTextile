import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Handshake, Leaf } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const aboutRef = useRef(null);
  const waveRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );

    gsap.fromTo(
      iconsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: iconsRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Animate Wavy Background
    gsap.to(waveRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      duration: 2,
    });
  }, []);

  return (
    <section className="relative bg-[#edf2f1] overflow-hidden min-h-screen flex flex-col justify-center pt-16 px-4 md:px-20">
      <div className="text-center max-w-3xl mx-auto" ref={aboutRef}>
        <h2 className="text-4xl font-bold text-green-900 mb-6">About Us</h2>
        <p className="text-lg text-green-900 leading-relaxed">
          Himalayan Textile and Industries Ltd., promoted by Baburam Dangi, has evolved into a one-stop shop
          for all types of yarn and premium ranges of exclusives.<br />
          We craft innovative textiles for home fabrics and Green Fibre — serving marquee clients across Nepal
          and 15+ global markets..
        </p>
        <a
          href="/about"
          className="inline-block mt-8 bg-green-200 text-green-900 font-semibold py-3 px-8 rounded-full shadow hover:bg-green-300 transition duration-300"
        >
          Our Story
        </a>
      </div>

      <div
        ref={iconsRef}
        className="relative z-10 mt-20 flex justify-around items-center text-green-900 text-sm md:text-base"
      >
        <div className="flex flex-col items-center">
          <Leaf className="mb-2" />
          Eco Fiber
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/mnt/data/2c376160-81b3-4109-82a4-c618efc1676f.png"
            alt="Natural Dyeing"
            className="w-6 h-6 mb-2"
          />
          Natural Dyeing
        </div>
        <div className="flex flex-col items-center">
          <Handshake className="mb-2" />
          Ethical Collaboration
        </div>
      </div>

      <div ref={waveRef} className="absolute bottom-0 left-0 w-screen z-0">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-40 text-green-200 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
