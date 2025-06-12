/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

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

// Floating Textile Threads Component
const FloatingThreads = ({ isVisible }) => {
  const threads = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 0.3,
    duration: 8 + Math.random() * 4,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {threads.map((thread) => (
        <motion.div
          key={thread.id}
          className="absolute w-px h-20 bg-gradient-to-b from-emerald-300/60 to-transparent"
          initial={{ 
            x: `${thread.startX}vw`, 
            y: `${thread.startY}vh`,
            opacity: 0,
            rotate: Math.random() * 360
          }}
          animate={isVisible ? {
            x: `${(thread.startX + 20) % 100}vw`,
            y: `${(thread.startY + 30) % 100}vh`,
            opacity: [0, 0.6, 0],
            rotate: thread.id * 30
          } : {}}
          transition={{
            duration: thread.duration,
            delay: thread.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Woven Pattern Background
const WovenPattern = ({ isActive }) => {
  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 0.1 : 0 }}
      transition={{ duration: 2 }}
    >
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="weave" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none"/>
            <path d="M0,0 L20,20 M20,0 L40,20 M0,20 L20,40 M20,20 L40,40" stroke="currentColor" strokeWidth="0.5" className="text-emerald-800/20"/>
            <path d="M0,20 L20,0 M20,40 L40,20 M20,20 L40,0 M0,40 L20,20" stroke="currentColor" strokeWidth="0.5" className="text-emerald-600/20"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#weave)"/>
      </svg>
    </motion.div>
  );
};


export default function TextileTransitionPage() {
  const [enableAudio, setEnableAudio] = useState(false);
  const [line1Visible, setLine1Visible] = useState(false);
  const [line2Visible, setLine2Visible] = useState(false);
 
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const containerRef = useRef(null);
  
  const line1InView = useInView(line1Ref, { threshold: 0.3 });
  const line2InView = useInView(line2Ref, { threshold: 0.3 });

  useEffect(() => {
    if (line1InView) {
      setLine1Visible(true);
      // setTimeout(() => setShowProblems(true), 1500);
    }
  }, [line1InView]);

  useEffect(() => {
    if (line2InView) {
      setLine2Visible(true);
      // setTimeout(() => setShowSolutions(true), 1500);
    }
  }, [line2InView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleEnableAudio = () => {
    setEnableAudio(true);
  };

  const line1 = "There are lot of challenges in textile industry.";
  const line2 = "Himalayan Textile is here for these challenges.";

  const { displayText: text1, isTyping: typing1 } = useTypewriter(
    line1Visible ? line1 : "", 
    70, 
    300,
    enableAudio
  );

  const { displayText: text2, isTyping: typing2 } = useTypewriter(
    line2Visible ? line2 : "", 
    70, 
    300,
    enableAudio
  );

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
      onClick={handleEnableAudio}
    >
      {/* Background Elements */}
      <FloatingThreads isVisible={line1Visible} />
      <WovenPattern isActive={line2Visible} />
      
      {/* Interactive Glow Effect */}
      <motion.div
        className="fixed w-80 h-80 rounded-full pointer-events-none z-0 opacity-30"
        style={{
          background: `radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)`,
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        transition={{ type: "spring", damping: 40, stiffness: 100 }}
      />

      <div className="max-w-5xl mx-auto text-center space-y-24 relative z-10">
        
        {/* First Section - Problems */}
        <motion.div className="relative min-h-[200px] flex items-center justify-center">
          <motion.div
            className="relative bg-white backdrop-blur-sm rounded-3xl p-12 border border-white/30 shadow-xl"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.p 
              ref={line1Ref}
              className="text-4xl lg:text-5xl font-light text-darkText leading-relaxed max-w-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {text1}
              {typing1 && (
                <motion.span 
                  className="text-red-500 font-normal"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              )}
            </motion.p>
            
            {/* Decorative Problem Accent */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-red-400 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                boxShadow: ["0 0 0 0 rgba(239, 68, 68, 0.7)", "0 0 0 20px rgba(239, 68, 68, 0)", "0 0 0 0 rgba(239, 68, 68, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          {/* <ProblemVisualization isVisible={showProblems} /> */}
        </motion.div>

        {/* Elegant Transition Element */}
        <motion.div 
          className="flex items-center justify-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: line1Visible ? 1 : 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div className="flex items-center space-x-4">
            {/* Decorative Lines */}
            <motion.div 
              className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: line1Visible ? 1 : 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            />
            
            {/* Central Hemp Leaf */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.2, rotate: 15 }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl"><img src="/assets/img/hempp.svg" alt='hemp image'/></span>
              </div>
              
              {/* Ripple Effect */}
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
              className="w-16 h-px bg-gradient-to-l from-transparent to-emerald-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: line1Visible ? 1 : 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            />
          </motion.div>
        </motion.div>

        {/* Second Section - Solution */}
        <motion.div className="relative min-h-[200px] flex items-center justify-center">
          <motion.div
            className="relative bg-emerald-50/80 backdrop-blur-sm rounded-3xl p-12 border border-emerald-200/50 shadow-xl"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: line2Visible ? 1 : 0, y: line2Visible ? 0 : 50, scale: line2Visible ? 1 : 0.9 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <motion.p 
              ref={line2Ref}
              className="text-4xl lg:text-5xl font-light text-emerald-800 leading-relaxed max-w-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                className="font-semibold text-emerald-600"
                animate={{ color: ["#059669", "#10b981", "#059669"] }}
                transition={{ duration: 3, repeat: Infinity }}
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
            
            {/* Success Indicator */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: ["0 0 0 0 rgba(16, 185, 129, 0.7)", "0 0 0 15px rgba(16, 185, 129, 0)", "0 0 0 0 rgba(16, 185, 129, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <span className="text-white text-sm">✓</span>
            </motion.div>
          </motion.div>
          
          {/* <SolutionVisualization isVisible={showSolutions} /> */}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: line2Visible ? 1 : 0, y: line2Visible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200/50 shadow-lg cursor-pointer"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              borderColor: "rgba(16, 185, 129, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 4 }}
          >
            <span className="text-gray-600 font-medium">Discover Our Solutions</span>
            <motion.svg 
              className="w-5 h-5 text-emerald-500"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}