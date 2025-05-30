import { useRef } from "react";
import useTypewriterEffect from "../../../../hooks/useTypewriterEffect";

export default function NaturalFibers({ audioUnlocked }) {
  const textRef = useRef(null);

  useTypewriterEffect({
    ref: textRef,
    text:
      "✅ Solution: Natural, Biodegradable Fibers\n" +
      "Himalayan Textile uses hemp, nettle, flax, and organic cotton — requiring less water and leaving no toxic trace.",
    audioUnlocked,
    typingSpeed: 40,
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-emerald-800 text-white px-6">
      <p
        ref={textRef}
        className="text-xl md:text-2xl font-medium leading-relaxed max-w-3xl text-center whitespace-pre-wrap"
      />
    </div>
  );
}
