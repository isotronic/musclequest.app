import React from "react";
import type { HeadFC, PageProps } from "gatsby";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Favicon from "../images/favicon.png";

const PrivacyPage: React.FC<PageProps> = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="bg-screen">
        <section className="mx-auto max-w-screen-lg px-6 py-28">
          <h1 className="mb-6 text-4xl font-bold">App Privacy Policy</h1>
          <p className="mb-4 font-semibold">Last updated: 05.02.2025</p>
          <p className="mb-8">
            Thank you for using <strong>MuscleQuest</strong>. We value your privacy and are committed to protecting your
            personal data. This privacy policy outlines how we collect, use, and safeguard your information when you use
            our app.
          </p>

          <h2 className="mb-4 text-2xl font-bold">1. Information We Collect</h2>
          <p className="mb-4">We collect the following types of information to provide and improve our services:</p>

          <h3 className="mb-2 text-xl font-semibold">a. Personal Information</h3>
          <ul className="mb-6 list-inside list-disc space-y-2">
            <li>
              <strong>Account Information</strong>: Account creation in <strong>MuscleQuest</strong> is optional. If you
              choose to create an account using Google OAuth, we collect your name and email address.
            </li>
            <li>
              <strong>Workout Data</strong>: Your workout data is stored locally on your device and will only leave your
              device if you choose to create a backup.
            </li>
          </ul>

          <h3 className="mb-2 text-xl font-semibold">b. Non-Personal Information</h3>
          <ul className="mb-6 list-inside list-disc space-y-2">
            <li>
              <strong>Usage Data</strong>: We collect data about how you interact with the app through Google Analytics.
            </li>
            <li>
              <strong>Device Information</strong>: General data related to your device type, operating system version,
              and diagnostic information.
            </li>
          </ul>

          <h2 className="mb-4 text-2xl font-bold">2. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information to:</p>
          <ul className="mb-6 list-inside list-disc space-y-2">
            <li>Provide, maintain, and improve the app.</li>
            <li>Personalise the user experience.</li>
            <li>Communicate with you regarding updates and app-related notifications.</li>
            <li>Analyse usage patterns and app performance for optimisation.</li>
          </ul>

          <h2 className="mb-4 text-2xl font-bold">3. How We Share Your Information</h2>
          <p className="mb-4">
            <strong>MuscleQuest</strong> does not sell or share your personal data with third parties, except in the
            following cases:
          </p>
          <ul className="mb-6 list-inside list-disc space-y-2">
            <li>
              <strong>Service Providers</strong>: We may share limited data with trusted service providers that assist
              us in operating the app (e.g., Google Firebase for authentication and backup storage).
            </li>
            <li>
              <strong>Legal Requirements</strong>: We may disclose your information if required by law or in response to
              valid legal processes.
            </li>
          </ul>

          <h2 className="mb-4 text-2xl font-bold">4. Data Security</h2>
          <p className="mb-8">
            We take data security seriously and use various technical and administrative measures to protect your
            information. However, no method of transmission over the internet or electronic storage is 100% secure. We
            strive to use commercially acceptable means to safeguard your data but cannot guarantee absolute security.
          </p>

          <h2 className="mb-4 text-2xl font-bold">5. Data Storage and Retention</h2>
          <ul className="mb-6 list-inside list-disc space-y-2">
            <li>
              <strong>Workout Data</strong>: Stored locally on your device and only backed up to Firebase if you opt for
              a backup. Data from the backup is used exclusively for restoration.
            </li>
            <li>
              <strong>Personal Data</strong>: Retained for as long as your account is active or as needed to provide
              services and comply with legal obligations.
            </li>
          </ul>

          <h2 className="mb-4 text-2xl font-bold">6. Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="mb-6 list-inside list-disc space-y-2">
            <li>Access, update, or delete your personal data.</li>
            <li>Withdraw consent for data collection where applicable.</li>
            <li>Contact us for any questions or concerns regarding your data.</li>
          </ul>

          <h2 className="mb-4 text-2xl font-bold">7. Third-Party Services</h2>
          <p className="mb-4">
            <strong>MuscleQuest</strong> integrates third-party services, such as:
          </p>
          <ul className="mb-6 list-inside list-disc space-y-2">
            <li>
              <strong>Firebase Authentication</strong> for account creation and sign-in via Google OAuth.
            </li>
            <li>
              <strong>Google Analytics</strong> for usage data collection and analysis.
            </li>
            <li>
              <strong>Bugsnag</strong> for app crash and error reporting.
            </li>
          </ul>
          <p className="mb-8">
            These third-party services may have their own privacy policies governing their use of your data. We
            encourage you to review these policies as well.
          </p>

          <h2 className="mb-4 text-2xl font-bold">8. Data Transfer</h2>
          <p className="mb-8">
            All data backups stored in Firebase Firestore are protected under Firebase's security measures. Your data
            may be transferred to and stored on servers outside your region or country, which may have different data
            protection regulations.
          </p>

          <h2 className="mb-4 text-2xl font-bold">9. Changes to This Privacy Policy</h2>
          <p className="mb-8">
            We may update this policy from time to time. Any changes will be communicated by posting the new policy on
            this page with an updated date. Users are advised to review this page periodically for any changes.
          </p>

          <h2 className="mb-4 text-2xl font-bold">10. Contact Us</h2>
          <p className="mb-4">If you have any questions about this privacy policy, please contact us:</p>
          <ul className="mb-6 list-inside list-disc space-y-2">
            <li>
              <strong>Email</strong>: <a href="mailto:support@musclequest.com">support@musclequest.com</a>
            </li>
          </ul>

          <h2 className="mb-4 text-2xl font-bold">11. Image Attribution</h2>

          <p className="mb-4">
            Hero section background photo by{" "}
            <a href="https://unsplash.com/@visualsbyroyalz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Anastase Maragos
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/topless-man-in-black-shorts-carrying-black-dumbbell-7kEpUPB8vNk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
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
    <title>Privacy Policy | MuscleQuest</title>
    <meta
      name="description"
      content="Read the MuscleQuest Privacy Policy to understand how we collect, use, and protect your data. Your privacy is important to us, and we are committed to safeguarding your personal information."
    />
    <link rel="canonical" href="https://musclequest.app/privacy-policy" />
    <link rel="icon" type="image/png" href={Favicon} />
    <meta property="og:title" content="Privacy Policy | MuscleQuest" />
    <meta
      property="og:description"
      content="Read the MuscleQuest Privacy Policy to understand how we collect, use, and protect your data. Your privacy is important to us, and we are committed to safeguarding your personal information."
    />
    <meta property="og:image" content={Favicon} />
    <meta property="og:url" content="https://musclequest.app/privacy-policy" />
    <meta name="twitter:image" content={Favicon} />
  </>
);
