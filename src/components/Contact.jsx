import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
    <div>

    {/* Top Section */}
    <div className='w-full flex flex-col justify-evenly items-center bg-gray-950 px-4 py-10'>
        <motion.div
        initial={{ opacity: 0, y:70}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 2}}
        className='w-full max-w-5xl text-center'>
          <p className='font-extrabold text-4xl md:text-6xl text-white mt-5'>Contact</p><br />
          <p className='font-medium text-white'> Open to exciting collaborations, freelance projects, and new opportunities.</p>
    </motion.div>
    </div>

    {/* Main Section */}
    <div className='w-full flex flex-col md:flex-row justify-evenly items-center bg-gray-950 gap-10 px-4 py-10'>

      {/* Left Box */}
      <div className='w-full md:w-[400px] border border-gray-500 rounded-2xl p-4'>
        
        <motion.p
        initial={{ opacity: 0, y:70}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 2}}
        className='font-bold text-xl md:text-2xl text-white'>Contact Info.</motion.p><br />

        <motion.p 
        initial={{ opacity: 0, y:70}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 2}}
        className='font-medium text-white'>
          Available for collaborations, freelance projects, and exciting ideas—let’s build the future of the Web Developer.
        </motion.p><br />

        <motion.div
        initial={{ opacity: 0, y:70}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 2}}
        className='flex items-center gap-4 mt-6'>
           <MapPin className='h-10 w-10 text-white'/>
       <div> 
        <p className='font-bold text-xl md:text-2xl text-white'>Our Location</p>
        <p className='font-medium text-white'>Mohali, Punjab.</p>
        </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y:70}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 2}}
        className='flex items-center gap-4 mt-6'>
           <Phone className='h-10 w-10 text-white'/>
           <div>
           <p className='font-bold text-xl md:text-2xl text-white'>Phone Number</p>
           <p className='font-medium text-white'>+91 8699707446 </p>
           </div>
           </motion.div>

        <motion.div
        initial={{ opacity: 0, y:70}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 2}}
        className='flex items-center gap-4 mt-6'>
          <Mail className='h-10 w-10 text-white'/>
          <div>
            <p className='font-bold text-xl md:text-2xl text-white'>Email Address</p>
            <p className='font-medium text-white'>bhupinderdhiman312@gmail.com</p>
          </div>
        </motion.div>

      </div>

      {/* Right Form */}
      <motion.div
      initial={{ opacity: 0, y:70}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 2}}
      className='w-full md:w-[600px] border border-gray-500 rounded-2xl p-4'>

        <p className='font-extrabold text-2xl md:text-4xl text-white mt-2'>Get In Touch</p><br /><br />

        <p className=' font-bold text-lg md:text-2xl text-white'>Enter Your First Name:</p>
        <input type="text" placeholder='Enter Your Name' className='h-10 w-full border border-blue-300 hover:scale-105 rounded-xl px-2'/><br /><br />

        <p className='font-bold text-lg md:text-2xl text-white'>Enter Your Last Name:</p>
        <input type="text" placeholder='Enter Your Email' className='h-10 w-full border border-blue-300 hover:scale-105 rounded-xl px-2'/><br /><br />

        <p className='font-bold text-lg md:text-2xl text-white'>Enter Your Email Address:</p>
        <input type="text" placeholder='Enter Your Subject'className='h-10 w-full border border-blue-300 hover:scale-105 rounded-xl px-2'/><br /><br />

        <p className='font-bold text-lg md:text-2xl text-white'>Message</p>
        <input type="text" placeholder='' className='h-20 w-full border border-blue-300 hover:scale-105 rounded-xl px-2'/><br /><br /><br />

        <button className='rounded-3xl h-12 w-40 bg-blue-500 hover:bg-blue-700 hover:scale-105 border border-blue-500 text-white font-bold'>
          Send Message
        </button>

      </motion.div>
    </div>
    </div>

    </> 
  )
}

export default Contact