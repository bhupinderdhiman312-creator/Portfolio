import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
    <div>

    {/* Top Section */}
    <div className='h-40 w-full flex flex-col justify-evenly items-center bg-gray-950 px-4'>
        <motion.div
        initial={{ opacity: 5, y:70}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 2}}
        className='h-50 w-220 justify-center text-center'>
          <p className='font-extrabold text-4xl md:text-6xl mt-10 text-white'>Contact</p><br />
          <p className='font-medium text-white'> Open to exciting collaborations, freelance projects, and new opportunities.</p>
    </motion.div>
    </div>

    {/* Main Section */}
    <div className='h-screen w-full flex flex-col md:flex-row justify-evenly items-center bg-gray-950 overflow-auto gap-6 px-4'>

      {/* Left Box */}
      <div className='h-150 w-130 border border-gray-500 rounded-2xl overflow-auto'><br />

        <motion.p
        initial={{ opacity: 5, y:70}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 2}}
        className='font-bold text-2xl text-white ml-7'>Contact Info.</motion.p><br />

        <motion.p 
        initial={{ opacity: 5, y:70}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 2}}
        className='font-medium text-white ml-7'>
          Available for collaborations, freelance projects, and exciting ideas—let’s build the future of the Web Developer.
        </motion.p><br />

        <motion.div
        initial={{ opacity: 5, y:70}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 2}}
        className='h-35 w-120 flex items-center ml-7'>
           <MapPin className='h-15 w-15 text-white'></MapPin>
       <div> 
        <p className='font-bold text-3xl ml-10 text-white'>Our Location</p>
        <p className='font-medium ml-10 text-white'>Mohali, Punjab.</p>
        </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 5, y:70}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 2}}
        className='h-35 w-120 flex items-center ml-7'>
           <Phone className='h-15 w-15 text-white'></Phone>
           <div>
           <p className='font-bold text-3xl ml-10 text-white'>Phone Number</p>
           <p className='font-medium ml-10 text-white'>+91 8699707446 </p>
           </div>
           </motion.div>

        <motion.div
        initial={{ opacity: 5, y:70}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 2}}
        className='h-35 w-120 flex items-center ml-7'>
          <Mail className='h-15 w-15 text-white'></Mail>
          <div>
            <p className='font-bold text-3xl ml-10 text-white'>Email Address</p>
            <p className='font-medium ml-10 text-white'>bhupinderdhiman312@gmail.com</p>
          </div>
        </motion.div>

      </div>

      {/* Right Box */}
      <motion.div
      initial={{ opacity: 5, y:70}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 2}}
      className='h-160 w-200 border border-gray-500 rounded-2xl overflow-auto'>

        <p className='font-extrabold text-3xl md:text-4xl text-white mt-5 ml-10'>Get In Touch</p><br /><br />

        <p className=' font-bold text-xl md:text-2xl text-white ml-10 '>Enter Your First Name:</p>
        <input type="text" placeholder='Enter Your Name' className='h-10 w-100 border border-blue-300 ml-10 rounded-xl'/><br /><br />

        <p className='font-bold text-xl md:text-2xl text-white ml-10'>Enter Your Last Name:</p>
        <input type="" placeholder='Enter Your Email' className='h-10 w-100 border border-blue-300 ml-10 rounded-xl'/><br /><br />

        <p className='font-bold text-xl md:text-2xl text-white ml-10'>Enter Your Email Address:</p>
        <input type="text" placeholder='Enter Your Subject'className='h-10 w-100 border border-blue-300 ml-10 rounded-xl'/><br /><br />

        <p className='font-bold text-xl md:text-2xl text-white ml-10'>Message</p>
        <input type="text" placeholder='' className='h-20 w-150 border border-blue-300 ml-10 rounded-xl'/><br /><br /><br />

        <button className='ml-10 rounded-3xl h-15 w-40 bg-blue-500 hover:bg-blue-700 border border-blue-500 text-white font-bold'>
          Send Message
        </button>
      </motion.div>

    </div>
    </div>

    </> 
  )
}

export default Contact