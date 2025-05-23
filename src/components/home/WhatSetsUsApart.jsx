"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    image: "/assets/img/extra/nettle-leaf.jpg",
    description: "100% Himalayan Nettle Fiber",
    reason:
      "Harvested from wild Himalayan nettle, our fiber is organic, traceable, and supports local communities."
  },
  {
    image: "/arrow-step.svg",
    description: "Zero Polyester, Pure Natural",
    isArrow: true,
    reason:
      "Unlike conventional textiles, we never blend in polyester. Every product is fully biodegradable and eco-friendly."
  },
  {
    image: "/assets/img/extra/skillartisan.jpg",
    description: "Handcrafted by Skilled Artisans",
    reason:
      "Our Nepalese artisans use traditional techniques to transform nettle fiber into durable, breathable textiles with unique character."
  },
  {
    description: "Woven from Nature, Crafted for Life.",
    isQuote: true,
    reason:
      "A reflection of our ethos: pure nettle fiber, sustainable outside and in, telling a story of heritage and environmental stewardship."
  }
];

export default function WhatSetsUsApartHorizontal() {
  const containerRef = useRef(null);
  const panelRefs = useRef([]);
  const titleRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const panelsArray = panelRefs.current;
    const total = panelsArray.length;

    const ctx = gsap.context(() => {
      // Horizontal scroll
      gsap.to(panelsArray, {
        xPercent: -100 * (total - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${window.innerWidth * (total - 1)}`,
          invalidateOnRefresh: true
        }
      });

      // Background parallax effect
      gsap.to(bgRef.current, {
        x: () => `-${window.innerWidth * 0.3}`, 
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: "top top",
          end: () => `+=${window.innerWidth * (total - 1)}`,
        }
      });

      // Title fade in
      gsap.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            scrub: true
          }
        }
      );

      // Each panel animation
      panelsArray.forEach((panel) => {
        gsap.from(panel, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: panel,
            start: "left center",
            toggleActions: "play none none reset"
          }
        });
      });
    }, containerRef);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen overflow-hidden relative bg-white"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-[150vw] h-full bg-gradient-to-r from-[#e0f7ec] to-[#f4f7f5] opacity-80 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/img/parallax-texture.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          mixBlendMode: "multiply",
          zIndex: 0,
          opacity:2
        }}
      />

      {/* Title */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 text-center text-[#fff] ">
      {/* #1fa951 */}
        <h1
          ref={titleRef}
          className="text-[clamp(2rem,5vw,6rem)] uppercase font-extrabold leading-[1] bg-opacity-90 px-4 py-2 "
        >
          What Sets Us Apart
        </h1>
      </div>

      {/* Panels Container */}
      <div className="flex h-full w-[400vw] py-4 relative z-10 mt-12">
        {panels.map((panel, idx) => (
          <div
            key={idx}
            className="panel w-screen h-full flex items-center justify-center flex-col p-10 text-center"
            ref={(el) => el && (panelRefs.current[idx] = el)}
          >
            {panel.isQuote ? (
              <blockquote className="text-3xl italic text-[#fff] font-semibold max-w-md">
                {panel.description}
                {panel.reason && (
                  <p className="mt-4 text-base text-[#fff] italic">
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
                    stroke="#fff"
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
                        <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                      </marker>
                    </defs>
                  </svg>
                )}
                <p className="text-2xl text-lightText max-w-md">
                  {panel.description}
                </p>
                {panel.reason && (
                  <p className="mt-4 text-xl   text-light italic max-w-md">
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
