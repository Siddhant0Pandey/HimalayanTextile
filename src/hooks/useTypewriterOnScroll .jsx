
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useTypewriterOnScroll(text, ref) {
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 80%",
      onEnter: () => {
        clearInterval(intervalRef.current);
        ref.current.textContent = "";
        let i = 0;

        intervalRef.current = setInterval(() => {
          if (i < text.length) {
            ref.current.textContent += text[i];
            i++;
          } else {
            clearInterval(intervalRef.current);
          }
        }, 50);
      },
      onLeaveBack: () => {
        clearInterval(intervalRef.current);
        if (ref.current) {
          ref.current.textContent = "";
        }
      },
    });

    return () => {
      trigger.kill();
      clearInterval(intervalRef.current);
    };
  }, [text, ref]);
}
