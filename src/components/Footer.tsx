import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center">
      <p>&copy; {new Date().getFullYear()} by Joseph Bouqdib</p>
    </footer>
  );
};

export default Footer;
