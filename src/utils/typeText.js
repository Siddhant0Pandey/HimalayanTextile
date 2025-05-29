export default function typeText(element, text, audioSrc, audioUnlocked) {
  let index = 0;

  const audio = audioUnlocked && audioSrc ? new Audio(audioSrc) : null;

  if (audio) {
    audio.volume = 0.6;
    audio.play().catch(() => {});
  }

  element.textContent = ""; 
  const interval = setInterval(() => {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
    } else {
      clearInterval(interval);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  }, 60);
}
