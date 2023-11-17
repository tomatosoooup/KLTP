"use client";

import { useState } from "react";
import Link from "next/link";

const DropDown = ({ locale }: { locale?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLanguage = locale ? locale.toUpperCase() : "EN";

  const linksList = ["en", "pl", "ua", "ru"];
  const filteredList = linksList.filter(
    (el) => el.toLowerCase() != selectedLanguage.toLowerCase()
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mt-6 z-40 ml-auto lg:ml-10 font-ct">
      <button
        type="button"
        className="px-4 py-2 text-white bg-transparent font-medium rounded-lg text-sm inline-flex items-center"
        onClick={toggleDropdown}
      >
        {selectedLanguage}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-20">
          <ul className="text-white pl-5">
            {filteredList.map((link) => (
              <Link
                href={`${link.toLowerCase()}`}
                className="block px-4 py-2 text-sm cursor-pointer border border-white/10 font-extralight bg-[#181818]"
                onClick={toggleDropdown}
                key={link}
              >
                {link.toUpperCase()}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
