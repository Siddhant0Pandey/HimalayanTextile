import { useRef } from "react";
import useTypewriterEffect from "../../../../hooks/useTypewriterEffect";

export default function EnvironmentalPollution({ audioUnlocked }) {
  const textRef = useRef(null);

  useTypewriterEffect({
    ref: textRef,
    text: `🌍 The textile industry releases over 92 million tonnes of waste every year. Toxic dyes, microplastics, and chemical runoff are poisoning our rivers, oceans — and even our bodies.`,
    audioUnlocked,
    typingSpeed: 40,
  });

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-4xl text-center">
        <h2
          ref={textRef}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-relaxed"
        ></h2>
      </div>
    </section>
  );
}
