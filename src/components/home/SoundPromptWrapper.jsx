// components/SoundPromptWrapper.jsx
import { useEffect, useMemo, useState } from "react";

export default function SoundPromptWrapper({ children, onEnable }) {
  const [showPrompt, setShowPrompt] = useState(true);

  const windAudio = useMemo(() => new Audio("/assets/sound/wind.mp3"), []);

  useEffect(() => {
    windAudio.loop = true;
    windAudio.volume = 1;
  }, [windAudio]);

  const handleEnable = () => {
    windAudio.play()
      .then(() => {
        onEnable(true); 
        setShowPrompt(false);
      })
      .catch((err) => {
        console.warn("Wind sound failed:", err);
      });
  };

  return (
    <>
      {showPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center text-white">
          <h2 className="text-2xl mb-4">Enable Sound for better experience?</h2>
          <button
            onClick={handleEnable}
            className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 cursor-pointer"
          >
            Yes, Enable
          </button>
        </div>
      )}
      {!showPrompt && children}
    </>
  );
}
