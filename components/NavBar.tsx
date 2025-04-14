"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MainLogo } from "@/constants/SvgPaths";
import LanguageDropdown from "./NavbarComponents/LanguageDropdown";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      <nav className="bg-white py-5 w-full sticky top-0 z-20">
        <div className="px-4 md:px-6 lg:px-16 xl:px-60 mx-auto">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="#" className="text-xl font-bold text-gray-900">
                <MainLogo />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <section className="hidden md:flex text-[#111111] text-base lg:text-lg xl:text-xl leading-[150%] font-[200] gap-4 lg:gap-8 xl:gap-10 items-center">
              <div className="flex space-x-4 lg:space-x-6 xl:space-x-8">
                <Link
                  href="#"
                  className="inline-flex hover:text-[#8C5947] items-center px-1 pt-1"
                >
                  소개
                </Link>
                <Link
                  href="#"
                  className="inline-flex hover:text-[#8C5947] items-center px-1 pt-1"
                >
                  소소담담 APP
                </Link>
                <Link
                  href="#"
                  className="inline-flex hover:text-[#8C5947] items-center px-1 pt-1"
                >
                  활동
                </Link>
              </div>

              {/* Desktop Language Selector */}
              <div className="z-20 flex items-center">
                <LanguageDropdown />
              </div>
            </section>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute w-full bg-white z-20`} 
          id="mobile-menu"
        >
          <div className="pt-2 pb-3 space-y-1 px-4 md:px-6 lg:px-16 xl:px-60">
            <Link
              href="#"
              className="block py-2 text-base text-[#111111] font-medium hover:text-[#8C5947]"
            >
              소개
            </Link>
            <Link
              href="#"
              className="block py-2 text-base text-[#111111] font-medium hover:text-[#8C5947]"
            >
              소소담담 APP
            </Link>
            <Link
              href="#"
              className="block py-2 text-base text-[#111111] font-medium hover:text-[#8C5947]"
            >
              활동
            </Link>
            <div className="py-2 z-20">
              <LanguageDropdown />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}