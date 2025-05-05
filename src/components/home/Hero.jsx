"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const imageOrder = [1, 2, 3, 4, 5];

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRefs = useRef([]);
  const boxRefs = useRef([]);
  const arrowRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=6000",
        scrub: 1,
        pin: true,
      },
    });

    // Animate title
    tl.to(textRef.current, {
      scale: 0.8,
      y: -80,
      duration: 1.5,
      ease: "power2.out",
    });

    imageOrder.forEach((_, i) => {
      // Animate image
      tl.fromTo(
        imageRefs.current[i],
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2 + i * 0.2,
          ease: "power3.out",
        }
      );

      // Animate box (only first 4)
      if (i < 4) {
        // Box with slight wobble
        tl.fromTo(
          boxRefs.current[i],
          { x: 300, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => {
              gsap.to(boxRefs.current[i], {
                y: -5,
                duration: 0.4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            },
          }
        );

        // Show arrow right after box
        if (arrowRefs.current[i]) {
          tl.to(arrowRefs.current[i], {
            opacity: 1,
            duration: 0.5,
            ease: "power1.out",
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] overflow-hidden bg-cover  bg-[url('/assets/img/clearsky.jpg')]"
    >
      {/* Title Text */}
      <div
        ref={textRef}
        className="absolute top-[50%] left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none "
      >
       <h1 className="text-[clamp(3rem,10vw,10rem)] uppercase font-extrabold  leading-[1] text-white">
  Himalayan <br /> <span>Textile</span>
</h1>
      </div>

      {/* Mountain Images */}
      <div className="absolute bottom-0 left-0 w-full h-full z-10">
        {imageOrder.map((num, i) => (
          <div
            key={num}
            className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: i + 1 }}
            ref={(el) => (imageRefs.current[i] = el)}
          >
            <img
              src={`/assets/img/parallax/${num}.png`}
              alt={`mountain ${num}`}
              className="w-full h-full object-cover filter contrast-100"
            />
          </div>
        ))}
      </div>

      {/* Horizontal Process Boxes (ABOVE images) */}
      <div className="absolute top-[60%] w-full z-50 flex justify-center space-x-[5vw] pointer-events-none">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="relative flex items-center">
              {/* Box */}
              <div
                className="w-[clamp(120px,15vw,240px)] h-[clamp(60px,8vw,96px)] bg-white/90 text-darkText shadow-xl flex items-center justify-center text-[clamp(1rem,2vw,1.25rem)] font-semibold rounded"
                ref={(el) => (boxRefs.current[i] = el)}
              >
                Box {i + 1}
              </div>

              {/* Arrow to next box */}
              {i < 3 && (
                <div
                  ref={(el) => (arrowRefs.current[i] = el)}
                  className="absolute left-full ml-4 opacity-0 transition-opacity duration-500"
                >
                  <svg
                    className="animate-pulse"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 12h16m0 0l-6-6m6 6l-6 6"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
      </div>
    </section>
  );
}
