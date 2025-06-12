/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion"; // Ensure correct imports

function OurStoryFounderMsg() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  useEffect(() => {
    if (isInView) {
      controlsLeft.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1.2,
          type: "spring",
          bounce: 0.25,
          stiffness: 40,
        },
      });

      controlsRight.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1.2,
          type: "spring",
          bounce: 0.25,
          stiffness: 40,
          delay: 0.3,
        },
      });
    } else {
      controlsLeft.start({ x: 0, opacity: 0, scale: 0.95 });
      controlsRight.start({ x: 0, opacity: 0, scale: 0.95 });
    }
  }, [isInView, controlsLeft, controlsRight]);

  return (
    <motion.div className="py-20 max-w-[80%] m-auto">
      {/* Title Animation */}
      <motion.h1
        className="text-4xl text-center font-bold text-[#1FA951] mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 50,
        }}
        viewport={{ once: false }}
      >
        Chairman’s Note{" "}
      </motion.h1>

      {/* Content Section */}
      <motion.div
        className="wrap flex flex-col md:flex-row gap-12 px-4 md:px-15 items-stretch"
        ref={ref}
      >
        {/* Left Content (Text) */}
        <motion.div
          className="left md:w-1/2 text-lg leading-relaxed flex flex-col text-justify" // ← this adds equal padding on all sides
          animate={controlsLeft}
          initial={{ x: -100, opacity: 0, scale: 0.95 }}
        >
          <p>
            Himalayan Textile Industries was founded in 1995 by my mother, Nanda
            Dangi, and my father, Kamal Dangi, with a vision to create
            sustainable, natural fiber textiles while preserving traditional
            artisan crafts. Over the years, we have grown beyond hand-spun yarn
            and handloom fabric to incorporate machine-spun yarn and power loom
            production—combining heritage with innovation. <br />
            Today, we are proud to be Nepal’s No. 1 hand-spun yarn manufacturer
            and exporter, offering a diverse range of earth-friendly products
            including handloom fabrics, fashion accessories like bags and
            pouches, home textiles, and carpets. While we honor and preserve the
            skills of our artisans, we also embrace modern technology to meet
            growing global demand sustainably. <br />
            Textile manufacturing is the second largest polluter on the planet
            after oil. Just as the world is transitioning from fossil fuels to
            green energy, we are committed to replacing synthetic fibers like
            polyester with natural, eco-friendly fibers. Every fiber we produce
            is rooted in our love for the Earth and our commitment to reducing
            environmental impact. <br />
            At Himalayan Textile Industries, we believe in creating products
            that not only look and feel good but also protect our planet and
            empower our communities. Thank you for joining us on this journey
            toward a more sustainable and beautiful future. <br />
          </p>
          <p className="font-semibold mt-4 text-gray-600">
            Warm regards, <br />
            Baburam Dangi <br />
            Chairman & CEO <br />
            Himalayan Textile Industries
          </p>
        </motion.div>

        {/* Right Content (Image) */}
        <motion.div
          className="right md:w-1/2 flex flex-col"
          animate={controlsRight}
          initial={{ x: 0, opacity: 0, scale: 0.95 }}
        >
          <img
            src="/assets/img/Chairman's & Ceo.jpg"
            alt="Founder"
            className="rounded-xl shadow-xl object-cover  w-[100%] h-[50%]"
            style={{ objectPosition: "60% center" }} // Ensures image tries to fill height
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default OurStoryFounderMsg;
