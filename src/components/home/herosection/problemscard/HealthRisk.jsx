import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import typeText from "../../../../utils/typeText.js";

gsap.registerPlugin(ScrollTrigger);

export default function HealthRisk({ audioUnlocked }) {
  const textRef = useRef(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 80%",
      onEnter: () => {
        typeText(
          textRef.current,
          "The chemicals used in textile manufacturing can pose serious health risks.",
          "/assets/sound/narration-healthrisk.mp3",
          audioUnlocked
        );
      },
      onLeaveBack: () => {
        textRef.current.textContent = "";
      },
    });

    return () => {
      trigger.kill();
    };
  }, [audioUnlocked]);

  return (
    <div className="flex items-center justify-center w-full h-screen px-10 bg-red-100">
      <p ref={textRef} className="text-3xl text-center font-semibold text-red-800 leading-relaxed z-10"></p>
    </div>
  );
}
