import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMemo } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function EnvironmentalPollution({ audioUnlocked }) {
  const audio = useMemo(() => new Audio("/assets/sound/typewriter.mp3"), []);

  const text = "Environmental Pollution is a major threat caused by the textile industry.";
  const textRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 80%",
      onEnter: () => {
        clearInterval(intervalRef.current);
        if (textRef.current) {
          textRef.current.textContent = "";
          let i = 0;

          if (audioUnlocked && audio) {
            audio.play().catch(() => {});
          }

          intervalRef.current = setInterval(() => {
            if (i < text.length) {
              textRef.current.textContent += text[i];
              i++;
            } else {
              clearInterval(intervalRef.current);
              if (audio) {
                audio.pause();
                audio.currentTime = 0;
              }
            }
          }, 60);
        }
      },
      onLeaveBack: () => {
        clearInterval(intervalRef.current);
        if (textRef.current) {
          textRef.current.textContent = "";
        }
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      },
    });

    return () => {
      trigger.kill();
      clearInterval(intervalRef.current);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audioUnlocked, audio]);

  return (
    <div className="flex items-center justify-between w-full h-full px-10">
      <div className="w-1/2">
        <p ref={textRef} className="text-2xl leading-relaxed font-medium"></p>
      </div>
      <div className="w-1/2 h-[60%] bg-blue-500 animate-pulse rounded-xl flex items-center justify-center">
        <span className="text-white text-xl">[River Flow Animation Placeholder]</span>
      </div>
    </div>
  );
}
