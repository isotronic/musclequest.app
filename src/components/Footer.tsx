import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background px-6 py-6">
      <div className="container mx-auto flex max-w-screen-2xl flex-col items-center justify-between md:flex-row">
        {/* Copyright Section */}
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} by{" "}
          <a className="transition hover:text-tint" href="https://joseph.bouqdib.com" target="_blank">
            Joseph Bouqdib
          </a>
        </p>

        {/* Privacy Policy Link */}
        <a href="/privacy-policy" className="mt-4 text-center transition hover:text-tint md:ml-auto md:mt-0">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
