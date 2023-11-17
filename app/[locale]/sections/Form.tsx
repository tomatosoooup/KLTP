import Link from "next/link";
import Image from "next/image";
import { BsCheck2 } from "react-icons/bs";

import { useState } from "react";

import Numbers from "../../components/Numbers";
import FormInputs from "./FormSections/FormInputs";
import FormLogo from "./FormSections/FormLogo";

import { Reveal } from "../../components/Reveal";
import Button from "../../components/buttons/Button";
import Ticker from "../../components/Ticker";

const Form = ({ text }: { text: string[] }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedTwo, setIsClickedTwo] = useState(false);

  const handleCheck = () => {
    setIsClicked(!isClicked);
  };

  const handleCheckTwo = () => {
    setIsClickedTwo(!isClickedTwo);
  };

  return (
    <>
      <div className="relative md:mx-20 lg:mx-0">
        <form
          id="form"
          className="flex flex-col lg:grid max-w-[1150px] 2xl:max-w-screen-xl mx-auto grid-cols-2 grid-rows-2 bg-[#171717] rounded-2xl mt-10 mb-10 lg:mt-16 lg:mb-16 relative pb-5 z-10"
        >
          <Numbers
            containerClass="text-3xl bottom-10 left-28"
            spanClass="blur"
            nums={[0, 1, 1, 0, 1]}
          />
          <Numbers
            containerClass="text-2xl top-16 left-52"
            spanClass="blur"
            nums={[0, 1, 1, 0, 1]}
          />
          <Numbers
            containerClass="text-8xl -top-10 left-[450px] z-0"
            spanClass="blur opacity-10"
            nums={[0, 0, 0, 1, 0]}
          />
          <Numbers
            containerClass="text-6xl -top-16 -right-20"
            spanClass="blur"
            nums={[0, 0, 1, 0]}
          />
          <FormInputs text={text} />

          <section className="lg:hidden order-4 lg:order-none ">
            <Reveal options={{ x: 100 }} width="100%">
              <div className="lg:hidden justify-center h-[50px] mt-10 px-5 ">
                <Button fullWidth>
                  <span className="text-white pt-1 font-medium">{text[3]}</span>
                </Button>
              </div>
            </Reveal>
          </section>
          <div className="mt-10 px-5 text-[#555] relative text-xs font-semibold auto-cols-[0.5rem] order-3 lg:order-none lg:col-span-2 font-ct">
            <Reveal options={{ x: 100 }} width="100%">
              <>
                <div className="flex items-center gap-x-3 lg:ml-[52%]">
                  <div
                    className={`w-5 h-5  border-[#828282] border rounded-sm cursor-pointer ${
                      isClicked ? "bg-[#9b9b9b]" : "bg-transparent"
                    }`}
                    onClick={handleCheck}
                  >
                    {isClicked && <BsCheck2 size={19} color="white" />}
                  </div>
                  I agree with
                  <Link href={"/"}>Terms and conditions of service</Link>
                </div>
                <div className="flex items-center gap-x-3 mt-2 lg:ml-[52%]">
                  <div
                    className={`w-5 h-5  border-[#828282] border rounded-sm cursor-pointer ${
                      isClickedTwo ? "bg-[#9b9b9b]" : "bg-transparent"
                    }`}
                    onClick={handleCheckTwo}
                  >
                    {isClickedTwo && <BsCheck2 size={19} color="white" />}
                  </div>
                  I agree with
                  <Link href={"/"}>AML / CTF Terms</Link>
                </div>
                <Image
                  alt="qr-code"
                  src={"./images/qr.svg"}
                  width={100}
                  height={100}
                  className="absolute hidden lg:block right-20 top-0 pointer-events-none"
                  loading="lazy"
                />
              </>
            </Reveal>
          </div>
          <FormLogo />
        </form>
        <Link href={"/"}>
          <Image
            alt="telegram"
            src={"./images/messege.svg"}
            width={150}
            height={150}
            className="absolute top-64 right-0 2xl:right-20 hidden xl:block z-20"
            loading="lazy"
          />
        </Link>
      </div>
      <Ticker />
    </>
  );
};

export default Form;
