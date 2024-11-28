import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="flex flex-col items-center bg-screen px-6 py-28">
      <h2 className="mb-8 text-center text-3xl font-bold">Connect With MuscleQuest</h2>
      <p className="mb-8 max-w-md text-center">
        Follow us on social media or reach out via email for support, feedback, or questions. We’d love to hear from
        you!
      </p>

      <div className="flex space-x-12">
        {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-tint">
          <FaTwitter size={24} />
        </a> */}
        <a
          href="https://instagram.com/musclequest.app"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-tint"
        >
          <FaInstagram size={30} />
        </a>
        <a href="mailto:support@musclequest.com" className="transition hover:text-tint">
          <FaEnvelope size={30} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
