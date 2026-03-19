import React from 'react'
import { useNavigate } from 'react-router-dom'
import Myimg from "../assets/Myimg.jpg"
import { motion } from "framer-motion";

function Home() {
  const navigate= useNavigate()

  function handleresume(){
     navigate("/Resume")
  }

  function handlecontact(){
     navigate("/Contact")
  }

  return (
    <div className='min-h-screen w-full flex flex-col md:flex-row justify-evenly items-center bg-gray-950 px-4 py-10'>

       {/* Left Content */}
       <motion.div
        initial={{ opacity: 0, y:100}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 3}}
        className='w-full md:w-[600px] text-center md:text-left'
       >
        <p className='text-4xl sm:text-5xl md:text-7xl font-extrabold mt-4 text-white'>
          Hello, I'm <br />
          <span className='text-blue-500'>Bhupinder Singh</span>
        </p><br />

        <p className='text-xl sm:text-2xl md:text-3xl font-semibold text-white'>
          Creative <span className='font-bold text-blue-500'>Web Developer</span>
        </p><br /><br />

        <p className='font-medium text-white'>
          I am a Web Developer with a strong interest in frontend development and currently learning Full-Stack Development. <br/>
          I work on improving my skills every day by building projects, exploring new technologies, and writing clean, efficient code.
        </p><br /><br />

        <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
          <button 
            className='p-4 w-full sm:w-32 rounded-3xl bg-blue-500 hover:bg-blue-700 hover:scale-105 text-white font-bold'
            onClick={handleresume}
          >
            Resume
          </button>

          <button 
            className='p-4 w-full sm:w-auto rounded-3xl text-blue-500 hover:scale-105 border border-blue-500 font-bold'
            onClick={handlecontact}
          >
            Get In Touch
          </button>
        </div>
       </motion.div>

       {/* Right Image */}
       <motion.div
        initial={{ opacity: 0, y:100}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 3}}
        className='w-full md:w-[400px] flex items-center justify-center mt-10 md:mt-0'
       >
         <img src={Myimg} alt="" className='w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full object-cover'/>
      </motion.div>

    </div>
  )
}

export default Home