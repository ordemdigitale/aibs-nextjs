"use client";

import { useState, useEffect } from 'react';
import type { PagesStructure } from '@/drizzle/schema';
import Link from 'next/link';
import Image from 'next/image';
import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiMenu3Line,
  RiCloseLine,
} from 'react-icons/ri';
import logo from '../../../../public/aibs_logo.png';
import Spinner from '@/components/ui/Spinner';

export default function Navbar({ navData }: { navData: PagesStructure[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const [activeNestedMenu, setActiveNestedMenu] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubMenu = (id: number) =>
    setActiveSubMenu((prev) => (prev === id ? null : id));

  const toggleNestedMenu = (id: number) =>
    setActiveNestedMenu((prev) => (prev === id ? null : id));

  const renderMenuItems = (items: PagesStructure[], level = 0) => {
    return items.map((item) => {
      const hasSubPages = item.subPages && item.subPages.length > 0;
      const isExternal = item.link && !item.link.startsWith('/');
      const isNonNavigable = !item.content && hasSubPages;

      return (
        <div
          key={item.id}
          className={`relative ${
            level === 0 ? 'group/parent' : 'group/child'
          }`}
        >
          <div
            className="flex items-center justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {isExternal ? (
              <Link
                href={item.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`block px-4 py-3 text-gray-700 hover:text-blue-600 capitalize ${
                  level === 0
                    ? 'md:flex md:items-center md:p-2 md:hover:bg-transparent'
                    : ''
                }`}
                onClick={level > 0 ? () => toggleMenu() : undefined}
              >
                {item.name}
              </Link>
            ) : isNonNavigable ? (
                <span
                  className={`block px-2 py-2 text-gray-700 hover:text-blue-600 capitalize cursor-pointer text-sm font-medium ${
                    level === 0 ? 'md:flex md:items-center md:p-2' : ''
                  }`}
                >
                  {item.name}
                </span>
            ) : (
              <Link
                href={item.slug || '#'}
                className={`block px-2 py-2 text-gray-700 hover:text-blue-600 capitalize text-sm font-medium ${
                  level === 0
                    ? 'md:flex md:items-center md:p-2 md:hover:bg-transparent'
                    : ''
                }`}
                onClick={(e) => {
                  if (level > 0) toggleMenu();
                  e.stopPropagation();
                }}
              >
                {item.name}
              </Link>
            )}

            {/* Show arrow on all screens */}
            {hasSubPages && (
              <button
                className="px-2 focus:outline-none flex items-center text-gray-600 hover:text-blue-600 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  // Only toggle submenu on mobile
                  if (window.innerWidth < 1024) {
                    if (level === 0) toggleSubMenu(item.id);
                    else toggleNestedMenu(item.id);
                  }
                }}
                aria-label={`Toggle ${item.name} submenu`}
              >
                {level === 0 ? (
                  <RiArrowDownSLine
                    className={`transform transition-transform ${
                      activeSubMenu === item.id ? 'rotate-180' : ''
                    }`}
                  />
                ) : (
                  <RiArrowRightSLine
                    className={`transform transition-transform ${
                      activeNestedMenu === item.id ? 'rotate-90' : ''
                    }`}
                  />
                )}
              </button>
            )}
          </div>

          {/* Desktop hover submenu */}
          {hasSubPages && (
            <>
              <div
                className={`hidden md:block absolute top-0 ${
                  level === 0
                    ? 'left-0 mt-10 w-56'
                    : 'left-full top-0 ml-1 w-55'
                } bg-white rounded-md shadow-lg py-2 opacity-0 invisible transition-all duration-200 z-20
                ${
                  level === 0
                    ? 'group-hover/parent:visible group-hover/parent:opacity-100'
                    : 'group-hover/child:visible group-hover/child:opacity-100'
                }`}
              >
                {renderMenuItems(item.subPages, level + 1)}
              </div>

              {/* Mobile click submenu */}
              <div
                className={`md:hidden ${
                  (level === 0 && activeSubMenu === item.id) ||
                  (level > 0 && activeNestedMenu === item.id)
                    ? 'block'
                    : 'hidden'
                } pl-4 bg-gray-50`}
              >
                {renderMenuItems(item.subPages, level + 1)}
              </div>
            </>
          )}
        </div>
      );
    });
  };

  /*  */
  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? 'bg-white shadow-md animated fadeInDown' : 'bg-transparent'
      } font-poppins`}
    >
      <nav className="container mx-auto px-4 flex flex-wrap z-50 items-center justify-between w-full font-medium">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="logo" width={120} height={40} />
        </Link>

        {/* Hamburger */}
        <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
          <button
            className="inline-flex items-center p-2 w-10 h-10 justify-center hover:text-[#2572FF] rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

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
        <div
          className={`md:hidden w-full ${
            isOpen ? 'block' : 'hidden'
          } mt-4 bg-white rounded-lg shadow-lg`}
        >
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
