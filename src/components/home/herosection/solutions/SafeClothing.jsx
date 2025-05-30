import { useRef } from "react";
import useTypewriterEffect from "../../../../hooks/useTypewriterEffect";

export default function SafeClothing({ audioUnlocked }) {
  const textRef = useRef(null);

  useTypewriterEffect({
    ref: textRef,
    text:
      "✅ Solution: Safe, Earth-Born Clothing\n" +
      "Himalayan Textile’s toxin-free clothes are breathable, regenerative, and gentle — safe for every generation.",
    audioUnlocked,
    typingSpeed: 40,
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-rose-800 text-white px-6">
      <p
        ref={textRef}
        className="text-xl md:text-2xl font-medium leading-relaxed max-w-3xl text-center whitespace-pre-wrap"
      />
    </div>
  );
}
