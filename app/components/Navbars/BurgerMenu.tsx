"use client";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`flex flex-col justify-center items-center h-14 z-10`}
      >
        <span
          className={`bg-slate-100 block transition-all duration-700 ease-out 
                     w-8 rounded-sm h-[3px] ${
                       isOpen
                         ? "rotate-45 translate-y-[8.5px] opacity-70"
                         : "-translate-y-0.5"
                     }`}
        ></span>
        <span
          className={`bg-slate-100 block transition-all duration-700 ease-out 
                     w-8 rounded-sm my-1.5 h-[3px] ${
                       isOpen ? "opacity-0" : "opacity-100"
                     }`}
        ></span>
        <span
          className={`bg-slate-100 block transition-all duration-700 ease-out 
                     w-8 rounded-sm h-[3px] ${
                       isOpen
                         ? "-rotate-45 -translate-y-[8.5px] opacity-70"
                         : "translate-y-0.5"
                     }`}
        ></span>
      </button>

      <Image
        src={"/images/logo.png"}
        width={100}
        height={50}
        alt="logo"
        className="lg:hidden ml-5"
      />
      <MobileMenu isVisible={isOpen} onClick={handleClick} />
    </>
  );
};

export default BurgerMenu;
