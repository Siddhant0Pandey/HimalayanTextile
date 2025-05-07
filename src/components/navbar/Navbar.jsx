import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
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

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 10.4;
      setScrolled(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navLinks = [
    { text: "Home", to: "/" },
    {
      text: "About",
      dropdown: [
        { text: "About Us", to: "/about" },
        { text: "Our Story", to: "/about/our-process" },
        { text: "Sustainability", to: "/about/sustainability" },
      ],
    },
    { text: "Fiber", to: "/fiber" },
    { text: "Yarn", to: "/yarn" },
    { text: "Fabric", to: "/fabric" },
  ];

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-transparent fixed w-full top-0 left-0 z-30 transition-colors duration-300">
        <Link to="/">
          <img
            src={
              scrolled
                ? "/assets/img/logo/logodark.png"
                : "/assets/img/logo/logowhite.png"
            }
            alt="logo"
            className="h-16 w-16"
          />
        </Link>
        <div
          onClick={toggleMenu}
          className="flex items-center gap-2 cursor-pointer group"
        >
          {!menuOpen && (
            <span
              className="tracking-widest text-sm"
              style={{ color: scrolled ? "#1fa951" : "white" }}
            >
              MENU
            </span>
          )}
          <div className="space-y-1 group-hover:rotate-90 transition-transform duration-300">
            <div
              className="w-6 h-[2px]"
              style={{ backgroundColor: scrolled ? "#1fa951" : "white" }}
            ></div>
            <div
              className="w-6 h-[2px]"
              style={{ backgroundColor: scrolled ? "#1fa951" : "white" }}
            ></div>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-full bg-[#18181C] text-white z-40 flex flex-col items-start justify-center px-8 clip-circle"
        style={{ clipPath: "circle(0% at 90% -10%)", pointerEvents: "none" }}
      >
        {/* Logo and Close */}
        <div className="flex items-center justify-between">
          <div className="absolute left-6 text-lg tracking-widest">
            <Link to="/">
              <img
                src="/assets/img/logo/logodark.png"
                alt="logo"
                className="h-16 w-16"
              />
            </Link>
          </div>
          <div
            className="absolute right-6 cursor-pointer flex items-center gap-2"
            onClick={toggleMenu}
          >
            <span className="text-sm tracking-widest">CLOSE</span>
            <IoClose size={28} />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-12 space-y-10 text-6xl font-bold tracking-tight">
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

              {/* Dropdown Links for "About" */}
              {link.dropdown && aboutOpen && (
                <div className="ml-16 mt-6 space-y-4 text-3xl font-medium">
                  {link.dropdown.map((subLink, subIndex) => (
                    <span
                      key={subIndex}
                      onClick={() => handleNavigateWithAnimation(subLink.to)}
                      ref={(el) =>
                        (subMenuLinksRef.current[subIndex] = el)
                      }
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
      </div>
    </>
  );
}

export default Navbar;
  