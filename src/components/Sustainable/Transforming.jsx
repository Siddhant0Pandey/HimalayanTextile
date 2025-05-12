/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

export default function Transforming() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((ref, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      tl.fromTo(
        ref.querySelector(".card"),
        { opacity: 0, y: 80, rotateX: -15, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1,
          ease: "power4.out",
        }
      ).fromTo(
        ref.querySelectorAll("p, li, .subcard"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.6"
      );
    });
  }, []);

  return (
    <div className="text-gray-800 font-inter">
      {/* Transforming the Planet Section */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="relative overflow-hidden px-6 py-24 max-w-6xl mx-auto"
      >
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-200 rounded-full mix-blend-lighten filter blur-2xl opacity-60 animate-ping"></div>

        <div className="card bg-white rounded-3xl shadow-2xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image block - shown first on mobile */}
          <div className="order-1 md:order-2 animate__animated animate__fadeInRight">
            <img
              src="/assets/img/transform.jpg"
              alt="Planet Sustainability"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text block - shown second on mobile */}
          <div className="order-2 md:order-1 space-y-6 animate__animated animate__fadeInLeft">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 border-l-4 border-emerald-500 pl-4 tracking-tight">
              Transforming the Planet: A Vision for the Future
            </h2>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              As a business operating in Nepal, a developing economy with
              ambitious Net Zero goals, we bear the responsibility of leading by
              example. Our environmental initiatives include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
              <li className="pl-4 text-[#1FA951]">
                <strong>Forests and Grasslands Restoration:</strong> By planting
                trees and afforesting degraded lands near operational sites, we
                support biodiversity and create carbon sinks.
              </li>
              <li className="pl-4 text-[#1FA951]">
                <strong>Water Conservation:</strong> Water is a critical
                resource for textile production. Through monitoring, treatment,
                and efficient reuse, we aim to achieve water positivity by 2030.
              </li>
              <li className="pl-4 text-[#1FA951]">
                <strong>Net-Zero Carbon Goals:</strong> Our eco-friendly product
                lines, combined with renewable energy adoption and conservation
                practices, underscore our commitment to reducing our carbon
                footprint.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
