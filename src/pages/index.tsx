import * as React from "react";
import type { PageProps } from "gatsby";

import NavBar from "../components/NavBar";
import IntroSection from "../components/IntroSection";
import Footer from "../components/Footer";

import Favicon from "../images/icon.png";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="container mx-auto"></main>
      <Footer />
    </div>
  );
};

export default IndexPage;
