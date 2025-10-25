"use client"

import { useState, useEffect } from 'react'
import type { NavigationStructure } from '@/drizzle/schema'
import Link from 'next/link'
import Image from 'next/image'
import { RiArrowDownSLine, RiArrowRightSLine, RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../../../public/aibs_logo.png'
import Spinner from '@/components/ui/Spinner'

// Custom display names mapping
const displayNames: Record<string, string> = {
  // Add your custom names here, for example:
  'brevet de technicien supérieur (bts)': 'BTS',
}

export default function NavbarAlt() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navData, setNavData] = useState<NavigationStructure[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const [activeNestedMenu, setActiveNestedMenu] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    async function fetchNavData() {
      try {
        const response = await fetch('/api/navigation');
        const data = await response.json();
        setNavData(data);
      } catch (error) {
        console.error('Error fetching navigation data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNavData();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (id: number) => {
    setActiveSubMenu(activeSubMenu === id ? null : id);
  };

  const toggleNestedMenu = (id: number) => {
    setActiveNestedMenu(activeNestedMenu === id ? null : id);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-white shadow-md animated fadeInDown' : 'bg-transparent'} font-poppins`}>
      <nav className="container mx-auto px-4 flex flex-wrap items-center justify-between w-full py-4 font-medium">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/" className="text-2xl text-blue-800">
            <Image src={logo} alt="logo" width={120} height={40} />
          </Link>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-2xl text-blue-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {loading ? (
              <div className="flex justify-center items-center">
                <Spinner className="h-5 w-5 text-blue-600" />
              </div>
            ) : (
              navData.map((link) => (
                <div key={link.id} className="relative group">
                  <Link 
                    href={link.slug || '#'}
                    className="flex items-center justify-between w-full py-2 px-3 rounded hover:text-blue-600 md:hover:bg-transparent md:border-0 lg:p-0 lg:w-auto capitalize"
                  >
                    {displayNames[link.name.toLowerCase()] || link.name}
                    {link.subLinks.length > 0 && <RiArrowDownSLine className="ml-2" />}
                  </Link>
                  {link.subLinks.length > 0 && (
                    <div className="absolute left-0 w-56 rounded-md shadow-lg bg-white py-1 hidden group-hover:block z-20">
                      {link.subLinks.map((sublink) => (
                        <div key={sublink.id} className='relative group/sub'>
                          <Link 
                            href={sublink.slug} 
                            className='flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:text-blue-600'
                          >
                            {displayNames[sublink.name.toLowerCase()] || sublink.name}
                            {sublink.nestedLinks.length > 0 && <RiArrowRightSLine className="ml-2" />}
                          </Link>
                          {sublink.nestedLinks.length > 0 && (
                            <div className="absolute top-0 left-full w-56 rounded-md shadow-lg bg-white py-1 hidden group-hover/sub:block z-30">
                              {sublink.nestedLinks.map((nestedlink) => (
                                <Link 
                                  key={nestedlink.id} 
                                  href={nestedlink.slug}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600"
                                >
                                  {nestedlink.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden w-full ${isOpen ? 'block' : 'hidden'} mt-4 bg-white rounded-lg shadow-lg`}>
          {loading ? (
            <div className="px-4 py-4 flex items-center">
              <Spinner className="h-5 w-5 text-blue-600" />
            </div>
          ) : (
            navData.map((link) => (
              <div key={link.id} className="border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <Link 
                    href={link.slug || '#'}
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 capitalize"
                    onClick={() => toggleMenu()}
                  >
                    {displayNames[link.name.toLowerCase()] || link.name}
                  </Link>
                  {link.subLinks.length > 0 && (
                    <button
                      className="px-4 py-3"
                      onClick={() => toggleSubMenu(link.id)}
                      aria-label={`Toggle ${link.name} submenu`}
                    >
                      <RiArrowDownSLine className={`transform ${activeSubMenu === link.id ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {link.subLinks.length > 0 && activeSubMenu === link.id && (
                  <div className="pl-4 bg-gray-50">
                    {link.subLinks.map((sublink) => (
                      <div key={sublink.id} className="border-b border-gray-100">
                        <div className="flex items-center justify-between">
                          <Link 
                            href={sublink.slug}
                            className="block px-4 py-3 text-sm text-gray-600 hover:text-blue-600"
                            onClick={() => toggleMenu()}
                          >
                            {sublink.name}
                          </Link>
                          {sublink.nestedLinks.length > 0 && (
                            <button
                              className="px-4 py-3"
                              onClick={() => toggleNestedMenu(sublink.id)}
                              aria-label={`Toggle ${sublink.name} nested menu`}
                            >
                              <RiArrowRightSLine className={`transform ${activeNestedMenu === sublink.id ? 'rotate-90' : ''}`} />
                            </button>
                          )}
                        </div>
                        {sublink.nestedLinks.length > 0 && activeNestedMenu === sublink.id && (
                          <div className="pl-8 bg-gray-100">
                            {sublink.nestedLinks.map((nestedlink) => (
                              <Link 
                                key={nestedlink.id}
                                href={nestedlink.slug}
                                className="block px-4 py-3 text-sm text-gray-600 hover:text-blue-600"
                                onClick={() => toggleMenu()}
                              >
                                {nestedlink.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </nav>
    </header>
  )
}