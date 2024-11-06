import React from "react";
import { FaGooglePlay } from "react-icons/fa";

import HomeScreenshot from "../images/home-screen.jpg";

const HeroSection: React.FC = () => {
  return (
    <section className="flex min-h-screen max-w-7xl flex-col items-center justify-center py-20 text-center md:m-auto md:flex-row">
      <div className="mx-auto mb-12 flex max-w-lg flex-col items-center md:mb-0 md:mr-24">
        <h1 className="mb-8 text-4xl font-bold md:text-5xl">
          Transform Your Workouts with <span className="italic">MuscleQuest</span>
        </h1>
        <p className="mb-8 text-lg md:text-xl">Track, Analyze, and Elevate Your Fitness Journey</p>
        <p className="mb-8 text-sm md:text-base">
          MuscleQuest is your all-in-one workout companion, designed to streamline planning, tracking, and enhancing
          your fitness journey. Built for smooth, offline-first performance, MuscleQuest empowers you to manage workout
          plans, log every exercise detail, and visualize your progress—all with an intuitive, user-friendly interface.
        </p>
        <a
          href="#"
          className="flex items-center rounded-full bg-tint px-6 py-3 text-lg font-semibold text-background shadow-lg transition duration-200 hover:bg-hover"
        >
          <FaGooglePlay className="mr-2 h-6 w-6" />
          Download on Google Play
        </a>
      </div>

      {/* Image Placeholder */}
      <div className="mx-auto flex max-w-md flex-shrink-0 items-center justify-center rounded-lg border border-screen">
        <img
          src={HomeScreenshot}
          alt="App Screenshot"
          className="rounded-lg shadow-md"
          style={{ maxHeight: "700px" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
