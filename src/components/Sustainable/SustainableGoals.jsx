import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  "Sustainability Is a Journey, Not Simply a Destination: Dangi Group’s Commitment to a Better Future",
  "From Forest to Fashion: Leveraging Natural Fibers",
  "Sustainable Manufacturing Practices",
  "Aligning with the UN Sustainable Development Goals (SDGs)",
  "Elevating People and Communities",
  "Transforming the Planet: A Vision for the Future",
  "Valuable Partnerships for Sustainable Impact",
  "Sustainability as a Continuous Journey",
];

export default function SustainableGoals() {
  const containerRef = useRef(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(contentRefs.current, {
        autoAlpha: 0,
        scale: 0.95,
        y: 50,
        filter: "blur(8px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${sections.length * 100}%`,
          scrub: true,
          pin: true,
          snap: 1 / (sections.length - 1),
        },
      });

      sections.forEach((_, i) => {
        tl.to(contentRefs.current[i], {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        }).to(
          contentRefs.current[i],
          {
            autoAlpha: 0,
            scale: 0.95,
            y: -100,
            filter: "blur(8px)",
            duration: 0.8,
            ease: "power3.in",
          },
          "+=1"
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #edfeee, #729a78)",
        fontFamily: "var(--font-display)",
      }}
    >
      {/* Optional glow/texture overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm pointer-events-none z-10" />

      {sections.map((text, index) => (
        <p
          key={index}
          ref={(el) => (contentRefs.current[index] = el)}
          className="absolute max-w-4xl text-center px-6 text-2xl md:text-4xl font-semibold z-20"
          style={{
            color: "var(--color-darkText)",
            textShadow: "1px 1px 4px rgba(255,255,255,0.5)",
          }}
        >
          {text}
        </p>
      ))}
    </div>
  );
}
