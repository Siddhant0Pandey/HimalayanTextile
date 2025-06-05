import { useEffect, useRef, useState } from "react";

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

  // ✅ New: Control whether section is fully in view
  const [canScrollNext, setCanScrollNext] = useState(true);

  const handleScroll = (direction) => {
    // ✅ Only allow scroll if fully visible
    if (isScrolling.current || !canScrollNext) return;

    // Let page scroll naturally at boundaries
    if (direction === 'down' && currentSection === totalSections - 1) return;

    isScrolling.current = true;

    if (direction === 'down' && currentSection < totalSections - 1) {
      setCurrentSection(prev => prev + 1);
    } else if (direction === 'up' && currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 800); // adjust for transition time
  };

  // ✅ New: Observe current section's full visibility
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = Number(entry.target.dataset.index);
          if (index === currentSection) {
            setCanScrollNext(entry.intersectionRatio === 1);
          }
        });
      },
      {
        root: null,
        threshold: 1.0 // fully visible
      }
    );

    const target = document.querySelector(`[data-index="${currentSection}"]`);
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, [currentSection]);

  // Wheel event
  useEffect(() => {
    const handleWheel = (e) => {
      const direction = e.deltaY > 0 ? 'down' : 'up';

      if ((direction === 'down' && currentSection === totalSections - 1) ||
          (direction === 'up' && currentSection === 0)) {
        return;
      }

      e.preventDefault();

      scrollAccumulator.current += Math.abs(e.deltaY);

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
  }, [currentSection, totalSections, canScrollNext]);

  // Touch events
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY;
      const direction = deltaY > 0 ? 'down' : 'up';

      if ((direction === 'down' && currentSection === totalSections - 1) ||
          (direction === 'up' && currentSection === 0)) {
        return;
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
  }, [currentSection, totalSections, canScrollNext]);

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
  }, [currentSection, canScrollNext]);
};
