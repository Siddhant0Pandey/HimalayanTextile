import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GiArcheryTarget } from "react-icons/gi";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Welcome Panel ---
const WelcomePanel = () => (
  <section className="panel w-screen h-screen flex flex-col lg:flex-row items-center justify-center text-black p-6 md:p-12 gap-8 bg-white">
    {/* Mobile Image */}
    <div className="w-full lg:hidden block">
      <div className="w-full rounded-lg overflow-hidden shadow-lg animate-float">
        <img
          src="/assets/img/materials.jpg"
          alt="Materials"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>

    {/* Text & Button */}
    <div className="text w-full lg:w-1/2 space-y-6">
      <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight">
        Himalayan <span className="text-[#1FA951]">Textile</span>
      </h1>
      <p className="text-base my-10 md:text-lg xl:text-xl leading-relaxed max-w-3xl">
        <span className="text-[#1FA951] font-semibold">Himalayan Textile</span>{" "}
        is a heritage-inspired brand dedicated to preserving the timeless art of
        handwoven textiles from the Himalayas. Blending tradition with
        sustainability, we empower local artisans—especially women—to craft each
        piece with care, using natural fibers and eco-friendly processes.
      </p>
      <button className="bg-[#1FA951] text-white py-3 my-4 px-6 md:py-4 md:px-8 text-sm md:text-base xl:text-lg font-medium rounded-full shadow-md hover:bg-[#168c3c] animate-float">
        Read More →
      </button>
    </div>

    {/* Desktop Images */}
    <div className="hidden lg:block w-1/2 relative h-[400px] xl:h-[500px]">
      <div className="wrap w-full h-full relative">
        <div className="absolute top-0 left-0 w-[55%] rounded-lg overflow-hidden shadow-lg animate-float">
          <img
            src="/assets/img/materials.jpg"
            alt="Materials"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-[55%] rounded-lg overflow-hidden shadow-lg animate-float">
          <img
            src="/assets/img/img2.jpg"
            alt="Artisans"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

// --- Our Mission Panel ---
const OurMissionPanel = () => {
  const paraRefs = useRef([]);

  useEffect(() => {
    paraRefs.current.forEach((el, index) => {
      if (!el) return;

      const directions = [
        { x: -100, y: 0 }, // para1 from left
        { x: 0, y: 100 }, // para2 from bottom
        { x: 100, y: 0 }, // para3 from right
      ];

      const { x, y } = directions[index];

      // Create individual timelines for each paragraph
      gsap.fromTo(
        el,
        { x, y, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reset", // replays on scroll-in
            once: false, // always triggers
            markers: false, // set to true for debugging
          },
        }
      );
    });
  }, []);

  return (
    <section className="panel w-screen h-screen flex justify-center items-center text-[#333] p-6 md:p-12 bg-[#f5f5f0]">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1FA951]">
            Our Mission
          </h2>
          <div
            ref={(el) => (paraRefs.current[0] = el)}
            className="bg-white shadow-md  p-6"
          >
            <p>
              At the heart of our textile innovations lies a deep commitment to
              sustainability. We focus on ethical sourcing and eco-friendly
              manufacturing.
            </p>
          </div>
        </div>

        {/* Center Column: Icon and Para2 */}
        <div className="flex flex-col items-center space-y-6">
          <div className="w-48 h-48 flex justify-center items-center bg-white rounded-full shadow-lg">
            <GiArcheryTarget className="text-[#1FA951] w-36 h-36 animate-pulse" />
          </div>
          <div
            ref={(el) => (paraRefs.current[1] = el)}
            className="bg-white shadow-md  p-6 w-full md:w-72"
          >
            <p>
              Every fabric we produce tells a story of responsibility—from using
              organic materials to reducing water usage across production.
            </p>
          </div>
        </div>

        {/* Right Column: Para3 */}
        <div className="space-y-6 flex flex-col justify-center">
          <div
            ref={(el) => (paraRefs.current[2] = el)}
            className="bg-white shadow-md  p-6"
          >
            <p>
              Our mission is to weave a better future—combining quality,
              innovation, and care for the planet in every thread.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const OurVisionPanel = () => {
  const boxesRef = useRef([]);
  const eyeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxesRef.current,
      { opacity: 0, y: 50, rotate: -10 },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      eyeRef.current,
      { scale: 0, rotate: 90 },
      {
        scale: 1,
        rotate: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.75)",
        delay: 0.6,
      }
    );
  }, []);

  const visionItems = [
    {
      title: "Eco-Friendly Materials",
      description: "We source textiles that are biodegradable and recyclable.",
    },
    {
      title: "Sustainable Production",
      description: "Our production process reduces water and energy waste.",
    },
    {
      title: "Ethical Practices",
      description: "We ensure fair labor practices in all manufacturing units.",
    },
  ];

  return (
    <section className="panel w-screen h-screen flex justify-center items-center text-[#333] p-6 md:p-12 bg-highlight">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1FA951]">
            Our Vision
          </h2>
          <div
            ref={(el) => (boxesRef.current[0] = el)}
            className="bg-white shadow-md p-6 rounded-2xl"
          >
            <h2 className="text-xl font-semibold mb-2">
              {visionItems[0].title}
            </h2>
            <p>{visionItems[0].description}</p>
          </div>
        </div>

        {/* Center Column: Icon and Para2 */}
        <div className="flex flex-col items-center space-y-6">
          <div
            ref={eyeRef}
            className="w-60 h-60 flex justify-center items-center bg-white rounded-full shadow-lg"
          >
            <svg width="160" height="160" viewBox="0 0 100 100">
              <ellipse cx="50" cy="50" rx="40" ry="25" fill="#a7f3d0" />
              <circle cx="50" cy="50" r="10" fill="#065f46" />
            </svg>
          </div>
          <div
            ref={(el) => (boxesRef.current[1] = el)}
            className="bg-white shadow-md p-6 w-full md:w-72 rounded-2xl"
          >
            <h2 className="text-xl font-semibold mb-2">
              {visionItems[1].title}
            </h2>
            <p>{visionItems[1].description}</p>
          </div>
        </div>

        {/* Right Column: Para3 */}
        <div className="space-y-6 flex flex-col justify-center">
          <div
            ref={(el) => (boxesRef.current[2] = el)}
            className="bg-white shadow-md p-6 rounded-2xl"
          >
            <h2 className="text-xl font-semibold mb-2">
              {visionItems[2].title}
            </h2>
            <p>{visionItems[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default OurVisionPanel;

// --- Main Horizontal Snap Component ---
export default function HorizontalSnapPanels() {
  const containerRef = useRef(null);
  const scrollSectionRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");

    const ctx = gsap.context(() => {
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: scrollSectionRef.current,
          start: "top top",
          end: () => `+=${scrollSectionRef.current.offsetWidth}`,
          scrub: 1.2,
          pin: containerRef.current,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.4, max: 1 },
            ease: "power1.inOut",
          },
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scrollSectionRef} className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        <div className="flex h-full w-[300vw]">
          <WelcomePanel />
          <OurMissionPanel />
          <OurVisionPanel />
        </div>
      </div>
    </div>
  );
}
