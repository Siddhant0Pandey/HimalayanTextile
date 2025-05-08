import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MissionSection() {
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const para3Ref = useRef(null);

  useEffect(() => {
    const animateFromLeft = (el, delay = 0) => {
      gsap.fromTo(
        el,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    };

    animateFromLeft(para1Ref.current);
    animateFromLeft(para2Ref.current, 0.3);
    animateFromLeft(para3Ref.current, 0.6);
  }, []);

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 py-12 bg-[#f5f5f0] text-[#333] font-sans">
      <div className="relative w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start space-y-6">
          <h2 className="text-3xl font-bold text-orange-600">Our Mission</h2>
          <div
            ref={para1Ref}
            className="bg-white shadow-md rounded-2xl p-4 w-full"
          >
            <p>
              At the heart of our textile innovations lies a deep commitment to
              sustainability. We focus on ethical sourcing and eco-friendly
              manufacturing.
            </p>
          </div>
        </div>

        {/* Center Icon */}
        <div className="flex justify-center items-center">
          <div className="w-40 h-40 border-[6px] border-dashed border-orange-500 rounded-full animate-spin-slow"></div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-end space-y-6">
          <div
            ref={para2Ref}
            className="bg-white shadow-md rounded-2xl p-4 w-full md:max-w-xs"
          >
            <p>
              Every fabric we produce tells a story of responsibility—from using
              organic materials to reducing water usage across production.
            </p>
          </div>
          <div
            ref={para3Ref}
            className="bg-white shadow-md rounded-2xl p-4 w-full md:max-w-xs"
          >
            <p>
              Our mission is to weave a better future—combining quality,
              innovation, and care for the planet in every thread.
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
