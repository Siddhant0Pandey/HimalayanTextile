// components/PageTransition.jsx
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const PageTransition = ({ children }) => {
  const containerRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert(); // cleans animation
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

export default PageTransition;
