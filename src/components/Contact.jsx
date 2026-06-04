import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-24 bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-4"
        >
          Get In <span className="text-purple-500">Touch</span>
        </motion.h2>

        <p className="text-gray-400 text-center mb-14">
          Let's connect for projects, internships or collaborations.
        </p>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE - FORM */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">
              Send Message
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-purple-500 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-purple-500 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-purple-500 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SIDE - INFO */}
          <div className="space-y-6">

            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 flex items-center gap-4">
              <FaMapMarkerAlt className="text-purple-500 text-xl" />
              <span className="text-white">Ghaziabad, India</span>
            </div>

            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 flex items-center gap-4">
              <FaEnvelope className="text-purple-500 text-xl" />
              <span className="text-white">shivanityagi1646@gmail.com</span>
            </div>

            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 flex items-center gap-4">
              <FaPhone className="text-purple-500 text-xl" />
              <span className="text-white">+91 XXXXX XXXXX</span>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-4">

              <a
                href="https://github.com/shivani-tyagi07"
                target="_blank"
                className="p-4 bg-gray-800 border border-gray-700 rounded-xl hover:border-purple-500 transition"
              >
                <FaGithub className="text-white text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/shivani-tyagi-399534281"
                target="_blank"
                className="p-4 bg-gray-800 border border-gray-700 rounded-xl hover:border-purple-500 transition"
              >
                <FaLinkedin className="text-white text-xl" />
              </a>

            </div>

          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Contact;