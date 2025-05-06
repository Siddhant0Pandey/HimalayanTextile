import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CoreValues = () => {
  const valuesRef = useRef([]);
  const titleRef = useRef(null);
  const wordRefs = useRef([]);

  const coreValues = [
    'Ethical Practice',
    'Best Quality',
    'Customer Focus',
    'Innovation',
  ];

  useEffect(() => {
    // Animate title words one by one
    gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })
      .from(wordRefs.current[0], {
        opacity: 0,
        x: 80,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from(wordRefs.current[1], {
        opacity: 0,
        x: 80,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5')
      .from(wordRefs.current[2], {
        opacity: 0,
        x: 80,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5');

    // Animate each core value circle
    valuesRef.current.forEach((el, index) => {
      const directions = [
        { x: -100, y: 0 },   // Left
        { x: 0, y: -100 },   // Top
        { x: -100, y: 100 }, // Bottom left
        { x: 100, y: 100 },  // Bottom right
      ];

      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: directions[index].x,
          y: directions[index].y,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-20 bg-[url('assets/img/denseforest.jpg')]">
      <div className="relative w-full max-w-6xl h-[700px] sm:h-[500px] md:h-[600px] lg:h-[650px] flex flex-col sm:flex-row items-start sm:items-center justify-between">

        {/* Left: Animated Core Values */}
        <div className="relative w-full sm:w-2/3 h-full">
          {coreValues.map((value, idx) => (
            <div
              key={idx}
              ref={(el) => (valuesRef.current[idx] = el)}
              className="absolute w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 bg-transparent text-darkText border-2 border-darkText rounded-full flex items-center justify-center text-center px-4 text-md sm:text-lg md:text-xl font-semibold shadow-xl"
              style={{
                top: ['5%', '25%', '50%', '65%'][idx],
                left: ['5%', '35%', '15%', '55%'][idx],
              }}
            >
              {value}
            </div>
          ))}
        </div>

        {/* Right: Title with word-by-word animation */}
        <div
          ref={titleRef}
          className="w-full sm:w-1/3 text-right mt-10 sm:mt-0 sm:pl-10"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-transparent text-stroke">
            <span
              className="block"
              ref={(el) => (wordRefs.current[0] = el)}
            >
              OUR
            </span>
            <span
              className="block"
              ref={(el) => (wordRefs.current[1] = el)}
            >
              CORE
            </span>
            <span
              className="block"
              ref={(el) => (wordRefs.current[2] = el)}
            >
              VALUES
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
