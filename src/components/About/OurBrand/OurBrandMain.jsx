import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const OurBrandMain = () => {
  return (
    <div className="bg-light text-white px-6 py-12 md:py-20 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="flex flex-col items-start">
        <img
          src="/assets/img/Dangi.png" 
          alt="Himalayan Textile"
          className="w-full rounded-xl h-full object-cover mb-6"
        />

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4">
          <FaFacebookF className="text-white text-lg" />
          <FaInstagram className="text-white text-lg" />
          <FaLinkedinIn className="text-white text-lg" />
          <FaXTwitter className="text-white text-lg" />
        </div>
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-darkText">
          Dangiz
        </h2>
        <p className="text-base md:text-lg mb-6 text-darkText">
          The Dangiz is a diversified conglomerate with a presence in multiple
          industries, each driven by a commitment to innovation, quality, and
          sustainability. Our vision is to create value and positively impact
          the lives of people by delivering excellence across sectors. Here's an
          overview of the businesses that form the backbone of the Dangi Group.
        </p>
        <a
          href="https://himalayantextile.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#1FA951] text-white px-6 py-2 rounded-md font-medium mb-6"
        >
          dangiz.com
        </a>

        <div className="grid grid-cols-2 gap-4 h-[200px]  mb-50">
          {/* Left vertical image (spans two rows) */}
          <img
            src="/assets/img/yarn/Hemp.jpg"
            alt="product1"
            className="rounded-lg object-cover w-full h-65 row-span-2"
          />

          {/* Top-right image */}
          <img
            src="/assets/img/yarn/Hemp.jpg"
            alt="product2"
            className="rounded-lg object-cover w-full h-30"
          />

          {/* Bottom-right image */}
          <img
            src="/assets/img/yarn/Hemp.jpg"
            alt="product3"
            className="rounded-lg object-cover w-full h-30"
          />
        </div>
      </div>
    </div>
  );
};

export default OurBrandMain;
