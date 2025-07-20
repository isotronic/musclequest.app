import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import SessionSetInfoScreenshot from "../images/session-set-info.jpg";
import CreatePlanScreenshot from "../images/create-plan.jpg";
import StatsScreenshot from "../images/stats-screen.jpg";

const features = [
  {
    id: "customPlans",
    title: "Custom Training Plans",
    description:
      "Create and customise training plans tailored to your goals, schedule, and preferences for a fully personalised workout experience.",
    image: CreatePlanScreenshot,
  },
  {
    id: "workoutTracking",
    title: "Comprehensive Workout Tracking",
    description:
      "Log sets, reps, weights, and more to track every detail of your workouts effortlessly and stay on top of your progress.",
    image: SessionSetInfoScreenshot,
  },
  {
    id: "inDepthStats",
    title: "In-Depth Statistics",
    description:
      "Access powerful insights with stats like body part split, workout history, and progression graphs to visualise and analyse your training.",
    image: StatsScreenshot,
  },
];

const CoreFeatures: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0].id);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section
      id="features"
      className="relative flex flex-col items-center overflow-hidden bg-gradient-to-b from-background via-background/95 to-screen px-6 py-32"
    >
      <div className="absolute inset-0">
        <div className="from-tint/6 to-highlight/6 absolute left-20 top-20 h-32 w-32 rounded-full bg-gradient-to-r blur-3xl"></div>
        <div className="from-highlight/8 to-tint/8 absolute bottom-32 right-16 h-40 w-40 rounded-full bg-gradient-to-l blur-3xl"></div>
        <div className="from-tint/4 to-highlight/4 absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r blur-3xl"></div>
      </div>

      <div className="relative z-10 mb-20 text-center">
        <h2 className="mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
          Core Features
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
          Discover the powerful features that make MuscleQuest your ultimate workout companion. Everything you need to
          transform your fitness journey.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
          <div className="flex flex-col gap-6 lg:w-1/2">
            {features.map((feature, index) => {
              const isSelected = selectedFeature === feature.id;
              return (
                <div
                  key={feature.id}
                  onClick={() => setSelectedFeature(feature.id)}
                  className={`group relative flex-1 cursor-pointer rounded-2xl border p-6 transition-all duration-300 hover:scale-[1.02] ${
                    isSelected
                      ? "glass border-tint/40 bg-gradient-to-br from-cardBackground/40 to-cardBackground/20 shadow-xl shadow-tint/10"
                      : "border-gray-700/30 bg-cardBackground/20 hover:border-tint/30 hover:bg-gradient-to-br hover:from-cardBackground/30 hover:to-cardBackground/20 hover:shadow-lg"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-tint via-highlight to-tint opacity-15 blur-sm"></div>
                  )}

                  <div className="relative">
                    <div className="mb-4 flex items-center gap-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl text-base font-bold transition-all duration-300 ${
                          isSelected
                            ? "bg-gradient-to-r from-tint to-highlight text-background shadow-lg shadow-tint/25"
                            : "bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-400 group-hover:from-gray-600/60 group-hover:to-gray-500/60"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <h3
                        className={`text-lg font-bold transition-all duration-300 ${
                          isSelected ? "text-white" : "text-gray-300 group-hover:text-gray-200"
                        }`}
                      >
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300">
                      {feature.description}
                    </p>

                    {isSelected && (
                      <div className="mt-4 h-0.5 w-full rounded-full bg-gradient-to-r from-tint to-highlight"></div>
                    )}
                  </div>

                  <div
                    className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                      isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                    } bg-gradient-to-r from-tint/5 via-transparent to-highlight/5`}
                  ></div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center lg:w-1/2">
            <div className="group relative w-full max-w-sm">
              <div
                className="hover:shadow-3xl relative cursor-pointer overflow-hidden rounded-3xl border border-gray-700/30 bg-gradient-to-br from-cardBackground/30 to-cardBackground/10 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.01] hover:border-tint/40 hover:shadow-tint/10"
                onClick={() =>
                  setLightboxImage(features.find((feature) => feature.id === selectedFeature)?.image || null)
                }
              >
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-tint/20 via-highlight/20 to-tint/20 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"></div>

                <div className="relative aspect-[9/16] overflow-hidden rounded-3xl">
                  <img
                    src={features.find((feature) => feature.id === selectedFeature)?.image}
                    alt={features.find((feature) => feature.id === selectedFeature)?.title}
                    className="h-full w-full bg-gray-900/20 object-contain transition-all duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-tint/10 via-transparent to-highlight/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 transform text-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-black/80 px-4 py-3 text-sm font-medium text-white backdrop-blur-md">
                      <span>Click to view full size</span>
                      <div className="flex h-4 w-4 items-center justify-center rounded-full border border-white/30 bg-white/10">
                        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl"
          onClick={() => setLightboxImage(null)}
        >
          <div className="absolute inset-0 bg-black/90"></div>
          <div className="animate-fadeIn relative max-h-[90vh] max-w-[90vw] p-8">
            <div className="shadow-3xl relative overflow-hidden rounded-2xl">
              <img
                src={lightboxImage}
                alt="Full screenshot"
                className="h-auto max-h-full w-auto max-w-full rounded-2xl"
              />

              <button
                className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-gradient-to-r from-gray-900/95 to-gray-800/95 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:from-gray-800 hover:to-gray-700 hover:shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage(null);
                }}
              >
                <span className="text-xl font-light leading-none">×</span>
              </button>

              <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-tint/30 via-highlight/30 to-tint/30 opacity-50 blur-sm"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoreFeatures;
