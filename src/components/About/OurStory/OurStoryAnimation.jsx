import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const OurStoryAnimation = () => {
  const carRef = useRef(null);
  const pathRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!carRef.current || !pathRef.current) return;

    // Truck motion path animation
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
        alignOrigin: [0.5, 1], // Bottom-center of truck aligns to path
        autoRotate: true,
      },
      ease: "none",
      duration: 1,
    });

    // Text 1 animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#scroll-section",
          start: "10% center",
          end: "45% center",
          scrub: 1,
        },
      })
      .fromTo(
        textRef1.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .to(textRef1.current, { opacity: 0, y: -50, duration: 1 });

    // Text 2 animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#scroll-section",
          start: "55% center",
          end: "85% center",
          scrub: 1,
        },
      })
      .fromTo(
        textRef2.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .to(textRef2.current, { opacity: 0, y: -50, duration: 1 });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [isMobile]);

  return (
    <div id="scroll-section" style={{ height: "200vh", position: "relative" }}>
      {/* DESKTOP VIEW */}
      {!isMobile && (
        <svg
          viewBox="0 0 1400 1000"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "100%",
            height: "100vh",
            position: "sticky",
            top: 0,
            zIndex: 0,
          }}
        >
          <image
            href="/assets/img/lumbini.png"
            x="0"
            y="0"
            width="300"
            height="340"
            preserveAspectRatio="xMidYMid slice"
          />
          <image
            href="/assets/img/ktm.png"
            x="1100"
            y="700"
            width="300"
            height="366"
            preserveAspectRatio="xMidYMid slice"
          />
          <path
            ref={pathRef}
            d="M 150 150 Q 250 200 400 400 Q 600 600 850 500 Q 1100 400 1200 750"
            fill="none"
            stroke="#4CAF50"
            strokeWidth="6"
            strokeDasharray="12,8"
          />
          <image
            ref={carRef}
            href="/truck.png"
            width="120"
            height="120"
            x="0"
            y="0" // <-- No offset, alignOrigin handles alignment
          />
        </svg>
      )}

      {/* MOBILE VIEW */}
      {isMobile && (
        <svg
          viewBox="0 0 400 1200"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "100%",
            height: "100vh",
            position: "sticky",
            top: 0,
            zIndex: 0,
          }}
        >
          <image
            href="/assets/img/lumbini.png"
            x="100"
            y="50"
            width="200"
            height="200"
            preserveAspectRatio="xMidYMid slice"
          />
          <image
            href="/assets/img/ktm.png"
            x="100"
            y="950"
            width="200"
            height="200"
            preserveAspectRatio="xMidYMid slice"
          />
          <path
            ref={pathRef}
            d="M 200 250 L 200 950"
            fill="none"
            stroke="#4CAF50"
            strokeWidth="6"
            strokeDasharray="12,8"
          />
          <image
            ref={carRef}
            href="/truck.png"
            width="100"
            height="100"
            x="0"
            y="0" // <-- No offset, alignOrigin handles alignment
          />
        </svg>
      )}

      {/* TEXT 1 */}
      <div
        ref={textRef1}
        style={{
          position: "absolute",
          top: "30vh",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "clamp(1.5rem, 3vw, 3rem)",
          color: "#4CAF50",
          fontWeight: "bold",
          textAlign: "center",
          opacity: 0,
        }}
      >
        Journey Begins Here
      </div>

      {/* TEXT 2 */}
      <div
        ref={textRef2}
        style={{
          position: "absolute",
          top: "75vh",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "clamp(1.5rem, 3vw, 3rem)",
          color: "#4CAF50",
          fontWeight: "bold",
          textAlign: "center",
          opacity: 0,
        }}
      >
        Our Story Reaches Here
      </div>
    </div>
  );
};

export default OurStoryAnimation;
