import React from 'react'
import { motion } from 'framer-motion'
import {
  FaCode,
  FaTools,
  FaBook,
  FaUsers
} from 'react-icons/fa'

const skills = [
  {
    title: 'Technical Skills',
    icon: FaCode,
    description: 'Programming languages, web technologies, and databases.',
    tags: [
      'C',
      'C++',
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'MongoDB',
      'SQL'
    ]
  },
  {
    title: 'Developer Tools',
    icon: FaTools,
    description: 'Tools used for development and collaboration.',
    tags: [
      'GitHub',
      'VS Code',
      'NetBeans',
      'AWS'
    ]
  },
  {
    title: 'Relevant CourseWork',
    icon: FaBook,
    description: 'Core computer science subjects.',
    tags: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'DBMS',
      'Object-Oriented Programming',
      'C++'
    ]
  },
  {
    title: 'Soft Skills',
    icon: FaUsers,
    description: 'Personal and professional strengths.',
    tags: [
      'Communication',
      'Teamwork',
      'Problem Solving',
      'Time Management',
    ]
  }
]

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='skills'
      className='py-20 bg-gray-900'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4 text-white'>
          My <span className='text-purple-500'>Skills</span>
        </h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Technologies I work with to bring ideas to life
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='bg-gray-800 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer'
            >
              <div className='flex items-center mb-4'>
                <skill.icon className='w-12 h-12 text-purple-500 mr-4' />

                <h3 className='text-xl font-semibold text-white'>
                  {skill.title}
                </h3>
              </div>

              <p className='text-gray-400 mb-4'>
                {skill.description}
              </p>

              <div className='flex flex-wrap gap-2'>
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className='px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills