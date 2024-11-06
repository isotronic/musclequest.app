import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} by{" "}
        <a className="transition hover:text-tint" href="https://joseph.bouqdib.com" target="_blank">
          Joseph Bouqdib
        </a>
      </p>
    </footer>
  );
};

export default Footer;
