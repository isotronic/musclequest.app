import React, { useState } from "react";

const screenshots = [
  { id: 1, src: "https://placehold.co/300x600.png?text=Screenshot+1", caption: "Screenshot 1" },
  { id: 2, src: "https://placehold.co/300x600.png?text=Screenshot+2", caption: "Screenshot 2" },
  { id: 3, src: "https://placehold.co/300x600.png?text=Screenshot+3", caption: "Screenshot 3" },
  { id: 4, src: "https://placehold.co/300x600.png?text=Screenshot+4", caption: "Screenshot 4" },
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
            className="transform cursor-pointer rounded-lg shadow-lg transition-transform duration-200 hover:scale-105"
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} alt="Lightbox" className="max-h-full max-w-full rounded-lg shadow-lg" />
        </div>
      )}
    </section>
  );
};

export default Screenshots;
