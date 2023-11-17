"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

const LangSelect = ({ locale }: { locale?: string }) => {
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
    <div
      className={clsx(
        `
    hidden
    font-ct 
    w-[100px]
    ml-auto 
    md:flex
    justify-end
    font-extralight 
    cursor-pointer 
    text-center 
    text-white 
    z-40
    fixed
    top-40
    right-0
    translate-x-[140px]
    transition-all 
    duration-700
    `,
        isOpen && "!translate-x-0 right-0 transition-all duration-700"
      )}
    >
      <div
        onClick={toggleDropdown}
        className={clsx(
          `p-3 pb-1 text-sm border border-white/10 bg-[#181818] rounded-tl-lg rounded-bl-2xl `,
          isOpen ? "" : "lang"
        )}
      >
        <span className="transform -rotate-90 block">{selectedLanguage}</span>
      </div>

      <div>
        <ul className="text-white flex">
          {filteredList.map((link, index) => (
            <Link
              href={link.toLowerCase()}
              className="block p-3 pb-2.5 text-sm border border-white/10 bg-[#181818]"
              onClick={toggleDropdown}
              key={index}
            >
              {link.toUpperCase()}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LangSelect;
