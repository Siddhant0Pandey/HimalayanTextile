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
  // Mountain Range 0 (New Far Left - Distant peaks)
  {
    id: 'mountain0',
    path: "M-200,750 L-160,730 L-120,705 L-80,675 L-40,640 L0,600 L40,555 L80,505 L120,450 L160,395 L200,340 L240,395 L280,450 L320,505 L360,555 L400,600 L440,640 L480,675 L520,705 L560,730 L600,750",
    duration: "7s",
    delay: "0s",
    color: "#111827",
    dashArray: "3000"
  },
  
  // Mountain Range 1 (Far Left - Rocky peaks with snow caps)
  {
    id: 'mountain1',
    path: "M200,750 L245,720 L285,680 L310,650 L340,620 L365,590 L385,560 L400,520 L420,480 L440,450 L465,420 L485,450 L510,480 L535,510 L560,540 L585,570 L610,600 L640,630 L670,660 L700,690 L730,720 L760,750",
    duration: "8s",
    delay: "0.5s",
    color: "#1f2937",
    dashArray: "3200"
  },
  
  // Mountain Range 2 (Left-Center - Alpine style with multiple jagged peaks)
  {
    id: 'mountain2',
    path: "M600,750 L630,720 L665,685 L695,645 L720,600 L745,555 L775,510 L800,465 L825,420 L855,375 L885,330 L915,285 L945,240 L975,285 L1005,330 L1035,375 L1065,420 L1095,465 L1125,510 L1155,555 L1185,600 L1215,645 L1245,685 L1275,720 L1300,750",
    duration: "10s",
    delay: "2s",
    color: "#374151",
    dashArray: "4500"
  },
  
  // Mountain Range 3 (Center - Himalayan style main peak)
  {
    id: 'mountain3',
    path: "M1100,750 L1140,710 L1180,665 L1220,615 L1260,560 L1300,500 L1340,435 L1380,365 L1420,290 L1460,210 L1500,130 L1540,80 L1580,45 L1620,80 L1660,130 L1700,210 L1740,290 L1780,365 L1820,435 L1860,500 L1900,560 L1940,615 L1980,665 L2020,710 L2060,750",
    duration: "12s",
    delay: "3.5s",
    color: "#4b5563",
    dashArray: "5800"
  },
  
  // Mountain Range 4 (Right-Center - Rugged peaks with steep faces)
  {
    id: 'mountain4',
    path: "M1800,750 L1835,715 L1870,675 L1905,630 L1940,580 L1975,525 L2010,465 L2045,400 L2080,330 L2115,255 L2150,175 L2185,255 L2220,330 L2255,400 L2290,465 L2325,525 L2360,580 L2395,630 L2430,675 L2465,715 L2500,750",
    duration: "9s",
    delay: "5s",
    color: "#6b7280",
    dashArray: "4200"
  },
  
  // Mountain Range 5 (Far Right - Rolling foothills)
  {
    id: 'mountain5',
    path: "M2200,750 L2235,730 L2270,705 L2305,675 L2340,640 L2375,600 L2410,555 L2445,505 L2480,450 L2515,395 L2550,340 L2585,395 L2620,450 L2655,505 L2690,555 L2725,600 L2760,640 L2795,675 L2830,705 L2865,730 L2900,750",
    duration: "7s",
    delay: "6.5s",
    color: "#9ca3af",
    dashArray: "3600"
  },
  
  // Additional jagged peaks for depth
  {
    id: 'mountain6',
    path: "M900,750 L935,720 L970,685 L1005,645 L1040,600 L1075,550 L1110,495 L1145,435 L1180,370 L1215,300 L1250,225 L1285,145 L1320,225 L1355,300 L1390,370 L1425,435 L1460,495 L1495,550 L1530,600 L1565,645 L1600,685 L1635,720 L1670,750",
    duration: "11s",
    delay: "3s",
    color: "#52525b",
    dashArray: "5200"
  }
];

// Additional configuration for more realistic mountain rendering
const mountainConfig = {
  // Base elevation (y-coordinate for mountain base)
  baseElevation: 750,
  
  // Mountain types with their characteristics
  mountainTypes: {
    rocky: {
      jaggedness: 0.8, // How sharp the peaks are
      variation: 0.6,   // Height variation between peaks
      color: "#1f2937"
    },
    alpine: {
      jaggedness: 0.9,
      variation: 0.8,
      color: "#374151"
    },
    himalayan: {
      jaggedness: 1.0,
      variation: 1.0,
      color: "#4b5563"
    },
    foothills: {
      jaggedness: 0.4,
      variation: 0.3,
      color: "#9ca3af"
    }
  },
  
  // Animation settings for more natural movement
  animationSettings: {
    easingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    staggerDelay: 1.5, // Seconds between each mountain animation start
    totalDuration: 12   // Total animation cycle duration
  }
};

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