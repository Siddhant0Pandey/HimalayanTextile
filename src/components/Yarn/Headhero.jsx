import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedHeadhero() {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Create a timeline for smoother animation sequence
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial state - set elements invisible
    gsap.set([headingRef.current, textRef.current, btnRef.current], {
      opacity: 0,
      y: 50,
    });

    gsap.set([image1Ref.current, image2Ref.current], {
      opacity: 0,
      scale: 0.8,
    });

    // Animate elements in sequence
    tl.to(containerRef.current, {
      opacity: 1,
      duration: 0.5,
    })
      .to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
      .to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.4"
      )
      .to(
        btnRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.4"
      )
      .to(
        image1Ref.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          rotate: -3,
        },
        "-=0.6"
      )
      .to(
        image2Ref.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          rotate: 3,
        },
        "-=0.6"
      );

    // Button hover effect
    const btnHover = btnRef.current;
    btnHover.addEventListener("mouseenter", () => {
      gsap.to(btnHover, {
        scale: 1.05,
        duration: 0.3,
      });
    });

    btnHover.addEventListener("mouseleave", () => {
      gsap.to(btnHover, {
        scale: 1,
        duration: 0.3,
      });
    });

    // Floating animation for images
    gsap.to(image1Ref.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(image2Ref.current, {
      y: -10,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5,
    });

    // Cleanup function
    return () => {
      btnHover.removeEventListener("mouseenter", () => {});
      btnHover.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-white to-green-50 px-6 py-12 md:flex md:items-center md:justify-between md:px-16"
      style={{ opacity: 0 }}
    >
      <div className="max-w-xl">
        <h1 ref={headingRef} className="text-5xl font-bold text-black">
          Why <span className="text-green-600">Our Yarn?</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          <span className="text-green-600 font-semibold">Why Our Yarn</span>{" "}
          stands apart lies in its origin and purpose. Each skein is made from
          carefully selected natural fibers, hand-spun by skilled artisans using
          traditional{" "}
          <span className="text-blue-700 font-bold">Himalayan techniques</span>{" "}
          . Our yarn is not only soft and durable, but it also carries the
          essence of sustainable craftsmanship—ethically sourced,
          environmentally conscious, and deeply rooted in cultural heritage.
          It’s more than just a material; it’s a meaningful thread connecting
          people, planet, and tradition.
        </p>

        <button
          ref={btnRef}
          className="mt-8 bg-green-600 text-white text-lg px-6 py-3 rounded-full hover:bg-green-700 transition shadow-lg flex items-center gap-2"
        >
          Interested
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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

      <div className="mt-12 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto md:mx-0">
        <div className="relative">
          <div
            ref={image1Ref}
            className="overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src="assets/img/Fiber/hemp.jpg"
              alt="Yarn Box"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-medium">Traditional Yarns</p>
            </div>
          </div>
        </div>
        <div className="relative md:mt-12">
          <div
            ref={image2Ref}
            className="overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src="assets/img/Fiber/hemp.jpg"
              alt="Woman Weaving"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-medium">Master Artisans</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
