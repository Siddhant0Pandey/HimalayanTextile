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

// Thread Mountains with Drawing Animation
const ThreadMountains = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-60"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="threadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9">
            <animate attributeName="stop-color" 
              values="#3b82f6;#8b5cf6;#06b6d4;#10b981;#3b82f6" 
              dur="15s" 
              repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.7">
            <animate attributeName="stop-color" 
              values="#8b5cf6;#06b6d4;#10b981;#3b82f6;#8b5cf6" 
              dur="15s" 
              repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5">
            <animate attributeName="stop-color" 
              values="#06b6d4;#10b981;#3b82f6;#8b5cf6;#06b6d4" 
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

      {/* Single Thread Drawing Mountain Range - Bottom of Screen */}
      <path
        stroke="url(#threadGradient)"
        strokeWidth="4"
        fill="none"
        filter="url(#threadGlow)"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M0,750 L150,720 L300,680 L450,690 L600,670 L750,685 L900,675 L1050,695 L1200,750"
        strokeDasharray="2500"
        strokeDashoffset="2500"
      >
        {/* Thread drawing animation from left to right */}
        <animate
          attributeName="stroke-dashoffset"
          values="2500;0"
          dur="8s"
          repeatCount="indefinite"
          begin="0s"
        />
        
        {/* Subtle thread movement after drawing */}
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 2,-1; -1,2; 1.5,-0.5; 0,0"
          dur="15s"
          repeatCount="indefinite"
          begin="8s"
        />
      </path>

      {/* Thread needle/tip indicator moving along the path */}
      <circle
        r="3"
        fill="#ffffff"
        opacity="0.9"
        filter="url(#threadGlow)"
      >
        <animateMotion
          dur="8s"
          repeatCount="indefinite"
          begin="0s"
          path="M0,750 L150,720 L300,680 L450,690 L600,670 L750,685 L900,675 L1050,695 L1200,750"
        />
        
        <animate
          attributeName="opacity"
          values="0.9; 0.5; 0.9"
          dur="2s"
          repeatCount="indefinite"
        />
        
        <animate
          attributeName="r"
          values="3; 5; 3"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Mountain peak highlights that appear as thread passes */}
      {[
        { x: 300, y: 680, delay: '2.5s' },
        { x: 600, y: 670, delay: '4.5s' },
        { x: 900, y: 675, delay: '6.5s' }
      ].map((peak, i) => (
        <g key={`peak-${i}`}>
          <circle
            cx={peak.x}
            cy={peak.y}
            r="6"
            fill="#06b6d4"
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
              values="6; 10; 8"
              dur="2s"
              begin={peak.delay}
              fill="freeze"
            />
          </circle>
          
          {/* Peak shimmer effect */}
          <circle
            cx={peak.x}
            cy={peak.y}
            r="3"
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

  const title = "Welcome to Himalayan Textile";

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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 relative overflow-hidden"
      onClick={handleEnableAudio}
    >
      {/* Animated Thread Mountains Background */}
      <ThreadMountains />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-900/20"></div>
      
      {/* Main Content */}
      <motion.h1 
        className="text-4xl lg:text-7xl font-bold text-white text-center px-8 relative z-10"
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