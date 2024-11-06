import React from "react";
import { useState, useEffect } from "react";

import Logo from "../images/logo.png";

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
    <nav className={`fixed z-10 w-full bg-background ${isScrolled ? "shadow-md" : ""}`}>
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="w-14" />
          <span className="text-2xl font-bold text-tint">MuscleQuest</span>
        </a>
        <button
          onClick={() => setIsNavOpen((prev) => !prev)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="z-30 inline-flex h-12 w-12 items-center justify-center rounded-lg p-2 text-sm hover:text-tint md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-7 w-7"
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
          className={`fixed right-0 top-0 z-20 h-screen w-1/2 transform bg-background ${
            isNavOpen ? "translate-x-0 drop-shadow-xl" : "translate-x-full"
          } transition-transform duration-300 md:relative md:right-0 md:top-0 md:block md:h-auto md:w-auto md:transform-none md:bg-transparent md:shadow-none`}
        >
          <ul className="flex h-full min-h-screen flex-col items-center justify-center space-y-4 p-8 text-xl font-semibold md:mt-0 md:h-auto md:min-h-0 md:flex-row md:space-x-12 md:space-y-0 md:p-0 md:text-base md:font-medium">
            <li>
              <a
                href="#features"
                aria-label="Features"
                className="block px-20 py-7 hover:text-tint md:px-0 md:py-0"
                onClick={() => setIsNavOpen(false)}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                aria-label="Benefits"
                className="block px-20 py-7 hover:text-tint md:px-0 md:py-0"
                onClick={() => setIsNavOpen(false)}
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                href="#screenshots"
                aria-label="Screenshots"
                className="block px-20 py-7 hover:text-tint md:px-0 md:py-0"
                onClick={() => setIsNavOpen(false)}
              >
                Screenshots
              </a>
            </li>
            <li>
              <a
                href="#download"
                aria-label="Download"
                className="block px-20 py-7 hover:text-tint md:px-0 md:py-0"
                onClick={() => setIsNavOpen(false)}
              >
                Download
              </a>
            </li>
            <li>
              <a
                href="#contact"
                aria-label="Contact"
                className="block px-20 py-7 hover:text-tint md:px-0 md:py-0"
                onClick={() => setIsNavOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${isNavOpen ? "" : "hidden"} fixed z-10 h-screen w-full bg-opacity-50 backdrop-blur-sm`}
        onClick={() => setIsNavOpen(false)}
      ></div>
    </nav>
  );
};

export default NavBar;
