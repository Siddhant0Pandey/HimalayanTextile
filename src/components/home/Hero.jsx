"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const imageOrder = [1, 2, 3, 4, 5];
const processSteps = [
  { title: "Raw Fibres", image: "/assets/img/icons/fibre.png" },
  { title: "Spinning", image: "/assets/img/icons/spinning.png" },
  { title: "Cottonised", image: "/assets/img/icons/yarn.png" },
  { title: "Yarns", image: "/assets/img/icons/weaving.png" },
];

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRefs = useRef([]);
  const boxRefs = useRef([]);
  const arrowRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
        if (i === 3) {
          // Animate image 4 and 5 together
          tl.addLabel("images4and5");

          [3, 4].forEach((j) => {
            tl.fromTo(
              imageRefs.current[j],
              { y: 200, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.4,
                ease: "power3.out",
              },
              "images4and5"
            );
          });

          // Animate box 4 (i === 3)
          tl.fromTo(
            boxRefs.current[3],
            { x: 300, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              onComplete: () => {
                gsap.to(boxRefs.current[3], {
                  y: -5,
                  duration: 0.4,
                  repeat: -1,
                  yoyo: true,
                  ease: "sine.inOut",
                });
              },
            },
            "images4and5+=0.5"
          );

          if (arrowRefs.current[3]) {
            tl.to(
              arrowRefs.current[3],
              {
                opacity: 1,
                duration: 0.5,
                ease: "power1.out",
              },
              "images4and5+=0.6"
            );
          }
        } else if (i < 3) {
          // Normal animation for image 1, 2, 3
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

          if (arrowRefs.current[i]) {
            tl.to(arrowRefs.current[i], {
              opacity: 1,
              duration: 0.5,
              ease: "power1.out",
            });
          }
        }
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] overflow-hidden bg-cover bg-[url('/assets/img/clearsky.jpg')]"
    >
      {/* Title Text */}
      <div
        ref={textRef}
        className="absolute top-[50%] left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
      >
        <h1 className="text-[clamp(3rem,10vw,10rem)] uppercase font-extrabold leading-[1] text-white">
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
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Horizontal Process Boxes */}
      <div className="absolute top-[65%] sm:top-[60%] w-full z-50 flex flex-wrap justify-center gap-y-4 sm:space-x-[5vw] px-4 pointer-events-none">
        {processSteps.map((step, i) => (
          <div
            key={i}
            className="relative flex items-center mb-4 sm:mb-0 sm:flex-row flex-col gap-2 sm:gap-0"
          >
            {/* Box */}
            <div
              className="w-[clamp(120px,15vw,240px)] bg-white/90 text-darkText shadow-xl flex flex-col items-center justify-center text-[clamp(0.9rem,1.5vw,1.1rem)] font-semibold rounded p-3"
              ref={(el) => (boxRefs.current[i] = el)}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-12 h-12 mb-2 object-contain"
              />
              <p className="text-center">{step.title}</p>
            </div>

            {/* Arrow (only on larger screens) */}
            {i < 3 && (
              <div
                ref={(el) => (arrowRefs.current[i] = el)}
                className="hidden sm:block absolute left-full ml-4 opacity-0 transition-opacity duration-500"
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
