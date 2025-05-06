import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Panel Components ---
const WelcomePanel = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    gsap.from([titleRef.current, paragraphRef.current, buttonRef.current], {
      x: -200,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power1.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });

    gsap.from(image1Ref.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: image1Ref.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });

    gsap.from(image2Ref.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: image2Ref.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="panel w-screen h-screen flex items-center justify-start text-black p-12 gap-10">
      <div className="text flex-1/2">
        <div className="head">
          <h1 ref={titleRef} className="text-5xl font-bold py-6">
            Himalayan <span className="text-[#1FA951]">Textile</span>
          </h1>
        </div>
        <div className="para">
          <p ref={paragraphRef} className="text-lg ">
            <span className="text-[#1FA951] font-bold">Himalayan Textile</span>{" "}
            is a heritage-inspired brand dedicated to preserving the timeless
            art of handwoven textiles from the Himalayas. Blending tradition
            with sustainability, we empower local artisans—especially women—to
            craft each piece with care, using natural fibers and eco-friendly
            processes. Our mission is to celebrate culture, uplift communities,
            and deliver authentic, high-quality textiles that tell a story of
            craftsmanship and heart.
          </p>
        </div>
        <div className="button py-5">
          <button
            ref={buttonRef}
            className="bg-[#1FA951] text-white py-4 px-8 cursor-pointer rounded-lg"
          >
            Read More--
          </button>
        </div>
      </div>
      <div className="image flex-1/2 relative">
        <div className="wrap w-full h-full">
          {/* Top Image */}
          <div ref={image1Ref} className="image1 absolute top-0 left-0 w-[50%]">
            <img src="/assets/img/materials.jpg" alt="" className="h-50 w-95" />
          </div>

          {/* Bottom Image */}
          <div
            ref={image2Ref}
            className="image2 absolute bottom-0 right-0 w-[50%]"
          >
            <img src="/assets/img/img2.jpg" alt="" className="h-50 w-250" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SustainablePanel = () => (
  <section className="panel w-screen h-screen flex items-center justify-start text-black p-12 bg-gradient-to-b from-green-400 to-emerald-600">
    <div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Sustainable Materials
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl">
        Our textiles use organic and sustainable resources.
      </p>
    </div>
  </section>
);

const EmpoweringPanel = () => (
  <section className="panel w-screen h-screen flex items-center justify-start text-white p-12 bg-gradient-to-b from-orange-400 to-amber-600">
    <div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Empowering Artisans
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl">
        We support families and preserve age-old techniques.
      </p>
    </div>
  </section>
);

// --- Main Component ---
export default function HorizontalSnapPanels() {
  const containerRef = useRef(null);
  const scrollSectionRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");

    const ctx = gsap.context(() => {
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: scrollSectionRef.current,
          start: "top top",
          end: () => `+=${scrollSectionRef.current.offsetWidth}`,
          scrub: 1.5, // slower scroll for smoother effect
          pin: containerRef.current,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.4, max: 1.2 },
            ease: "power1.inOut",
          },
          markers: false,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scrollSectionRef} className="w-full h-[300vh] overflow-hidden">
      <div
        ref={containerRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        <div className="flex h-full w-[300vw] overflow-hidden">
          <WelcomePanel />
          <SustainablePanel />
          <EmpoweringPanel />
        </div>
      </div>
    </div>
  );
}
