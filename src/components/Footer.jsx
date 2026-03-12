import React from 'react'
import Insta from "../assets/Insta.jpg"
import link from "../assets/link.jpg"
import Msg from "../assets/Msg.jpg"
import { motion } from "framer-motion";

function Footer() {
  return (
    <div>
        <div className='h-70 w-full flex justify-center items-center bg-gray-950 border border-t-white'>
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.2 }}
            className='h-40 w-150 mt-4'>
                <p className='ml-35 font-medium text-white'>@ 2026 Bhupinder Singh. All Rights Reserved.</p>
                <div className='ml-60 flex gap-2 mt-2'>
                    <img src={Insta} alt="" className='h-10 w-10 rounded-2xl'/>
                    <img src={link} alt=""  className='h-10 w-10 rounded-2xl'/>
                    <img src={Msg} alt=""  className='h-10 w-10 rounded-2xl'/>
                </div>
                <p className='ml-55 font-medium text-white mt-2'>Built with using React.js</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Footer