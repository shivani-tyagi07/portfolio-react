import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/background.jpg';
import projectImg1 from '../assets/project1.jpg';
import projectImg2 from '../assets/project2.jpg';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.webp';
import projectImg5 from '../assets/project5.jpeg';



export const assets = {
    profileImg,
}



export const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Responsive portfolio website showcasing my skills, projects and achievements.",
    image: projectImg1,
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    title: "E-Commerce Website",
    description:
      "Online shopping platform with product browsing, searching and ordering features.",
    image: projectImg2,
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Smart Mirror Project",
    description:
      "Interactive smart mirror displaying weather, news, calendar and time updates.",
    image: projectImg4,
    tech: ["Raspberry Pi", "Node.js", "MagicMirror"],
  },
  {
    title: "Threat Intelligence Framework",
    description:
      "Cybersecurity framework for passive reconnaissance and threat analysis.",
    image: projectImg5,
    tech: ["Python", "OSINT", "Cyber Security"],
  },
  {
    title: "Smart Water Intake Reminder System",
    description:
      "Machine learning based hydration tracking and personalized reminder system.",
    image: projectImg3,
    tech: ["Python", "Machine Learning", "Flask"],
  },
];

export const workData = [
  {
    role: "Full Stack Web Development Learner",
    company: "Self Learning / Personal Projects",
    duration: "2024 - Present",
    description:
      "Learning and building web applications using React, Node.js, and MongoDB. Developed multiple personal projects including portfolio website and e-commerce frontend.",
    color: "purple"
  },
  {
    role: "Frontend Developer (Intern Level Projects)",
    company: "Academic / College Projects",
    duration: "2023 - 2024",
    description:
      "Worked on responsive UI development using React, HTML, CSS and JavaScript. Focused on building clean and user-friendly interfaces.",
    color: "pink"
  },
  {
    role: "Programming & DSA Practice",
    company: "Problem Solving Practice",
    duration: "2023 - Present",
    description:
      "Practicing Data Structures and Algorithms in Java/C++ and improving logical thinking and coding skills through regular problem solving.",
    color: "blue"
  }
];