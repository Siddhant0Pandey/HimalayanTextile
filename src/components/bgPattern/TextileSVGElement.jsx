/* eslint-disable no-unused-vars */
import { motion, useInView, AnimatePresence } from 'framer-motion';

export const TextileSVGElements = ({ isVisible }) => {
  const textileElements = [
    {
      id: 1,
      x: 10,
      y: 20,
      delay: 0,
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 100 100" fill="currentColor">
          {/* Organic cotton plant */}
          <path d="M50 80 Q45 70 40 60 Q35 50 30 40 Q25 30 20 20" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="35" cy="35" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="32" cy="32" r="3" fill="white"/>
          <circle cx="38" cy="32" r="3" fill="white"/>
          <circle cx="32" cy="38" r="3" fill="white"/>
          <circle cx="38" cy="38" r="3" fill="white"/>
        </svg>
      )
    },
    {
      id: 2,
      x: 85,
      y: 15,
      delay: 0.5,
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 100 100" fill="currentColor">
          {/* Bamboo */}
          <rect x="45" y="10" width="10" height="80" fill="currentColor"/>
          <line x1="40" y1="25" x2="60" y2="25" stroke="currentColor" strokeWidth="2"/>
          <line x1="40" y1="45" x2="60" y2="45" stroke="currentColor" strokeWidth="2"/>
          <line x1="40" y1="65" x2="60" y2="65" stroke="currentColor" strokeWidth="2"/>
          <path d="M35 15 Q30 10 25 15 Q20 20 25 25" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M65 15 Q70 10 75 15 Q80 20 75 25" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      id: 3,
      x: 15,
      y: 70,
      delay: 1,
      svg: (
        <svg className="w-9 h-9" viewBox="0 0 100 100" fill="currentColor">
          {/* Flax plant */}
          <path d="M50 90 L50 10" stroke="currentColor" strokeWidth="3"/>
          <circle cx="50" cy="15" r="4" fill="currentColor"/>
          <circle cx="45" cy="20" r="3" fill="currentColor"/>
          <circle cx="55" cy="20" r="3" fill="currentColor"/>
          <circle cx="40" cy="25" r="2" fill="currentColor"/>
          <circle cx="60" cy="25" r="2" fill="currentColor"/>
          <path d="M40 70 Q35 65 30 70 Q25 75 30 80" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M60 70 Q65 65 70 70 Q75 75 70 80" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      id: 4,
      x: 80,
      y: 75,
      delay: 1.5,
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 100 100" fill="currentColor">
          {/* Recycling symbol */}
          <path d="M50 20 L35 40 L65 40 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
          <path d="M35 40 L20 60 L50 60 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
          <path d="M65 40 L80 60 L50 60 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
          <circle cx="50" cy="30" r="2" fill="currentColor"/>
          <circle cx="27" cy="50" r="2" fill="currentColor"/>
          <circle cx="73" cy="50" r="2" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 5,
      x: 50,
      y: 10,
      delay: 2,
      svg: (
        <svg className="w-7 h-7" viewBox="0 0 100 100" fill="currentColor">
          {/* Spinning wheel */}
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="3"/>
          <circle cx="50" cy="50" r="3" fill="currentColor"/>
          <line x1="50" y1="25" x2="50" y2="75" stroke="currentColor" strokeWidth="2"/>
          <line x1="25" y1="50" x2="75" y2="50" stroke="currentColor" strokeWidth="2"/>
          <circle cx="35" cy="35" r="2" fill="currentColor"/>
          <circle cx="65" cy="35" r="2" fill="currentColor"/>
          <circle cx="35" cy="65" r="2" fill="currentColor"/>
          <circle cx="65" cy="65" r="2" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 6,
      x: 45,
      y: 85,
      delay: 2.5,
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 100 100" fill="currentColor">
          {/* Water drop (water-conscious) */}
          <path d="M50 20 Q40 30 40 45 Q40 60 50 70 Q60 60 60 45 Q60 30 50 20 Z" fill="currentColor"/>
          <circle cx="45" cy="40" r="3" fill="white" opacity="0.7"/>
        </svg>
      )
    }
    
  ];

  return (
    <AnimatePresence>
      {isVisible && textileElements.map((item) => (
        <motion.div
          key={item.id}
          className="absolute cursor-pointer text-green-600 opacity-30 hover:opacity-70 transition-opacity duration-300"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 0.3, rotate: 0 }}
          exit={{ scale: 0, opacity: 0, rotate: 180 }}
          transition={{ delay: item.delay, duration: 0.8, ease: "backOut" }}
          whileHover={{ 
            scale: 1.3, 
            opacity: 0.7,
            rotate: 10,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          {item.svg}
        </motion.div>
      ))}
    </AnimatePresence>
  );
};