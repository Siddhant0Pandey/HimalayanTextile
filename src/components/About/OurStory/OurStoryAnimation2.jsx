import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const OurStoryAnimation2 = () => {
  const carRef = useRef(null);
  const desktopPathRef = useRef(null);
  const mobilePathRef = useRef(null);
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const waitForImageLoad = () => {
    const imgs = document.querySelectorAll("image");
    return Promise.all(
      Array.from(imgs).map((img) => {
        const href = img.getAttribute("href");
        if (!href) return Promise.resolve();
        return new Promise((resolve) => {
          const image = new Image();
          image.onload = resolve;
          image.onerror = resolve;
          image.src = href;
        });
      })
    );
  };

  useLayoutEffect(() => {
    let motionTween;

    const initAnimation = async () => {
      await waitForImageLoad();

      const car = carRef.current;
      const path = isMobile ? mobilePathRef.current : desktopPathRef.current;
      const section = sectionRef.current;

      if (!car || !path || !section) return;

      gsap.killTweensOf(car);
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });

      gsap.set(car, { clearProps: "all" });

      gsap.set(car, {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0,
          end: 0,
        },
        immediateRender: true,
      });

      motionTween = gsap.to(car, {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0,
          end: 1,
        },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          markers: false,
        },
        duration: 1,
        ease: "none",
      });
    };

    initAnimation();

    return () => {
      if (motionTween) {
        motionTween.scrollTrigger?.kill();
        motionTween.kill();
      }
      gsap.killTweensOf(carRef.current);
    };
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    const debouncedResize = debounce(handleResize, 100);
    window.addEventListener("resize", debouncedResize);

    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  return (
    <div
      id="scroll-section"
      ref={sectionRef}
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
            zIndex: 0,
          }}
        >
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
            href="/Maps/nep.png"
            x="1400"
            y="50"
            width="420"
            height="300"
          />
          <image href="/Maps/ind.png" x="50" y="750" width="400" height="320" />

          <path
            ref={desktopPathRef}
            d="M 1560 200 
               C 1300 100, 1000 450, 850 500 
               C 600 600, 500 400, 400 600 
               C 250 800, 200 850, 180 870"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="3"
            strokeDasharray="15,10"
            filter="url(#glow)"
            strokeLinecap="round"
          />

          <circle cx="1560" cy="200" r="8" fill="#4CAF50" opacity="0.8" />
          <circle cx="180" cy="870" r="8" fill="#4CAF50" opacity="0.8" />
          <image
            ref={carRef}
            href="/assets/img/truck4.png"
            width="120"
            height="120"
            x="-60"
            y="40"
            style={{ transformOrigin: "20px 20px" }}
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
            zIndex: 0,
          }}
        >
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

          <image href="/Maps/nep.png" x="250" y="40" width="160" height="200" />
          <image href="/Maps/ind.png" x="50" y="710" width="160" height="200" />

          <path
            ref={mobilePathRef}
            d="M 310 140 
               C 260 100, 220 250, 200 350 
               C 160 500, 180 700, 100 800"
            fill="none"
            stroke="url(#mobilePathGradient)"
            strokeWidth="2"
            strokeDasharray="12,8"
            filter="url(#mobileGlow)"
            strokeLinecap="round"
          />

          <circle cx="310" cy="140" r="6" fill="#4CAF50" opacity="0.8" />
          <circle cx="100" cy="800" r="6" fill="#4CAF50" opacity="0.8" />
          <image
            ref={carRef}
            href="/assets/img/truck4.png"
            width="80"
            height="80"
            x="-40"
            y="-40"
            style={{ transformOrigin: "center center" }}
          />
        </svg>
      )}
    </div>
  );
};

export default OurStoryAnimation2;
