import React from 'react'
import { Link } from 'react-router-dom'
import Myimg from "../assets/Myimg.jpg"
import Insta from "../assets/Insta.jpg"
import Lid from "../assets/Link.jpg"


function Navbar() {
  return (
    <div>
        <div className='h-12 w-full flex justify-evenly items-center bg-blue-300'>
          <div className='h-12 w-80 flex items-center'><img src={Myimg} alt=""  className='h-12 w-12 rounded-full'/></div>
         <Link to="/" className='hover:text-white'>Home</Link>
         <Link to="/About" className='hover:text-white'>About</Link>
         <Link to="/Resume" className='hover:text-white'>Resume</Link>
         {/* <Link to="/Service">Service</Link> */}
         <Link to="/Contact" className='hover:text-white'>Contact</Link>
         <div className='flex gap-7'> <img src={Insta} alt=""  className='h-10 w-10 rounded-full mt-0.5'/>
         <img src={Lid} alt=""   className='h-10 w-10 rounded-full mt-0.5'/></div>
        </div>
    </div>
  )
}

export default Navbar