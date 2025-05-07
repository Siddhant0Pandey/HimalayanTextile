import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function YarnOfferings() {
  // Create refs for animation targets
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardsContainerRef = useRef(null); // Add a ref for the cards container
  const cardsRef = useRef([]);
  const processRef = useRef(null);
  const processItemsRef = useRef([]);
  const ctaRef = useRef(null);
  const buttonRef = useRef(null);

  // Only initialize empty arrays if they don't exist yet
  if (!cardsRef.current) cardsRef.current = [];
  if (!processItemsRef.current) processItemsRef.current = [];

  const yarnTypes = [
    {
      id: 1,
      name: "Pashmina Wool",
      description:
        "Ultra-soft premium wool derived from the undercoat of Himalayan mountain goats. Known for exceptional warmth and lightweight properties.",
      image: "public/assets/img/Fiber/hemp.jpg",
      features: ["Temperature regulating", "Ethically sourced", "Handspun"],
    },
    {
      id: 2,
      name: "Yak Wool",
      description:
        "Naturally insulating wool that is softer than sheep's wool and extremely durable. Perfect for high-quality garments requiring warmth.",
      image: "public/assets/img/Fiber/hemp.jpg",
      features: ["Water resistant", "Hypoallergenic", "Non-pilling"],
    },
    {
      id: 3,
      name: "Hemp Fiber",
      description:
        "Sustainable natural fiber with exceptional durability. Our hemp yarns are processed using traditional methods for minimal environmental impact.",
      image: "public/assets/img/Fiber/hemp.jpg",
      features: ["Antimicrobial", "UV resistant", "Eco-friendly"],
    },
    {
      id: 4,
      name: "Himalayan Silk",
      description:
        "Handcrafted silk yarn produced by skilled artisans using heritage techniques passed down through generations.",
      image: "public/assets/img/Fiber/hemp.jpg",
      features: ["Lustrous finish", "Breathable", "Biodegradable"],
    },
  ];

  const processSteps = [
    {
      id: 1,
      title: "Ethical Sourcing",
      description:
        "We collect raw materials through sustainable practices that respect both nature and local communities.",
      icon: "🌱",
    },
    {
      id: 2,
      title: "Traditional Spinning",
      description:
        "Our skilled artisans use time-honored techniques to transform raw fibers into premium quality yarn.",
      icon: "🧶",
    },
    {
      id: 3,
      title: "Natural Dyeing",
      description:
        "We use plant-based dyes from local botanicals, creating vibrant colors through eco-friendly processes.",
      icon: "🎨",
    },
    {
      id: 4,
      title: "Quality Control",
      description:
        "Each batch undergoes meticulous inspection to ensure it meets our high standards of excellence.",
      icon: "✓",
    },
  ];

  // Improved ref adding function with debug logging
  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);

      // Ensure the element is visible by default
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
    // Initialize animations when component mounts and after refs are populated
    const ctx = gsap.context(() => {
      // Hero section animations with stagger effect
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

      // Immediately make cards visible with no scroll trigger dependency
      // Force cards to be visible first
      if (cardsRef.current.length > 0) {
        // Set initial state for cards
        gsap.set(cardsRef.current, {
          opacity: 0,
          y: 50,
        });

        // Main animation for cards - no ScrollTrigger dependency
        gsap.to(cardsRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.5, // Start after hero animation
        });

        // Add hover effect for yarn cards
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
        }, 1500); // Wait for main animation to complete
      }

      // Process section reveal animation
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
  }, []); // Empty dependency array ensures this runs once after mount

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-16 font-['Roboto_Slab',sans-serif] overflow-hidden bg-gradient-to-br from-white to-green-50"
      style={{
        color: "#1d1f10",
      }}
    >
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-20">
        <h1
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold text-center mb-6"
          style={{ color: "#1fa951" }}
        >
          Our Premium Yarn Collection
        </h1>
        <p
          ref={subheadingRef}
          className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-20"
        >
          At Himalayan Textile, we offer a curated selection of handcrafted,
          sustainable yarns sourced directly from the magnificent Himalayan
          region.
        </p>
      </div>

      {/* Yarn Cards Section */}
      <div ref={cardsContainerRef} className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {yarnTypes.map((yarn, index) => (
            <div
              key={yarn.id}
              ref={addToCardsRef}
              className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
              style={{
                background: index % 2 === 0 ? "#edfeee" : "#edfeee",
                opacity: 1, // Set initial opacity to ensure visibility
              }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={yarn.image}
                  alt={yarn.name}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "rgba(31, 169, 81, 0.7)" }}
                >
                  <span className="text-white text-xl font-bold">
                    Explore {yarn.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#1fa951" }}
                >
                  {yarn.name}
                </h3>
                <p className="mb-4">{yarn.description}</p>
                <div className="mt-4">
                  <h4
                    className="text-lg font-semibold mb-2"
                    style={{ color: "#729a78" }}
                  >
                    Key Features:
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {yarn.features.map((feature, i) => (
                      <li
                        key={i}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: "#1fa951",
                          color: "#edfeee",
                        }}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div
        ref={processRef}
        className="container mx-auto px-4 py-16 rounded-3xl my-20"
        style={{ marginTop: 30 }}
      >
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: "#1fa951" }}
        >
          Our Traditional Production Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              ref={addToProcessItemsRef}
              className="flex flex-col items-center text-center p-6 rounded-xl"
              style={{ backgroundColor: "#edfeee" }}
            >
              <div
                className="icon-container text-4xl mb-4 w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#f6edd9" }}
              >
                {step.icon}
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#1fa951" }}
              >
                {step.title}
              </h3>
              <p style={{ color: "#1d1f10" }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div ref={ctaRef} className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl font-bold mb-6 mt-6"
          style={{ color: "#1fa951" }}
        >
          Ready to Experience Himalayan Quality?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          We invite you to explore our collection of premium yarns and discover
          the perfect material for your next creative project.
        </p>
        <button
          ref={buttonRef}
          className="px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 flex items-center mx-auto gap-2"
          style={{
            backgroundColor: "#1fa951",
            color: "#edfeee",
          }}
        >
          Interested
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
