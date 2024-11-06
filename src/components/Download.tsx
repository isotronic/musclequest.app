import React from "react";
import { FaGooglePlay } from "react-icons/fa";

const Download: React.FC = () => {
  return (
    <section className="flex flex-col items-center bg-tint px-6 py-28 text-background">
      <h2 className="mb-4 text-center text-3xl font-bold">Get MuscleQuest Today</h2>
      <p className="mb-8 max-w-lg text-center text-lg">
        Start your fitness journey with the tools you need to succeed. Track your workouts, monitor your progress, and
        achieve your goals with ease.
      </p>
      <a
        href="https://play.google.com/store"
        className="flex items-center rounded-full bg-white px-6 py-3 text-lg font-semibold shadow-lg transition duration-200 hover:bg-gray-200"
      >
        <FaGooglePlay className="mr-2 h-6 w-6" />
        Download on Google Play
      </a>
    </section>
  );
};

export default Download;
