/* eslint-disable no-unused-vars */
    "use client";
    import React, { useLayoutEffect, useRef } from "react";
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    const imageOrder = [1, 2, 3, 4, 5];
  const textBoxContent = [
  {
    title: "Who Are We?",
    desc: "A purpose-led company born in the Himalayas to heal an industry.",
  },
  {
    title: "Why We Exist",
    desc: "The textile industry is one of the top polluters. We take a different route.",
  },
  {
    title: "Our Promise",
    desc: "Sustainable, ethical, and future-focused fabric production.",
  },
];

    export default function Hero() {
      const containerRef = useRef(null);
      const textRef = useRef(null);
      const textileRef = useRef(null);
      const imageRefs = useRef([]);
      const boxRefs = useRef([]);
      const arrowRefs = useRef([]);
        const textBoxRefs = useRef([]);

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

          imageOrder.forEach((_, i) => {
            if (i === 3) {
              tl.addLabel("images4and5");

              [3, 4].forEach((j) => {
                tl.fromTo(
                  imageRefs.current[j],
                  { y: 200, opacity: 0, zIndex: -2 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: "power3.out",
                  },
                  "images4and5"
                );
              });

              tl.fromTo(
                boxRefs.current[3],
                { x: 300, opacity: 0 },
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: "power2.out",
                  onComplete: () => {
                    gsap.to(boxRefs.current[3], {
                      y: -5,
                      duration: 0.4,
                      repeat: -1,
                      yoyo: true,
                      ease: "sine.inOut",
                    });
                  },
                },
                "images4and5+=0.5"
              );

              if (arrowRefs.current[3]) {
                tl.to(
                  arrowRefs.current[3],
                  {
                    opacity: 1,
                    duration: 0.5,
                    ease: "power1.out",
                  },
                  "images4and5+=0.6"
                );
              }
            } else if (i < 3) {
              tl.fromTo(
                imageRefs.current[i],
                { y: 200, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 1.2 + i * 0.2,
                  ease: "power3.out",
                }
              );

              tl.fromTo(
                boxRefs.current[i],
                { x: 300, opacity: 0 },
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: "power2.out",
                  onComplete: () => {
                    gsap.to(boxRefs.current[i], {
                      y: -5,
                      duration: 0.4,
                      repeat: -1,
                      yoyo: true,
                      ease: "sine.inOut",
                    });
                  },
                }
              );

              if (arrowRefs.current[i]) {
                tl.to(arrowRefs.current[i], {
                  opacity: 1,
                  duration: 0.5,
                  ease: "power1.out",
                });
              }
            }
          });

tl.fromTo(
  textBoxRefs.current,
  {
    y: 100,
    opacity: 0,
    scale: 0.8,
    rotateX: 80,
    transformOrigin: "top center",
    skewY: 10,
  },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    skewY: 0,
    duration: 1.1,
    ease: "back.out(1.7)",
    stagger: 0.4,
  },
  "+=0.5"
);

        }, containerRef);

            

        return () => {
          ctx.revert();
          ScrollTrigger.getAll().forEach((t) => t.kill());
          gsap.killTweensOf("*");
        };
      }, []);

      return (
        <section
          ref={containerRef}
          className="relative min-h-[100vh] overflow-hidden bg-cover bg-[url('/assets/img/clearsky.jpg')]"
        >
          {/* Title Text */}
          <div
            ref={textRef}
            className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
          >
            <h1 className="text-[clamp(3rem,10vw,10rem)] uppercase font-extrabold leading-[1] text-white">
              Himalayan <br />
              <span ref={textileRef} className="mr-9">
                Textile
              </span>
            </h1>
          </div>

          {/* Mountain Images */}
          <div className="absolute bottom-0 left-0 w-full h-full z-10">
            {imageOrder.map((num, i) => (
              <div
                key={num}
                className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
                style={{ zIndex: i === 2 ? -1 : i + 1 }}
                ref={(el) => (imageRefs.current[i] = el)}
              >
                <img
                  src={`/assets/img/parallax/${num}.png`}
                  alt={`mountain ${num}`}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>

{/* Animated Cloud */}
      <div className="absolute top-10 left-[-200px] w-[400px] h-[150px] z-20 opacity-70 pointer-events-none animate-cloudMove ">
        <img
          src="/assets/img/animate/cloud.png"
          alt="moving cloud"
          className="w-full h-full object-contain"
        />
      </div>
        <div className="absolute top-40 left-[-100px] w-[400px] h-[150px] z-20 opacity-80 pointer-events-none animate-cloudMove">
        <img
          src="/assets/img/animate/cloud.png"
          alt="moving cloud"
          className="w-full h-full object-contain"
        />
      </div>
      

      {/* Text Boxes */}
     <div className="absolute bottom-[10vh] left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 z-30 flex flex-col sm:flex-row justify-center items-center gap-6 pointer-events-none">
  {textBoxContent.map((box, i) => (
    <div
      key={i}
      ref={(el) => (textBoxRefs.current[i] = el)}
      className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl w-full sm:w-1/3 text-gray-800 border border-white/30 transition-transform"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{box.title}</h3>
      <p className="text-[clamp(0.875rem,1vw,1.1rem)] leading-snug">{box.desc}</p>
    </div>
  ))}
</div>

      {/* Cloud Animation Style */}
      <style jsx>{`
        @keyframes cloudMove {
          0% {
            transform: translateX(-200px);
          }
          100% {
            transform: translateX(120vw);
          }
        }
        .animate-cloudMove {
          animation: cloudMove 60s linear infinite;
        }
      `}</style>
          

        </section>
      );
    }