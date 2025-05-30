// HomePageWrapper.jsx (or inside your main page)
import { useState } from "react";

export default function HomePageWrapper({ children, setAudioUnlocked }) {
  const [showPrompt, setShowPrompt] = useState(true);

  const handleAllowSound = () => {
    setAudioUnlocked(true);
    setShowPrompt(false);
  };

  return (
    <>
      {showPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
          <h2 className="text-white text-2xl mb-4">Enable Sound?</h2>
          <button
            className="bg-white text-black px-6 py-2 rounded"
            onClick={handleAllowSound}
          >
            Yes, Enable
          </button>
        </div>
      )}
      {!showPrompt && children}
    </>
  );
}
