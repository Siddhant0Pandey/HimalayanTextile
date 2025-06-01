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
 const mountainPaths = [
  // Background distant mountains with sharp peaks
  {
    id: 'mountain1',
    path: "M0,750 L200,750 L350,600 L500,750 L650,750 L800,550 L950,750 L1200,750 L1400,650 L1600,750 L2000,750",
    duration: "8s",
    delay: "0s",
    color: "#374151",
    dashArray: "2800"
  },
  
  // Mid-ground mountain range with multiple sharp peaks
  {
    id: 'mountain2',
    path: "M200,750 L400,750 L550,400 L700,750 L850,750 L1000,300 L1150,750 L1300,750 L1450,350 L1600,750 L1800,750 L1950,500 L2100,750 L2400,750",
    duration: "10s",
    delay: "2s",
    color: "#4b5563",
    dashArray: "4200"
  },
  
  // Foreground mountain with tall central peak
  {
    id: 'mountain3',
    path: "M800,750 L1000,750 L1200,200 L1400,750 L1600,750 L1800,100 L2000,750 L2200,750",
    duration: "12s",
    delay: "4s",
    color: "#6b7280",
    dashArray: "3200"
  }
];
  return (
    <div className="absolute bottom-0 left-0 right-0 h-96 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1800 800"
        preserveAspectRatio="xMidYEnd slice"
      >
        <defs>
          {mountainPaths.map((mountain, index) => (
            <linearGradient key={`gradient-${index}`} id={`threadGradient${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={mountain.color} stopOpacity="0.9">
                <animate 
                  attributeName="stop-color" 
                  values={`${mountain.color};#1fa951;${mountain.color};#10b981;${mountain.color}`}
                  dur="12s" 
                  repeatCount="indefinite" 
                />
              </stop>
              <stop offset="50%" stopColor={mountain.color} stopOpacity="0.7">
                <animate 
                  attributeName="stop-color" 
                  values={`#10b981;${mountain.color};#1fa951;${mountain.color};#10b981`}
                  dur="12s" 
                  repeatCount="indefinite" 
                />
              </stop>
              <stop offset="100%" stopColor={mountain.color} stopOpacity="0.5">
                <animate 
                  attributeName="stop-color" 
                  values={`${mountain.color};#10b981;${mountain.color};#1fa951;${mountain.color}`}
                  dur="12s" 
                  repeatCount="indefinite" 
                />
              </stop>
            </linearGradient>
          ))}

          <filter id="threadGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="textileFilter">
            <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
          </filter>
        </defs>

        {mountainPaths.map((mountain, index) => (
          <g key={mountain.id}>
            {/* Main mountain thread */}
            <path
              stroke={`url(#threadGradient${index})`}
              strokeWidth="8"
              fill="none"
              filter="url(#threadGlow)"
              strokeLinecap="round"
              strokeLinejoin="round"
              d={mountain.path}
              strokeDasharray={mountain.dashArray}
              strokeDashoffset={mountain.dashArray}
            >
              <animate
                attributeName="stroke-dashoffset"
                values={`${mountain.dashArray};0`}
                dur={mountain.duration}
                repeatCount="indefinite"
                begin={mountain.delay}
              />
              
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 1,-0.5; -0.5,1; 0.8,-0.3; 0,0"
                dur="20s"
                repeatCount="indefinite"
                begin={`calc(${mountain.delay} + ${mountain.duration})`}
              />
            </path>

            {/* Moving thread needle */}
            <circle
              r="5"
              fill="#ffffff"
              opacity="0.9"
              filter="url(#threadGlow)"
            >
              <animateMotion
                dur={mountain.duration}
                repeatCount="indefinite"
                begin={mountain.delay}
                path={mountain.path}
              />
              
              <animate
                attributeName="opacity"
                values="0.9; 0.4; 0.9"
                dur="1.5s"
                repeatCount="indefinite"
              />
              
              <animate
                attributeName="r"
                values="5; 7; 5"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Thread texture overlay */}
            <path
              stroke={mountain.color}
              strokeWidth="2"
              fill="none"
              opacity="0.3"
              strokeLinecap="round"
              d={mountain.path}
              filter="url(#textileFilter)"
              strokeDasharray="10,5"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-15"
                dur="3s"
                repeatCount="indefinite"
                begin={`calc(${mountain.delay} + ${mountain.duration})`}
              />
            </path>
          </g>
        ))}

        {/* Peak markers with textile-inspired design */}
        {[
          { x: 350, y: 520, delay: '3s', mountain: 0 },
          { x: 850, y: 450, delay: '6s', mountain: 1 },
          { x: 1420, y: 580, delay: '8s', mountain: 2 }
        ].map((peak, i) => (
          <g key={`peak-${i}`}>
            {/* Main peak marker */}
            <circle
              cx={peak.x}
              cy={peak.y}
              r="12"
              fill="#1fa951"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0; 1; 0.8"
                dur="2s"
                begin={peak.delay}
                fill="freeze"
              />
              
              <animate
                attributeName="r"
                values="12; 16; 14"
                dur="2s"
                begin={peak.delay}
                fill="freeze"
              />
            </circle>
            
            {/* Textile button center */}
            <circle
              cx={peak.x}
              cy={peak.y}
              r="6"
              fill="#ffffff"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0; 0.9; 0.7"
                dur="1.5s"
                begin={peak.delay}
                fill="freeze"
              />
            </circle>

            {/* Button holes */}
            <circle
              cx={peak.x - 2}
              cy={peak.y - 2}
              r="1"
              fill="#1fa951"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0; 1"
                dur="0.5s"
                begin={`calc(${peak.delay} + 1s)`}
                fill="freeze"
              />
            </circle>
            <circle
              cx={peak.x + 2}
              cy={peak.y + 2}
              r="1"
              fill="#1fa951"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0; 1"
                dur="0.5s"
                begin={`calc(${peak.delay} + 1.2s)`}
                fill="freeze"
              />
            </circle>

            {/* Peak shimmer */}
            <circle
              cx={peak.x}
              cy={peak.y}
              r="8"
              fill="#ffffff"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0; 0.6; 0"
                dur="1s"
                begin={peak.delay}
                repeatCount="2"
              />
            </circle>
          </g>
        ))}

        {/* Floating textile fibers */}
        {Array.from({ length: 12 }, (_, i) => (
          <circle
            key={`fiber-${i}`}
            r="2"
            fill="#10b981"
            opacity="0.4"
            cx={150 + i * 140}
            cy={600 + Math.sin(i) * 50}
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values={`0,0; ${Math.sin(i) * 20},${Math.cos(i) * 15}; 0,0`}
              dur={`${8 + i}s`}
              repeatCount="indefinite"
              begin={`${i * 0.5}s`}
            />
            
            <animate
              attributeName="opacity"
              values="0.4; 0.8; 0.4"
              dur="4s"
              repeatCount="indefinite"
              begin={`${i * 0.3}s`}
            />
          </circle>
        ))}
      </svg>
    </div>
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

  const title = "Himalayan Textile Industry";
  // const subtitle = "Weaving Excellence Since Generations";

  const { displayText: titleText, isTyping: titleTyping } = useTypewriter(
    isVisible ? title : "", 
    120, 
    500,
    enableAudio
  );

  // const { displayText: subtitleText, isTyping: subtitleTyping } = useTypewriter(
  //   isVisible ? subtitle : "", 
  //   80, 
  //   3500,
  //   enableAudio
  // );

  const handleEnableAudio = () => {
    setEnableAudio(true);
  };

  return (
    <div 
      ref={ref}
      className="h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900"
      onClick={handleEnableAudio}
    >
      {/* Thread Mountains at bottom */}
      <ThreadMountains />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/10 to-slate-900/50"></div>
      
      {/* Main Content - positioned in upper portion */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <motion.div
          className="text-center px-8 max-w-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Title */}
          <h1 className="text-5xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            {titleText}
            {titleTyping && (
              <motion.span 
                className="text-emerald-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </h1>

          {/* Subtitle */}
          {/* <div className="text-xl lg:text-3xl text-emerald-200 font-light tracking-wide">
            {subtitleText}
            {subtitleTyping && (
              <motion.span 
                className="text-emerald-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </div> */}
        </motion.div>
      </div>

      {/* Audio enable hint */}
      {/* {!enableAudio && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-emerald-300 text-sm opacity-60"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Click anywhere to enable typewriter sounds
        </motion.div>
      )} */}
    </div>
  );
}