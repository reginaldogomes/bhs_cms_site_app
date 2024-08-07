"use client"
import React, { useState } from "react"
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import SocialMedia from "../SocialMedia"

const menuItems = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/about" },
  { name: "Serviços", href: "/services" },
  { name: "Contato", href: "/contact" },
  { name: "Artigos", href: "/articles" },
]

const ResponsiveMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="hidden space-x-4 sm:flex">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-2xl text-white hover:text-gray-300`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleMenu}
            className="z-10 text-white focus:outline-none focus:ring-2 focus:ring-gray-500 sm:hidden"
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
        <div className="bg-opacity-98 -z-9 animate-slideUp bg-accent-500 fixed inset-0 flex flex-col items-center justify-center sm:hidden">
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li key={item.href} className="text-center">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl text-white hover:text-gray-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <SocialMedia />
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default ResponsiveMenu
