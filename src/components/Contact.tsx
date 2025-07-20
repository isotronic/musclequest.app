import React from "react";
import { FaInstagram, FaEnvelope, FaComments } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center overflow-hidden bg-gradient-to-br from-screen via-screen/95 to-background px-6 py-32"
    >
      <div className="absolute inset-0">
        <div className="from-tint/8 to-highlight/8 absolute left-16 top-16 h-40 w-40 rounded-full bg-gradient-to-r blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-32 w-32 rounded-full bg-gradient-to-l from-highlight/10 to-tint/10 blur-3xl"></div>
        <div className="from-tint/6 to-highlight/6 absolute left-1/3 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-center gap-4">
            <h2 className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
              Connect With MuscleQuest
            </h2>
          </div>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
            Follow MuscleQuest on social media or reach out via email or DM for support, feedback, or questions. I'd
            love to hear from you!
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2">
          <a
            href="https://instagram.com/musclequest.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-gray-700/30 bg-gradient-to-br from-cardBackground/30 to-cardBackground/10 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-tint/40 hover:shadow-2xl hover:shadow-tint/10"
          >
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-tint/20 via-highlight/20 to-tint/20 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"></div>

            <div className="relative text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 transition-transform duration-300 group-hover:scale-110">
                  <FaInstagram className="h-8 w-8 text-pink-400" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Follow on Instagram</h3>
              <p className="text-sm text-gray-400">@musclequest.app</p>
              <div className="mt-4 text-xs text-pink-400/70">Get updates & fitness tips</div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          </a>

          <a
            href="mailto:support@musclequest.com"
            className="group relative overflow-hidden rounded-2xl border border-gray-700/30 bg-gradient-to-br from-cardBackground/30 to-cardBackground/10 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-tint/40 hover:shadow-2xl hover:shadow-tint/10"
          >
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-tint/20 via-highlight/20 to-tint/20 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"></div>

            <div className="relative text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-tint/20 to-highlight/20 transition-transform duration-300 group-hover:scale-110">
                  <FaEnvelope className="h-8 w-8 text-tint" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Send an Email</h3>
              <p className="text-sm text-gray-400">support@musclequest.com</p>
              <div className="mt-4 text-xs text-tint/70">Direct support & feedback</div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-tint/5 via-transparent to-highlight/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          </a>
        </div>

        <div className="mt-12">
          <div className="glass relative mx-auto max-w-md rounded-2xl border border-tint/30 bg-gradient-to-br from-cardBackground/40 to-cardBackground/20 p-6 backdrop-blur-sm">
            <div className="text-center">
              <h4 className="mb-2 text-lg font-semibold text-white">Ready to Transform Your Fitness?</h4>
              <p className="text-sm text-gray-400">Join all the users already crushing their goals</p>
            </div>

            <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-tint/20 via-highlight/20 to-tint/20 opacity-30 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
