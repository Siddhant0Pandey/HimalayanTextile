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

  const scrollAccumulator = useRef(0);


  const handleScroll = (direction) => {
    if (isScrolling.current) return;
    

    // If we're at the boundaries, allow natural page scroll
    if (direction === 'down' && currentSection === totalSections - 1) {
      return; // Let the page scroll naturally
    }
   
    isScrolling.current = true;
    
    if (direction === 'down' && currentSection < totalSections - 1) {
      setCurrentSection(prev => prev + 1);
    } else if (direction === 'up' && currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
    
    setTimeout(() => {
      isScrolling.current = false;

    }, 800); // Reduced from 1000ms for better responsiveness
  };

  // Wheel event handler with scroll accumulation for better control
  useEffect(() => {
    const handleWheel = (e) => {
      // Only prevent default if we're going to handle the scroll internally
      const direction = e.deltaY > 0 ? 'down' : 'up';
      
      // Check if we should allow natural scrolling
      if ((direction === 'down' && currentSection === totalSections - 1) ||
          (direction === 'up' && currentSection === 0)) {
        return; // Don't prevent default, allow natural page scroll
      }
      
      e.preventDefault();
      
      // Accumulate scroll delta for smoother control
      scrollAccumulator.current += Math.abs(e.deltaY);
      
      // Only trigger section change after accumulating enough scroll
      if (scrollAccumulator.current > 100) {
        handleScroll(direction);
        scrollAccumulator.current = 0;
      }

    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }

  }, [currentSection, totalSections]);


  // Touch events
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {

      // Only prevent default if we're not at boundaries
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY;
      const direction = deltaY > 0 ? 'down' : 'up';
      
      if ((direction === 'down' && currentSection === totalSections - 1) ||
          (direction === 'up' && currentSection === 0)) {
        return; // Allow natural scrolling
      }

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

      container.addEventListener('touchstart', handleTouchStart, { passive: true });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd, { passive: true });

      
      return () => {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      };
    }

  }, [currentSection, totalSections]);


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