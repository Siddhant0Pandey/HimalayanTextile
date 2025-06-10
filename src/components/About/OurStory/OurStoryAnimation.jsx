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
      ease: "none",
      duration: 1,
    });

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
    <div
      id="scroll-section"
      style={{ height: "200vh", position: "relative" }}
      className="bg-highlight"
    >
      {/* DESKTOP VIEW */}
      {!isMobile && (
        <svg
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "100vw",
            height: "100vh",
            position: "sticky",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        >
          {/* Background gradient */}
          <defs>
            <linearGradient
              id="pathGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#4CAF50" />
              <stop offset="50%" stopColor="#2E7D32" />
              <stop offset="100%" stopColor="#4CAF50" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <image
            href="/assets/img/map-of-rolpa.png"
            x="-30"
            y="250"
            width="520"
            height="380"
            preserveAspectRatio="xMidYMid slice"
          />
          <image
            href="/assets/img/krm-map.png"
            x="1620"
            y="660"
            width="320"
            height="400"
            preserveAspectRatio="xMidYMid slice"
          />

          {/* Beautiful S-shaped path */}
          <path
            ref={pathRef}
            d="M 200 360 C 300 320, 500 300, 600 340 C 700 380, 800 300, 900 400 C 1000 500, 1000 600, 1200 580 C 1400 560, 1600 700, 1700 760"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            strokeDasharray="15,10"
            filter="url(#glow)"
            strokeLinecap="round"
          />

          {/* Path dots for extra visual appeal */}
          <circle cx="190" cy="368" r="8" fill="#4CAF50" opacity="0.8" />
          {/* <circle cx="3000" cy="400" r="5" fill="#66BB6A" opacity="0.7" />
          <circle cx="1200" cy="580" r="5" fill="#2E7D32" opacity="0.6" /> */}
          <circle cx="1715" cy="770" r="8" fill="#4CAF50" opacity="0.8" />

          <image
            ref={carRef}
            href="/truck.png"
            width="120"
            height="120"
            x="0"
            y="0"
          />
        </svg>
      )}

      {/* MOBILE VIEW */}
      {isMobile && (
        <svg
          viewBox="0 0 414 896"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "100vw",
            height: "100vh",
            position: "sticky",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        >
          {/* Mobile gradient and effects */}
          <defs>
            <linearGradient
              id="mobilePathGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#4CAF50" />
              <stop offset="30%" stopColor="#66BB6A" />
              <stop offset="70%" stopColor="#2E7D32" />
              <stop offset="100%" stopColor="#4CAF50" />
            </linearGradient>
            <filter id="mobileGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <image
            href="/assets/img/map-of-rolpa.png"
            x="107"
            y="80"
            width="200"
            height="240"
            preserveAspectRatio="xMidYMid slice"
          />
          <image
            href="/assets/img/krm-map.png"
            x="107"
            y="570"
            width="200"
            height="240"
            preserveAspectRatio="xMidYMid slice"
          />

          {/* Perfect S-shaped path for mobile */}
          <path
            ref={pathRef}
            d="M 140 160 C 300 340, 350 380, 280 430 C 210 480, 160 520, 230 550 C 300 580, 250 570, 207 640"
            fill="none"
            stroke="url(#mobilePathGradient)"
            strokeWidth="4"
            strokeDasharray="12,8"
            filter="url(#mobileGlow)"
            strokeLinecap="round"
          />

          {/* Path markers */}
          <circle cx="139" cy="160" r="6" fill="#4CAF50" opacity="0.8" />
          {/* <circle cx="280" cy="430" r="4" fill="#66BB6A" opacity="0.6" />
          <circle cx="230" cy="550" r="4" fill="#2E7D32" opacity="0.6" /> */}
          <circle cx="206" cy="640" r="6" fill="#4CAF50" opacity="0.8" />

          <image
            ref={carRef}
            href="/truck.png"
            width="80"
            height="80"
            x="0"
            y="0"
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
        {/* Journey Begins Here */}
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
        {/* Our Story Reaches Here */}
      </div>
    </div>
  );
};

export default OurStoryAnimation;
