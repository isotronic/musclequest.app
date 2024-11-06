import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import SessionSetInfoScreenshot from "../images/session-set-info.jpg";
import CreatePlanScreenshot from "../images/create-plan.jpg";
import StatsScreenshot from "../images/stats-screen.jpg";

// Features data
const features = [
  {
    id: "customPlans",
    title: "Custom Training Plans",
    description:
      "Create and customize training plans tailored to your goals, schedule, and preferences for a fully personalized workout experience.",
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
      "Access powerful insights with stats like body part split, workout history, and progression graphs to visualize and analyze your training.",
    image: StatsScreenshot,
  },
];

const CoreFeatures: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0].id);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="features" className="flex flex-col items-center bg-screen px-6 py-28">
      {/* Title */}
      <h2 className="mb-12 w-full text-center text-3xl font-bold">Core Features</h2>

      {/* Accordion and Image Container */}
      <div className="flex w-full max-w-7xl flex-col md:h-96 md:flex-row">
        {/* Accordion / Features List */}
        <div className="flex flex-col md:w-1/2">
          {features.map((feature) => {
            const isSelected = selectedFeature === feature.id;
            return (
              <div
                key={feature.id}
                onClick={() => setSelectedFeature(feature.id)}
                className={`flex cursor-pointer items-start justify-between rounded-lg p-6 transition duration-500 ${
                  isSelected ? "bg-background shadow-md" : "bg-screen"
                }`}
              >
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <div
                    className={`mt-2 overflow-hidden text-sm transition-all duration-500 ${
                      isSelected ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {feature.description}
                  </div>
                </div>
                <div className="ml-4 mt-1">
                  {isSelected ? <FaChevronUp className="text-tint" /> : <FaChevronDown className="text-tint" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Cropped Image Display */}
        <div className="mt-8 flex items-start justify-center md:mt-0 md:w-1/2">
          <div
            className="relative w-full max-w-md cursor-pointer overflow-hidden rounded-lg border border-background shadow-md"
            onClick={() => setLightboxImage(features.find((feature) => feature.id === selectedFeature)?.image || null)}
          >
            <img
              src={features.find((feature) => feature.id === selectedFeature)?.image}
              alt={features.find((feature) => feature.id === selectedFeature)?.title}
              className="h-96 w-full transform object-cover object-[50%_15%] duration-500"
            />
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 py-5"
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} alt="Full screenshot" className="max-h-full max-w-full rounded-lg shadow-lg" />
        </div>
      )}
    </section>
  );
};

export default CoreFeatures;
