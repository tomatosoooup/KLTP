import Link from "next/link";
import Image from "next/image";

const Footer = ({ text }: { text: string[] }) => {
  return (
    <div className="max-w-[1200px] 2xl:max-w-[1350px] mx-auto relative z-10">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between mt-10 px-5 xl:px-0">
        <div className="absolute min-w-full bg-white/10 h-[2px] top-24 md:top-28  left-0 lg:hidden"></div>
        <div className="absolute min-w-full bg-white/10 h-[2px] bottom-40 md:bottom-44 left-0 lg:hidden"></div>
        <Image
          src={"/images/logo.png"}
          width={170}
          height={100}
          alt="logo"
          className="hidden xl:block mt-8 "
        />

        <div className="order-2 lg:order-none relative flex-grow lg:flex-grow-0 lg:ml-3 lg:mt-10">
          <h4 className="uppercase text-white text-lg font-black text-center lg:text-left mt-8 mb-4 md:mt-8 md:mb-0 lg:mt-0 font-tt">
            {text[0]}
          </h4>
          <div className="flex flex-wrap lg:flex-nowrap gap-6 text-[#D9D9D9] text-sm font-bold md:mt-8">
            <div className="flex-auto flex flex-col gap-1 text-center lg:text-left font-ct md:pb-2">
              <span>Warszawa</span>
              <span className="font-medium">Żurawia 6/12, офис 418</span>
              <div className="hidden lg:block min-w-full bg-white/50 h-[1px] my-1"></div>
              <div className="flex flex-col">
                <span className="font-bold w-full">{text[4]} 10:00-20:00</span>
                <span className="font-bold w-full">
                  {text[5]} {text[3]}
                </span>
              </div>
            </div>
            <div className="flex-auto flex flex-col gap-1 text-center lg:text-left font-ct">
              <span>Wrocław</span>
              <span className="font-medium">Ofiar Oświęcimskich 17</span>
              <div className="hidden lg:block min-w-full bg-white/50 h-[1px] my-1"></div>
              <div className="flex flex-col">
                <span className="font-bold w-full">{text[4]} 10:00-20:00</span>
                <span className="font-bold w-full">
                  {text[5]} {text[3]}
                </span>
              </div>
            </div>
            <div className="flex-auto flex flex-col gap-1 pl-0 text-center lg:text-left font-ct">
              <span>Poznań</span>
              <span className="font-medium">Poznańska 1</span>
              <div className="hidden lg:block min-w-full bg-white/50 h-[1px] my-1"></div>
              <div className="flex flex-col">
                <span className="font-bold w-full">{text[4]} 10:00-20:00</span>
                <span className="font-bold w-full">
                  {text[5]} {text[3]}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="order-3 lg:order-none">
          <h4 className="uppercase text-white text-lg font-black text-center lg:text-left mt-12 lg:mt-0 font-tt pb-4 md:pb-0 lg:pt-3">
            {text[1]}
          </h4>
          <div className="flex lg:flex-col gap-20 lg:gap-5 md:mt-8 lg:mt-10">
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
        <div className="order-1 lg:order-none">
          <h4 className="uppercase text-white text-lg font-black pb-4 md:pb-0 text-center lg:text-left font-tt">
            {text[2]}
          </h4>
          <div className="flex lg:flex-col text-white/70 text-sm gap-10 font-light lg:gap-2 font-ct text-center md:text-left md:mt-8 lg:mb-4 lg:pt-2">
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
