// hooks/useTypewriterEffect.js
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function useTypewriterEffect({
  ref,
  text,
  audioUnlocked,
  typingSpeed = 50,
  triggerStart = "top 80%",
}) {
  const intervalRef = useRef(null);
  const audioRef = useRef(null);
  const triggeredRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: triggerStart,
      onEnter: () => {
        if (triggeredRef.current || !audioUnlocked) return;

        triggeredRef.current = true;
        ref.current.textContent = "";
        let i = 0;

        audioRef.current = new Audio("/assets/sound/typewriter.mp3");
        audioRef.current.loop = true;
        audioRef.current.play().catch(() => {});

        intervalRef.current = setInterval(() => {
          if (i < text.length) {
            ref.current.textContent += text[i];
            i++;
          } else {
            clearInterval(intervalRef.current);
            audioRef.current?.pause();
            audioRef.current = null;
          }
        }, typingSpeed);
      },
      onLeaveBack: () => {
        triggeredRef.current = false;
        clearInterval(intervalRef.current);
        if (ref.current) ref.current.textContent = "";
        audioRef.current?.pause();
        audioRef.current = null;
      },
    });

    return () => {
      trigger.kill();
      clearInterval(intervalRef.current);
      audioRef.current?.pause();
    };
  }, [ref, text, audioUnlocked, typingSpeed, triggerStart]);
}
