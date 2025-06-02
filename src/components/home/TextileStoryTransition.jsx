/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

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

// Floating Textile Elements Component
const FloatingTextileElements = () => {
  const elements = [
    {
      id: 1,
      x: 15,
      y: 20,
      delay: 0,
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 100 100" fill="currentColor">
          {/* Cotton boll */}
          <circle cx="50" cy="50" r="20" fill="#f8f8f8" stroke="currentColor" strokeWidth="2"/>
          <circle cx="45" cy="45" r="8" fill="#ffffff"/>
          <circle cx="55" cy="45" r="8" fill="#ffffff"/>
          <circle cx="45" cy="55" r="8" fill="#ffffff"/>
          <circle cx="55" cy="55" r="8" fill="#ffffff"/>
        </svg>
      )
    },
    {
      id: 2,
      x: 80,
      y: 30,
      delay: 1,
      svg: (
        <svg className="w-6 h-6" viewBox="0 0 100 100" fill="currentColor">
          {/* Loom shuttle */}
          <ellipse cx="50" cy="50" rx="35" ry="8" fill="currentColor"/>
          <rect x="40" y="45" width="20" height="10" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 3,
      x: 25,
      y: 70,
      delay: 2,
      svg: (
        <svg className="w-7 h-7" viewBox="0 0 100 100" fill="currentColor">
          {/* Spinning wheel */}
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="3"/>
          <circle cx="50" cy="50" r="3" fill="currentColor"/>
          <line x1="50" y1="25" x2="50" y2="75" stroke="currentColor" strokeWidth="2"/>
          <line x1="25" y1="50" x2="75" y2="50" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 4,
      x: 75,
      y: 75,
      delay: 3,
      svg: (
        <svg className="w-6 h-6" viewBox="0 0 100 100" fill="currentColor">
          {/* Thread spool */}
          <rect x="35" y="20" width="30" height="60" rx="5" fill="currentColor"/>
          <ellipse cx="50" cy="25" rx="20" ry="5" fill="currentColor"/>
          <ellipse cx="50" cy="75" rx="20" ry="5" fill="currentColor"/>
        </svg>
      )
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute text-green-500 opacity-20"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {element.svg}
        </motion.div>
      ))}
    </div>
  );
};

// Interactive Textile Pattern Component
const TextilePattern = ({ isVisible }) => {
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

// Textile-themed SVG elements
const TextileSVGElements = ({ isVisible }) => {
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

// Weaving Animation Component
const WeavingAnimation = ({ isActive }) => {
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
      {/* Background Elements */}
      <FloatingTextileElements />
      <TextilePattern isVisible={line1Visible} />
      <WeavingAnimation isActive={line2Visible} />
      <TextileSVGElements isVisible={showTextileElements} />
      
      {/* Cursor-following gradient effect */}
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