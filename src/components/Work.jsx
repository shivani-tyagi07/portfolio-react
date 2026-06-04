import React from "react";
import { motion } from "framer-motion";
import { workData } from "../assets/assets";

const Work = () => {
  return (
    <motion.section
      id="work"
      className="py-24 bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-4"
        >
          Work <span className="text-purple-500">Experience</span>
        </motion.h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          My professional journey and roles I have worked on.
        </p>

        {/* Timeline */}
        <div className="relative border-l border-gray-700 ml-4">

          {workData.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 ml-6"
            >

              {/* Dot */}
              <span className="absolute -left-2 w-4 h-4 bg-purple-500 rounded-full"></span>

              {/* Card */}
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition">
                
                <h3 className="text-xl font-bold text-white">
                  {work.role}
                </h3>

                <p className="text-purple-400 text-sm mt-1">
                  {work.company}
                </p>

                <p className="text-gray-500 text-xs mt-1">
                  {work.duration}
                </p>

                <p className="text-gray-400 mt-4 text-sm">
                  {work.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </motion.section>
  );
};

export default Work;