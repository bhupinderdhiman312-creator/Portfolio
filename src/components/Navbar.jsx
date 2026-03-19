import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Myimg from "../assets/Myimg.jpg"
import Insta from "../assets/Insta.jpg"
import Lid from "../assets/Link.jpg"
import { Menu } from "lucide-react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

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
          <img src={Insta} alt="" className='h-10 w-10 rounded-full'/>
          <img src={Lid} alt="" className='h-10 w-10 rounded-full'/>
        </div>

        {/* ✅ Hamburger Icon */}
        <div 
          className='md:hidden ml-auto cursor-pointer'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu />
        </div>

      </div>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden flex flex-col items-center bg-blue-300 gap-4 py-4 w-full'>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/About" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/Resume" onClick={() => setMenuOpen(false)}>Resume</Link>
          <Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          <div className='flex gap-3 mt-2'>
            <img src={Insta} alt="" className='h-8 w-8 rounded-full'/>
            <img src={Lid} alt="" className='h-8 w-8 rounded-full'/>
          </div>
        </div>
      )}

    </div>
    </>
  )
}

export default Navbar