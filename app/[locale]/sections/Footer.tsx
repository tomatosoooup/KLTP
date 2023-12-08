import Link from "next/link";
import Image from "next/image";

const Footer = ({ text }: { text: string[] }) => {
  return (
    <>
    <div className="max-w-[1200px] 2xl:max-w-[1350px] mx-auto z-10 flex flex-col xl:flex-row xl:items-center xl:gap-10">
      <div>
        <Image
          src={"/images/logo.png"}
          width={250}
          height={125}
          alt="logo"
          className="hidden xl:block xl:order-1 mt-4"
        />
      </div> 
      <div className="text-center text-white px-5 mt-8 xl:px-0 xl:text-left xl:order-2 xl:h-[175px]">
        <h3 className="uppercase text-lg font-black mb-6 xl:text-left">{text[0]}</h3>
      <div className="xl:flex">
        <div className="flex flex-wrap gap-y-5 font-ct sm:w-[50%] mx-auto lg:w-[75%] xl:w-[65%]">
        <article className="w-[50%] lg:w-[25%] xl:w-[60%]">
          <span>Warszawa</span>
          <p className="font-medium text-[#D9D9D9]">Żurawia 6/12, {text[6]} 418</p>
        </article>
        <article className="w-[50%] lg:w-[25%] xl:w-[40%]">
          <span>Poznań</span>
          <p className="font-medium text-[#D9D9D9]">Poznańska 1</p>
        </article>
        <article className="w-[50%] lg:w-[25%] xl:w-[60%]">
          <span>Wrocław</span>
          <p className="font-medium text-[#D9D9D9]">Ofiar Oświęcimskich 17</p>
        </article>
        <article className="w-[50%] lg:w-[25%] xl:w-[40%]">
          <span>Kraków</span>
          <p className="font-medium text-[#D9D9D9]">Starowiślna 64</p>
        </article>
        </div>
        <div className="hr my-3 w-full h-[1px] bg-white/30 xl:hidden sm:w-[50%] lg:w-[75%] mx-auto"></div>
        <div className="hr hfull w-[1px] bg-white/30 hidden xl:block"></div>
        <div className="flex font-bold lg:justify-center xl:flex-col xl:w-[35%] sm:w-[50%] lg:w-[75%] mx-auto">
          <div className="w-[50%] lg:w-[25%] xl:w-full xl:pl-5 xl:flex xl:gap-3"><span>{text[4]}</span> <span>10:00-20:00</span></div>
          <div className="w-[50%] lg:w-[25%] xl:w-full xl:pl-5 xl:flex xl:gap-3"><span>{text[5]}</span> <span>{text[3]}</span></div>
          </div>
        </div>
        </div>
      <div className="hr my-8 w-screen h-[1px] bg-white/30 xl:hidden"></div>
      <div className="text-center text-white px-5 xl:order-4 xl:mt-8 xl:h-[175px]">
        <h3 className="uppercase text-lg font-black mb-6 xl:text-left">{text[2]}</h3>
        <div className="flex text-white/70 text-sm font-ct font-light sm:justify-center lg:justify-center xl:flex-col xl:text-left xl:gap-4">
        <Link href={"/"} className="w-[50%] sm:w-[25%] xl:w-full">
              AML / CTF terms
            </Link>
            <Link href={"/"} className="w-[50%] sm:w-[25%] xl:w-full">
              Terms and conditions of service
            </Link>
        </div>
      </div>
      <div className="hr mt-8 w-screen h-[1px] bg-white/30 xl:hidden"></div>
      <div className="text-center text-white px-5 mt-8 xl:order-3 xl:h-[175px]">
        <h3 className="uppercase text-lg font-black mb-6 xl:text-left">{text[1]}</h3>
        <div className="flex justify-between sm:justify-center lg:justify-center xl:block">
          <div className="w-[50%] sm:w-[25%] xl:w-full">
              <Link href={"mailto:kltp.finance@gmail.com?subject=KLTP order"} 
              className="text-[#D9D9D9] text-base font-light font-ct">
                kltp.finance@gmail.com
              </Link>
            </div>
            <div className="w-[30%] sm:w-[20%] flex justify-center gap-8 xl:w-full xl:justify-start xl:mt-4 xl:gap-4">
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
      
    </div>
    <div
    className="text-center text-white/50 text-sm font-light font-tt mt-10 mb-5 xl:mt-6"
    id="footer"
  >
    © 2023 KLTP - crypto and financial solutions
  </div></>
  );
};

export default Footer;

{/* <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between mt-10 px-5 xl:px-0">
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
              <span className="font-medium"></span>
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
                <span className="font-bold w-full"></span>
                <span className="font-bold w-full">
                  
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
      </div> */}
