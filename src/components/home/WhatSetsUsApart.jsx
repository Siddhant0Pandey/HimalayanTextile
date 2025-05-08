"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    image: "/assets/img/Fiber/raw4.png",
    description: "Sustainable materials sourced from the Himalayas",
    reason:
      "Unlike mass-produced goods, we use traceable, eco-friendly raw materials directly supporting local Himalayan communities.",
  },
  {
    image: "/arrow-step.svg",
    description: "Transformed by skilled artisans",
    isArrow: true,
    reason:
      "Each item is hand-finished, ensuring individuality and superior attention to detail that machines can't replicate.",
  },
  {
    image: "/assets/img/Fiber/raw8.png",
    description: "Durable, eco-conscious quality for modern living",
    reason:
      "Our products are built to last using minimal-impact processes, ensuring longevity without compromising sustainability.",
  },
  {
    description: "“Crafted with care. Inspired by the mountains.”",
    isQuote: true,
    reason:
      "This quote reflects our philosophy: every product carries a story rooted in nature, people, and purpose.",
  },
];

export default function WhatSetsUsApartHorizontal() {
  const containerRef = useRef(null);
  const panelRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const panelElements = panelRefs.current;
    const totalPanels = panelElements.length;
  
    const ctx = gsap.context(() => {
      // Horizontal scroll animation
      gsap.to(panelElements, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${window.innerWidth * (totalPanels - 1)}`,
          invalidateOnRefresh: true,
        },
      });
  
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
          },
        }
      );
  
      // Panel animations
      panelElements.forEach((panel) => {
        gsap.from(panel, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: panel,
            start: "left center",
            toggleActions: "play none none reset",
          },
        });
      });
    }, containerRef);
  
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ctx.revert(); // ensures GSAP context cleanup
    };
  }, []);
  

  return (
    <section
      ref={containerRef}
      className="h-screen overflow-hidden relative bg-white"
    >
      {/* Single Title */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 text-center text-darkText">
        <h1
          ref={titleRef}
          className="text-[clamp(2rem,5vw,7rem)] uppercase font-extrabold leading-[1] bg-opacity-90 px-4 py-2"
        >
          What Sets Us Apart
        </h1>
      </div>

      {/* Panels */}
      <div className="flex h-full w-[400vw] py-4">
        {panels.map((panel, index) => (
          <div
            key={index}
            className="panel w-screen h-full flex items-center justify-center flex-col p-10 text-center"
            ref={(el) => {
              if (el) panelRefs.current[index] = el;
            }}
          >
            {panel.isQuote ? (
              <blockquote className="text-3xl italic text-[#2c3e50] font-semibold max-w-md">
                {panel.description}
                {panel.reason && (
                  <p className="mt-4 text-base text-gray-700 italic">
                    {panel.reason}
                  </p>
                )}
              </blockquote>
            ) : (
              <>
                {!panel.isArrow && (
                  <img
                    src={panel.image}
                    alt="Panel visual"
                    className="w-48 h-48 object-cover rounded-xl shadow-lg mb-4"
                  />
                )}
                {panel.isArrow && (
                  <svg
                    viewBox="0 0 200 50"
                    className="w-60 h-10 mb-4"
                    fill="none"
                    stroke="#2c3e50"
                    strokeWidth="2"
                  >
                    <path d="M0 25 Q 100 0, 200 25" markerEnd="url(#arrowhead)" />
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="10"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#2c3e50" />
                      </marker>
                    </defs>
                  </svg>
                )}
                <p className="text-lg text-darkText max-w-md">
                  {panel.description}
                </p>
                {panel.reason && (
                  <p className="mt-4 text-base text-gray-700 italic max-w-md">
                    {panel.reason}
                  </p>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
