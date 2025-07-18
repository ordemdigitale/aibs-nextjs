'use client'

import { useState, useEffect } from 'react'
//import { getNavigationData } from '@/drizzle/queries';
import type { NavigationStructure } from '@/drizzle/schema'
import Link from 'next/link'
import Image from 'next/image'
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri'
import logo from '../../../../public/aibs_logo.png'

export default function NavbarAlt() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [navData, setNavData] = useState<NavigationStructure[]>([]);
  const [loading, setLoading] = useState(true);

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
        console.log('Nav data fetched:', data);
      } catch (error) {
        console.error('Error fetching navigation data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNavData();
  }, []);

  console.log('NavData state:', navData);

  return (
    <header className={`sticky top-0 z-100 transition-all ${scrolled ? 'bg-white shadow-md animated fadeInDown' : 'bg-transparent'} font-poppins` }>
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-800">
            <Image src={logo} alt="logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
          {navData.map((link) => (
            <div key={link.name} className="relative group">
              <Link 
                  href={`/aibs/${link.slug}`}
                  className="flex items-center justify-between w-full py-2 px-3 rounded hover:text-blue-600 md:hover:bg-transparent md:border-0 lg:p-0 lg:w-auto capitalize"
                >
                  {link.name}
                  {link.subLinks.length > 0 && <RiArrowDownSLine className="ml-2" />}
                </Link>
                {/* sublinks */}
                {link.subLinks.length > 0 && (
                  <div className="absolute left-0 w-56 rounded-md shadow-lg bg-white py-1 hidden group-hover:block z-20">
                    {link.subLinks.map((sublink) => (
                      <div key={sublink.name} className='relative group/sub'>
                        <Link href={sublink.slug} className='flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:text-blue-600'>
                          {sublink.name}
                          {sublink.nestedLinks.length > 0 && <RiArrowRightSLine className="ml-2" />}
                        </Link>
                        {/* nested links */}
                        {sublink.nestedLinks.length > 0 && (
                          <div className="absolute top-0 left-full w-56 rounded-md shadow-lg bg-white py-1 hidden group-hover/sub:block z-30">
                            {sublink.nestedLinks.map((nestedlink) => (
                              <Link 
                                key={nestedlink.name} 
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
          ))}
            
          </div>
        </div>
      </nav>
    </header>
  )
}