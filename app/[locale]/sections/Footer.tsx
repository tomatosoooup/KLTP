import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="max-w-[1200px] 2xl:max-w-[1350px] mx-auto relative z-10">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between mt-10 lg:mt-2 px-5 xl:px-0">
        <div className="absolute min-w-full bg-white/10 h-[2px] top-32 left-0 lg:hidden"></div>
        <div className="absolute min-w-full bg-white/10 h-[2px] bottom-44 left-0 lg:hidden"></div>
        <div className="text-center hidden font-medium text-white pt-4 flex-col font-cf xl:flex">
          <span className="text-5xl 2xl:text-6xl tracking-[0.7rem] pr-2 font-bold">
            KLTP
          </span>
          <span className="text-sm 2xl:text-xl tracking-[0.8rem] pr-2 lowercase font-light leading-4 font-ct">
            exchange
          </span>
        </div>
        <div className="order-2 lg:order-none relative flex-grow lg:flex-grow-0 lg:ml-3">
          <h4 className="uppercase text-white text-lg font-black  text-center lg:text-left mt-16 mb-4 lg:mb-0 lg:mt-10 font-tt">
            Локализация
          </h4>
          <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-6 text-[#D9D9D9] text-sm font-bold md:mt-8 ">
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
            <div className="flex-auto flex flex-col gap-1 pl-0 text-center lg:text-left font-ct">
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
        <div className="order-3 lg:order-none">
          <h4 className="uppercase text-white text-lg font-black text-center lg:text-left mt-16 lg:mt-6 font-tt pb-8 md:pb-0">
            Контакт
          </h4>
          <div className="flex lg:flex-col gap-20 lg:gap-5 md:mt-12">
            <p className="text-[#D9D9D9] text-base font-light font-ct">
              <Link href={"mailto:kltp.finance@gmail.com?subject=KLTP order"}>
                kltp.finance@gmail.com
              </Link>
            </p>
            <div className="flex gap-5">
              <Link href={"https://t.me/KLTP_EX"} target="blank">
                <Image
                  alt="telegram"
                  src={"./images/telegram.svg"}
                  width={28}
                  height={28}
                />
              </Link>
              <Link
                target="blank"
                href={
                  "https://instagram.com/kltp.exchange?igshid=MzMyNGUyNmU2YQ=="
                }
              >
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
        <div className="lg:ml-5 order-1 lg:order-none">
          <h4 className="uppercase text-white text-lg font-black pb-6 md:pb-0 lg:pb-8 lg:mt-4 text-center lg:text-left font-tt">
            Документы
          </h4>
          <div className="flex lg:flex-col text-white/70 text-sm gap-10 font-light lg:gap-2 font-ct text-center md:text-left md:mt-6">
            <Link href={"/"} className="w-full">
              AML / CTF terms
            </Link>
            <Link href={"/"} className="w-full">
              Terms and conditions of service
            </Link>
          </div>
        </div>
      </div>
      <div
        className="text-center mt-8 lg:mt-12 mb-3 text-white/50 text-sm font-light font-tt"
        id="footer"
      >
        © 2023 KLTP - crypto and financial solutions
      </div>
    </div>
  );
};

export default Footer;
