import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-28">
      <h2 className="mb-12 text-center text-3xl font-bold">What Our Users Say</h2>

      <div className="grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Testimonial 1 */}
        <div className="bg-cardBackground rounded-lg p-6 shadow-md">
          <p className="mb-4 italic">
            "MuscleQuest has transformed my workout routine! Tracking my progress has never been this easy."
          </p>
          <h3 className="font-semibold">- User A</h3>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-cardBackground rounded-lg p-6 shadow-md">
          <p className="mb-4 italic">
            "The custom plans and detailed stats have really helped me stay on track and motivated!"
          </p>
          <h3 className="font-semibold">- User B</h3>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-cardBackground rounded-lg p-6 shadow-md">
          <p className="mb-4 italic">
            "I love that I can use it offline. MuscleQuest is perfect for anyone serious about their fitness."
          </p>
          <h3 className="font-semibold">- User C</h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
