/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import { yarnTypes } from "../data/yarnTypes";
import { processSteps } from "../data/yarnProcessSteps";
import YarnProcess from "./YarnProcess";
import YarnCollection from "./YarnCollection";
import MinimalisticCTA from "./MinimalisticCTA";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function YarnOfferings() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const processRef = useRef(null);
  const processItemsRef = useRef([]);
  const ctaRef = useRef(null);
  const buttonRef = useRef(null);

  if (!cardsRef.current) cardsRef.current = [];
  if (!processItemsRef.current) processItemsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);

      if (el) {
        el.style.opacity = 1;
      }
    }
  };

  const addToProcessItemsRef = (el) => {
    if (el && !processItemsRef.current.includes(el)) {
      processItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline();
      if (headingRef.current && subheadingRef.current) {
        heroTl
          .from(headingRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          })
          .from(
            subheadingRef.current,
            {
              y: 30,
              opacity: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.6"
          );
      }

      if (cardsRef.current.length > 0) {
        // Set initial state for cards
        gsap.set(cardsRef.current, {
          opacity: 0,
          y: 50,
        });

        gsap.to(cardsRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.5, // Start after hero animation
        });

        cardsRef.current.forEach((card) => {
          if (card) {
            card.addEventListener("mouseenter", () => {
              gsap.to(card, {
                y: -10,
                scale: 1.03,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                duration: 0.3,
                ease: "power2.out",
              });
            });

            card.addEventListener("mouseleave", () => {
              gsap.to(card, {
                y: 0,
                scale: 1,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                duration: 0.3,
                ease: "power2.in",
              });
            });
          }
        });

        // Subtle floating animation for cards - add after main animation completes
        setTimeout(() => {
          cardsRef.current.forEach((card, index) => {
            if (card) {
              gsap.to(card, {
                y: "-=5", // Reduced floating amount
                duration: 1.5 + index * 0.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.1,
              });
            }
          });
        }, 1500);
      }

      if (processRef.current) {
        gsap.from(processRef.current, {
          backgroundColor: "#edfeee",
          opacity: 0.6,
          scale: 0.95,
          duration: 0.8,
          scrollTrigger: {
            trigger: processRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        });
      }

      // Process items staggered animation
      if (processItemsRef.current.length > 0) {
        gsap.from(processItemsRef.current, {
          y: 40,
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        });

        // Icons rotating animation
        processItemsRef.current.forEach((item, index) => {
          if (item) {
            const icon = item.querySelector(".icon-container");
            if (icon) {
              gsap.to(icon, {
                rotate: index % 2 === 0 ? 10 : -10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.2,
              });
            }
          }
        });
      }

      // CTA section animation
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        });
      }

      // Button pulse animation
      if (buttonRef.current) {
        gsap.to(buttonRef.current, {
          scale: 1.05,
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
        });

        // Button hover effect
        buttonRef.current.addEventListener("mouseenter", () => {
          gsap.to(buttonRef.current, {
            scale: 1.1,
            backgroundColor: "#729a78",
            duration: 0.3,
            ease: "power1.out",
          });
        });

        buttonRef.current.addEventListener("mouseleave", () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            backgroundColor: "#1fa951",
            duration: 0.3,
            ease: "power1.in",
          });
        });
      }
    }, sectionRef);

    // Force ScrollTrigger to recalculate
    ScrollTrigger.refresh();

    // Clean up animations when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen overflow-hidden bg-gradient-to-br from-white to-green-50"
      style={{
        color: "#1d1f10",
      }}
    >
      <YarnCollection />

      <YarnProcess />

      {/* CTA Section */}
      <MinimalisticCTA product_name="Yarn" />
    </section>
  );
}
