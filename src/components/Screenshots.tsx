import React from "react";

const Screenshots: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-28">
      <h2 className="mb-12 text-center text-3xl font-bold">See MuscleQuest in Action</h2>

      <div className="grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Screenshot 1 */}
        <div className="flex items-center justify-center">
          <img
            src="https://placehold.co/300x600.png?text=Screenshot+1"
            alt="Screenshot 1"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Screenshot 2 */}
        <div className="flex items-center justify-center">
          <img
            src="https://placehold.co/300x600.png?text=Screenshot+2"
            alt="Screenshot 2"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Screenshot 3 */}
        <div className="flex items-center justify-center">
          <img
            src="https://placehold.co/300x600.png?text=Screenshot+3"
            alt="Screenshot 3"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Screenshot 4 */}
        <div className="flex items-center justify-center">
          <img
            src="https://placehold.co/300x600.png?text=Screenshot+4"
            alt="Screenshot 4"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Screenshot 5 */}
        <div className="flex items-center justify-center">
          <img
            src="https://placehold.co/300x600.png?text=Screenshot+5"
            alt="Screenshot 5"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Screenshot 6 */}
        <div className="flex items-center justify-center">
          <img
            src="https://placehold.co/300x600.png?text=Screenshot+6"
            alt="Screenshot 6"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
