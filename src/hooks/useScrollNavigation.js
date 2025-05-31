import { useEffect, useRef } from "react";

export const useScrollNavigation = ({ 
  containerRef, 
  currentSection, 
  setCurrentSection, 
  totalSections 
}) => {
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const isScrolling = useRef(false);

  const handleScroll = (direction) => {
    if (isScrolling.current) return;
    
    isScrolling.current = true;
    
    if (direction === 'down' && currentSection < totalSections - 1) {
      setCurrentSection(prev => prev + 1);
    } else if (direction === 'up' && currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
    
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  // Wheel event handler
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 'down' : 'up';
      handleScroll(direction);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [currentSection]);

  // Touch events
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      touchEndY.current = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY.current;
      
      if (Math.abs(deltaY) > 50) {
        const direction = deltaY > 0 ? 'down' : 'up';
        handleScroll(direction);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [currentSection]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        handleScroll('down');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        handleScroll('up');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);
};