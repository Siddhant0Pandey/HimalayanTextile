/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Custom hook for typewriter effect with sound
const useTypewriter = (text, speed = 80, delay = 0, enableAudio = false) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const audioContextRef = useRef(null);

  useEffect(() => {
    if (!text) return;
    
    setDisplayText('');
    setIsTyping(true);
    
    const timeout = setTimeout(() => {
      let index = 0;
      
      const typeNextChar = () => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          
          // Play typewriter sound
          if (enableAudio && audioContextRef.current) {
            playTypewriterSound();
          }
          
          index++;
          setTimeout(typeNextChar, speed + Math.random() * 30);
        } else {
          setIsTyping(false);
        }
      };
      
      typeNextChar();
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay, enableAudio]);

  const playTypewriterSound = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      const oscillator = audioContextRef.current.createOscillator();
      const gainNode = audioContextRef.current.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);
      
      oscillator.frequency.setValueAtTime(700 + Math.random() * 150, audioContextRef.current.currentTime);
      oscillator.type = 'square';
      
      gainNode.gain.setValueAtTime(0.03, audioContextRef.current.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.08);
      
      oscillator.start(audioContextRef.current.currentTime);
      oscillator.stop(audioContextRef.current.currentTime + 0.08);
    } catch (e) {
      console.log('Audio not supported');
    }
  };

  return { displayText, isTyping };
};

export default function TextileTransitionPage() {
  const [enableAudio, setEnableAudio] = useState(false);
  const [line1Visible, setLine1Visible] = useState(false);
  const [line2Visible, setLine2Visible] = useState(false);
  
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  
  const line1InView = useInView(line1Ref, { threshold: 0.5 });
  const line2InView = useInView(line2Ref, { threshold: 0.5 });

  useEffect(() => {
    if (line1InView) {
      setLine1Visible(true);
    }
  }, [line1InView]);

  useEffect(() => {
    if (line2InView) {
      setLine2Visible(true);
    }
  }, [line2InView]);

  const handleEnableAudio = () => {
    setEnableAudio(true);
  };

  const line1 = "There are lot of challenges in textile industry.";
  const line2 = "Himalayan Textile is here for these challenges.";

  const { displayText: text1, isTyping: typing1 } = useTypewriter(
    line1Visible ? line1 : "", 
    90, 
    500,
    enableAudio
  );

  const { displayText: text2, isTyping: typing2 } = useTypewriter(
    line2Visible ? line2 : "", 
    90, 
    500,
    enableAudio
  );

  return (
    <div 
      className="min-h-screen bg-white flex flex-col items-center justify-center px-8 py-16"
      onClick={handleEnableAudio}
    >
      <div className="max-w-4xl mx-auto text-center space-y-32">
        
        {/* First Line */}
        <motion.p 
          ref={line1Ref}
          className="text-2xl md:text-4xl lg:text-5xl text-gray-800 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {text1}
          {typing1 && (
            <motion.span 
              className="text-gray-400"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          )}
        </motion.p>

        {/* Simple Divider */}
        <motion.div 
          className="w-16 h-px bg-gray-300 mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: line1Visible ? 1 : 0 }}
          transition={{ duration: 1, delay: 2 }}
        />

        {/* Second Line */}
        <motion.p 
          ref={line2Ref}
          className="text-2xl md:text-4xl lg:text-5xl text-gray-800 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {text2}
          {typing2 && (
            <motion.span 
              className="text-gray-400"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          )}
        </motion.p>

        {/* Simple Arrow */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: line2Visible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <motion.svg 
            className="w-8 h-8 text-gray-400 mx-auto cursor-pointer hover:text-gray-600 transition-colors duration-300"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </div>
    </div>
  );
}