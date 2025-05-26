import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

function IntroSection({containerRef}) {

  const introRef=useRef(null)

  useLayoutEffect(()=>{
    const ctx=gsap.context(()=>{
const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=6000",
          scrub: 1,
          pin: true,
        },
      });

tl.to(introRef.current,{
  pin:true,
  scrub:1,
  y:0
})


    },containerRef);
      return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
    };
  },[])


  return (
    <div ref={introRef} className='h-[90vh] bg-gray-900 w-full translate-y-[100vh]'>IntroSection</div>
  )
}

export default IntroSection