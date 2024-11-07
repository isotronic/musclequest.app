import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useForm, ValidationError } from "@formspree/react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Favicon from "../images/favicon.png";

const PrivacyPage: React.FC<PageProps> = () => {
  const [state, handleSubmit] = useForm("mzzbrvnb");

  if (state.succeeded) {
    return (
      <div className="flex min-h-screen flex-col">
        <NavBar />
        <main className="flex flex-grow items-center justify-center bg-screen px-6 py-28">
          <p className="mx-auto max-w-screen-lg text-center">
            We have received your request and will process it as soon as possible.
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="bg-screen">
        <section className="mx-auto max-w-screen-lg px-6 py-28">
          <h1 className="mb-6 text-4xl font-bold">Request Account and Data Deletion</h1>
          <p className="mb-8">
            At <strong>MuscleQuest</strong>, we respect your privacy and provide you with the ability to request the
            deletion of your account and associated data. Please use the form below to submit your request. Once we
            receive your request, we will process it in accordance with our data privacy policy.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-background focus:outline-none focus:ring-2 focus:ring-tint"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email Address (associated with your account)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-background focus:outline-none focus:ring-2 focus:ring-tint"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Additional Details (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-background focus:outline-none focus:ring-2 focus:ring-tint"
                placeholder="Provide any additional information that may help us process your request."
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full rounded-lg bg-tint py-3 font-semibold text-background shadow transition duration-200 hover:bg-hover"
            >
              Submit Deletion Request
            </button>
          </form>

          <p className="mt-8 text-sm">
            For any questions or further assistance, please contact us at{" "}
            <a href="mailto:support@musclequest.com" className="text-tint hover:underline">
              support@musclequest.com
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;

export const Head: HeadFC = () => (
  <>
    <title>MuscleQuest - Workout tracker and planner</title>
    <meta
      name="description"
      content="MuscleQuest is a mobile workout tracker app built to help users plan, track, and optimize their workout routines. With local-first data storage, MuscleQuest ensures smooth performance without requiring a constant internet connection. The app provides an intuitive interface to manage workout plans, log exercises, and track progress over time."
    />
    <link rel="canonical" href="https://musclequest.app" />
    <link rel="icon" type="image/png" href={Favicon} />
    <meta property="og:title" content="MuscleQuest - Workout tracker and planner" />
    <meta
      property="og:description"
      content="MuscleQuest is a mobile workout tracker app built to help users plan, track, and optimize their workout routines. With local-first data storage, MuscleQuest ensures smooth performance without requiring a constant internet connection. The app provides an intuitive interface to manage workout plans, log exercises, and track progress over time."
    />
    <meta property="og:image" content={Favicon} />
    <meta property="og:url" content="https://musclequest.app" />
    <meta name="twitter:image" content={Favicon} />
  </>
);
