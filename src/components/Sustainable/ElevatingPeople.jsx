/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

export default function ElevatingPeople() {
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
    <div className="bg-gradient-to-br from-white via-green-50 to-white text-gray-800 font-inter">
      {/* Elevating People and Communities Section Only */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="px-6 py-20 max-w-6xl mx-auto border-b border-gray-100"
      >
        <div className="card bg-white rounded-3xl shadow-2xl p-12 transform transition-transform hover:scale-[1.02] hover:shadow-green-100">
          <h2 className="text-4xl font-bold text-green-700 mb-6 border-l-4 border-green-500 pl-4 tracking-tight">
            Elevating People and Communities
          </h2>
          <img
            src="/assets/img/elevating.jpg"
            alt="Elevating Communities"
            className="w-full h-64 object-cover rounded-xl mb-6 shadow"
          />
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              We recognize that sustainability encompasses social
              responsibility. At Himalayan Textile, we strive to elevate people
              by creating opportunities, fostering fair wages, and collaborating
              with NGOs and partners to support minorities and disadvantaged
              communities.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="subcard bg-green-50 rounded-2xl p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                <img
                  src="/assets/img/sdg8.jpg"
                  alt="Decent Work and Economic Growth"
                  className="h-16 w-16 mb-4"
                />
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  Decent Work and Economic Growth
                </h3>
                <p className="text-gray-700">
                  We empower local populations by providing training and
                  upskilling opportunities, ensuring they are equipped to
                  contribute productively to the economy.
                </p>
              </div>
              <div className="subcard bg-green-50 rounded-2xl p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                <img
                  src="/assets/img/sdg5.jpg"
                  alt="Gender Equality"
                  className="h-16 w-16 mb-4"
                />
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  Gender Equality
                </h3>
                <p className="text-gray-700">
                  Collaborating with NGOs, we champion women’s empowerment and
                  inclusivity, particularly in underrepresented areas.
                </p>
              </div>
              <div className="subcard bg-green-50 rounded-2xl p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                <img
                  src="/assets/img/sdg11.jpg"
                  alt="Sustainable Cities and Communities"
                  className="h-16 w-16 mb-4"
                />
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  Sustainable Cities and Communities
                </h3>
                <p className="text-gray-700">
                  By integrating hemp products into our operations, we
                  contribute to cleaner, more sustainable urban development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
