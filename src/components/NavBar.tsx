import React from "react";
import { useState, useEffect } from "react";

const NavBar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    setLastScrollY(window.scrollY);
    setIsScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    setLastScrollY(window.scrollY);
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
    <nav className={`fixed z-10 w-full bg-slate-900 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3">
          <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="#0f172a" stroke="#22c55e" strokeWidth="4" />
            <text
              x="50%"
              y="52%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontFamily="Inter"
              fontSize="35"
              fill="#22c55e"
            >
              JB
            </text>
          </svg>
        </a>
        <button
          onClick={() => setIsNavOpen((prev) => !prev)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="z-30 inline-flex h-12 w-12 items-center justify-center rounded-lg p-2 text-sm hover:text-green-500 md:hidden"
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
          className={`mobile-menu-bg fixed right-0 top-0 z-20 h-screen w-1/2 transform drop-shadow-xl ${
            isNavOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:relative md:right-0 md:top-0 md:block md:h-auto md:w-auto md:transform-none md:bg-transparent md:shadow-none`}
        >
          <ul className="flex h-full min-h-screen flex-col items-center justify-center space-y-4 p-8 text-xl font-semibold md:mt-0 md:h-auto md:min-h-0 md:flex-row md:space-x-12 md:space-y-0 md:p-0 md:text-base md:font-medium">
            <li>
              <a
                href="#about"
                aria-label="About"
                className="block px-20 py-7 hover:text-green-500 md:px-0 md:py-0"
                onClick={() => setIsNavOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                aria-label="Projects"
                className="block px-20 py-7 hover:text-green-500 md:px-0 md:py-0"
                onClick={() => setIsNavOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                aria-label="Contact"
                className="block px-20 py-7 hover:text-green-500 md:px-0 md:py-0"
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
