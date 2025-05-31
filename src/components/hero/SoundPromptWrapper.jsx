/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SoundPromptWrapper({ children, onEnable }) {
  const [showPrompt, setShowPrompt] = useState(true);

  const sharedAudio = useMemo(() => new Audio("/assets/sound/typewriter.mp3"), []);

  useEffect(() => {
    sharedAudio.loop = false;
    sharedAudio.volume = 0.3
  }, [sharedAudio]);

  const handleEnable = () => {
    sharedAudio
      .play()
      .then(() => {
        onEnable(sharedAudio);
        setShowPrompt(false);
      })
      .catch((err) => {
        console.warn("Audio play failed:", err);
      });
  };

  const handleDisable = () => {
    onEnable(null);
    setShowPrompt(false);
  };

  return (
    <>
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black text-white p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sound-prompt-title"
            aria-describedby="sound-prompt-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2
              id="sound-prompt-title"
              className="text-2xl font-semibold mb-4 text-center"
            >
              Enable Sound for a Better Experience?
            </h2>
            <p
              id="sound-prompt-description"
              className="text-sm mb-6 text-center max-w-md"
            >
              We use subtle sound effects like a typewriter to enrich your storytelling
              experience.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleEnable}
                className="px-6 py-2 bg-white text-black rounded hover:bg-gray-300 focus:outline-none focus:ring focus:ring-white"
              >
                Yes, Enable Sound
              </button>
              <button
                onClick={handleDisable}
                className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors"
              >
                No, Continue Without
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!showPrompt && children}
    </>
  );
}