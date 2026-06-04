import React from "react";
import { motion } from "framer-motion";
import backgroundImg from "../assets/background.jpg";
import { FaCode, FaLaptopCode, FaProjectDiagram, FaUserGraduate } from "react-icons/fa";

const aboutInfo = [
  {
    title: "Projects",
    description: "Built responsive and full-stack web applications.",
    icon: FaProjectDiagram,
  },
  {
    title: "Skills",
    description: "React.js, Node.js, Express.js, MongoDB, JavaScript.",
    icon: FaCode,
  },
  {
    title: "Learning",
    description: "Continuously improving problem-solving and development skills.",
    icon: FaLaptopCode,
  },
  {
    title: "Education",
    description: "Computer Science student passionate about technology.",
    icon: FaUserGraduate,
  },
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          About <span className="text-purple-500">Me</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              src={backgroundImg}
              alt="About"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                My Journey
              </h3>

              <p className="text-gray-300 mb-6">
                My journey in web development started when I became curious
                about how websites and applications work.
              </p>

              <p className="text-gray-300 mb-6">
                Through continuous learning and practice, I built several
                projects that helped me improve my coding, problem-solving, and
                development skills. Each project taught me something new and
                increased my confidence in creating real-world applications.
              </p>

              <p className="text-gray-300 mb-6">
                I enjoy learning new technologies and taking on challenges that
                help me grow as a developer. My goal is to build useful and
                user-friendly applications while gaining experience and
                improving my skills every day.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-2xl p-6 transition duration-300 hover:-translate-y-2 cursor-pointer"
                    >
                      <div className="text-purple-500 text-4xl mb-4">
                        <data.icon />
                      </div>

                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {data.title}
                      </h3>

                      <p className="text-gray-400">
                        {data.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;