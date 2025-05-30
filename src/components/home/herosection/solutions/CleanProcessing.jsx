import { useRef } from "react";
import useTypewriterEffect from "../../../../hooks/useTypewriterEffect";

export default function CleanProcessing({ audioUnlocked }) {
  const textRef = useRef(null);

  useTypewriterEffect({
    ref: textRef,
    text:
      "✅ Solution: Carbon-Negative Fibers & Clean Processing\n" +
      "Using hemp and natural materials, Himalayan Textile avoids fossil fuels and toxic chemicals entirely.",
    audioUnlocked,
    typingSpeed: 40,
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-lime-700 text-white px-6">
      <p
        ref={textRef}
        className="text-xl md:text-2xl font-medium leading-relaxed max-w-3xl text-center whitespace-pre-wrap"
      />
    </div>
  );
}
