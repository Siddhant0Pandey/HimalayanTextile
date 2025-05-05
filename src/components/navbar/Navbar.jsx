import React, { useState, useRef, useEffect } from "react";
import { BiPhone } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const sidebarRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent shadow-md text-lightText font-display">
      <div className="relative flex justify-between items-center px-4 py-4 lg:px-8 lg:py-6">
        <Link to="/">
          <img
            src="/assets/img/logo/logowhite.png"
            alt="logo"
            className="h-16 w-16"
          />
        </Link>

        {/* Desktop Links */}
        <div className="lg:flex gap-8 hidden items-center">
          <div className="relative">
            <button
              className="text-xl cursor-pointer flex items-center gap-1 group"
              onClick={toggleAboutDropdown}
            >
              About
              <FiChevronDown
                className={`transform transition-transform duration-300 ${
                  isAboutDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isAboutDropdownOpen && (
              <div className="absolute top-full mt-2 bg-lightText shadow-lg rounded p-2 text-darkText">
                <Link
                  to="/about"
                  className="block px-4 py-2 hover:text-highlight hover:underline underline-offset-4"
                >
                  About Us
                </Link>
                <Link
                  to="/our-story"
                  className="block px-4 py-2 hover:text-highlight hover:underline underline-offset-4"
                >
                  Our Story
                </Link>
                <Link
                  to="/sustainability"
                  className="block px-4 py-2 hover:text-highlight hover:underline underline-offset-4"
                >
                  Sustainability
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/fiber"
            className="text-xl hover:underline underline-offset-4 hover:text-highlight transition duration-300"
          >
            Fiber
          </Link>
          <Link
            to="/yarn"
            className="text-xl hover:underline underline-offset-4 hover:text-highlight transition duration-300"
          >
            Yarn
          </Link>
          <Link
            to="/fabrics"
            className="text-xl hover:underline underline-offset-4 hover:text-highlight transition duration-300"
          >
            Fabrics
          </Link>
        </div>

        {/* Phone Icon */}
        <div className="lg:flex items-center hidden">
          <BiPhone size={32} />
        </div>

        {/* Hamburger */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            <div className="w-8 h-1 bg-primary my-1"></div>
            <div className="w-8 h-1 bg-primary my-1"></div>
            <div className="w-8 h-1 bg-primary my-1"></div>
          </button>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="lg:hidden px-4 py-2 text-sm text-gray-500">
        {location.pathname !== "/" && (
          <p>
            Home / {location.pathname.split("/").slice(1).join(" / ")}
          </p>
        )}
      </div>

      {/* Sidebar Mobile Menu */}
      <div
        ref={sidebarRef}
        className="lg:hidden fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transform translate-x-full"
      >
        <div className="flex flex-col items-start p-6 gap-4">
          <div className="relative w-full">
            <button
              className="text-xl flex items-center justify-between w-full"
              onClick={toggleAboutDropdown}
            >
              <span className="flex items-center gap-2">
                About
                <FiChevronDown
                  className={`transform transition-transform duration-300 ${
                    isAboutDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>
            {isAboutDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/our-story"
                  className="block text-primary hover:underline underline-offset-4"
                >
                  Our Story
                </Link>
                <Link
                  to="/sustainability"
                  className="block text-primary hover:underline underline-offset-4"
                >
                  Sustainability
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/fiber"
            className="text-xl hover:underline underline-offset-4 text-darkText"
          >
            Fiber
          </Link>
          <Link
            to="/yarn"
            className="text-xl hover:underline underline-offset-4 text-darkText"
          >
            Yarn
          </Link>
          <Link
            to="/fabrics"
            className="text-xl hover:underline underline-offset-4 text-darkText"
          >
            Fabrics
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
