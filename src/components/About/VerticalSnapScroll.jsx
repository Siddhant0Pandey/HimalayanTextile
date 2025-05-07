import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Panel Components ---
const WelcomePanel = () => {
  return (
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
          is a heritage-inspired brand dedicated to preserving the timeless art
          of handwoven textiles from the Himalayas. Blending tradition with
          sustainability, we empower local artisans—especially women—to craft
          each piece with care, using natural fibers and eco-friendly processes.
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
};

const SustainablePanel = () => (
  <section className="panel w-screen h-screen flex items-center justify-center text-white p-8 bg-gradient-to-r from-green-500 via-emerald-500 to-green-700 text-center">
    <div className="max-w-2xl">
      <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-4 drop-shadow">
        Sustainable Materials
      </h1>
      <p className="text-md md:text-xl xl:text-2xl opacity-90">
        Our textiles are crafted using organic, locally-sourced, and
        eco-conscious materials that minimize environmental impact and promote
        regeneration.
      </p>
    </div>
  </section>
);

const EmpoweringPanel = () => (
  <section className="panel w-screen h-screen flex items-center justify-center text-white p-8 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 text-center">
    <div className="max-w-2xl">
      <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-4 drop-shadow">
        Empowering Artisans
      </h1>
      <p className="text-md md:text-xl xl:text-2xl opacity-90">
        We uplift Himalayan communities by ensuring fair wages, supporting
        women-led initiatives, and preserving ancient weaving traditions.
      </p>
    </div>
  </section>
);

// --- Main Component ---
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
          <SustainablePanel />
          <EmpoweringPanel />
        </div>
      </div>
    </div>
  );
}
