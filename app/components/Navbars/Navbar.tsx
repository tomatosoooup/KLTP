"use client";
import { useTranslations } from "next-intl";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <div className="min-h-fit hidden lg:block">
      <div className="max-w-[1150px] 2xl:max-w-screen-2xl mx-auto mt-5 px-5 mb-5">
        <ul
          className="flex 
          list-none 
          items-center 
          justify-center 
          h-full 
          text-[20px] 
          uppercase 
          text-white 
          w-full 
          font-light
          font-tt"
        >
          <ScrollLink
            className="mt-7 cursor-pointer mr-auto"
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {t("main")}
          </ScrollLink>
          <ScrollLink
            className="mt-7 cursor-pointer mr-auto"
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={3500}
          >
            {t("contacts")}
          </ScrollLink>
          <div
            className="
          text-center 
          flex 
          flex-col 
          font-bold
          relative"
          >
            <div className="w-16 h-[1px] bg-gradient-to-l from-white to-white/10 absolute -left-28 top-14"></div>
            <span className="text-6xl tracking-[0.5rem] font-cf">KLTP</span>
            <span className="text-xl tracking-[0.7rem] lowercase font-light font-ct">
              exchange
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-r from-white to-white/10 absolute -right-28 top-14"></div>
          </div>
          <ScrollLink
            className="mt-7 cursor-pointer ml-auto"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            {t("about")}
          </ScrollLink>
          <ScrollLink
            className="mt-7 cursor-pointer ml-auto"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            {t("services")}
          </ScrollLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
