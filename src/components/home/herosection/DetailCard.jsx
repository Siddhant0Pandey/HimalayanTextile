import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

function DetaiilCard() {

const textRef=useRef(null);

useLayoutEffect(()=>{

  const ctx = gsap.content(()=>{
    const tl= gsap.timeline({
      scrollTrigger:{
        trigger:textRef.current,
        start:"top top",
        end:"+=6000",
        scrub:1,
        pin:true,
      }
    })

tl.to(textRef.current,{
  scale:0.8,
  y:-50,
  pin:true,
  scrub:1,
  duration:1.5

})

tl.fromTo(
textRef.kash
)

  })
})

  return (
   <div ref={textRef}>
Himalayan Textile
   </div>
  )
}

export default DetaiilCard