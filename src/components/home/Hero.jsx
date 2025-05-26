/* eslint-disable no-unused-vars */

import HeroTitle from "./herosection/HeroTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import IntroSection from "./herosection/IntroSection";
import EnvironmentalPollution from "./herosection/problemscard/EnvironmentalPollution";

gsap.registerPlugin(ScrollTrigger);


export default function Hero() {
   const containerRef = useRef(null);

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

 
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return(
     <section
      ref={containerRef}
      className="relative min-h-[100vh] overflow-hidden bg-cover bg-[url('/assets/img/clearsky.jpg')]"
    >
    <HeroTitle containerRef={containerRef}/>
    <IntroSection containerRef={containerRef}/>
    <EnvironmentalPollution containerRef={containerRef}/>
    </section>
  )
}
