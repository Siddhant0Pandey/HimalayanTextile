import React, { useState, useRef, useEffect } from "react";
import { BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

gsap.registerPlugin(Draggable);

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const navbarRef = useRef(null);
  const toggleIconRef = useRef(null);
  const aboutRef = useRef(null);

  const toggleNavbar = () => {
    setIsNavbarVisible((prev) => !prev);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    gsap.to(navbarRef.current, {
      y: isNavbarVisible ? 0 : "-100%",
      duration: 0.5,
      ease: "power3.inOut",
    });
  }, [isNavbarVisible]);

  useEffect(() => {
    Draggable.create(toggleIconRef.current, {
      type: "y",
      bounds: { minY: 0, maxY: 100 },
      onDragEnd: function () {
        if (this.y > 30) {
          setIsNavbarVisible(true);
        }
        gsap.to(this.target, { y: 0, duration: 0.3 });
      },
    });

    if (!isNavbarVisible) {
      gsap.to(toggleIconRef.current, {
        y: 5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.6,
      });
    } else {
      gsap.killTweensOf(toggleIconRef.current);
      gsap.to(toggleIconRef.current, { y: 0, duration: 0.3 });
    }
  }, [isNavbarVisible]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Toggle Icon */}
      <div
        className="fixed -top-2 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center w-full pointer-events-none"
        style={{ height: "60px" }}
      >
        <div
          ref={toggleIconRef}
          onClick={toggleNavbar}
          className="relative z-50 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-darkText cursor-pointer pointer-events-auto"
        >
          {isNavbarVisible ? (
            <FaAngleDoubleUp size={24} />
          ) : (
            <FaAngleDoubleDown size={24} />
          )}
        </div>
      </div>

      {/* Navbar */}
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 w-full bg-white z-40 shadow-md text-darkText font-display transform -translate-y-full"
      >
        <div className="relative flex justify-between items-center px-4 py-4 lg:px-8 lg:py-6">
          <Link to="/">
            <img
              src="/assets/img/logo/logodark.png"
              alt="logo"
              className="h-16 w-16"
            />
          </Link>

          {/* Desktop Links */}
          <div className="lg:flex gap-8 hidden items-center">
            <div className="relative group" ref={aboutRef}>
              <div
                className="text-xl cursor-pointer flex items-center gap-1 relative group"
                onClick={toggleAboutDropdown}
              >
                About
                <FiChevronDown
                  className={`transition-transform duration-300 ${isAboutDropdownOpen ? "rotate-180" : ""}`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-highlight transition-all duration-300 group-hover:w-full"></span>
              </div>
              {isAboutDropdownOpen && (
                <div className="absolute top-full mt-2 bg-lightText shadow-lg rounded p-2 text-darkText">
                  <Link
                    to="/about"
                    className="block px-4 py-2 transition-all duration-300 hover:text-highlight hover:translate-x-1"
                    onClick={() => setTimeout(() => setIsAboutDropdownOpen(false), 50)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/our-story"
                    className="block px-4 py-2 transition-all duration-300 hover:text-highlight hover:translate-x-1"
                    onClick={() => setTimeout(() => setIsAboutDropdownOpen(false), 50)}
                  >
                    Our Story
                  </Link>
                  <Link
                    to="/sustainability"
                    className="block px-4 py-2 transition-all duration-300 hover:text-highlight hover:translate-x-1"
                    onClick={() => setTimeout(() => setIsAboutDropdownOpen(false), 50)}
                  >
                    Sustainability
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/fiber"
              className="text-xl relative group transition-all duration-300"
            >
              Fiber
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-highlight transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/yarn"
              className="text-xl relative group transition-all duration-300"
            >
              Yarn
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-highlight transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/fabrics"
              className="text-xl relative group transition-all duration-300"
            >
              Fabrics
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-highlight transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Phone Icon */}
          <div className="lg:flex items-center hidden">
            <BiPhone size={32} />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden px-6 pb-6 flex flex-col gap-4">
          <div className="relative w-full" ref={aboutRef}>
            <button
              className="text-xl flex items-center gap-2 w-full"
              onClick={toggleAboutDropdown}
            >
              About
              <FiChevronDown
                className={`transition-transform duration-300 ${isAboutDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isAboutDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/about"
                  className="block text-highlight transition-all duration-300 hover:translate-x-1"
                  onClick={() => setTimeout(() => setIsAboutDropdownOpen(false), 50)}
                >
                  About Us
                </Link>
                <Link
                  to="/our-story"
                  className="block text-highlight transition-all duration-300 hover:translate-x-1"
                  onClick={() => setTimeout(() => setIsAboutDropdownOpen(false), 50)}
                >
                  Our Story
                </Link>
                <Link
                  to="/sustainability"
                  className="block text-highlight transition-all duration-300 hover:translate-x-1"
                  onClick={() => setTimeout(() => setIsAboutDropdownOpen(false), 50)}
                >
                  Sustainability
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/fiber"
            className="text-xl transition-all duration-300 hover:text-highlight hover:translate-x-1"
          >
            Fiber
          </Link>
          <Link
            to="/yarn"
            className="text-xl transition-all duration-300 hover:text-highlight hover:translate-x-1"
          >
            Yarn
          </Link>
          <Link
            to="/fabrics"
            className="text-xl transition-all duration-300 hover:text-highlight hover:translate-x-1"
          >
            Fabrics
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
