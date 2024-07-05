'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const menuItems = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/about' },
  { name: 'Serviços', href: '/services' },
  { name: 'Contato', href: '/contact' },
]

const MenuMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimating(true)
      setTimeout(() => {
        setIsOpen(false)
        setIsAnimating(false)
      }, 500) // Tempo da animação de fade-out
    } else {
      setIsOpen(true)
    }
  }

  useEffect(() => {
    if (!isOpen) {
      setIsAnimating(false)
    }
  }, [isOpen])

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {(isOpen || isAnimating) && (
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center transition-opacity duration-500 ${isAnimating ? 'animate-fade-out' : 'animate-fade-in'}`}
        >
          <nav>
            <ul className="space-y-6">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <a className="text-2xl text-gray-700 hover:text-gray-900">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}

export default MenuMobile
