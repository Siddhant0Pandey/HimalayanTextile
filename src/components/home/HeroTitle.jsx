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

const RealisticMountains = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const mountainLayers = [
    // Background mountains - most distant, lighter, softer
    {
      id: 'bg-mountain-1',
      path: "M0,620 L180,600 L320,550 L450,580 L600,520 L750,560 L900,500 L1050,540 L1200,480 L1350,520 L1500,460 L1650,500 L1800,540 L1920,560 L2000,580 L2000,800 L0,800 Z",
      color: "#e2e8f0",
      opacity: 0.5,
      transform: "translateY(20px)"
    },
    {
      id: 'bg-mountain-2', 
      path: "M0,680 L150,650 L280,620 L420,640 L560,600 L700,630 L840,580 L980,610 L1120,560 L1260,590 L1400,540 L1540,570 L1680,620 L1820,640 L1960,660 L2000,680 L2000,800 L0,800 Z",
      color: "#cbd5e1",
      opacity: 0.6,
      transform: "translateY(15px)"
    },
    
    // Mid-ground mountains - more defined
    {
      id: 'mid-mountain-1',
      path: "M0,720 L120,690 L240,660 L360,680 L480,640 L600,660 L720,620 L840,650 L960,600 L1080,630 L1200,580 L1320,610 L1440,640 L1560,660 L1680,680 L1800,700 L1920,720 L2000,740 L2000,800 L0,800 Z",
      color: "#729a78",
      opacity: 0.7,
      transform: "translateY(10px)"
    },
    {
      id: 'mid-mountain-2',
      path: "M0,760 L100,730 L200,710 L300,740 L400,700 L500,720 L600,680 L700,710 L800,670 L900,700 L1000,660 L1100,690 L1200,720 L1300,740 L1400,760 L1500,740 L1600,760 L1700,780 L1800,760 L1900,780 L2000,760 L2000,800 L0,800 Z",
      color: "#1fa951",
      opacity: 0.8,
      transform: "translateY(5px)"
    },
    
    // Foreground mountains - darkest, most defined
    {
      id: 'fg-mountain-1',
      path: "M0,790 L80,760 L160,740 L240,760 L320,730 L400,750 L480,720 L560,740 L640,710 L720,730 L800,700 L880,720 L960,740 L1040,760 L1120,740 L1200,760 L1280,780 L1360,760 L1440,780 L1520,790 L1600,780 L1680,790 L1760,780 L1840,790 L1920,780 L2000,790 L2000,800 L0,800 Z",
      color: "#F0F7F4",
      opacity: 0.9,
      transform: "translateY(2px)"
    },
    {
      id: 'fg-mountain-2',
      path: "M0,800 L60,785 L120,790 L180,785 L240,790 L300,785 L360,790 L420,785 L480,790 L540,785 L600,790 L660,785 L720,790 L780,785 L840,790 L900,785 L960,790 L1020,785 L1080,790 L1140,785 L1200,790 L1260,785 L1320,790 L1380,785 L1440,790 L1500,785 L1560,790 L1620,785 L1680,790 L1740,785 L1800,790 L1860,785 L1920,790 L1980,785 L2000,795 L2000,800 L0,800 Z",
      color: "#729a78",
      opacity: 1,
      transform: "translateY(0px)"
    }
  ];

  return (
    <motion.div 
      className="absolute bottom-0 left-0 right-0 h-96 overflow-hidden w-full"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 2000 800"
        preserveAspectRatio="none"
        style={{ display: 'block' }}
      >
        <defs>
          {/* Mountain gradients for depth */}
          {mountainLayers.map((mountain, index) => (
            <linearGradient key={`mountain-gradient-${index}`} id={`mountainGrad${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={mountain.color} stopOpacity={mountain.opacity} />
              <stop offset="70%" stopColor={mountain.color} stopOpacity={mountain.opacity * 0.8} />
              <stop offset="100%" stopColor={mountain.color} stopOpacity={mountain.opacity * 0.6} />
            </linearGradient>
          ))}

          {/* Atmospheric haze filter */}
          <filter id="atmosphericHaze">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feOffset in="blur" dx="0" dy="1" result="offsetBlur"/>
            <feMerge>
              <feMergeNode in="offsetBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Snow caps filter */}
          <filter id="snowCap">
            <feGaussianBlur stdDeviation="1" result="softSnow"/>
            <feMerge>
              <feMergeNode in="SourceGraphic"/>
              <feMergeNode in="softSnow"/>
            </feMerge>
          </filter>
        </defs>

        {/* Render mountain layers from back to front */}
        {mountainLayers.map((mountain, index) => (
          <motion.g 
            key={mountain.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.8 + (index * 0.2),
              ease: "easeOut" 
            }}
          >
            {/* Main mountain shape */}
            <path
              d={mountain.path}
              fill={`url(#mountainGrad${index})`}
              filter={index < 2 ? "url(#atmosphericHaze)" : "none"}
              style={{
                transform: mountain.transform
              }}
            >
              {/* Subtle breathing animation for atmospheric effect */}
              <animateTransform
                attributeName="transform"
                type="translate"
                values={`0,${index * 2}; 0,${index * 2 + 1}; 0,${index * 2}`}
                dur={`${25 + index * 5}s`}
                repeatCount="indefinite"
                begin={`${index * 2}s`}
              />
              
              {/* Very subtle opacity changes for atmospheric depth */}
              <animate
                attributeName="opacity"
                values={`${mountain.opacity}; ${mountain.opacity * 0.95}; ${mountain.opacity}`}
                dur={`${30 + index * 10}s`}
                repeatCount="indefinite"
                begin={`${index * 3}s`}
              />
            </path>

            {/* Snow caps on higher peaks (only for background mountains) */}
            {index < 3 && (
              <g>
                {/* Individual peak snow caps */}
                {index === 0 && (
                  <>
                    <path d="M320,550 L340,540 L360,550 Z" fill="rgba(255,255,255,0.4)" opacity="0.7">
                      <animate attributeName="opacity" values="0.7; 0.9; 0.7" dur="50s" repeatCount="indefinite" />
                    </path>
                    <path d="M900,500 L920,490 L940,500 Z" fill="#729a78" opacity="0.7">
                      <animate attributeName="opacity" values="0.7; 0.9; 0.7" dur="45s" repeatCount="indefinite" />
                    </path>
                    <path d="M1200,480 L1220,470 L1240,480 Z" fill="rgba(255,255,255,0.4)" opacity="0.7">
                      <animate attributeName="opacity" values="0.7; 0.9; 0.7" dur="55s" repeatCount="indefinite" />
                    </path>
                  </>
                )}
                
                {index === 1 && (
                  <>
                    <path d="M280,620 L300,610 L320,620 Z" fill="#729a78" opacity="0.6">
                      <animate attributeName="opacity" values="0.6; 0.8; 0.6" dur="40s" repeatCount="indefinite" />
                    </path>
                    <path d="M840,580 L860,570 L880,580 Z" fill="#729a78" opacity="0.6">
                      <animate attributeName="opacity" values="0.6; 0.8; 0.6" dur="48s" repeatCount="indefinite" />
                    </path>
                  </>
                )}
              </g>
            )}
          </motion.g>
        ))}

        {/* Gentle mist/cloud effects */}
        {Array.from({ length: 15 }, (_, i) => (
          <motion.ellipse
            key={`mist-${i}`}
            cx={150 + i * 120}
            cy={550 + Math.sin(i) * 40}
            rx={60 + Math.random() * 30}
            ry={15 + Math.random() * 10}
            fill="rgba(255,255,255,0.15)"
            opacity="0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ 
              duration: 1.5,
              delay: 2 + (i * 0.1),
              ease: "easeOut"
            }}
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values={`0,0; ${8 + Math.sin(i) * 4},${Math.cos(i) * 2}; 0,0`}
              dur={`${80 + i * 15}s`}
              repeatCount="indefinite"
              begin={`${i * 8}s`}
            />
            
            <animate
              attributeName="opacity"
              values="0.4; 0.1; 0.4"
              dur={`${60 + i * 12}s`}
              repeatCount="indefinite"
              begin={`${i * 5}s`}
            />
          </motion.ellipse>
        ))}

        {/* Distant birds (optional detail) */}
        {Array.from({ length: 10 }, (_, i) => (
          <motion.g 
            key={`bird-${i}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1,
              delay: 3 + (i * 0.3),
              ease: "easeOut"
            }}
          >
            <path
              d={`M${300 + i * 150},${420 + i * 15} Q${305 + i * 150},${415 + i * 15} ${310 + i * 150},${420 + i * 15} Q${315 + i * 150},${415 + i * 15} ${320 + i * 150},${420 + i * 15}`}
              stroke="rgba(0,0,0,0.08)"
              strokeWidth="1"
              fill="none"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values={`0,0; ${60 + i * 15},${Math.sin(i) * 8}; ${120 + i * 30},${Math.cos(i) * 12}`}
                dur={`${120 + i * 30}s`}
                repeatCount="indefinite"
                begin={`${i * 20}s`}
              />
            </path>
          </motion.g>
        ))}
      </svg>
    </motion.div>
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

  const welcomeText = "Welcome to the";
  const title = "Himalayan Textile Industries";

  const { displayText: welcomeDisplayText, isTyping: welcomeTyping } = useTypewriter(
    isVisible ? welcomeText : "", 
    100, 
    300,
    enableAudio
  );

  const { displayText: titleText, isTyping: titleTyping } = useTypewriter(
    isVisible ? title : "", 
    120, 
    1800, // Delay to start after welcome text
    enableAudio
  );

  const handleEnableAudio = () => {
    setEnableAudio(true);
  };

  return (
    <div 
      ref={ref}
      className="h-screen relative overflow-hidden bg-gradient-to-b from-sky-50 via-sky-100 to-sky-100 w-full"
      onClick={handleEnableAudio}
    >
      {/* Realistic Mountains at bottom */}
      <RealisticMountains />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <motion.div
          className="text-center px-8 max-w-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Welcome Text */}
          <h2 className="text-2xl lg:text-4xl font-normal text-emerald-900 mb-4">
            {welcomeDisplayText}
            {welcomeTyping && (
              <motion.span 
                className="text-emerald-900"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </h2>

          {/* Main Title */}
          <h1 className="text-5xl lg:text-6xl font-normal text-emerald-600 mb-8 leading-tight ">
            {titleText}
            {titleTyping && (
              <motion.span 
                className="text-emerald-600"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </h1>
        </motion.div>
      </div>
    </div>
  );
}