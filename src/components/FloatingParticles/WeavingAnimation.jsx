/* eslint-disable no-unused-vars */
import { motion, useInView, AnimatePresence } from 'framer-motion';


export const WeavingAnimation = ({ isActive }) => {
  return (
    <motion.div 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 0.3 : 0 }}
    >
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Vertical threads */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={10 + i * 10}
            y1="10"
            x2={10 + i * 10}
            y2="90"
            stroke="#10b981"
            strokeWidth="1"
            opacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isActive ? 1 : 0 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}
        
        {/* Horizontal weaving thread */}
        <motion.path
          d="M 10 20 Q 20 15 30 20 Q 40 25 50 20 Q 60 15 70 20 Q 80 25 90 20"
          stroke="#065f46"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isActive ? 1 : 0 }}
          transition={{ duration: 2, delay: 1 }}
        />
        
        <motion.path
          d="M 10 40 Q 20 45 30 40 Q 40 35 50 40 Q 60 45 70 40 Q 80 35 90 40"
          stroke="#065f46"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isActive ? 1 : 0 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
        
        <motion.path
          d="M 10 60 Q 20 55 30 60 Q 40 65 50 60 Q 60 55 70 60 Q 80 65 90 60"
          stroke="#065f46"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isActive ? 1 : 0 }}
          transition={{ duration: 2, delay: 2 }}
        />
      </svg>
    </motion.div>
  );
};