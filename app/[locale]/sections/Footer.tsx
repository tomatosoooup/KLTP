import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="max-w-[1225px] 2xl:max-w-screen-2xl mx-auto relative z-10 "
      id="footer"
    >
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between mt-10 lg:mt-2 px-5 xl:px-0">
        <div className="absolute min-w-full bg-white/10 h-[2px] top-28 sm:top-24 left-0 lg:hidden"></div>
        <div className="absolute min-w-full bg-white/10 h-[2px] bottom-44 sm:bottom-40 left-0 lg:hidden"></div>
        <div className="text-center hidden font-medium text-white pt-4 flex-col font-cf xl:flex">
          <span className="text-5xl lg:text-6xl tracking-[0.7rem] font-bold">
            KLTP
          </span>
          <span className="text-sm lg:text-xl tracking-[0.7rem] lowercase font-light leading-4 font-ct">
            exchange
          </span>
        </div>
        <div className="order-2 lg:order-none relative flex-grow lg:flex-grow-0">
          <h4 className="uppercase text-white text-lg font-black pb-8 text-center lg:text-left mt-16 lg:mt-10 font-tt">
            Локализация
          </h4>
          <div className="flex flex-wrap lg:flex-nowrap gap-10 lg:gap-16 text-[#D9D9D9] text-sm font-bold ">
            <div className="flex-auto flex flex-col gap-1 text-center lg:text-left font-ct">
              <span>Warszawa</span>
              <span className="font-medium">Żurawia 6/12, офис 418</span>
              <div className="hidden lg:block min-w-full bg-white/50 h-[1px] my-1"></div>
              <div className="flex flex-col">
                <span className="font-bold w-full">Пн-Пт 10:00-20:00</span>
                <span className="font-bold w-full">Сб-Вс По запросу</span>
              </div>
            </div>
            <div className="flex-auto flex flex-col gap-1 text-center lg:text-left font-ct">
              <span>Wrocław</span>
              <span className="font-medium">Ofiar Oswiecimskich 17</span>
              <div className="hidden lg:block min-w-full bg-white/50 h-[1px] my-1"></div>
              <div className="flex flex-col">
                <span className="font-bold w-full">Пн-Пт 10:00-20:00</span>
                <span className="font-bold w-full">Сб-Вс По запросу</span>
              </div>
            </div>
            <div className="flex-auto flex flex-col gap-1 pl-2 text-center lg:text-left font-ct">
              <span>Poznań</span>
              <span className="font-medium">Poznańska 1/36 60-848</span>
              <div className="hidden lg:block min-w-full bg-white/50 h-[1px] my-1"></div>
              <div className="flex flex-col">
                <span className="font-bold w-full">Пн-Пт 10:00-20:00</span>
                <span className="font-bold w-full">Сб-Вс По запросу</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:ml-10 order-3 lg:order-none">
          <h4 className="uppercase text-white text-lg font-black pb-8 text-center lg:text-left mt-16 lg:mt-10 font-tt">
            Контакт
          </h4>
          <div className="flex lg:flex-col gap-20 lg:gap-5">
            <p className="text-[#D9D9D9] text-base font-light font-ct">
              kltp.finance@gmail.com
            </p>
            <div className="flex gap-5">
              <Link href={"/"}>
                <Image
                  alt="telegram"
                  src={"./images/telegram.svg"}
                  width={28}
                  height={28}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  alt="instagram"
                  src={"./images/instagram.svg"}
                  width={28}
                  height={28}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:ml-10 order-1 lg:order-none">
          <h4 className="uppercase text-white text-lg font-black pb-6 lg:pb-8 lg:mt-5 text-center lg:text-left font-tt">
            Документы
          </h4>
          <div className="flex lg:flex-col text-white/70 text-sm gap-10 font-light lg:gap-2 font-ct text-center md:text-left">
            <Link href={"/"}>AML / CTF terms</Link>
            <Link href={"/"}>Terms and conditions of service</Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 lg:mt-12 mb-3 text-white/50 text-sm font-light font-tt">
        © 2023 KLTP - crypto and financial solutions
      </div>
    </div>
  );
};

export default Footer;
