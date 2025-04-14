"use client";
import React, { useState, useRef, useEffect } from "react";

type Language = {
  code: string;
  name: string;
};

const languages: Language[] = [
  { code: "KOR", name: "Korean" },
  { code: "ENG", name: "English" },
  { code: "FRN", name: "French" },
  { code: "GER", name: "German" },
];

export default function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0]
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    console.log("Language changed to:", language.code);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center w-full rounded-full hover:cursor-pointer px-4 py-2 text-sm font-medium text-white bg-[#4C4C4C] hover:bg-[#3A3A3A] focus:outline-none"
          id="language-menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {selectedLanguage.code}
          <svg
            className={`ml-2 -mr-1 h-4 w-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-[#4C4C4C] ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          <div className="py-1" role="none">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`block w-full text-left px-4 py-2 hover:cursor-pointer text-sm text-white hover:bg-[#3A3A3A] ${
                  selectedLanguage.code === language.code
                    ? "font-bold bg-[#3A3A3A]"
                    : ""
                }`}
                role="menuitem"
                onClick={() => selectLanguage(language)}
              >
                {language.code} - {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
