
"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function HeroTitle({containerRef}) {
 
  const textRef = useRef(null);
  const textileRef = useRef(null);
 

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=6000",
          scrub: 1,
          pin: true,
        },
      });

 
      // Animate title
      tl.to(textRef.current, {
        scale: 0.8,
        y: -160,
        duration: 1.5,
        ease: "power2.out",
      });

      
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return (
   <>
      <div
        ref={textRef}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
      >
        <h1 className="text-[clamp(3rem,10vw,10rem)] uppercase font-extrabold leading-[1] text-white">
          <span className=" block">Himalayan</span>
          <span ref={textileRef} className="mr-9 block">
            Textile
          </span>
        </h1>
      </div>



      {/* Animated Cloud */}
      <div className="absolute top-10 left-[-200px] w-[400px] h-[150px] z-20 opacity-50 pointer-events-none animate-cloudMove1">
        <img
          src="/assets/img/animate/cloud2.png"
          alt="moving cloud"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Cloud moving right to left */}
      <div className="absolute top-40 right-[-200px] w-[400px] h-[150px] z-20 opacity-50 pointer-events-none animate-cloudMove2">
        <img
          src="/assets/img/animate/cloud2.png"
          alt="moving cloud"
          className="w-full h-full object-contain"
        />
      </div>

     

      {/* Cloud Animation Style */}
      <style jsx>{`
        @keyframes cloudMove1 {
          0% {
            transform: translateX(-200px);
          }
          100% {
            transform: translateX(120vw);
          }
        }

        @keyframes cloudMove2 {
          0% {
            transform: translateX(200px);
          }
          100% {
            transform: translateX(-120vw);
          }
        }

        .animate-cloudMove1 {
          animation: cloudMove1 60s linear infinite;
        }

        .animate-cloudMove2 {
          animation: cloudMove2 60s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
   </>
  );
}

export default HeroTitle