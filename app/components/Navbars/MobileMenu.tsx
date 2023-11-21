import clsx from "clsx";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const MobileMenu = ({ isVisible, onClick }) => {
  return (
    <div
      className={clsx(
        `
        h-screen
        w-72
        md:w-80
        bg-[#121212]/95
        fixed 
        inset-0 
        -translate-x-full 
        py-20
        rounded-tr-3xl
        transition-all 
        duration-700
    `,
        isVisible && "translate-x-0 flex flex-col transition-all duration-700 "
      )}
      onClick={onClick}
    >
      <div className="z-10 w-full h-screen absolute bg-[#121212]/80 blur-sm inset-0 rounded-tr-3xl"></div>
      <ul className="flex flex-col text-[#ffffff] px-5 gap-10 font-medium text-2xl mt-5 relative uppercase z-20 font-tt">
        <ScrollLink
          to="main"
          spy={true}
          smooth={true}
          offset={-150}
          duration={1500}
          onClick={onClick}
          className="ml-5 pt-2"
        >
          Головна
        </ScrollLink>
        <div className="absolute h-[1px] left-0 top-14 w-full bg-white/10"></div>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-150}
          duration={1500}
          onClick={onClick}
          className="ml-5"
        >
          О нас
        </ScrollLink>
        <div className="absolute h-[1px] left-0 top-32 w-full bg-white/10"></div>
        <ScrollLink
          to="services"
          spy={true}
          smooth={true}
          offset={-150}
          duration={2500}
          onClick={onClick}
          className="ml-5"
        >
          Послуги
        </ScrollLink>
        <div className="absolute h-[1px] left-0 top-[200px] w-full bg-white/10"></div>
        <ScrollLink
          to="footer"
          spy={true}
          smooth={true}
          offset={-150}
          duration={3500}
          onClick={onClick}
          className="ml-5"
        >
          Контакти
        </ScrollLink>
        <div className="absolute h-[1px] left-0 -bottom-4 w-full bg-white/10"></div>
      </ul>

      <div className="flex flex-col px-5 mt-8 text-[#D9D9D9] font-bold z-20 font-ct gap-y-6">
        <div className="flex flex-col">
          <span>Wrocław</span>
          <span className="font-normal">Ofiar Oswiecimskich 17</span>
        </div>

        <div className="flex flex-col">
          <span>Poznań</span>
          <span className="font-normal">Poznańska 1/36 60-848</span>
        </div>

        <div className="flex flex-col">
          <span>Warszawa</span>
          <span className="font-normal">Żurawia 6/12, офис 418</span>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-4">
            <span className="font-bold">Пн-Пт</span>
            <span className="font-bold">10:00-20:00</span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold">Сб-Вс</span>
            <span className="font-bold">По запросу</span>
          </div>
        </div>
        <Link href={"/"} className="font-normal">
          kltp.finance@gmail.com
        </Link>

        <div className="flex gap-5 font-ct">
          <Link href={"/"}>
            <Image
              alt="telegram"
              src={"./images/telegram.svg"}
              width={30}
              height={30}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
          <Link href={"/"}>
            <Image
              alt="instagram"
              src={"./images/instagram.svg"}
              width={30}
              height={30}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
