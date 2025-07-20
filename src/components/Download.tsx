import React from "react";
import { FaGooglePlay, FaRocket, FaStar } from "react-icons/fa";

const Download: React.FC = () => {
  return (
    <section
      id="download"
      className="relative flex flex-col items-center overflow-hidden bg-gradient-to-br from-tint via-tint/95 to-highlight px-6 py-32"
    >
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-40 w-40 rounded-full bg-gradient-to-r from-white/10 to-background/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-32 w-32 rounded-full bg-gradient-to-l from-background/15 to-white/15 blur-3xl"></div>
        <div className="from-white/8 to-background/8 absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-center gap-3">
            <h2 className="bg-gradient-to-r from-background via-background/90 to-background/80 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
              Get MuscleQuest Today
            </h2>
          </div>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-background/80 md:text-xl">
            Start your fitness journey with the tools you need to succeed. Track your workouts, monitor your progress,
            and achieve your goals with ease.
          </p>
        </div>

        <div className="mb-12">
          <a
            href="https://play.google.com/store/apps/details?id=com.isotronic.musclequest"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-effect group inline-flex items-center rounded-full bg-white px-6 py-3 text-lg font-semibold text-background shadow-lg transition-all duration-500 hover:scale-105"
          >
            <FaGooglePlay className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
            Download on Google Play
          </a>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { icon: FaStar, title: "Premium Features", desc: "Advanced workout tracking" },
            { icon: FaRocket, title: "Fast & Reliable", desc: "Optimized performance" },
            { icon: FaStar, title: "Always Free", desc: "No subscriptions required" },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-white/30 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10"
            >
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-white/20 via-background/10 to-white/20 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="relative text-center">
                <div className="mb-3 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-background/20 to-background/10 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-5 w-5 text-background" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-bold text-background">{feature.title}</h3>
                <p className="text-sm text-background/70">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Download;
