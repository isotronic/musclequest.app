import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import HomeScreenshot from "../images/google-pixel-2xl-home-screen.png";
import BackgroundImage from "../images/anastase-maragos-unsplash.jpg";

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-40 text-center md:m-auto md:flex-row md:pt-14">
      <div className="gradient-bg absolute inset-0"></div>

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundPosition: "center top",
          opacity: 0.2,
        }}
      ></div>

      <div className="relative z-10 flex max-w-7xl flex-col items-center md:flex-row">
        <div className="mx-auto mb-12 flex max-w-lg flex-col items-center md:mb-0 md:mr-24">
          <h1 className="mb-8 animate-fade-in bg-gradient-to-r from-white via-text to-tint bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl">
            Transform Your Workouts with{" "}
            <span className="bg-gradient-to-r from-tint to-highlight bg-clip-text italic text-transparent">
              MuscleQuest
            </span>
          </h1>
          <p
            className="mb-8 animate-fade-in text-lg text-white md:text-xl"
            style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
          >
            Track, Analyse, and Elevate your Fitness Journey
          </p>
          <p
            className="mb-8 animate-fade-in text-sm leading-relaxed text-gray-300 md:text-base"
            style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
          >
            MuscleQuest is your all-in-one workout companion, designed to streamline planning, tracking, and enhancing
            your fitness journey. Built for smooth, offline-first performance, MuscleQuest empowers you to manage
            workout plans, log every exercise detail, and visualise your progress—all with an intuitive, user-friendly
            interface.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.isotronic.musclequest"
            target="_blank"
            className="glow-effect group flex animate-fade-in items-center rounded-full bg-gradient-to-r from-tint to-hover px-8 py-4 text-lg font-semibold text-background shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}
          >
            <FaGooglePlay className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
            Download on Google Play
          </a>
        </div>

        <div className="relative mx-auto flex max-w-md flex-shrink-0 items-center justify-center">
          <div className="group relative transition-transform duration-500 ease-in-out hover:-translate-y-3">
            <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-r from-tint/30 to-highlight/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"></div>
            <img
              src={HomeScreenshot}
              alt="App Screenshot"
              className="relative z-10 ml-20 mt-6 animate-fade-in transition-transform duration-500 hover:scale-105 md:mt-20"
              style={{ animationDelay: "0.8s", opacity: 0, animationFillMode: "forwards" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
