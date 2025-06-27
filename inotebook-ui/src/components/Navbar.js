import React, {useState} from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {Link } from "react-router";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-white'>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center  p-6 lg:px-8">
          <div className="flex lg:me-16">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 px-4">
              <Link  to="/" className="text-sm/6 font-semibold text-gray-900">
                Home
              </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 px-4">
              <Link  to="/about" className="text-sm/6 font-semibold text-gray-900">
                About
              </Link>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
