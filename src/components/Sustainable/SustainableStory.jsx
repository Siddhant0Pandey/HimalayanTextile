import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const sections = [
  "Hey, Our Environment Matters. Everything we build, use, and throw away leaves a mark. But what if we could leave a better one?",
  "There’s a Problem. The materials we rely on every day are hurting the planet — draining resources, polluting ecosystems, and harming communities.",
  "We Took Responsibility. At HTI, we didn’t wait for someone else to change things. We reimagined how materials should be made.",
  "Inspired by Nature. Nature’s way is circular, efficient, and balanced. That’s our blueprint for creating smarter, greener materials.",
  "Every Step Matters. From sourcing raw inputs to water and energy use to the product’s end-of-life — we consider everything.",
  "Holistic Innovation. We design with intention, pioneer greener practices, and constantly rethink our methods — not for perfection, but for progress.",
  "Better for People. Better for the Planet. Our materials don’t just feel good — they do good. For humans. For nature. For generations.",
  "This Is Just the Beginning. Sustainability isn’t a checkbox — it’s a journey. And we’re in it for the long haul.",
  "Way Better Materials, for a Way Better World. Join us as we build a future that’s not just innovative — but truly sustainable.",
];

gsap.registerPlugin(ScrollTrigger);

export default function SustainabilityStory() {
  const containerRef = useRef(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(contentRefs.current, {
        autoAlpha: 0,
        scale: 0.95,
        y: 40,
        filter: "blur(6px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${sections.length * 150}%`, // longer scroll space
          scrub: 0.6,
          pin: true,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0.2, max: 0.6 },
            ease: "power1.inOut",
          },
        },
      });

      sections.forEach((_, i) => {
        tl.to(contentRefs.current[i], {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.8, // slower appearance
          ease: "power2.out",
        }).to(
          contentRefs.current[i],
          {
            autoAlpha: 0,
            scale: 0.95,
            y: -80,
            filter: "blur(6px)",
            duration: 1,
            ease: "power2.in",
          },
          "+=1.2" // slight delay before transition out
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
        background:
          "url('/assets/img/denseforest.jpg') center/cover fixed no-repeat",
        fontFamily: "var(--font-display)",
      }}
    >
      {/* Optional overlay for soft glow */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm pointer-events-none z-10" />

      {sections.map((text, index) => (
        <p
          key={index}
          ref={(el) => (contentRefs.current[index] = el)}
          className="absolute max-w-4xl text-center px-6 text-2xl md:text-4xl font-semibold z-20"
          style={{
            color: "white",
            textShadow: "1px 1px 4px rgba(255,255,255,0.5)",
          }}
        >
          {text}
        </p>
      ))}
    </div>
  );
}
