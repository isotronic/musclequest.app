import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 py-6 text-center text-slate-400">
      <div className="mb-4 flex justify-center space-x-6 md:hidden">
        <a
          href="https://github.com/isotronic"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="transition hover:text-green-500"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/jbouqdib/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="transition hover:text-green-500"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} by Joseph Bouqdib</p>
    </footer>
  );
};

export default Footer;
