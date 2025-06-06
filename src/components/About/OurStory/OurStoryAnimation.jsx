/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const OurStoryAnimation = () => {
  const carRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const animation = gsap.to(carRef.current, {
      scrollTrigger: {
        trigger: "#scroll-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Slows down the scroll-based animation
      },
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 1,
      ease: "none",
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <div id="scroll-section" style={{ height: "200vh", position: "relative" }}>
      <svg
        width="100%"
        height="1000"
        viewBox="0 0 1400 1000"
        style={{ position: "sticky", top: 0 }}
      >
        {/* Kathmandu Map at Top Left */}
        <image
          href="/assets/img/ktm.png"
          x="0"
          y="0"
          width="300"
          height="300"
          preserveAspectRatio="xMidYMid slice"
        />

        {/* India Map at Bottom Right */}
        <image
          href="/assets/img/ind.png"
          x="1100"
          y="700"
          width="300"
          height="300"
          preserveAspectRatio="xMidYMid slice"
        />

        {/* Refined S-Shaped Path with Balanced Curves */}
        <path
          ref={pathRef}
          d="
            M 150 100
            C 600 100, 900 200, 1250 300
            C 1000 400, 600 600, 150 500
            C 600 600, 1000 800, 1250 800
          "
          fill="none"
          stroke="#4CAF50"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="10,6"
        />

        {/* Truck Image */}
        <image
          ref={carRef}
          href="/assets/img/truck.png"
          width="50"
          height="30"
          x="0"
          y="0"
        />
      </svg>
    </div>
  );
};

export default OurStoryAnimation;
