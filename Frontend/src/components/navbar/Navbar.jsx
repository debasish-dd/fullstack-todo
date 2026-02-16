import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import logo from './logo/logo.png'
import { Button } from '../ui/button'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const navbarItems = [
    { label: 'Home', type: 'route', href: '/' },
    { label: 'Features', type: 'scroll', section: 'features' },
    { label: 'Pricing', type: 'scroll', section: 'pricing' },
    { label: 'Contact', type: 'scroll', section: 'contact' },
  ]


  const handleNavClick = (item) => {
    if (item.type === 'route') {
      navigate(item.href)
    }

    if (item.type === 'scroll') {
      if (location.pathname !== '/') {
        navigate(`/#${item.section}`)
      } else {
        document
          .getElementById(item.section)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    setIsMobileMenuOpen(false)
  }


  const AuthButtons = () => (
    <>
      <Link
        to="/login"
        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-500 transition-colors"
      >
        <Button>

        Login
        </Button>
      </Link>
      <Link
        to="/signup"
        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-500 transition-colors"
      >
        Sign Up
      </Link>
    </>
  )

  return (
    <div className="fixed top-0 left-0 right-0 z-50 m-5 bg-white/30 backdrop-blur-md rounded-2xl shadow-sm">
      <nav className="flex items-center justify-between px-6 py-3">

        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-20 h-16 object-contain" />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-8 items-center">
          {navbarItems.map((item) => (
            <li key={item.section || item.href}>
              <button
                onClick={() => handleNavClick(item)}
                className="text-lg font-semibold text-white transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* DESKTOP AUTH */}
        <div className="hidden md:flex gap-4">
          <AuthButtons />
        </div>

        {/* MOBILE ICON */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden mx-5 mb-5 bg-white rounded-xl shadow-lg p-6">
          <ul className="flex flex-col items-center gap-5">
            {navbarItems.map((item) => (
              <li key={item.section || item.href}>
                <button
                  onClick={() => handleNavClick(item)}
                  className="text-lg font-semibold text-gray-800"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <hr className="my-4" />

          <div className="flex flex-col gap-3">
            <AuthButtons />
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
