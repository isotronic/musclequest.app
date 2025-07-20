import React from "react";
import { FaUserCircle, FaChartLine } from "react-icons/fa";
import { RiWifiOffLine } from "react-icons/ri";
import { TbCurrencyDollarOff } from "react-icons/tb";

const UserBenefits: React.FC = () => {
  return (
    <section id="benefits" className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-screen to-background"></div>
      <div className="absolute left-20 top-20 h-40 w-40 rounded-full bg-tint/5 blur-3xl"></div>
      <div className="absolute bottom-40 right-10 h-56 w-56 rounded-full bg-highlight/5 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Why MuscleQuest?
          </h2>
          <div className="mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-tint to-highlight"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="glass group relative rounded-2xl border border-gray-700/50 p-6 transition-all duration-500 hover:scale-105 hover:border-green-500/40 hover:shadow-xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/5 to-emerald-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <div className="relative mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 transition-all duration-300 group-hover:scale-110">
              <TbCurrencyDollarOff className="h-8 w-8 text-green-400" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 to-emerald-500/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            <h3 className="mb-3 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-green-400">
              100% Free, No Ads
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
              Enjoy all features without any cost or interruptions. <span className="font-bold">MuscleQuest</span> is
              completely free with no ads.
            </p>
          </div>

          <div className="glass group relative rounded-2xl border border-gray-700/50 p-6 transition-all duration-500 hover:scale-105 hover:border-blue-500/40 hover:shadow-xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/5 to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <div className="relative mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 transition-all duration-300 group-hover:scale-110">
              <FaUserCircle className="h-8 w-8 text-blue-400" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-cyan-500/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            <h3 className="mb-3 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
              User-Centric Design
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
              Designed with ease of use in mind, offering an intuitive interface that lets you focus on your training
              without distraction.
            </p>
          </div>

          <div className="glass group relative rounded-2xl border border-gray-700/50 p-6 transition-all duration-500 hover:scale-105 hover:border-purple-500/40 hover:shadow-xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <div className="relative mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 transition-all duration-300 group-hover:scale-110">
              <FaChartLine className="h-8 w-8 text-purple-400" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 to-pink-500/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            <h3 className="mb-3 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-purple-400">
              Progress-Driven Insights
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
              Gain valuable insights with visual stats, detailed workout summaries, and progression tracking that keeps
              you motivated.
            </p>
          </div>

          <div className="glass group relative rounded-2xl border border-gray-700/50 p-6 transition-all duration-500 hover:scale-105 hover:border-orange-500/40 hover:shadow-xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400/5 to-red-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <div className="relative mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 transition-all duration-300 group-hover:scale-110">
              <RiWifiOffLine className="h-8 w-8 text-orange-400" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/20 to-red-500/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            <h3 className="mb-3 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-orange-400">
              Offline-First Access
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
              No internet? No problem! <span className="font-bold">MuscleQuest</span> is built to function seamlessly
              offline, so you can track and plan anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBenefits;
