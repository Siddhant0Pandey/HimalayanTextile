import { useRef } from "react";
import useTypewriterEffect from "../../../../hooks/useTypewriterEffect";

export default function HealthRisks({ audioUnlocked }) {
  const textRef = useRef(null);

  useTypewriterEffect({
    ref: textRef,
    text:
      "👶 Human Health at Risk — Especially for Children:\n" +
      "Microplastics and chemical residues are found in lungs, blood, and breast milk — especially harming children.",
    audioUnlocked,
    typingSpeed: 40,
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-red-900 text-white px-6">
      <p
        ref={textRef}
        className="text-xl md:text-2xl font-medium leading-relaxed max-w-3xl text-center whitespace-pre-wrap"
      />
    </div>
  );
}
