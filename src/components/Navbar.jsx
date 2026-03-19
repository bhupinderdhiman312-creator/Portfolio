import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Myimg from "../assets/Myimg.jpg"
import Insta from "../assets/Insta.jpg"
import Lid from "../assets/Link.jpg"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      
      <div className='w-full flex justify-between items-center bg-blue-300 px-4 h-14'>

        {/* Logo */}
        <div className='flex items-center'>
          <img src={Myimg} alt="" className='h-10 w-10 rounded-full'/>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-6 items-center'>
          <Link to="/" className='hover:text-white'>Home</Link>
          <Link to="/About" className='hover:text-white'>About</Link>
          <Link to="/Resume" className='hover:text-white'>Resume</Link>
          <Link to="/Contact" className='hover:text-white'>Contact</Link>

          <div className='flex gap-3'>
            <img src={Insta} alt="" className='h-8 w-8 rounded-full'/>
            <img src={Lid} alt="" className='h-8 w-8 rounded-full'/>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className='md:hidden cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
          <div className='w-6 h-1 bg-black mb-1'></div>
          <div className='w-6 h-1 bg-black mb-1'></div>
          <div className='w-6 h-1 bg-black'></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden flex flex-col items-center bg-blue-300 gap-4 py-4'>
          <Link to="/" className='hover:text-white' onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/About" className='hover:text-white' onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/Resume" className='hover:text-white' onClick={() => setMenuOpen(false)}>Resume</Link>
          <Link to="/Contact" className='hover:text-white' onClick={() => setMenuOpen(false)}>Contact</Link>

          <div className='flex gap-4'>
            <img src={Insta} alt="" className='h-8 w-8 rounded-full'/>
            <img src={Lid} alt="" className='h-8 w-8 rounded-full'/>
          </div>
        </div>
      )}

    </div>
  )
}

export default Navbar