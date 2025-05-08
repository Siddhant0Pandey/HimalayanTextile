import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = [
  { year: "2010", description: "Company founded" },
  { year: "2012", description: "First product launched" },
  { year: "2015", description: "Expanded globally" },
  { year: "2020", description: "Reached 1M users" },
  { year: "2023", description: "AI integration launched" },
];

const Timeline = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const sections = cardsRef.current;

    gsap.to(sections, {
      yPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () =>
          "+=" + containerRef.current.offsetHeight * (sections.length - 1),
      },
    });

    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            containerAnimation: ScrollTrigger.getById("timeline-scroll"),
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {events.map((event, i) => (
        <section
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className="h-screen flex items-center justify-center bg-white text-center px-4"
        >
          <div className="max-w-xl bg-gray-100 shadow-lg rounded-lg p-10">
            <h2 className="text-3xl font-bold mb-4">{event.year}</h2>
            <p className="text-lg text-gray-700">{event.description}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Timeline;
