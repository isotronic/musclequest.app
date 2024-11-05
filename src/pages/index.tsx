import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

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

export const Head: HeadFC = () => (
  <>
    <title>MuscleQuest - Workout tracker and planner</title>
    <meta
      name="description"
      content="MuscleQuest is a mobile workout tracker app built to help users plan, track, and optimize their workout routines. With local-first data storage, MuscleQuest ensures smooth performance without requiring a constant internet connection. The app provides an intuitive interface to manage workout plans, log exercises, and track progress over time."
    />
    <link rel="canonical" href="https://musclequest.app" />
    <link rel="icon" type="image/png" href={Favicon} />
    <meta property="og:title" content="MuscleQuest - Workout tracker and planner" />
    <meta
      property="og:description"
      content="MuscleQuest is a mobile workout tracker app built to help users plan, track, and optimize their workout routines. With local-first data storage, MuscleQuest ensures smooth performance without requiring a constant internet connection. The app provides an intuitive interface to manage workout plans, log exercises, and track progress over time."
    />
    <meta property="og:image" content={Favicon} />
    <meta property="og:url" content="https://musclequest.app" />
    <meta name="twitter:image" content={Favicon} />
  </>
);
