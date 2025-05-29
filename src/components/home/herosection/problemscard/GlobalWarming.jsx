import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import typeText from "../../../../utils/typeText";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalWarming({ audioUnlocked }) {
  const textRef = useRef(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 80%",
      onEnter: () => {
        typeText(
          textRef.current,
          "Global warming is accelerating due to unsustainable textile production.",
          "/assets/sound/narration-globalwarming.mp3",
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
    <div className="flex items-center justify-center w-full h-screen px-10 bg-orange-100">
      <p ref={textRef} className="text-3xl text-center font-semibold text-orange-800 leading-relaxed z-10"></p>
    </div>
  );
}
