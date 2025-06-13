/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

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
    <motion.div className="py-12 md:py-20 xl:py-24 2xl:py-32 max-w-[95%] md:max-w-[80%] 2xl:max-w-[70%] m-auto bg-white text-darkText">
      {/* Title */}
      <motion.h1
        className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl text-center font-bold text-[#1FA951] mb-6 md:mb-12 xl:mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 50,
        }}
        viewport={{ once: false }}
      >
        Chairman's Note
      </motion.h1>

      {/* Content */}
      <motion.div
        className="wrap flex flex-row gap-3 md:gap-12 xl:gap-20 px-2 md:px-10 xl:px-16 items-start"
        ref={ref}
      >
        {/* Left: Text */}
        <motion.div
          className="left w-[65%] md:w-1/2 text-[10px] md:text-lg xl:text-xl 2xl:text-3xl  md:leading-relaxed flex flex-col leading-relaxed text-justify"
          animate={controlsLeft}
          initial={{ x: -100, opacity: 0, scale: 0.95 }}
        >
          <p className="mb-1 md:mb-4">
            Himalayan Textile Industries was founded in 1995 by my mother, Nanda
            Dangi, and my father, Kamal Dangi, with a vision to create
            sustainable, natural fiber textiles while preserving traditional
            artisan crafts.
          </p>

          <p className="mb-1 md:mb-4">
            Today, we are proud to be Nepal's No. 1 hand-spun yarn manufacturer
            and exporter, offering a diverse range of earth-friendly products
            including handloom fabrics, fashion accessories, home textiles, and
            carpets.
          </p>

          <p className="mb-1 md:mb-4">
            Textile manufacturing is the second largest polluter after oil. We
            are committed to replacing synthetic fibers with natural,
            eco-friendly fibers.
          </p>

          <p className="mb-2 md:mb-6">
            At Himalayan Textile Industries, we believe in creating products
            that protect our planet and empower our communities.
          </p>

          <div className="font-semibold text-gray-600 lg:text-lg xl:text-xl 2xl:text-3xl text-[10px]">
            <p>Warm regards,</p>
            <p>Baburam Dangi</p>
            <p>Chairman & CEO</p>
            <p>Himalayan Textile Industries</p>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="right w-[35%] md:w-1/2 flex flex-col"
          animate={controlsRight}
          initial={{ x: 0, opacity: 0, scale: 0.95 }}
        >
          <img
            src="/assets/img/Chairman's & Ceo.jpg"
            alt="Founder"
            className="rounded-lg md:rounded-xl shadow-xl object-cover w-full h-[200px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[900px]  grayscale-100 hover:grayscale-0 transition duration-1000 3xl:object-contain"
            style={{ objectPosition: "60% center" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default OurStoryFounderMsg;
