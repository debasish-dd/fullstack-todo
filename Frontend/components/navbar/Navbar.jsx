import React from 'react'
import { useState, useEffect } from 'react'
import logo from './logo/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);
  const navbar_items = [
    {
      label: 'features',
      href: '#features'
    },
    {
      label: 'about',
      href: '#about'
    },
    {
      label: 'pricing',
      href: '#pricing'
    },
    {
      label: 'contact',
      href: '#contact'
    },
  ]
  const APP_NAME = "TaskMaster";
  return (
    <div className=' backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 transition-all'>
      <header>
        <nav className='flex items-center justify-between'>
          {/* logo  */}
          <img
            className='w-20 h-20'
            src={logo}
            alt="logo"
          />
          {/* navigation: hidden on mobile */}
          <ul className='items-center gap-8 flex justify-center'>
            {navbar_items.map((item) => (
              <li key={item.label}>
                <a
                  className="text-sm font-medium text-gray-200 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

        </nav>
      </header>

    </div>
  )
}

export default Navbar
