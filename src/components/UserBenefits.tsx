import React from "react";
import { FaUserCircle, FaChartLine } from "react-icons/fa";
import { RiWifiOffLine } from "react-icons/ri";

const UserBenefits: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-28">
      <h2 className="mb-12 text-center text-3xl font-bold">Why MuscleQuest?</h2>

      <div className="grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Benefit 1: Offline-First Access */}
        <div className="flex items-start align-top">
          <div className="mr-4 flex-shrink-0 self-start">
            <RiWifiOffLine className="text-tint" size={50} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Offline-First Access</h3>
            <p className="text-sm">
              No internet? No problem! <span className="font-bold">MuscleQuest</span> is built to function seamlessly
              offline, so you can track and plan anytime, anywhere.
            </p>
          </div>
        </div>

        {/* Benefit 2: User-Centric Design */}
        <div className="flex items-start">
          <div className="mr-4 flex-shrink-0 self-start">
            <FaUserCircle className="text-tint" size={50} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">User-Centric Design</h3>
            <p className="text-sm">
              Designed with ease of use in mind, offering an intuitive interface that lets you focus on your training
              without distraction.
            </p>
          </div>
        </div>

        {/* Benefit 3: Progress-Driven Insights */}
        <div className="flex items-start">
          <div className="mr-4 flex-shrink-0 self-start">
            <FaChartLine className="text-tint" size={50} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Progress-Driven Insights</h3>
            <p className="text-sm">
              Gain valuable insights with visual stats, detailed workout summaries, and progression tracking that keeps
              you motivated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBenefits;