/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, useInView, AnimatePresence } from 'framer-motion';


export const TextilePattern = ({ isVisible }) => {
  const [hoveredThread, setHoveredThread] = useState(null);
  
  const threads = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    horizontal: i % 2 === 0,
    delay: i * 0.1
  }));

  return (
    <motion.div 
      className="absolute inset-0 opacity-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 0.1 : 0 }}
      transition={{ duration: 2 }}
    >
      <svg className="w-full h-full" viewBox="0 0 400 400">
        {threads.map((thread) => (
          <motion.line
            key={thread.id}
            x1={thread.horizontal ? 0 : thread.id * 35}
            y1={thread.horizontal ? thread.id * 35 : 0}
            x2={thread.horizontal ? 400 : thread.id * 35}
            y2={thread.horizontal ? thread.id * 35 : 400}
            stroke="#10b981"
            strokeWidth="2"
            opacity={hoveredThread === thread.id ? 0.6 : 0.3}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isVisible ? 1 : 0 }}
            transition={{ duration: 2, delay: thread.delay }}
            onMouseEnter={() => setHoveredThread(thread.id)}
            onMouseLeave={() => setHoveredThread(null)}
            className="cursor-pointer"
          />
        ))}
      </svg>
    </motion.div>
  );
};