export default function typeText(element, text, audio = null) {
  return new Promise((resolve) => {
    let i = 0;

    const interval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text[i];
        i++;
      } else {
        clearInterval(interval);
        resolve(); 
      }
    }, 60);
  }).then(() => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}
