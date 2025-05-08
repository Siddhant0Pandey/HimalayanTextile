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
      controlsLeft.start({ x: -100, opacity: 0, scale: 0.95 });
      controlsRight.start({ x: 100, opacity: 0, scale: 0.95 });
    }
  }, [isInView, controlsLeft, controlsRight]);

  return (
    <div className="py-20 max-w-[80%] m-auto">
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
        Founder Message
      </motion.h1>

      <div
        className="wrap flex flex-col md:flex-row gap-12 px-4 md:px-15 items-center"
        ref={ref}
      >
        <motion.div
          className="left md:w-1/2 text-lg leading-relaxed"
          animate={controlsLeft}
          initial={{ x: -100, opacity: 0, scale: 0.95 }}
        >
          <p>
            At <strong className="text-[#1FA951]">Himalayan Textile</strong>,
            our mission is to craft sustainable, ethically produced fabrics
            inspired by nature. Every thread we weave is a promise—to protect
            the environment, empower local artisans, and innovate with
            responsibility.
          </p>
          <br />
          <p>
            Sustainability isn’t just our goal; it’s our foundation. Thank you
            for supporting a cleaner, greener future.
          </p>
          <p className="font-semibold mt-4 text-gray-600">
            — Founder, Himalayan Textile
          </p>
        </motion.div>

        <motion.div
          className="right md:w-1/2"
          animate={controlsRight}
          initial={{ x: 100, opacity: 0, scale: 0.95 }}
        >
          <img
            src="/assets/img/founder.png"
            alt="Founder"
            className="rounded-xl shadow-xl object-cover w-full max-h-[400px]"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default OurStoryFounderMsg;
