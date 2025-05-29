// components/HeroTitle.jsx
import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import typeText from "../../../utils/typeText";

gsap.registerPlugin(ScrollTrigger);

export default function HeroTitle({ audioUnlocked }) {
  const textRef = useRef(null);
  const triggeredRef = useRef(false);

  const audio = useMemo(() => new Audio("/assets/sound/typewriter.mp3"), []);

  useEffect(() => {
    if (!textRef.current) return;

    audio.loop = true;
    audio.volume = 1.0;

    const trigger = ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 80%",
      onEnter: () => {
        if (triggeredRef.current || !audioUnlocked) return;
        triggeredRef.current = true;
        typeText(textRef.current, "Welcome to Himalayan Textile", audio, audioUnlocked);
      },
      onLeaveBack: () => {
        textRef.current.textContent = "";
        triggeredRef.current = false;
      },
    });

    return () => {
      trigger.kill();
      audio.pause();
      audio.currentTime = 0;
    };  
  }, [audioUnlocked, audio]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1
        ref={textRef}
        className="text-5xl font-bold text-white text-center"
      ></h1>
    </div>
  );
}
