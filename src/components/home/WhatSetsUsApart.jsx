import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLeaf, FaHandsHelping, FaCheckCircle } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Eco-Friendly Production",
    desc: "We use sustainable practices and biodegradable materials to ensure minimal environmental impact.",
    icon: <FaLeaf className="text-primary w-10 h-10 mb-4" />,
  },
  {
    title: "Heritage Craftsmanship",
    desc: "Every textile is handcrafted by skilled artisans from the Himalayan region, preserving age-old techniques.",
    icon: <FaHandsHelping className="text-primary w-10 h-10 mb-4" />,
  },
  {
    title: "Superior Quality",
    desc: "Our products undergo rigorous quality checks for durability, comfort, and beauty.",
    icon: <FaCheckCircle className="text-primary w-10 h-10 mb-4" />,
  },
];

export default function WhatSetsUsApart() {
  const sectionRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    // Section title animation
    gsap.from(titleRef.current, {
      y: -40,
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    // Card and icon animation
    const cards = gsap.utils.toArray(".card");
    gsap.from(cards, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });

    // Icon bob animation
    gsap.to(".card-icon", {
      y: -5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 1.5,
      stagger: 0.2,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-light text-darkText py-20 px-4 md:px-0 overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary opacity-10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary opacity-10 rounded-full blur-[150px]" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl font-bold text-center mb-4 font-display"
        >
          What Sets Us Apart
        </h2>
        <p className="text-center text-lg mb-12 text-secondary">
          Discover the values that define Himalayan Textile.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="card bg-white shadow-xl p-6 rounded-2xl transition transform hover:scale-[1.03] hover:shadow-2xl duration-300 group"
            >
              <div className="card-icon">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 font-display group-hover:text-primary transition">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
