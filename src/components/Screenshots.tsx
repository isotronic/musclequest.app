import React, { useState } from "react";

import PlanOverviewScreenshot from "../images/plan-overview-user-plan.jpg";
import EditSetScreenshot from "../images/edit-set.jpg";
import ExercisesScreenshot from "../images/exercises-screen.jpg";
import WorkoutOverviewScreenshot from "../images/workout-overview.jpg";

const screenshots = [
  { id: 1, src: PlanOverviewScreenshot, caption: "Training Plan Overview" },
  { id: 2, src: EditSetScreenshot, caption: "Edit Set" },
  { id: 3, src: ExercisesScreenshot, caption: "Exercise Selection Screen" },
  { id: 4, src: WorkoutOverviewScreenshot, caption: "Workout Session Overview" },
];

const Screenshots: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="screenshots" className="flex flex-col items-center bg-screen px-6 py-28">
      <h2 className="mb-12 text-center text-3xl font-bold">See MuscleQuest in Action</h2>

      {/* Staggered Grid of Thumbnails */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {screenshots.map((screenshot) => (
          <img
            key={screenshot.id}
            src={screenshot.src}
            alt={screenshot.caption}
            onClick={() => setLightboxImage(screenshot.src)}
            className="transform cursor-pointer rounded-lg border border-background shadow-md transition-transform duration-200 hover:scale-105"
            style={{ maxHeight: "600px" }}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 py-5"
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} alt="Lightbox" className="max-h-full max-w-full rounded-lg shadow-lg" />
        </div>
      )}
    </section>
  );
};

export default Screenshots;
