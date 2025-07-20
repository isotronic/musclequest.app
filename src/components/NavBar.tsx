import React from "react";
import { useState, useEffect } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Logo from "../images/logo_transparent_bg.png";
import { Link } from "gatsby";

const NavBar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isNavOpen]);

  return (
    <nav
      className={`fixed z-20 w-full border-b transition-all duration-500 ${
        isScrolled ? "glass border-white/10 shadow-lg" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
        <Link
          to="/"
          className="group flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="relative">
            <img src={Logo} alt="Logo" className="w-14 transition-transform duration-300 group-hover:rotate-12" />
            <div className="absolute inset-0 rounded-full bg-tint/20 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>
          <span className="bg-gradient-to-r from-tint to-hover bg-clip-text text-2xl font-bold text-transparent">
            MuscleQuest
          </span>
        </Link>
        <button
          onClick={() => setIsNavOpen((prev) => !prev)}
          data-collapse-toggle="navbar-default"
          type="button"
          className={`z-30 inline-flex h-12 w-12 items-center justify-center rounded-xl p-2 text-sm transition-all duration-300 md:hidden ${
            isNavOpen
              ? "rotate-90 scale-110 bg-tint text-background"
              : "hover:scale-105 hover:bg-tint/10 hover:text-tint"
          }`}
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`h-7 w-7 transition-transform duration-300 ${isNavOpen ? "rotate-45" : ""}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`fixed right-0 top-0 z-20 h-screen w-1/2 transform transition-all duration-500 md:relative md:right-0 md:top-0 md:block md:h-auto md:w-auto md:transform-none md:bg-transparent md:shadow-none ${
            isNavOpen ? "glass translate-x-0 border-l border-white/10" : "translate-x-full bg-background drop-shadow-xl"
          }`}
        >
          <ul className="flex h-full min-h-screen flex-col items-center justify-center space-y-4 p-8 text-xl font-semibold md:mt-0 md:h-auto md:min-h-0 md:flex-row md:space-x-12 md:space-y-0 md:p-0 md:text-base md:font-medium">
            <li>
              <AnchorLink
                to="/#features"
                aria-label="Features"
                title="Features"
                className="group relative block rounded-lg px-20 py-7 transition-all duration-300 hover:bg-tint/10 hover:text-tint md:px-3 md:py-2"
                onAnchorLinkClick={() => setIsNavOpen(false)}
              >
                Features
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-tint to-hover transition-all duration-300 group-hover:w-full"></span>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                to="/#benefits"
                aria-label="Benefits"
                title="Benefits"
                className="group relative block rounded-lg px-20 py-7 transition-all duration-300 hover:bg-tint/10 hover:text-tint md:px-3 md:py-2"
                onAnchorLinkClick={() => setIsNavOpen(false)}
              >
                Benefits
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-tint to-hover transition-all duration-300 group-hover:w-full"></span>
              </AnchorLink>
            </li>
            {/* <li>
              <AnchorLink
                to="/#screenshots"
                aria-label="Screenshots"
                title="Screenshots"
                className="block px-20 py-7 hover:text-tint md:px-0 md:py-0"
                onAnchorLinkClick={() => setIsNavOpen(false)}
              >
                Screenshots
              </AnchorLink>
            </li> */}
            <li>
              <AnchorLink
                to="/#download"
                aria-label="Download"
                title="Download"
                className="group relative block rounded-lg px-20 py-7 transition-all duration-300 hover:bg-tint/10 hover:text-tint md:px-3 md:py-2"
                onAnchorLinkClick={() => setIsNavOpen(false)}
              >
                Download
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-tint to-hover transition-all duration-300 group-hover:w-full"></span>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                to="/#contact"
                aria-label="Contact"
                title="Contact"
                className="group relative block rounded-lg px-20 py-7 transition-all duration-300 hover:bg-tint/10 hover:text-tint md:px-3 md:py-2"
                onAnchorLinkClick={() => setIsNavOpen(false)}
              >
                Contact
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-tint to-hover transition-all duration-300 group-hover:w-full"></span>
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${isNavOpen ? "opacity-100" : "pointer-events-none opacity-0"} fixed inset-0 z-10 bg-black/50 backdrop-blur-sm transition-opacity duration-300`}
        onClick={() => setIsNavOpen(false)}
      ></div>
    </nav>
  );
};

export default NavBar;
