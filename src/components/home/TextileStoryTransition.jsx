/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FloatingTextileImage } from '../FloatingParticles/FloatingImage';
import { FloatingTextileElements } from '../FloatingParticles/FloatingTextileParticle';
import { WeavingAnimation } from '../FloatingParticles/WeavingAnimation';
import { TextilePattern } from '../bgPattern/TextilePattern';
import { TextileSVGElements } from '../bgPattern/TextileSVGElement';


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
  const [showTextileElements, setShowTextileElements] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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
      setTimeout(() => setShowTextileElements(true), 2000);
    }
  }, [line2InView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      className="min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100 flex flex-col items-center justify-center px-8 py-16 relative overflow-hidden"
      onClick={handleEnableAudio}
    >
 
      <FloatingTextileImage />
      <FloatingTextileElements />
      <TextilePattern isVisible={line1Visible} />
      <WeavingAnimation isActive={line2Visible} />
      {/* <TextileSVGElements isVisible={showTextileElements} /> */}
      
     
      <motion.div
        className="fixed w-96 h-96 bg-gradient-radial from-green-200/20 to-transparent rounded-full pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <div className="max-w-4xl mx-auto text-center space-y-32 relative z-10">
        
        {/* First Line */}
        <motion.div className="relative">
          <motion.p 
            ref={line1Ref}
            className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-relaxed font-normal relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            {text1}
            {typing1 && (
              <motion.span 
                className="text-green-500"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </motion.p>
          
          {/* Problem indicators */}
          
        </motion.div>

      {/* Enhanced Hemp Leaf SVG Divider */}
        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: line1Visible ? 1 : 0, scale: line1Visible ? 1 : 0.8 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <svg 
              className="w-16 h-16 text-green-500 drop-shadow-lg" 
              viewBox="0 0 100 100" 
              fill="currentColor"
            >
              {/* Hemp leaf with multiple leaflets */}
              <g>
                {/* Center leaflet */}
                <ellipse cx="50" cy="35" rx="3" ry="18" fill="currentColor"/>
                
                {/* Left leaflets */}
                <ellipse cx="42" cy="40" rx="2.5" ry="15" fill="currentColor" transform="rotate(-25 42 40)"/>
                <ellipse cx="35" cy="45" rx="2" ry="12" fill="currentColor" transform="rotate(-45 35 45)"/>
                <ellipse cx="30" cy="52" rx="1.5" ry="8" fill="currentColor" transform="rotate(-65 30 52)"/>
                
                {/* Right leaflets */}
                <ellipse cx="58" cy="40" rx="2.5" ry="15" fill="currentColor" transform="rotate(25 58 40)"/>
                <ellipse cx="65" cy="45" rx="2" ry="12" fill="currentColor" transform="rotate(45 65 45)"/>
                <ellipse cx="70" cy="52" rx="1.5" ry="8" fill="currentColor" transform="rotate(65 70 52)"/>
                
                {/* Stem */}
                <rect x="49" y="55" width="2" height="25" fill="currentColor"/>
                
                {/* Small leaves on stem */}
                <ellipse cx="45" cy="65" rx="4" ry="2" fill="currentColor"/>
                <ellipse cx="55" cy="70" rx="4" ry="2" fill="currentColor"/>
              </g>
            </svg>
          </motion.div>
          
          {/* Particle burst effect */}
          <AnimatePresence>
            {line1Visible && (
              <>
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-green-400 rounded-full"
                    initial={{ scale: 0, x: 0, y: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      x: Math.cos(i * 45 * Math.PI / 180) * 60,
                      y: Math.sin(i * 45 * Math.PI / 180) * 60,
                    }}
                    transition={{ delay: 2.5 + i * 0.1, duration: 1.5 }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Second Line */}
        <motion.div className="relative">
          <motion.p 
            ref={line2Ref}
            className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-relaxed font-normal relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            {text2}
            {typing2 && (
              <motion.span 
                className="text-green-500"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </motion.p>
        
        </motion.div>

        {/* Enhanced Arrow with ripple effect */}
        <motion.div
          className="text-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: line2Visible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg 
              className="w-8 h-8 text-gray-400 cursor-pointer hover:text-green-500 transition-colors duration-300 relative z-10"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
            
            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-green-300"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}