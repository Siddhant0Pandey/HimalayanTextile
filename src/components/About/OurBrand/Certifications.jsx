/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    name: "GOTS",
    logo: "/certs/gots.png",
    desc: "Global Organic Textile Standard",
  },
  {
    name: "OEKO-TEX®",
    logo: "/certs/oeko.png",
    desc: "Standard 100 certified",
  },
  {
    name: "Fair Trade",
    logo: "/certs/fairtrade.png",
    desc: "Fair labor practices",
  },
  {
    name: "PETA Vegan",
    logo: "/certs/peta.png",
    desc: "Cruelty-free and vegan",
  },
  { name: "B Corp", logo: "/certs/bcorp.png", desc: "Certified B Corporation" },
];

const Certifications = () => {
  return (
    <div className="mb-20">
      <h3 className="text-2xl font-semibold text-center mb-8">
        Our Certifications
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="w-24 md:w-32 p-2 rounded-xl shadow-md hover:shadow-xl bg-gray-50 cursor-pointer transition"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img
              src={cert.logo}
              alt={cert.name}
              className="w-full h-auto object-contain"
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
