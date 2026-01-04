import React from 'react'
import { useState, useEffect } from 'react'
import logo from './logo/logo.png'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const navbar_items = [
    {
      label: 'Features',
      href: 'features'
    },
    {
      label: 'About',
      href: 'about'
    },
    {
      label: 'Pricing',
      href: 'pricing'
    },
    {
      label: 'Contact',
      href: 'contact'
    },
  ]

  function authBtns(){
    const login = (<Link to="/login" className=' text-center  px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-500 transition-colors'>Login</Link>);
    const signup = (<Link to="/signup" className=" text-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-500 transition-colors">Sign Up</Link>);
    return {login, signup};
  }

  return (
    <div className=' bg-white/30 rounded-2xl backdrop-blur-md z-50 shadow-sm fixed top-0 left-0 right-0 transition-all m-5'>
      <header>
        <nav className='flex items-center justify-between mx-4'>
          {/* logo  */}
          <img
            className='w-20 h-20'
            src={logo}
            alt="logo"
          />
          {/* navigation: hidden on mobile */}
          <ul className='items-center gap-8 justify-center hidden md:flex'>
            {navbar_items.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="text-lg font-semibold text-gray-200 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"

                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className='hidden md:flex gap-5'>
            
            {authBtns().login}
            {authBtns().signup}
          </div>

          {/* hamburger menu icon for mobile */}
          <div className='md:hidden cursor-pointer' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <AiOutlineMenu size={30} /> : <AiOutlineClose onClick={() => setIsMobileMenuOpen(false)} size={30} />}
          </div>
          {/* mobile menu */}
          {!isMobileMenuOpen && (
            <div className='bg-gray-400 absolute top-20 p-5 rounded-lg shadow-lg md:hidden w-full left-0 right-0 mx-auto m-5'>
              <ul className='flex justify-center flex-col items-center gap-5 m-3' >
                {navbar_items.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className=" text-lg font-semibold ">{item.label}</Link>
                  </li>
                ))}
              </ul>
              <hr />
              <div className='mt-4 flex flex-col gap-3 '>
                {authBtns().login}
                {authBtns().signup}
              </div>
              </div>
          
          )}
        </nav>
      </header>

    </div>
  )
}

export default Navbar
