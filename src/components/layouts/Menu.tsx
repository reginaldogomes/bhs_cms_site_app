'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const menuItems = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/about' },
  { name: 'Serviços', href: '/services' },
  { name: 'Contato', href: '/contact' },
]

const ResponsiveMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden sm:flex space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-gray-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleMenu}
            className="text-white sm:hidden focus:outline-none focus:ring-2 focus:ring-gray-500 z-10"
          >
            {isOpen ? (
              <AiOutlineClose size={48} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="sm:hidden fixed inset-0 bg-accent-500 bg-opacity-95 flex flex-col items-center justify-center transition-opacity duration-500 -z-9 translate-y-px">
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-white hover:text-gray-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default ResponsiveMenu
