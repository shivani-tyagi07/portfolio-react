import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (

    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>

      <div className='container mx-auto flex justify-between items-center'>

        {/* Logo */}

        <div>
          <a href="#" className='text-3xl font-bold text-white flex items-center gap-2'>

            Shivani
            <span className='text-purple'>Tyagi</span>

            <div className='w-3 h-3 bg-purple rounded-full'></div>

          </a>
        </div>


        {/* Desktop Menu */}

        <div className='hidden md:flex space-x-10'>

          <a
            href="#home"
            className='relative text-white/80 transition duration-300 hover:text-purple group'
          >
            <span>Home</span>

            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>

          <a
            href="#about"
            className='relative text-white/80 transition duration-300 hover:text-purple group'
          >
            <span>About</span>

            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>

          <a
            href="#skills"
            className='relative text-white/80 transition duration-300 hover:text-purple group'
          >
            <span>Skills</span>

            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>

          <a
            href="#projects"
            className='relative text-white/80 transition duration-300 hover:text-purple group'
          >
            <span>Projects</span>

            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>

          <a
            href="#experience"
            className='relative text-white/80 transition duration-300 hover:text-purple group'
          >
            <span>Experience</span>

            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>

          <a
            href="#contact"
            className='relative text-white/80 transition duration-300 hover:text-purple group'
          >
            <span>Contact</span>

            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>

        </div>


        {/* Mobile Button */}

        <div className='md:hidden text-white'>

          {
            showMenu ?

              <FaXmark
                onClick={() => setShowMenu(false)}
                className='text-3xl cursor-pointer'
              />

              :

              <FaBars
                onClick={() => setShowMenu(true)}
                className='text-3xl cursor-pointer'
              />
          }

        </div>

      </div>


      {/* Mobile Menu */}

      {
        showMenu && (

          <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col items-center justify-center space-y-8 text-center'>

            <a
              href="#home"
              onClick={() => setShowMenu(false)}
              className='text-white text-2xl hover:text-purple transition duration-300'
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setShowMenu(false)}
              className='text-white text-2xl hover:text-purple transition duration-300'
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setShowMenu(false)}
              className='text-white text-2xl hover:text-purple transition duration-300'
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setShowMenu(false)}
              className='text-white text-2xl hover:text-purple transition duration-300'
            >
              Projects
            </a>

            <a
              href="#experience"
              onClick={() => setShowMenu(false)}
              className='text-white text-2xl hover:text-purple transition duration-300'
            >
              Experience
            </a>

            <a
              href="#contact"
              onClick={() => setShowMenu(false)}
              className='text-white text-2xl hover:text-purple transition duration-300'
            >
              Contact
            </a>

          </div>

        )
      }

    </nav>
  )
}

export default Navbar