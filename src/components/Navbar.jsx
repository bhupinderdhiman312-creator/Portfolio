import React from 'react'
import { Link } from 'react-router-dom'
import Myimg from "../assets/Myimg.jpg"
import Insta from "../assets/Insta.jpg"
import Lid from "../assets/Link.jpg"
import { Menu } from "lucide-react";

function Navbar() {

  return (
    <>
    <div className='relative z-50'>
      
      <div className='w-full flex items-center bg-blue-300 px-4 h-14'>

        {/* Logo */}
        <div className='flex items-center ml-[60px]'>
          <img src={Myimg} alt="" className='h-12 w-12 rounded-full'/>
        </div>

        {/* Desktop Menu (CENTER) */}
        <div className='hidden md:flex gap-8 items-center absolute left-1/2 transform -translate-x-1/2'>
          <Link to="/" className='hover:text-white'>Home</Link>
          <Link to="/About" className='hover:text-white'>About</Link>
          <Link to="/Resume" className='hover:text-white'>Resume</Link>
          <Link to="/Contact" className='hover:text-white'>Contact</Link>
        </div>

        {/* Right Icons (Desktop) */}
        <div className='hidden md:flex gap-3 ml-auto mr-6'>
          <img src={Insta} alt="" className='h-8 w-8 rounded-full'/>
          <img src={Lid} alt="" className='h-8 w-8 rounded-full'/>
        </div>

        {/* ✅ Mobile Dropdown (DaisyUI style) */}
        <div className="dropdown dropdown-end md:hidden ml-auto">
          <label tabIndex={0} className="btn btn-ghost">
            <Menu />
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-300 rounded-box w-40"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Resume">Resume</Link></li>
            <li><Link to="/Contact">Contact</Link></li>

            <div className='flex gap-3 justify-center mt-2'>
              <img src={Insta} alt="" className='h-11 w-11 rounded-full'/>
              <img src={Lid} alt="" className='h-11 w-11 rounded-full'/>
            </div>
          </ul>
        </div>

      </div>

    </div>
    </>
  )
}

export default Navbar