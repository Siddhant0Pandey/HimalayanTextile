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
      x: 60,
      y: 15,
      delay: 1,
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 500 499" fill="currentColor">
          <g transform="translate(0,499) scale(0.1,-0.1)">
            <path d="M2490 4158 c-7 -18 -23 -47 -35 -63 -12 -17 -26 -46 -30 -65 -4 -19
-20 -55 -35 -80 -15 -25 -30 -64 -33 -87 -3 -23 -14 -55 -26 -72 -12 -16 -21
-43 -21 -61 0 -17 -11 -52 -25 -78 -16 -29 -25 -64 -25 -92 0 -25 -7 -54 -15
-64 -8 -11 -15 -38 -15 -60 -1 -23 -8 -59 -17 -81 -9 -22 -17 -61 -18 -86 -2
-25 -7 -61 -14 -80 -9 -28 -24 -261 -24 -374 0 -102 16 -342 24 -356 5 -10 9
-28 9 -40 0 -33 -24 -8 -39 40 -6 22 -25 51 -42 65 -17 14 -35 42 -40 62 -7
22 -19 39 -35 46 -15 7 -32 28 -41 49 -8 21 -29 49 -47 63 -18 14 -39 38 -45
54 -7 16 -23 34 -36 40 -13 6 -36 29 -51 51 -14 22 -35 43 -45 46 -10 4 -35
26 -54 50 -20 23 -48 48 -63 54 -15 7 -37 26 -49 43 -12 18 -37 37 -55 42 -18
6 -42 25 -53 42 -12 20 -34 36 -55 43 -20 6 -46 24 -57 40 -12 15 -34 32 -50
35 -15 4 -44 20 -63 35 -19 16 -46 32 -60 36 -14 4 -39 16 -56 26 -41 25 -45
24 -33 -7 5 -15 9 -43 8 -63 -1 -20 5 -50 14 -68 9 -18 17 -49 17 -71 0 -21 7
-47 15 -58 8 -10 15 -36 15 -57 0 -21 9 -55 20 -77 11 -22 20 -52 20 -68 0
-15 11 -43 25 -62 14 -19 25 -45 25 -59 0 -13 11 -43 24 -65 13 -23 27 -55 30
-73 4 -18 21 -49 37 -69 16 -20 29 -49 29 -64 0 -16 11 -37 29 -54 15 -15 33
-45 40 -66 6 -21 22 -47 34 -57 13 -10 29 -33 36 -51 8 -18 29 -48 47 -66 19
-19 34 -40 34 -48 0 -8 18 -29 40 -47 22 -17 40 -38 40 -46 0 -24 -55 -18 -88
10 -19 16 -42 25 -63 25 -19 0 -45 9 -59 20 -15 12 -41 20 -65 20 -22 0 -51 7
-65 15 -14 8 -41 15 -60 15 -19 0 -46 7 -60 15 -14 8 -44 14 -68 15 -24 0 -53
5 -64 11 -12 6 -51 13 -87 15 -36 2 -95 6 -131 8 -36 3 -78 4 -95 4 -16 -1
-47 -1 -67 -2 -33 0 -36 -2 -23 -16 7 -8 18 -27 24 -43 6 -15 25 -34 45 -44
21 -10 39 -27 45 -44 6 -18 22 -33 45 -43 20 -8 41 -28 51 -45 9 -17 30 -37
49 -45 19 -8 40 -24 46 -36 6 -12 28 -28 47 -36 19 -9 46 -28 59 -44 14 -16
38 -31 54 -35 15 -3 35 -17 44 -30 8 -13 29 -26 46 -30 17 -4 46 -19 63 -34
18 -16 46 -31 62 -35 17 -4 47 -18 67 -32 21 -13 48 -24 61 -24 13 0 38 -11
57 -25 19 -14 48 -25 65 -25 17 0 40 -7 51 -15 10 -8 35 -15 54 -15 19 0 50
-9 68 -20 18 -11 49 -20 68 -20 20 0 50 -6 67 -14 35 -16 115 -27 190 -26 58
1 63 -24 6 -27 -63 -4 -119 -15 -125 -24 -3 -5 -18 -9 -33 -9 -16 0 -34 -7
-41 -15 -7 -8 -25 -15 -40 -15 -15 0 -33 -7 -40 -15 -7 -8 -23 -15 -36 -15
-13 0 -28 -9 -34 -20 -6 -12 -21 -20 -35 -20 -14 0 -25 -5 -25 -11 0 -5 -15
-16 -32 -24 -18 -7 -39 -23 -46 -34 -7 -12 -21 -21 -31 -21 -11 0 -23 -9 -26
-20 -3 -11 -17 -23 -31 -26 -13 -3 -24 -10 -24 -15 0 -5 -27 -37 -60 -71 -33
-33 -60 -65 -60 -71 0 -5 -7 -15 -15 -21 -13 -9 -11 -11 10 -13 42 -4 127 -3
170 2 22 2 74 6 115 10 41 3 77 10 78 15 2 6 17 10 33 10 17 0 40 5 52 12 12
6 33 12 46 13 14 0 26 6 29 13 2 7 16 12 32 12 15 0 33 7 40 15 7 8 23 15 36
15 13 0 28 9 34 20 6 12 21 20 35 20 14 0 30 9 37 20 7 11 23 20 35 20 12 0
27 9 33 20 6 11 19 20 29 20 10 0 26 11 35 25 9 14 23 25 31 25 8 0 22 11 31
25 9 14 22 25 30 25 7 0 20 11 29 23 8 13 27 29 41 35 l25 12 -8 -233 c-4
-127 -8 -263 -8 -302 l0 -70 44 -3 43 -3 -6 138 c-23 526 -23 524 32 465 15
-16 35 -31 45 -35 9 -3 22 -18 29 -32 6 -14 19 -25 29 -25 10 0 23 -9 29 -20
6 -11 17 -20 25 -20 7 0 22 -11 33 -25 11 -14 27 -25 36 -25 9 0 25 -9 36 -20
11 -11 29 -20 40 -20 10 0 24 -9 30 -20 6 -11 19 -20 30 -20 10 0 25 -7 34
-15 8 -8 26 -15 39 -15 14 0 30 -7 37 -15 7 -8 25 -15 40 -15 15 0 33 -7 40
-15 7 -8 25 -15 41 -15 15 0 30 -4 33 -9 3 -5 25 -11 48 -15 24 -3 59 -8 78
-11 19 -3 48 -5 64 -5 16 -1 36 -5 44 -9 9 -5 26 -5 40 0 16 6 29 6 38 -2 9
-7 19 -7 30 -1 10 6 27 6 39 2 30 -11 44 0 34 28 -5 12 -13 22 -18 22 -6 0
-17 13 -25 29 -9 16 -24 31 -36 34 -11 3 -20 13 -20 25 0 13 -9 22 -24 26 -14
3 -27 15 -31 25 -3 10 -17 22 -30 25 -13 3 -26 15 -30 25 -3 11 -19 24 -36 30
-16 5 -32 17 -35 26 -3 8 -16 15 -28 15 -12 0 -27 9 -34 20 -7 11 -22 20 -35
20 -12 0 -28 9 -35 20 -8 13 -23 20 -42 20 -17 0 -30 5 -30 10 0 6 -15 10 -34
10 -18 0 -39 7 -46 15 -7 8 -27 15 -46 15 -18 0 -36 5 -40 11 -3 6 -17 9 -30
6 -13 -2 -32 1 -41 8 -15 11 -15 13 4 23 11 6 43 10 71 10 29 -1 58 4 67 12 9
7 28 10 49 7 23 -4 42 1 62 14 16 10 46 19 66 19 21 0 52 9 70 20 18 11 49 20
68 20 19 0 49 9 65 20 17 11 41 20 54 20 13 0 36 11 53 25 16 14 41 25 55 25
15 0 40 11 57 24 17 13 42 27 56 31 14 4 34 16 45 26 11 10 38 26 60 35 22 9
57 32 78 50 20 19 45 34 55 34 10 0 28 13 40 30 12 16 37 37 54 46 17 9 46 30
64 48 17 17 54 51 82 76 62 56 59 54 121 119 54 58 55 74 4 73 -115 -3 -281
-13 -293 -18 -14 -6 -55 -12 -200 -32 -30 -4 -67 -16 -81 -25 -17 -12 -36 -16
-52 -12 -16 4 -39 -1 -65 -14 -23 -12 -54 -21 -70 -21 -16 0 -40 -8 -53 -18
-13 -11 -41 -22 -61 -25 -20 -3 -50 -15 -66 -27 -16 -12 -38 -20 -48 -18 -16
3 -14 7 13 23 18 10 37 32 44 47 6 16 24 37 40 48 15 11 33 36 39 55 6 19 27
47 46 61 22 17 34 35 34 50 0 13 15 41 34 61 18 21 39 56 46 78 7 22 23 51 35
65 12 14 26 42 29 63 4 20 11 37 15 37 12 0 41 64 41 90 0 12 11 36 25 54 14
18 25 44 25 57 0 13 9 41 20 62 11 20 20 52 20 69 0 18 9 48 20 66 11 18 20
49 20 70 0 20 9 51 19 68 10 17 21 53 25 80 3 27 8 71 12 97 l6 48 -28 -7
c-16 -4 -43 -19 -59 -35 -17 -16 -46 -34 -65 -40 -19 -6 -48 -24 -65 -39 -16
-15 -41 -31 -55 -35 -14 -4 -37 -20 -52 -36 -15 -16 -45 -37 -65 -48 -21 -11
-44 -29 -50 -40 -7 -11 -27 -28 -45 -37 -18 -9 -52 -35 -74 -58 -23 -23 -75
-73 -115 -113 -111 -109 -249 -265 -249 -283 0 -6 -15 -27 -34 -47 -18 -21
-37 -49 -41 -63 -4 -14 -20 -38 -35 -55 -16 -16 -32 -47 -35 -67 -10 -53 -29
-49 -21 5 34 224 37 688 6 783 -7 19 -9 47 -5 63 4 20 0 42 -14 70 -13 24 -21
60 -21 88 0 30 -7 60 -20 81 -12 19 -20 50 -20 75 0 23 -9 59 -20 80 -11 20
-20 53 -20 73 0 22 -9 48 -24 67 -13 18 -26 51 -29 75 -3 24 -16 60 -30 80
-13 20 -27 54 -31 75 -4 22 -20 57 -37 79 -16 23 -29 48 -29 57 0 9 -4 22 -9
29 -6 10 -12 4 -21 -20z" fill="currentColor"/>
          </g>
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
    },
    {
      id: 5,
      x: 5,
      y: 1,
      delay: 2,
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 500 499" fill="currentColor">
          <g transform="translate(0,499) scale(0.1,-0.1)">
            <path d="M2490 4158 c-7 -18 -23 -47 -35 -63 -12 -17 -26 -46 -30 -65 -4 -19
-20 -55 -35 -80 -15 -25 -30 -64 -33 -87 -3 -23 -14 -55 -26 -72 -12 -16 -21
-43 -21 -61 0 -17 -11 -52 -25 -78 -16 -29 -25 -64 -25 -92 0 -25 -7 -54 -15
-64 -8 -11 -15 -38 -15 -60 -1 -23 -8 -59 -17 -81 -9 -22 -17 -61 -18 -86 -2
-25 -7 -61 -14 -80 -9 -28 -24 -261 -24 -374 0 -102 16 -342 24 -356 5 -10 9
-28 9 -40 0 -33 -24 -8 -39 40 -6 22 -25 51 -42 65 -17 14 -35 42 -40 62 -7
22 -19 39 -35 46 -15 7 -32 28 -41 49 -8 21 -29 49 -47 63 -18 14 -39 38 -45
54 -7 16 -23 34 -36 40 -13 6 -36 29 -51 51 -14 22 -35 43 -45 46 -10 4 -35
26 -54 50 -20 23 -48 48 -63 54 -15 7 -37 26 -49 43 -12 18 -37 37 -55 42 -18
6 -42 25 -53 42 -12 20 -34 36 -55 43 -20 6 -46 24 -57 40 -12 15 -34 32 -50
35 -15 4 -44 20 -63 35 -19 16 -46 32 -60 36 -14 4 -39 16 -56 26 -41 25 -45
24 -33 -7 5 -15 9 -43 8 -63 -1 -20 5 -50 14 -68 9 -18 17 -49 17 -71 0 -21 7
-47 15 -58 8 -10 15 -36 15 -57 0 -21 9 -55 20 -77 11 -22 20 -52 20 -68 0
-15 11 -43 25 -62 14 -19 25 -45 25 -59 0 -13 11 -43 24 -65 13 -23 27 -55 30
-73 4 -18 21 -49 37 -69 16 -20 29 -49 29 -64 0 -16 11 -37 29 -54 15 -15 33
-45 40 -66 6 -21 22 -47 34 -57 13 -10 29 -33 36 -51 8 -18 29 -48 47 -66 19
-19 34 -40 34 -48 0 -8 18 -29 40 -47 22 -17 40 -38 40 -46 0 -24 -55 -18 -88
10 -19 16 -42 25 -63 25 -19 0 -45 9 -59 20 -15 12 -41 20 -65 20 -22 0 -51 7
-65 15 -14 8 -41 15 -60 15 -19 0 -46 7 -60 15 -14 8 -44 14 -68 15 -24 0 -53
5 -64 11 -12 6 -51 13 -87 15 -36 2 -95 6 -131 8 -36 3 -78 4 -95 4 -16 -1
-47 -1 -67 -2 -33 0 -36 -2 -23 -16 7 -8 18 -27 24 -43 6 -15 25 -34 45 -44
21 -10 39 -27 45 -44 6 -18 22 -33 45 -43 20 -8 41 -28 51 -45 9 -17 30 -37
49 -45 19 -8 40 -24 46 -36 6 -12 28 -28 47 -36 19 -9 46 -28 59 -44 14 -16
38 -31 54 -35 15 -3 35 -17 44 -30 8 -13 29 -26 46 -30 17 -4 46 -19 63 -34
18 -16 46 -31 62 -35 17 -4 47 -18 67 -32 21 -13 48 -24 61 -24 13 0 38 -11
57 -25 19 -14 48 -25 65 -25 17 0 40 -7 51 -15 10 -8 35 -15 54 -15 19 0 50
-9 68 -20 18 -11 49 -20 68 -20 20 0 50 -6 67 -14 35 -16 115 -27 190 -26 58
1 63 -24 6 -27 -63 -4 -119 -15 -125 -24 -3 -5 -18 -9 -33 -9 -16 0 -34 -7
-41 -15 -7 -8 -25 -15 -40 -15 -15 0 -33 -7 -40 -15 -7 -8 -23 -15 -36 -15
-13 0 -28 -9 -34 -20 -6 -12 -21 -20 -35 -20 -14 0 -25 -5 -25 -11 0 -5 -15
-16 -32 -24 -18 -7 -39 -23 -46 -34 -7 -12 -21 -21 -31 -21 -11 0 -23 -9 -26
-20 -3 -11 -17 -23 -31 -26 -13 -3 -24 -10 -24 -15 0 -5 -27 -37 -60 -71 -33
-33 -60 -65 -60 -71 0 -5 -7 -15 -15 -21 -13 -9 -11 -11 10 -13 42 -4 127 -3
170 2 22 2 74 6 115 10 41 3 77 10 78 15 2 6 17 10 33 10 17 0 40 5 52 12 12
6 33 12 46 13 14 0 26 6 29 13 2 7 16 12 32 12 15 0 33 7 40 15 7 8 23 15 36
15 13 0 28 9 34 20 6 12 21 20 35 20 14 0 30 9 37 20 7 11 23 20 35 20 12 0
27 9 33 20 6 11 19 20 29 20 10 0 26 11 35 25 9 14 23 25 31 25 8 0 22 11 31
25 9 14 22 25 30 25 7 0 20 11 29 23 8 13 27 29 41 35 l25 12 -8 -233 c-4
-127 -8 -263 -8 -302 l0 -70 44 -3 43 -3 -6 138 c-23 526 -23 524 32 465 15
-16 35 -31 45 -35 9 -3 22 -18 29 -32 6 -14 19 -25 29 -25 10 0 23 -9 29 -20
6 -11 17 -20 25 -20 7 0 22 -11 33 -25 11 -14 27 -25 36 -25 9 0 25 -9 36 -20
11 -11 29 -20 40 -20 10 0 24 -9 30 -20 6 -11 19 -20 30 -20 10 0 25 -7 34
-15 8 -8 26 -15 39 -15 14 0 30 -7 37 -15 7 -8 25 -15 40 -15 15 0 33 -7 40
-15 7 -8 25 -15 41 -15 15 0 30 -4 33 -9 3 -5 25 -11 48 -15 24 -3 59 -8 78
-11 19 -3 48 -5 64 -5 16 -1 36 -5 44 -9 9 -5 26 -5 40 0 16 6 29 6 38 -2 9
-7 19 -7 30 -1 10 6 27 6 39 2 30 -11 44 0 34 28 -5 12 -13 22 -18 22 -6 0
-17 13 -25 29 -9 16 -24 31 -36 34 -11 3 -20 13 -20 25 0 13 -9 22 -24 26 -14
3 -27 15 -31 25 -3 10 -17 22 -30 25 -13 3 -26 15 -30 25 -3 11 -19 24 -36 30
-16 5 -32 17 -35 26 -3 8 -16 15 -28 15 -12 0 -27 9 -34 20 -7 11 -22 20 -35
20 -12 0 -28 9 -35 20 -8 13 -23 20 -42 20 -17 0 -30 5 -30 10 0 6 -15 10 -34
10 -18 0 -39 7 -46 15 -7 8 -27 15 -46 15 -18 0 -36 5 -40 11 -3 6 -17 9 -30
6 -13 -2 -32 1 -41 8 -15 11 -15 13 4 23 11 6 43 10 71 10 29 -1 58 4 67 12 9
7 28 10 49 7 23 -4 42 1 62 14 16 10 46 19 66 19 21 0 52 9 70 20 18 11 49 20
68 20 19 0 49 9 65 20 17 11 41 20 54 20 13 0 36 11 53 25 16 14 41 25 55 25
15 0 40 11 57 24 17 13 42 27 56 31 14 4 34 16 45 26 11 10 38 26 60 35 22 9
57 32 78 50 20 19 45 34 55 34 10 0 28 13 40 30 12 16 37 37 54 46 17 9 46 30
64 48 17 17 54 51 82 76 62 56 59 54 121 119 54 58 55 74 4 73 -115 -3 -281
-13 -293 -18 -14 -6 -55 -12 -200 -32 -30 -4 -67 -16 -81 -25 -17 -12 -36 -16
-52 -12 -16 4 -39 -1 -65 -14 -23 -12 -54 -21 -70 -21 -16 0 -40 -8 -53 -18
-13 -11 -41 -22 -61 -25 -20 -3 -50 -15 -66 -27 -16 -12 -38 -20 -48 -18 -16
3 -14 7 13 23 18 10 37 32 44 47 6 16 24 37 40 48 15 11 33 36 39 55 6 19 27
47 46 61 22 17 34 35 34 50 0 13 15 41 34 61 18 21 39 56 46 78 7 22 23 51 35
65 12 14 26 42 29 63 4 20 11 37 15 37 12 0 41 64 41 90 0 12 11 36 25 54 14
18 25 44 25 57 0 13 9 41 20 62 11 20 20 52 20 69 0 18 9 48 20 66 11 18 20
49 20 70 0 20 9 51 19 68 10 17 21 53 25 80 3 27 8 71 12 97 l6 48 -28 -7
c-16 -4 -43 -19 -59 -35 -17 -16 -46 -34 -65 -40 -19 -6 -48 -24 -65 -39 -16
-15 -41 -31 -55 -35 -14 -4 -37 -20 -52 -36 -15 -16 -45 -37 -65 -48 -21 -11
-44 -29 -50 -40 -7 -11 -27 -28 -45 -37 -18 -9 -52 -35 -74 -58 -23 -23 -75
-73 -115 -113 -111 -109 -249 -265 -249 -283 0 -6 -15 -27 -34 -47 -18 -21
-37 -49 -41 -63 -4 -14 -20 -38 -35 -55 -16 -16 -32 -47 -35 -67 -10 -53 -29
-49 -21 5 34 224 37 688 6 783 -7 19 -9 47 -5 63 4 20 0 42 -14 70 -13 24 -21
60 -21 88 0 30 -7 60 -20 81 -12 19 -20 50 -20 75 0 23 -9 59 -20 80 -11 20
-20 53 -20 73 0 22 -9 48 -24 67 -13 18 -26 51 -29 75 -3 24 -16 60 -30 80
-13 20 -27 54 -31 75 -4 22 -20 57 -37 79 -16 23 -29 48 -29 57 0 9 -4 22 -9
29 -6 10 -12 4 -21 -20z" fill="currentColor"/>
          </g>
        </svg>
      )
    },
    {
  id: 6,
  x: 25,
  y: 35,
  delay: 2,
  svg: (
    <svg className="w-8 h-8" viewBox="0 0 500 499" fill="currentColor">
      <g transform="translate(0,499) scale(0.1,-0.1)">
        <path d="M2490 4158 c-7 -18 -23 -47 -35 -63 -12 -17 -26 -46 -30 -65 -4 -19
-20 -55 -35 -80 -15 -25 -30 -64 -33 -87 -3 -23 -14 -55 -26 -72 -12 -16 -21
-43 -21 -61 0 -17 -11 -52 -25 -78 -16 -29 -25 -64 -25 -92 0 -25 -7 -54 -15
-64 -8 -11 -15 -38 -15 -60 -1 -23 -8 -59 -17 -81 -9 -22 -17 -61 -18 -86 -2
-25 -7 -61 -14 -80 -9 -28 -24 -261 -24 -374 0 -102 16 -342 24 -356 5 -10 9
-28 9 -40 0 -33 -24 -8 -39 40 -6 22 -25 51 -42 65 -17 14 -35 42 -40 62 -7
22 -19 39 -35 46 -15 7 -32 28 -41 49 -8 21 -29 49 -47 63 -18 14 -39 38 -45
54 -7 16 -23 34 -36 40 -13 6 -36 29 -51 51 -14 22 -35 43 -45 46 -10 4 -35
26 -54 50 -20 23 -48 48 -63 54 -15 7 -37 26 -49 43 -12 18 -37 37 -55 42 -18
6 -42 25 -53 42 -12 20 -34 36 -55 43 -20 6 -46 24 -57 40 -12 15 -34 32 -50
35 -15 4 -44 20 -63 35 -19 16 -46 32 -60 36 -14 4 -39 16 -56 26 -41 25 -45
24 -33 -7 5 -15 9 -43 8 -63 -1 -20 5 -50 14 -68 9 -18 17 -49 17 -71 0 -21 7
-47 15 -58 8 -10 15 -36 15 -57 0 -21 9 -55 20 -77 11 -22 20 -52 20 -68 0
-15 11 -43 25 -62 14 -19 25 -45 25 -59 0 -13 11 -43 24 -65 13 -23 27 -55 30
-73 4 -18 21 -49 37 -69 16 -20 29 -49 29 -64 0 -16 11 -37 29 -54 15 -15 33
-45 40 -66 6 -21 22 -47 34 -57 13 -10 29 -33 36 -51 8 -18 29 -48 47 -66 19
-19 34 -40 34 -48 0 -8 18 -29 40 -47 22 -17 40 -38 40 -46 0 -24 -55 -18 -88
10 -19 16 -42 25 -63 25 -19 0 -45 9 -59 20 -15 12 -41 20 -65 20 -22 0 -51 7
-65 15 -14 8 -41 15 -60 15 -19 0 -46 7 -60 15 -14 8 -44 14 -68 15 -24 0 -53
5 -64 11 -12 6 -51 13 -87 15 -36 2 -95 6 -131 8 -36 3 -78 4 -95 4 -16 -1
-47 -1 -67 -2 -33 0 -36 -2 -23 -16 7 -8 18 -27 24 -43 6 -15 25 -34 45 -44
21 -10 39 -27 45 -44 6 -18 22 -33 45 -43 20 -8 41 -28 51 -45 9 -17 30 -37
49 -45 19 -8 40 -24 46 -36 6 -12 28 -28 47 -36 19 -9 46 -28 59 -44 14 -16
38 -31 54 -35 15 -3 35 -17 44 -30 8 -13 29 -26 46 -30 17 -4 46 -19 63 -34
18 -16 46 -31 62 -35 17 -4 47 -18 67 -32 21 -13 48 -24 61 -24 13 0 38 -11
57 -25 19 -14 48 -25 65 -25 17 0 40 -7 51 -15 10 -8 35 -15 54 -15 19 0 50
-9 68 -20 18 -11 49 -20 68 -20 20 0 50 -6 67 -14 35 -16 115 -27 190 -26 58
1 63 -24 6 -27 -63 -4 -119 -15 -125 -24 -3 -5 -18 -9 -33 -9 -16 0 -34 -7
-41 -15 -7 -8 -25 -15 -40 -15 -15 0 -33 -7 -40 -15 -7 -8 -23 -15 -36 -15
-13 0 -28 -9 -34 -20 -6 -12 -21 -20 -35 -20 -14 0 -25 -5 -25 -11 0 -5 -15
-16 -32 -24 -18 -7 -39 -23 -46 -34 -7 -12 -21 -21 -31 -21 -11 0 -23 -9 -26
-20 -3 -11 -17 -23 -31 -26 -13 -3 -24 -10 -24 -15 0 -5 -27 -37 -60 -71 -33
-33 -60 -65 -60 -71 0 -5 -7 -15 -15 -21 -13 -9 -11 -11 10 -13 42 -4 127 -3
170 2 22 2 74 6 115 10 41 3 77 10 78 15 2 6 17 10 33 10 17 0 40 5 52 12 12
6 33 12 46 13 14 0 26 6 29 13 2 7 16 12 32 12 15 0 33 7 40 15 7 8 23 15 36
15 13 0 28 9 34 20 6 12 21 20 35 20 14 0 30 9 37 20 7 11 23 20 35 20 12 0
27 9 33 20 6 11 19 20 29 20 10 0 26 11 35 25 9 14 23 25 31 25 8 0 22 11 31
25 9 14 22 25 30 25 7 0 20 11 29 23 8 13 27 29 41 35 l25 12 -8 -233 c-4
-127 -8 -263 -8 -302 l0 -70 44 -3 43 -3 -6 138 c-23 526 -23 524 32 465 15
-16 35 -31 45 -35 9 -3 22 -18 29 -32 6 -14 19 -25 29 -25 10 0 23 -9 29 -20
6 -11 17 -20 25 -20 7 0 22 -11 33 -25 11 -14 27 -25 36 -25 9 0 25 -9 36 -20
11 -11 29 -20 40 -20 10 0 24 -9 30 -20 6 -11 19 -20 30 -20 10 0 25 -7 34
-15 8 -8 26 -15 39 -15 14 0 30 -7 37 -15 7 -8 25 -15 40 -15 15 0 33 -7 40
-15 7 -8 25 -15 41 -15 15 0 30 -4 33 -9 3 -5 25 -11 48 -15 24 -3 59 -8 78
-11 19 -3 48 -5 64 -5 16 -1 36 -5 44 -9 9 -5 26 -5 40 0 16 6 29 6 38 -2 9
-7 19 -7 30 -1 10 6 27 6 39 2 30 -11 44 0 34 28 -5 12 -13 22 -18 22 -6 0
-17 13 -25 29 -9 16 -24 31 -36 34 -11 3 -20 13 -20 25 0 13 -9 22 -24 26 -14
3 -27 15 -31 25 -3 10 -17 22 -30 25 -13 3 -26 15 -30 25 -3 11 -19 24 -36 30
-16 5 -32 17 -35 26 -3 8 -16 15 -28 15 -12 0 -27 9 -34 20 -7 11 -22 20 -35
20 -12 0 -28 9 -35 20 -8 13 -23 20 -42 20 -17 0 -30 5 -30 10 0 6 -15 10 -34
10 -18 0 -39 7 -46 15 -7 8 -27 15 -46 15 -18 0 -36 5 -40 11 -3 6 -17 9 -30
6 -13 -2 -32 1 -41 8 -15 11 -15 13 4 23 11 6 43 10 71 10 29 -1 58 4 67 12 9
7 28 10 49 7 23 -4 42 1 62 14 16 10 46 19 66 19 21 0 52 9 70 20 18 11 49 20
68 20 19 0 49 9 65 20 17 11 41 20 54 20 13 0 36 11 53 25 16 14 41 25 55 25
15 0 40 11 57 24 17 13 42 27 56 31 14 4 34 16 45 26 11 10 38 26 60 35 22 9
57 32 78 50 20 19 45 34 55 34 10 0 28 13 40 30 12 16 37 37 54 46 17 9 46 30
64 48 17 17 54 51 82 76 62 56 59 54 121 119 54 58 55 74 4 73 -115 -3 -281
-13 -293 -18 -14 -6 -55 -12 -200 -32 -30 -4 -67 -16 -81 -25 -17 -12 -36 -16
-52 -12 -16 4 -39 -1 -65 -14 -23 -12 -54 -21 -70 -21 -16 0 -40 -8 -53 -18
-13 -11 -41 -22 -61 -25 -20 -3 -50 -15 -66 -27 -16 -12 -38 -20 -48 -18 -16
3 -14 7 13 23 18 10 37 32 44 47 6 16 24 37 40 48 15 11 33 36 39 55 6 19 27
47 46 61 22 17 34 35 34 50 0 13 15 41 34 61 18 21 39 56 46 78 7 22 23 51 35
65 12 14 26 42 29 63 4 20 11 37 15 37 12 0 41 64 41 90 0 12 11 36 25 54 14
18 25 44 25 57 0 13 9 41 20 62 11 20 20 52 20 69 0 18 9 48 20 66 11 18 20
49 20 70 0 20 9 51 19 68 10 17 21 53 25 80 3 27 8 71 12 97 l6 48 -28 -7
c-16 -4 -43 -19 -59 -35 -17 -16 -46 -34 -65 -40 -19 -6 -48 -24 -65 -39 -16
-15 -41 -31 -55 -35 -14 -4 -37 -20 -52 -36 -15 -16 -45 -37 -65 -48 -21 -11
-44 -29 -50 -40 -7 -11 -27 -28 -45 -37 -18 -9 -52 -35 -74 -58 -23 -23 -75
-73 -115 -113 -111 -109 -249 -265 -249 -283 0 -6 -15 -27 -34 -47 -18 -21
-37 -49 -41 -63 -4 -14 -20 -38 -35 -55 -16 -16 -32 -47 -35 -67 -10 -53 -29
-49 -21 5 34 224 37 688 6 783 -7 19 -9 47 -5 63 4 20 0 42 -14 70 -13 24 -21
60 -21 88 0 30 -7 60 -20 81 -12 19 -20 50 -20 75 0 23 -9 59 -20 80 -11 20
-20 53 -20 73 0 22 -9 48 -24 67 -13 18 -26 51 -29 75 -3 24 -16 60 -30 80
-13 20 -27 54 -31 75 -4 22 -20 57 -37 79 -16 23 -29 48 -29 57 0 9 -4 22 -9
29 -6 10 -12 4 -21 -20z" fill="currentColor"/>
      </g>
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