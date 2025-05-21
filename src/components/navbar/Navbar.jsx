/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const menuLinksRef = useRef([]);
  const subMenuLinksRef = useRef([]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (menuOpen) setAboutOpen(false);
  };

  const toggleAboutDropdown = () => {
    setAboutOpen((prev) => !prev);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const triggerPoint = window.innerHeight * 14;
  //     setScrolled(window.scrollY > triggerPoint);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        clipPath: "circle(150% at 90% -10%)",
        duration: 0.7,
        ease: "power4.inOut",
        pointerEvents: "auto",
      });

      gsap.fromTo(
        menuLinksRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        clipPath: "circle(0% at 90% -10%)",
        duration: 0.6,
        ease: "power4.inOut",
        pointerEvents: "none",
      });
    }
  }, [menuOpen]);

  useEffect(() => {
    if (aboutOpen) {
      gsap.fromTo(
        subMenuLinksRef.current,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [aboutOpen]);

  const handleNavigateWithAnimation = (path) => {
    gsap.to(menuRef.current, {
      clipPath: "circle(0% at 90% -10%)",
      duration: 0.6,
      ease: "power4.inOut",
      pointerEvents: "none",
      onComplete: () => {
        setMenuOpen(false);
        setAboutOpen(false);
        navigate(path);
      },
    });
  };

  const navStyles = {
    "/": {
      bg: "bg-transparent",
      textColor: "white",
      logo: "/assets/img/logo/logowhite.png",
      borderColor: "white",
    },
    "/contact": {
      bg: "bg-transparent",
      textColor: "#1fa951",
      logo: "/assets/img/logo/logodark.png",
      borderColor: "#1fa951",
    },
    "/fiber": {
      bg: "bg-transparent",
      textColor: "white",
      logo: "/assets/img/logo/logowhite.png",
      borderColor: "white",
    },
    "/yarn": {
      bg: "bg-transparent",
      textColor: "white",
      logo: "/assets/img/logo/logowhite.png",
      borderColor: "white",
    },
    "/our-story": {
      bg: "bg-transparent",
      textColor: "white",
      logo: "/assets/img/logo/logowhite.png",
      borderColor: "white",
    },
    "/our-brand": {
      bg: "bg-transparent",
      textColor: "white",
      logo: "/assets/img/logo/logowhite.png",
      borderColor: "white",
    },
    "/journals": {    
      bg: "bg-transparent",
      textColor: "white",
      logo: "/assets/img/logo/logowhite.png",
      borderColor: "white",
    },

    default: {
      bg: "bg-transparent",
      textColor: "#1fa951",
      logo: "/assets/img/logo/logodark.png",
      borderColor: "#1fa951",
    },
  };

  const currentStyle = navStyles[location.pathname] || navStyles.default;
  const navLinks = [
    { text: "Home", to: "/" },
    {
      text: "About",
      dropdown: [
        { text: "About Us", to: "/about" },
        { text: "Our Story", to: "/our-story" },
        { text: "Our Brand", to: "/our-brand" },
      ],
    },
    { text: "Fiber", to: "/fiber" },
    { text: "Yarn", to: "/yarn" },
    { text: "Fabric", to: "/fabric" },
  ];

  const navLink2 = [
    { text: "Sustainability", to: "/sustainable" },
    { text: "Journals", to: "/journals" },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`flex items-center justify-between px-6 py-4 fixed w-full top-0 left-0 z-30 transition-colors duration-300 ${currentStyle.bg}`}
      >
        <Link to="/">
          <img
            src={
              scrolled && currentStyle.logo === "/assets/img/logo/logowhite.png"
                ? "/assets/img/logo/logodark.png"
                : currentStyle.logo
            }
            alt="logo"
            className="h-16 w-16"
          />
        </Link>

        <div className="flex items-center gap-6">
          {/* Contact Button */}
          <button
            onClick={() => navigate("/contact")}
            className="flex items-center gap-2 px-4 py-2 rounded-full border transition-transform duration-300 hover:scale-105 group cursor-pointer"
            style={{
              borderColor: currentStyle.borderColor,
              color: currentStyle.textColor,
            }}
          >
            <svg
              className="w-5 h-5 group-hover:fill-[#edfeee] transition-all"
              fill={currentStyle.textColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v.01L12 13 2 4.01V4zm0 2.2l8.8 7.33a1 1 0 001.2 0L22 6.2V20a2 2 0 01-2 2H4a2 2 0 01-2-2V6.2z" />
            </svg>
            <span className="text-sm tracking-wide group-hover:text-[#edfeee] transition-all">
              Contact
            </span>
          </button>

          {/* Menu Button */}
          <div
            onClick={toggleMenu}
            className="flex items-center gap-2 cursor-pointer group"
          >
            {!menuOpen && (
              <span
                className="tracking-widest text-sm"
                style={{ color: currentStyle.textColor }}
              >
                MENU
              </span>
            )}
            <div className="space-y-1 group-hover:rotate-90 transition-transform duration-300">
              <div
                className="w-6 h-[2px]"
                style={{ backgroundColor: currentStyle.textColor }}
              ></div>
              <div
                className="w-6 h-[2px]"
                style={{ backgroundColor: currentStyle.textColor }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-full bg-[#18181C] text-white z-40 px-8 clip-circle"
        style={{ clipPath: "circle(0% at 90% -10%)", pointerEvents: "none" }}
      >
        {/* Logo and Close */}
        <div className="absolute left-6 top-6 flex items-center justify-between w-full pr-12 z-50">
          <Link to="/">
            <img
              src="/assets/img/logo/logodark.png"
              alt="logo"
              className="h-16 w-16"
            />
          </Link>
          <div
            className="cursor-pointer flex items-center gap-2"
            onClick={toggleMenu}
          >
            <span className="text-sm tracking-widest">CLOSE</span>
            <IoClose size={28} />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-32 flex flex-col md:flex-row w-full justify-between gap-12">
          {/* Left Side Links */}
          <div className="flex-1 space-y-10 text-5xl md:text-6xl font-bold tracking-tight">
            {navLinks.map((link, index) => (
              <div key={index}>
                <div
                  ref={(el) => (menuLinksRef.current[index] = el)}
                  className="flex items-center gap-6 cursor-pointer"
                  onClick={() => {
                    if (link.dropdown) {
                      toggleAboutDropdown();
                    } else {
                      handleNavigateWithAnimation(link.to);
                    }
                  }}
                >
                  <span className="text-sm font-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="hover:text-[#1fa951] transition-colors duration-300">
                    {link.text}
                  </span>
                </div>

                {/* Dropdown Links */}
                {link.dropdown && aboutOpen && (
                  <div className="ml-16 mt-6 space-y-4 text-3xl font-medium">
                    {link.dropdown.map((subLink, subIndex) => (
                      <span
                        key={subIndex}
                        onClick={() => handleNavigateWithAnimation(subLink.to)}
                        ref={(el) => (subMenuLinksRef.current[subIndex] = el)}
                        className="block hover:text-[#1fa951] transition-colors duration-300 cursor-pointer"
                      >
                        {subLink.text}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Link */}
          <div className="flex-1 flex items-start md:items-start justify-end">
            <div className="space-y-10 text-5xl md:text-6xl font-bold tracking-tight text-right">
              {navLink2.map((link, index) => (
                <div key={index}>
                  <div
                    ref={(el) =>
                      (menuLinksRef.current[navLinks.length + index] = el)
                    }
                    className="flex items-center gap-6 cursor-pointer justify-start"
                    onClick={() => handleNavigateWithAnimation(link.to)}
                  >
                    <span className="text-sm font-light">
                      {String(navLinks.length + index + 1).padStart(2, "0")}
                    </span>
                    <span className="hover:text-[#1fa951] transition-colors duration-300">
                      {link.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
