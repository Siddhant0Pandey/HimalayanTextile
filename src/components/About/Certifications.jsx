/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    name: "GOTS",
    logo: "/assets/img/gots.png",
    desc: "Global Organic Textile Standard",
  },
  {
    name: "OEKO-TEX®",
    logo: "/assets/img/oeko-tex.png",
    desc: "Standard 100 certified",
  },
  {
    name: "Fair Trade",
    logo: "/assets/img/Fair trade.png",
    desc: "Fair labor practices",
  },
  {
    name: "PETA Vegan",
    logo: "/assets/img/peta-logo.png",
    desc: "Cruelty-free and vegan",
  },
  {
    name: "B Corp",
    logo: "/assets/img/b-corp.png",
    desc: "Certified B Corporation",
  },
];

const Certifications = () => {
  return (
    <div className="mb-20">
      <h3 className="text-center text-2xl sm:text-3xl font-bold mb-8 text-[#1FA951]">
        Our Certifications
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="w-32 h-32 md:w-36 md:h-36 p-4 flex flex-col items-center justify-center rounded-xl shadow-md hover:shadow-xl bg-gray-50 cursor-pointer transition"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img
              src={cert.logo}
              alt={cert.name}
              className="w-16 h-16 object-contain"
            />
            <p className="text-xs text-center mt-2 text-gray-600">
              {cert.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
