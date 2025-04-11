// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import { MainLogo } from "@/constants/SvgPaths";
import LanguageDropdown from "./NavbarComponents/LanguageDropdown";
// import { useRouter } from "next/navigation";

export default function Navbar() {
  //   const router = useRouter();

  return (
    <nav className="bg-white py-[20px] shadow-sm">
      <div className="px-[60px] mx-auto">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="#" className="text-xl font-bold text-gray-900">
              <MainLogo />
            </Link>
          </div>

          <section className="text-[#111111] text-[20px] leading-[150%] font-[200] flex gap-[40px]">
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="#"
                className={`inline-flex hover:text-[#8C5947] items-center px-1 pt-1`}
              >
                소개
              </Link>
              <Link
                href="#"
                className={`inline-flex hover:text-[#8C5947] items-center px-1 pt-1`}
              >
                소소담담 APP
              </Link>
              <Link
                href="#"
                className={`inline-flex hover:text-[#8C5947] items-center px-1 pt-1`}
              >
                활동
              </Link>
            </div>

            {/* Language Selector */}
            <div className="hidden z-20 sm:ml-6 sm:flex sm:items-center">
              <LanguageDropdown />
            </div>
          </section>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="block h-6 w-6"
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
                className="hidden h-6 w-6"
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
      <div className="sm:hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="#"
            className={`block pl-3 pr-4 py-2 text-base text-[#111111]  font-medium hover:text-[#8C5947]`}
          >
            소개
          </Link>
          <Link
            href="#"
            className={`block pl-3 pr-4 py-2 text-base text-[#111111]  font-medium hover:text-[#8C5947]`}
          >
            소스담담 APP
          </Link>
          <Link
            href="#"
            className={`block pl-3 pr-4 py-2 text-base text-[#111111]  font-medium hover:text-[#8C5947]`}
          >
            활동
          </Link>
          <div className="hidden z-20 sm:ml-6 sm:flex sm:items-center">
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
}

//font-family: font/family-primary;
// font-weight: 600;
// font-size: 20px;
// line-height: 150%;
// letter-spacing: 0%;
