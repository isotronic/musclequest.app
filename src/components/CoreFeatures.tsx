import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Placeholder images for each feature
const featureImages = {
  customPlans: "https://placehold.co/300x200.png?text=Custom+Plans",
  workoutTracking: "https://placehold.co/300x200.png?text=Workout+Tracking",
  inDepthStats: "https://placehold.co/300x200.png?text=In-Depth+Statistics",
};

// Define `selectedFeature` as a union of the keys in `featureImages`
type FeatureKey = keyof typeof featureImages;

// Features data
const features = [
  {
    id: "customPlans",
    title: "Custom Training Plans",
    description:
      "Create and customize training plans tailored to your goals, schedule, and preferences for a fully personalized workout experience.",
  },
  {
    id: "workoutTracking",
    title: "Comprehensive Workout Tracking",
    description:
      "Log sets, reps, weights, and more to track every detail of your workouts effortlessly and stay on top of your progress.",
  },
  {
    id: "inDepthStats",
    title: "In-Depth Statistics",
    description:
      "Access powerful insights with stats like body part split, workout history, and progression graphs to visualize and analyze your training.",
  },
];

const CoreFeatures: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureKey>("customPlans");

  return (
    <section className="flex flex-col items-center bg-screen px-6 py-28">
      {/* Title */}
      <h2 className="mb-12 w-full max-w-5xl text-left text-3xl font-bold">Core Features</h2>

      {/* Accordion and Image Container */}
      <div className="flex w-full max-w-5xl flex-col md:h-80 md:flex-row">
        {/* Accordion / Features List */}
        <div className="flex flex-col md:w-1/2">
          {features.map((feature) => {
            const isSelected = selectedFeature === feature.id;
            return (
              <div
                key={feature.id}
                onClick={() => setSelectedFeature(feature.id as FeatureKey)}
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

        {/* Image Display */}
        <div className="mt-8 flex items-start justify-center md:mt-0 md:w-1/2">
          <img
            src={featureImages[selectedFeature]}
            alt={features.find((feature) => feature.id === selectedFeature)?.title}
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
