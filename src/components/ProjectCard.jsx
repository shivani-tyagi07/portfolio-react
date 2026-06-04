import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;