import React from "react";

const CoreFeatures: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-6 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold">Core Features</h2>

      <div className="grid max-w-5xl gap-12 md:grid-cols-2 lg:grid-cols-3">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://placehold.co/300x200.png"
            alt="Custom Training Plans"
            className="mb-4 rounded-lg shadow-md"
          />
          <h3 className="mb-2 text-xl font-semibold">Custom Training Plans</h3>
          <p className="text-sm">
            Create and customise training plans tailored to your goals, schedule, and preferences for a fully
            personalised workout experience.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <img src="https://placehold.co/300x200.png" alt="Workout Tracking" className="mb-4 rounded-lg shadow-md" />
          <h3 className="mb-2 text-xl font-semibold">Comprehensive Workout Tracking</h3>
          <p className="text-sm">
            Log sets, reps, weights, and more to track every detail of your workouts effortlessly and stay on top of
            your progress.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <img src="https://placehold.co/300x200.png" alt="In-Depth Statistics" className="mb-4 rounded-lg shadow-md" />
          <h3 className="mb-2 text-xl font-semibold">In-Depth Statistics</h3>
          <p className="text-sm">
            Access powerful insights with stats like body part split, workout history, and progression graphs to
            visualise and analyse your training.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
