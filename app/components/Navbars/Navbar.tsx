"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Navbar = () => {
  const t = useTranslations("Navbar");

  const handleScrollClick = (targetId: string) => {
    let c = document.getElementById(targetId).getBoundingClientRect();
    window.scrollTo({
      behavior: "smooth",
      top: document.getElementById(targetId).scrollTop + c.top - 175,
    });
  };

  return (
    <div className="hidden lg:block ">
      <div className="max-w-[1150px] 2xl:max-w-[1400px] mx-auto my-5 px-5">
        <ul className="flex list-none items-center justify-center h-full text-[20px] uppercase text-white w-full font-light font-tt">
          <span
            className="mt-7 cursor-pointer mr-auto"
            onClick={() => handleScrollClick("main")}
          >
            {t("main")}
          </span>
          <span
            className="mt-7 cursor-pointer mr-auto"
            onClick={() => handleScrollClick("footer")}
          >
            {t("contacts")}
          </span>
          <div
            className="
          text-center 
          flex 
          flex-col 
          font-bold
          relative"
          >
            <div className="w-16 h-[1px] bg-gradient-to-l from-white to-white/10 absolute -left-28 top-14"></div>
            <Image
              src={"/images/logo.png"}
              width={200}
              height={100}
              alt="logo"
              className="hidden lg:block"
            />
            <div className="w-16 h-[1px] bg-gradient-to-r from-white to-white/10 absolute -right-28 top-14"></div>
          </div>
          <span
            className="mt-7 cursor-pointer ml-auto"
            onClick={() => handleScrollClick("about")}
          >
            {t("about")}
          </span>
          <span
            className="mt-7 cursor-pointer ml-auto"
            onClick={() => handleScrollClick("services")}
          >
            {t("services")}
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
