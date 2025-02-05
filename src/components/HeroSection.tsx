import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import HomeScreenshot from "../images/google-pixel-2xl-home-screen.png";
import BackgroundImage from "../images/anastase-maragos-unsplash.jpg";

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-14 text-center md:m-auto md:flex-row">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundPosition: "center top",
          opacity: 0.3,
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex max-w-7xl flex-col items-center md:flex-row">
        <div className="mx-auto mb-12 flex max-w-lg flex-col items-center md:mb-0 md:mr-24">
          <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">
            Transform Your Workouts with <span className="italic">MuscleQuest</span>
          </h1>
          <p className="mb-8 text-lg text-white md:text-xl">Track, Analyse, and Elevate your Fitness Journey</p>
          <p className="mb-8 text-sm text-white md:text-base">
            MuscleQuest is your all-in-one workout companion, designed to streamline planning, tracking, and enhancing
            your fitness journey. Built for smooth, offline-first performance, MuscleQuest empowers you to manage
            workout plans, log every exercise detail, and visualise your progress—all with an intuitive, user-friendly
            interface.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.isotronic.musclequest"
            target="_blank"
            className="flex items-center rounded-full bg-tint px-6 py-3 text-lg font-semibold text-background shadow-lg transition duration-200 hover:bg-hover"
          >
            <FaGooglePlay className="mr-2 h-6 w-6" />
            Download on Google Play
          </a>
        </div>

        {/* Image */}
        <div className="relative mx-auto flex max-w-md flex-shrink-0 items-center justify-center">
          <img src={HomeScreenshot} alt="App Screenshot" className="ml-20 mt-20" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
