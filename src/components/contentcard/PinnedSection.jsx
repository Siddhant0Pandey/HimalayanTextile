import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedSection({ children }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    ScrollTrigger.create({
      trigger: el,
      start: "bottom bottom",
      end: "+=100%",
      pin: true,
      pinSpacing: true,
      scrub: false,
      anticipatePin: 1,
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full overflow-hidden relative z-10"
    >
      {children}
    </section>
  );
}