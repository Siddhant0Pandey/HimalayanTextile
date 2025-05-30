import { useRef } from "react";
import useTypewriterEffect from "../../../hooks/useTypewriterEffect";

export default function HeroTitle({ audioUnlocked }) {
  const textRef = useRef(null);

  useTypewriterEffect({
    ref: textRef,
    text: "Welcome to Himalayan Textile Industries — A Journey of Restoration.",
    audioUnlocked,
    typingSpeed: 60,
  });

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white px-4">
      <h1
        ref={textRef}
        className="text-4xl md:text-6xl font-bold text-center max-w-4xl"
      />
    </div>
  );
}
