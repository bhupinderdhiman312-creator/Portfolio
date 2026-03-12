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
    <div className='h-screen w-full flex justify-evenly items-center bg-gray-950'>
       <motion.div
        initial={{ opacity: 5, y:100}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 3}}
        className='h-140 w-170'>
       <p className='text-7xl font-extrabold mt-4 text-white'>Hello, I'm  <br />
        <span className='text-blue-500'>Bhupinder Singh</span></p><br />
        <p className='text-3xl font-semibold  text-white'>Creative <span className='font-bold text-blue-500'>Web Developer</span></p><br /><br />
        <p className='font-medium text-white'>I am a Web Developer with a strong interest in frontend development and currently learning Full-Stack Development. <br/>
           I work on improving my skills every day by building projects, exploring new technologies, and writing clean, efficient code.</p><br /><br />
       
        <button className=' p-4 w-30 rounded-3xl bg-blue-500 hover:bg-blue-700 hover:scale-104 text-white font-bold' onClick={handleresume}> Resume </button>
        <button className='ml-8  p-4 rounded-3xl text-blue-500 hover:scale-104 border border-blue-500 font-bold' onClick={handlecontact}>Get In Touch</button>
       </motion.div>
       <motion.div
       initial={{ opacity: 5, y:100}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 3}}
       className='h-130 w-160 flex items-center justify-center'>
         <img src={Myimg} alt="" className='h-120 w-120 rounded-full'/>
      </motion.div>

   <div>
      heloooo hello
   </div>
    </div>
  )
}

export default Home