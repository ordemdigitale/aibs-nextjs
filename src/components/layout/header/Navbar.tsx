'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { name: 'L\'\école',
    href: '/',
    subLinks: [
      { name: 'Découvrez', href: '/programs/undergraduate' },
      { name: 'Système', href: '/programs/graduate' },
      { name: 'Demande', href: '/programs/doctoral' },
      { name: 'Demande de d', href: '/programs/graduate' },
      { name: 'Doctoral', href: '/programs/doctoral' }
    ]
  },
  { 
    name: 'Programmes', 
    href: '/programs',
    subLinks: [
      { name: 'Undergraduate', href: '/programs/undergraduate' },
      { name: 'Graduate', href: '/programs/graduate' },
      { name: 'Doctoral', href: '/programs/doctoral' }
    ]
  },
  { name: 'Bibliothèque numérique', href: '/admissions' },
  { name: 'E-Learning', href: '/about' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-100 transition-all ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} font-poppins` }>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-800">
            AI<span className="text-blue-600">BS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  href={link.href} 
                  className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === link.href ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white py-1 hidden group-hover:block">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === link.href ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'}`}
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="pl-4 mt-1 space-y-1">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-blue-50"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}