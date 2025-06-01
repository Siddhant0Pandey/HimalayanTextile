/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Custom hook for typewriter effect
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
          setTimeout(typeNextChar, speed + Math.random() * 50);
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
      
      oscillator.frequency.setValueAtTime(800 + Math.random() * 200, audioContextRef.current.currentTime);
      oscillator.type = 'square';
      
      gainNode.gain.setValueAtTime(0.05, audioContextRef.current.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.1);
      
      oscillator.start(audioContextRef.current.currentTime);
      oscillator.stop(audioContextRef.current.currentTime + 0.1);
    } catch (e) {
      console.log('Audio not supported');
    }
  };

  return { displayText, isTyping };
};

const ThreadMountains = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-60"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="threadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1fa951" stopOpacity="0.9">
            <animate attributeName="stop-color" 
              values="#1fa951;#10b981;#1fa951;#10b981;#1fa951" 
              dur="15s" 
              repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#1fa951" stopOpacity="0.7">
            <animate attributeName="stop-color" 
              values="#10b981;#1fa951;#10b981;#1fa951;#10b981" 
              dur="15s" 
              repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#1fa951" stopOpacity="0.5">
            <animate attributeName="stop-color" 
              values="#1fa951;#10b981;#1fa951;#10b981;#1fa951" 
              dur="15s" 
              repeatCount="indefinite" />
          </stop>
        </linearGradient>

        <filter id="threadGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Main thread path forming larger mountains */}
      <path
        stroke="url(#threadGradient)"
        strokeWidth="6"
        fill="none"
        filter="url(#threadGlow)"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M0,700 L120,580 L200,450 L280,380 L350,320 L420,250 L500,200 L580,250 L650,320 L720,380 L800,450 L880,520 L1000,580 L1200,700"
        strokeDasharray="3500"
        strokeDashoffset="3500"
      >
        {/* Thread drawing animation */}
        <animate
          attributeName="stroke-dashoffset"
          values="3500;0"
          dur="8s"
          repeatCount="indefinite"
          begin="0s"
        />
        
        {/* Subtle thread movement */}
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 2,-1; -1,2; 1.5,-0.5; 0,0"
          dur="15s"
          repeatCount="indefinite"
          begin="8s"
        />
      </path>

      {/* Moving thread point */}
      <circle
        r="4"
        fill="#ffffff"
        opacity="0.9"
        filter="url(#threadGlow)"
      >
        <animateMotion
          dur="8s"
          repeatCount="indefinite"
          begin="0s"
          path="M0,700 L120,580 L200,450 L280,380 L350,320 L420,250 L500,200 L580,250 L650,320 L720,380 L800,450 L880,520 L1000,580 L1200,700"
        />
        
        <animate
          attributeName="opacity"
          values="0.9; 0.5; 0.9"
          dur="2s"
          repeatCount="indefinite"
        />
        
        <animate
          attributeName="r"
          values="4; 6; 4"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Mountain peak markers */}
      {[
        { x: 200, y: 450, delay: '1.5s' },
        { x: 350, y: 320, delay: '2.5s' },
        { x: 500, y: 200, delay: '4s' },
        { x: 650, y: 320, delay: '5.5s' },
        { x: 800, y: 450, delay: '6.5s' }
      ].map((peak, i) => (
        <g key={`peak-${i}`}>
          <circle
            cx={peak.x}
            cy={peak.y}
            r="8"
            fill="#1fa951"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0; 1; 0.7"
              dur="2s"
              begin={peak.delay}
              fill="freeze"
            />
            
            <animate
              attributeName="r"
              values="8; 12; 10"
              dur="2s"
              begin={peak.delay}
              fill="freeze"
            />
          </circle>
          
          {/* Peak shimmer effect */}
          <circle
            cx={peak.x}
            cy={peak.y}
            r="4"
            fill="#ffffff"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0; 0.8; 0"
              dur="1s"
              begin={peak.delay}
              repeatCount="3"
            />
          </circle>
        </g>
      ))}
    </svg>
  );
};

export default function HeroTitle() {
  const [isVisible, setIsVisible] = useState(false);
  const [enableAudio, setEnableAudio] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const title = "Welcome to Himalayan Textile Industry  ";

  const { displayText: titleText, isTyping } = useTypewriter(
    isVisible ? title : "", 
    100, 
    500,
    enableAudio
  );

  const handleEnableAudio = () => {
    setEnableAudio(true);
  };

  return (
    <div 
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden"
      onClick={handleEnableAudio}
    >
      {/* Thread Mountains Background */}
      <ThreadMountains />
      
      <div className="absolute inset-0 bg-slate-900/20"></div>
      
      {/* Main Content */}
      <motion.h1 
        className="text-4xl lg:text-7xl font-bold text-[#1fa951] text-center px-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {titleText}
        {isTyping && (
          <motion.span 
            className="text-blue-400"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        )}
      </motion.h1>
    </div>
  );
}