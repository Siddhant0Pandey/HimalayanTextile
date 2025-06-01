import { useState, useEffect } from "react";

export const useTypewriter = (text, speed = 50, startDelay = 0, audio = null) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!text) return;
    
    const startTimer = setTimeout(() => {
      setIsStarted(true);
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          // Play typing sound effect
          if (audio && i % 3 === 0) {
            audio.currentTime = 0;
            audio.play().catch(() => {});
          }
          i++;
        } else {
          setIsComplete(true);
          clearInterval(timer);
        }
      }, speed);

      return () => clearInterval(timer);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [text, speed, startDelay, audio]);

  return { displayText, isComplete, isStarted };
};