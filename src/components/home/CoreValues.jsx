import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CoreValues = () => {
  const valuesRef = useRef([]);
  const titleRef = useRef(null);

  const coreValues = [
    'Ethical Practice',
    'Best Quality',
    'Customer Focus',
    'Innovation',
  ];

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    valuesRef.current.forEach((el, index) => {
      const directions = [
        { x: -100, y: 0 },
        { x: 0, y: -100 },
        { x: -100, y: 100 },
        { x: 100, y: 100 },
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

  const bgImg =" url('assets/img/denseforest.jpg')"
  return (
    <section className={`relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-cover bg-center overflow-hidden `} style={{ backgroundImage: bgImg }}>


      {/* Top blurry gradient */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-100 to-transparent z-10 pointer-events-none" />

      {/* Bottom blurry gradient */}
      {/* <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-100 to-transparent z-10 pointer-events-none" /> */}

      {/* Main content */}
      <div className="relative w-full max-w-6xl h-[700px] sm:h-[500px] md:h-[600px] lg:h-[650px] flex flex-col sm:flex-row items-start sm:items-center justify-between z-20">
        
        {/* Circles */}
        <div className="relative w-full sm:w-2/3 h-full">
          {coreValues.map((value, idx) => (
            <div
              key={idx}
              ref={(el) => (valuesRef.current[idx] = el)}
              className="absolute w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 bg-darkText/20 text-white border-2 border-white rounded-full flex items-center justify-center text-center px-4 text-md sm:text-lg md:text-xl font-semibold shadow-xl"
              style={{
                top: ['5%', '25%', '50%', '65%'][idx],
                left: ['5%', '35%', '15%', '55%'][idx],
              }}
            >
              {value}
            </div>
          ))}
        </div>

        {/* Title */}
        <div
          ref={titleRef}
          className="w-full sm:w-1/3 text-right mt-10 sm:mt-0 sm:pl-10"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white">
            OUR <br /> CORE <br /> VALUES
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
