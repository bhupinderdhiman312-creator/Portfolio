import React from 'react'
import Insta from "../assets/Insta.jpg"
import link from "../assets/Link.jpg"
import Msg from "../assets/Msg.jpg"
import { motion } from "framer-motion";

function Footer() {
  return (
    <div>
        <div className='w-full flex justify-center items-center bg-gray-950 border-t border-white px-4 py-6'>
            
            <motion.div     
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.2 }}
            className='w-full max-w-3xl flex flex-col items-center text-center'>
                
                <p className='font-medium text-white text-sm md:text-base'>
                  @ 2026 Bhupinder Singh. All Rights Reserved.
                </p>

                <div className='flex gap-3 mt-3'>
                    <img src={Insta} alt="" className='h-8 w-8 md:h-10 md:w-10 rounded-2xl'/>
                    <img src={link} alt=""  className='h-8 w-8 md:h-10 md:w-10 rounded-2xl'/>
                    <img src={Msg} alt=""  className='h-8 w-8 md:h-10 md:w-10 rounded-2xl'/>
                </div>

                <p className='font-medium text-white mt-3 text-sm md:text-base'>
                  Built with using React.js
                </p>

            </motion.div>
        </div>
    </div>
  )
}

export default Footer