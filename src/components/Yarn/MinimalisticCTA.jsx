import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MinimalisticCTA({ product_name }) {
  const [isHovered, setIsHovered] = useState(false);

  const theme = {
    primary: "#1fa951",
    secondary: "#729a78",
    light: "#edfeee",
    highlight: "#F0F7F4",
    lightText: "#eaeeff",
    darkText: "#1d1f10",
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: theme.light }}
    >
      <div className="container mx-auto px-6 text-center max-w-4xl">
        {/* Main Heading */}
        <h2
          className="text-4xl md:text-5xl font-light mb-8 tracking-wide"
          style={{ color: theme.primary }}
        >
          Ready to Experience
          <span className="block font-normal mt-2">Himalayan Quality?</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          style={{ color: theme.darkText }}
        >
          We invite you to explore our collection of premium {product_name} and
          discover the perfect material for your next creative project.
        </p>

        {/* CTA Button */}
        <Link
          to="/contact"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group px-10 py-4 rounded-full text-lg font-medium transition-all duration-500 ease-out flex items-center mx-auto gap-3 border-2 hover:shadow-xl transform hover:-translate-y-1 no-underline focus:outline-none"
          style={{
            backgroundColor: isHovered ? "transparent" : theme.primary,
            color: isHovered ? theme.primary : theme.light,
            borderColor: theme.primary,
            display: "inline-flex",
            textDecoration: "none",
          }}
          role="button"
        >
          <span>Interested</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-300 ${
              isHovered ? "translate-x-1" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>

        {/* Subtle accent line */}
        <div className="mt-16 flex justify-center">
          <div
            className="w-24 h-0.5 rounded-full opacity-30"
            style={{ backgroundColor: theme.secondary }}
          />
        </div>
      </div>
    </div>
  );
}
