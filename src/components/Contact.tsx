import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-6 py-28">
      <h2 className="mb-8 text-center text-3xl font-bold">Connect With Us</h2>
      <p className="mb-8 max-w-md text-center">
        Follow us on social media or reach out via email for support, feedback, or questions. We’d love to hear from
        you!
      </p>

      <div className="flex space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-tint transition">
          <FaFacebookF size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-tint transition">
          <FaTwitter size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-tint transition"
        >
          <FaInstagram size={24} />
        </a>
        <a href="mailto:support@musclequest.com" className="hover:text-tint transition">
          <FaEnvelope size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
