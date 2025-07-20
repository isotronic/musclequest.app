import React from "react";

import HomeScreenshot from "../images/screenshot1-home.png";
import StatsScreenshot from "../images/screenshot2-stats.png";
import ExerciseDetailsScreenshot from "../images/screenshot3-exercise-details.png";
import CreatePlanScreenshot from "../images/screenshot4-create-plan.png";
import ExercisesScreenshot from "../images/screenshot5-exercises.png";
import EditSetScreenshot from "../images/screenshot6-edit-set.png";
import WorkoutSessionScreenshot from "../images/screenshot7-workout-session.png";

const screenshots = [
  { id: 0, src: HomeScreenshot, caption: "Home Screen" },
  { id: 1, src: ExercisesScreenshot, caption: "Exercise Selection Screen" },
  { id: 2, src: EditSetScreenshot, caption: "Edit Set" },
  { id: 3, src: CreatePlanScreenshot, caption: "Create Plan" },
  { id: 4, src: ExerciseDetailsScreenshot, caption: "Exercise Details" },
  { id: 5, src: WorkoutSessionScreenshot, caption: "Workout Session" },
  { id: 6, src: StatsScreenshot, caption: "Stats Screen" },
];

const Screenshots: React.FC = () => {
  return (
    <section
      id="screenshots"
      className="relative flex flex-col items-center overflow-hidden bg-gradient-to-b from-screen via-screen/95 to-background px-6 py-32"
    >
      <div className="absolute inset-0">
        <div className="from-tint/6 to-highlight/6 absolute left-16 top-16 h-40 w-40 rounded-full bg-gradient-to-r blur-3xl"></div>
        <div className="from-highlight/8 to-tint/8 absolute bottom-20 right-20 h-32 w-32 rounded-full bg-gradient-to-l blur-3xl"></div>
        <div className="from-tint/4 to-highlight/4 absolute left-1/3 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r blur-3xl"></div>
      </div>

      <div className="relative z-10 mb-20 text-center">
        <h2 className="mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
          See MuscleQuest in Action
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
          Explore every screen of the app and see how MuscleQuest makes fitness tracking effortless and engaging.
        </p>
      </div>

      <div className="relative z-10 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {screenshots.map((screenshot, index) => (
          <div key={screenshot.id} className="group relative transition-all duration-500 hover:scale-[1.02]">
            <div className="relative overflow-hidden rounded-2xl border border-gray-700/30 bg-gradient-to-br from-cardBackground/30 to-cardBackground/10 shadow-xl backdrop-blur-sm transition-all duration-500 hover:border-tint/40 hover:shadow-2xl hover:shadow-tint/10">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-tint/20 via-highlight/20 to-tint/20 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl">
                <img
                  src={screenshot.src}
                  alt={screenshot.caption}
                  className="h-full w-full bg-gray-900/20 object-contain transition-all duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-tint/5 via-transparent to-highlight/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Screenshots;
