/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function ScrollHint({ currentSection, totalSections }) {
  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 text-center"
      animate={{ 
        opacity: [0.5, 1, 0.5],
        y: [0, -5, 0]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="text-sm text-white/60 mb-2">
        {currentSection < totalSections - 1 ? 'Scroll or swipe to continue' : 'End of story'}
      </div>
      {currentSection < totalSections - 1 && (
        <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto relative">
          <motion.div 
            className="w-2 h-2 bg-white/60 rounded-full absolute left-1/2 transform -translate-x-1/2 top-2"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      )}
    </motion.div>
  );
}