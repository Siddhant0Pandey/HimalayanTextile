/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const OurStoryAnimation = () => {
  const carRef = useRef(null);
  const pathRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    const animation = gsap.to(carRef.current, {
      scrollTrigger: {
        trigger: "#scroll-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        alignOrigin: [0.5, 1],
        autoRotate: true,
      },
      duration: 1,
      ease: "none",
    });

    gsap.fromTo(
      textRef1.current,
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: "#scroll-section",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      textRef2.current,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: "#scroll-section",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      }
    );

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
        <image
          href="/assets/img/ktm.png"
          x="0"
          y="0"
          width="300"
          height="340"
          preserveAspectRatio="xMidYMid slice"
        />

        <image
          href="/assets/img/ind.png"
          x="1100"
          y="700"
          width="300"
          height="300"
          preserveAspectRatio="xMidYMid slice"
        />

        <path
          ref={pathRef}
          d="M 150 150 Q 250 200 400 400 Q 600 600 850 500 Q 1100 400 1200 750"
          fill="none"
          stroke="#4CAF50"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="10,6"
        />

        <image
          ref={carRef}
          href="/truck.png"
          width="70"
          height="70"
          x="-25"
          y="38"
        />
      </svg>

      <div
        ref={textRef1}
        style={{
          position: "absolute",
          top: "30%",
          left: "40%",
          fontSize: "2rem",
          color: "#4CAF50",
          opacity: 0,
        }}
      >
        Journey Begins Here
      </div>

      <div
        ref={textRef2}
        style={{
          position: "absolute",
          top: "80%",
          left: "10%",
          fontSize: "2rem",
          color: "#4CAF50",
          opacity: 0,
        }}
      >
        Our Story Reaches Here
      </div>
    </div>
  );
};

export default OurStoryAnimation;
