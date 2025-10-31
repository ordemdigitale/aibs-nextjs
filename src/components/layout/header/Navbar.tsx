"use client";

import { useState, useEffect } from 'react';
import type { PagesStructure } from '@/drizzle/schema';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowDownSLine, RiArrowRightSLine, RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../../../public/aibs_logo.png';
import Spinner from '@/components/ui/Spinner';

export default function Navbar({ navData }: { navData: PagesStructure[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const [activeNestedMenu, setActiveNestedMenu] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (id: number) => {
    setActiveSubMenu((prev) => (prev === id ? null : id)); // Toggle logic
  };

  const toggleNestedMenu = (id: number) => {
    setActiveNestedMenu((prev) => (prev === id ? null : id)); // Toggle logic
  };

  // Recursive function to render menu items
  const renderMenuItems = (items: PagesStructure[], level: number = 0) => {
    return items.map((item) => {
      const hasSubPages = item.subPages && item.subPages.length > 0;
      const isExternal = item.link && !item.link.startsWith('/');
      // Check if item has no content and has subPages (non-navigable parent)
      const isNonNavigable = !item.content && hasSubPages;

      return (
        <div key={item.id} className={`relative group`}> {/* Remove "${level > 0 ? 'border-b border-gray-100' : ''}" */}
          <div className="flex items-center justify-between group" onClick={(e) => e.stopPropagation()}>
            {isExternal ? (
              <Link
                href={item.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`block px-4 py-3 text-gray-700 hover:text-blue-600 capitalize ${level === 0 ? 'md:flex md:items-center md:p-2 md:hover:bg-transparent' : ''}`}
                onClick={level > 0 ? () => toggleMenu() : undefined}
              >
                {item.name}
              </Link>
            ) : isNonNavigable ? (
              // Non-navigable parent: Use span for display only, no link
              <span className={`block px-4 py-3 text-gray-700 capitalize cursor-pointer ${level === 0 ? 'md:flex md:items-center md:p-2' : ''}`}>
                {item.name}
              </span>
            ) : (
              <Link
                href={item.slug || "#"}
                className={`block px-4 py-3 text-gray-700 hover:text-blue-600 capitalize ${level === 0 ? 'md:flex md:items-center md:p-2 md:hover:bg-transparent' : ''}`}
                onClick={(e) => {
                  if (level > 0) toggleMenu();
                  e.stopPropagation(); // Prevent event bubbling
                }}
              >
                {item.name}
              </Link>
            )}
            {hasSubPages && (
              <button
                className="px-4 focus:outline-none"
                onClick={(e) => {
                  e.stopPropagation();
                  if (level === 0) {
                    toggleSubMenu(item.id);
                  } else {
                    toggleNestedMenu(item.id);
                  }
                }}
                aria-label={`Toggle ${item.name} submenu`}
              >
                {level === 0 ? (
                  <RiArrowDownSLine className={`transform transition-transform ${activeSubMenu === item.id ? 'rotate-180' : ''}`} />
                ) : (
                  <RiArrowRightSLine className={`transform transition-transform ${activeNestedMenu === item.id ? 'rotate-90' : ''}`} />
                )}
              </button>
            )}
          </div>
          {hasSubPages && (
            <div
              className={`pl-${level > 0 ? 8 : 4} ${
                level === 0
                  ? 'absolute left-0 w-56 rounded-md shadow-lg bg-white py-1 hidden group-hover:block z-20'
                  : 'bg-gray-50'
              } ${level === 0 ? 'hidden group-hover:block' : activeSubMenu === item.id || activeNestedMenu === item.id ? 'block' : 'hidden'}`}
            >
              {renderMenuItems(item.subPages, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-white shadow-md animated fadeInDown' : 'bg-transparent'} font-poppins`}>
      <nav className="container mx-auto px-4 flex flex-wrap z-50 items-center justify-between w-full font-medium">
        
          {/* Logo */}
          <Link href="/">
            <Image src={logo} alt="logo" width={120} height={40} />
          </Link>

          {/* Hamburger Button */}
          <button
            className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse md:hidden text-2xl text-blue-800"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>

          {/* Desktop Navigation */}
          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
            {navData.length > 0 ? (
              renderMenuItems(navData)
            ) : (
              <div className="flex justify-center items-center">
                <Spinner className="h-5 w-5 text-blue-600" />
              </div>
            )}
          </div>
        

        {/* Mobile Navigation */}
        <div className={`md:hidden w-full ${isOpen ? 'block' : 'hidden'} mt-4 bg-white rounded-lg shadow-lg`}>
          {navData.length > 0 ? (
            renderMenuItems(navData)
          ) : (
            <div className="px-4 py-4 flex items-center">
              <Spinner className="h-5 w-5 text-blue-600" />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}