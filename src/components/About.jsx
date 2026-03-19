import React from 'react'
import Myimg from "../assets/Myimg.jpg"
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";

function About() {
  const navigate= useNavigate()

  function handleresume(){
     navigate("/Resume")
  }

  function handlecontact(){
     navigate("/Contact")
  }

  return (
    <>
    <div className='min-h-screen w-full flex flex-col justify-evenly items-center bg-gray-950 px-4'>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y:70}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 2}}
        className='w-full max-w-5xl text-center'
      >
        <p className='font-extrabold text-4xl md:text-6xl text-white mt-10'>ABOUT</p><br />
        <p className='font-medium text-white'>
          I am a Web Developer with a strong interest in frontend development and currently learning Full-Stack Development.
        </p>
      </motion.div>

      {/* Image + Content */}
      <div className='w-full flex flex-col md:flex-row justify-evenly items-center gap-10 mt-10'>

        <motion.div
          initial={{ x:-100, opacity:0 }}
          whileInView={{ x:0, opacity:1 }}
          transition={{ duration: 2}}
          viewport={{ once: true }}
          className='w-full md:w-[400px]'
        >
          <img src={Myimg} alt="" className='w-full h-auto rounded-3xl'/>
        </motion.div>

        <motion.div
          initial={{ x:100, opacity:0 }}
          whileInView={{ x:0, opacity:1 }}
          transition={{ duration: 2}}
          viewport={{ once: true }}
          className='w-full md:w-[600px]'
        >
          <p className='text-white'>HELLO THERE</p>

          <p className='font-extrabold text-xl md:text-3xl mt-3 text-white'>
            Hi, I'm a Web Developer passionate about clean design and smooth user experience.
          </p><br />

          <p className='font-extrabold text-xl md:text-2xl mt-4 text-white'>Creative Development</p>
          <p className='font-medium text-white'>
            In today’s digital-first world, crafting responsive and engaging websites is key to building strong online presence. Through strategic design and development, I help businesses transform ideas into powerful digital experiences.
          </p>

          <p className='font-extrabold text-xl md:text-2xl mt-3 text-white'>Innovative Solutions</p>
          <p className='font-medium text-white'>
            By leveraging modern frameworks like React, Next.js, and Node.js, I deliver scalable and efficient web applications. My focus is on creating solutions that combine clean design with seamless functionality to solve complex user and business challenges.
          </p><br /><br />

          <div className='flex flex-col sm:flex-row gap-4'>
            <button
              className='p-4 rounded-3xl text-blue-500 hover:scale-105 border border-blue-500 font-bold'
              onClick={ handleresume}
            >
              Learn More
            </button>

            <button
              className='p-4 rounded-3xl hover:bg-blue-700 hover:scale-105 bg-blue-500 text-white font-bold'
              onClick={ handlecontact }
            >
              Get Started
            </button>
          </div>

        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-6 mt-10 w-full text-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >

        <div className='w-full flex flex-wrap justify-center gap-6'>

          <div className="w-full sm:w-72 md:w-80 text-center hover:translate-y-2 shadow-md hover:shadow-indigo-500/40 transition-all duration-300 rounded-2xl flex flex-col gap-6 border border-sky-200 p-4">
            <p className="font-bold">HTML</p>
            <p>Strong understanding of semantic HTML5 for creating well-structured, accessible, and SEO-friendly web pages.</p>
          </div>

          <div className="w-full sm:w-72 md:w-80 text-center hover:translate-y-2 shadow-md hover:shadow-indigo-500/40 transition-all duration-300 rounded-2xl flex flex-col gap-6 border border-sky-200 p-4">
            <p className="font-bold">CSS</p>
            <p>Experienced in styling responsive layouts using CSS3, Flexbox, Grid, and modern frameworks like Tailwind CSS</p>
          </div>

          <div className="w-full sm:w-72 md:w-80 text-center hover:translate-y-2 shadow-md hover:shadow-indigo-500/40 transition-all duration-300 rounded-2xl flex flex-col gap-6 border border-sky-200 p-4">
            <p className="font-bold">JAVASCRIPT</p>
            <p>Proficient in JavaScript (ES6+) for building interactive features, handling DOM manipulation, and working with APIs.</p>
          </div>

          <div className="w-full sm:w-72 md:w-80 text-center hover:translate-y-2 shadow-md hover:shadow-indigo-500/40 transition-all duration-300 rounded-2xl flex flex-col gap-6 border border-sky-200 p-4">
            <p className="font-bold">REACT.JS</p>
            <p>Skilled in developing dynamic single-page applications using React.js, including hooks, components, and state management.</p>
          </div>

        </div>
      </motion.div>

    </div>
    </>
  )
}

export default About