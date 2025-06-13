/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const useTypewriter = (text, speed = 80, delay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!text) return;
    
    setDisplayText('');
    setIsTyping(true);
    
    const timeout = setTimeout(() => {
      let index = 0;
      
      const typeNextChar = () => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
          setTimeout(typeNextChar, speed + Math.random() * 20);
        } else {
          setIsTyping(false);
        }
      };
      
      typeNextChar();
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayText, isTyping };
};

export default function TextileTransitionPage() {
  const [line1Visible, setLine1Visible] = useState(false);
  const [line2Visible, setLine2Visible] = useState(false);
  
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  
  const line1InView = useInView(line1Ref, { threshold: 0.3 });
  const line2InView = useInView(line2Ref, { threshold: 0.3 });

  const line1 = "There are lot of challenges in textile industry.";
  const line2 = "Himalayan Textile is here for these challenges.";

  const { displayText: text1, isTyping: typing1 } = useTypewriter(
    line1Visible ? line1 : "", 
    60, 
    200
  );

  const { displayText: text2, isTyping: typing2 } = useTypewriter(
    line2Visible ? line2 : "", 
    60, 
    200
  );

  useEffect(() => {
    if (line1InView) {
      setLine1Visible(true);
    }
  }, [line1InView]);

  useEffect(() => {
    if (line2InView && !typing1) {
      setLine2Visible(true);
    }
  }, [line2InView, typing1]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16 relative">
      
      <div className="max-w-4xl mx-auto text-center space-y-32 relative">
        
        {/* Problem Section */}
        <motion.div className="relative min-h-[160px] flex items-center justify-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              ref={line1Ref}
              className="text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed max-w-2xl"
            >
              {text1}
              {typing1 && (
                <motion.span 
                  className="text-red-400 font-normal"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              )}
            </motion.p>
            
            {/* Simple problem indicator */}
            <motion.div
              className="absolute -top-2 -right-2 w-3 h-3 bg-red-400 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: line1Visible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
          </motion.div>
        </motion.div>

        {/* Simple Transition */}
        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: line1Visible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div className="flex items-center space-x-6">
            <motion.div 
              className="w-12 h-px bg-gray-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: line1Visible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            />
            
           <motion.div
              className="relative"
              whileHover={{ scale: 1.2, rotate: 15 }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl"><img src="/assets/img/hempp.svg" alt='hemp image'/></span>
              </div>
              
         
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-emerald-300"
                animate={{
                  scale: [1, 2.5],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.div>
            
            <motion.div 
              className="w-12 h-px bg-gray-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: line1Visible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            />
          </motion.div>
        </motion.div>

        {/* Solution Section */}
        <motion.div className="relative min-h-[160px] flex items-center justify-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: line2Visible ? 1 : 0, y: line2Visible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p 
              ref={line2Ref}
              className="text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed max-w-3xl"
            >
              <motion.span
                className="font-medium text-emerald-600"
              >
                Himalayan Textile
              </motion.span>{" "}
              {text2.replace("Himalayan Textile ", "")}
              {typing2 && (
                <motion.span 
                  className="text-emerald-500 font-normal"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              )}
            </motion.p>
            
            {/* Simple solution indicator */}
            <motion.div
              className="absolute -top-2 -right-2 w-3 h-3 bg-emerald-500 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: line2Visible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
          </motion.div>
        </motion.div>

        {/* Minimal Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: line2Visible ? 1 : 0, y: line2Visible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 2.5 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 text-gray-600 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-sm font-medium group-hover:text-emerald-600 transition-colors duration-200">
              Learn More
            </span>
            <motion.svg 
              className="w-4 h-4 text-emerald-500 group-hover:text-emerald-600 transition-colors duration-200"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}