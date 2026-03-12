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
    <div className='h-screen w-full  flex flex-col justify-evenly items-center bg-gray-950'>
      <motion.div
        initial={{ opacity: 5, y:70}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 2}}
      className='h-60 w-220  justify-center'>
        <p className='font-extrabold text-6xl ml-80 mt-10 text-white'>ABOUT</p><br />
        <p className='font-medium ml-4 text-white'>I am a Web Developer with a strong interest in frontend development and currently learning Full-Stack Development.</p>
      </motion.div>
      <div className='h-screen w-full flex justify-evenly items-center'>
       <motion.div
        initial= {{ x:-100, opacity:0 }}
        whileInView={{ x:0, opacity:1 }}
        transition={{ duration: 2}}
        viewport={{ once: true }}
        className='h-110 w-120'>
        <img src={Myimg} alt="" className='h-110 w-120 rounded-3xl'/>
       </motion.div>
       <motion.div
       initial= {{ x:100, opacity:0 }}
        whileInView={{ x:0, opacity:1 }}
        transition={{ duration: 2}}
        viewport={{ once: true }}
       className='h-120 w-170 '>
        <p className='text-white'>HELLO THERE</p>
        <p className='font-extrabold text-3xl mt-3 text-white'>Hi, I'm a Web Developer passionate about clean design and smooth user experience.</p><br />
        <p className='font-extrabold text-2xl mt-4 text-white'>Creative Development</p>
        <p className='font-medium text-white'>In today’s digital-first world, crafting responsive and engaging websites is key to building strong online presence. Through strategic design and development, I help businesses transform ideas into powerful digital experiences.
       </p>
       <p className='font-extrabold text-2xl mt-3 text-white'>Innovative Solutions</p>
       <p className='font-medium text-white'>By leveraging modern frameworks like React, Next.js, and Node.js, I deliver scalable and efficient web applications. My focus is on creating solutions that combine clean design with seamless functionality to solve complex user and business challenges.
       </p><br /><br />
       <button className='p-4 rounded-3xl  text-blue-500 hover:scale-104 border border-blue-500 font-bold' onClick={ handleresume}>Learn More</button>
       <button className='ml-8  p-4 rounded-3xl hover:bg-blue-700 hover:scale-104  bg-blue-500 text-white font-bold' onClick={ handlecontact }>Get Started</button>
    
    </motion.div>
    </div>
    </div>
  )
}

export default About