import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-background via-background/95 to-background px-6 py-8">
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-20 w-20 rounded-full bg-gradient-to-r from-tint/5 to-highlight/5 blur-2xl"></div>
        <div className="from-highlight/4 to-tint/4 absolute bottom-0 right-1/4 h-16 w-16 rounded-full bg-gradient-to-l blur-2xl"></div>
      </div>

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-tint/30 to-transparent"></div>

      <div className="container relative z-10 mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        <div className="text-center md:text-left">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} by{" "}
            <a
              className="font-medium text-gray-300 transition-all duration-300 hover:text-tint hover:underline"
              href="https://joseph.bouqdib.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Joseph Bouqdib
            </a>
          </p>
        </div>

        <div className="text-center md:text-right">
          <a
            href="/privacy-policy"
            className="inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium text-gray-400 transition-all duration-300 hover:bg-tint/10 hover:text-tint"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
