import Image from "next/image";
import Button from "../../components/buttons/Button";

import { Reveal } from "../../components/Reveal";
import { Link as ScrollLink } from "react-scroll";

import Ticker from "../../components/Ticker";
import Numbers from "../../components/Numbers";

const Main = ({ text }: { text: string[] }) => {
  return (
    <>
      <div className="max-w-[1150px] 2xl:max-w-screen-2xl mx-auto" id="main">
        <Numbers
          containerClass="text-8xl top-0 left-20 main"
          spanClass="blur-xl"
          nums={[1, 0, 1, 0, 0, 1]}
        />
        <section>
          <div className="lg:grid lg:grid-cols-2 text-white mb-10 md:mb-16 lg:mb-20 relative">
            <div className="px-5 text-center lg:text-justify pt-10 lg:pt-32 relative">
              <Numbers
                containerClass="text-5xl top-0 right-64 pt-32 main"
                spanClass="blur"
                nums={[0, 1, 1, 0, 1]}
              />
              <Reveal options={{ x: -200 }} width="100%">
                <h1 className="text-3xl md:text-5xl 2xl:text-6xl uppercase mb-0 font-extrabold relative !leading-tight font-ct">
                  Cryptocurrency exchange
                </h1>
              </Reveal>
              <Reveal options={{ x: -200 }} width="100%">
                <div className="flex justify-center lg:justify-start">
                  <div className="my-3 w-72 h-[1px] bg-gradient-to-l from-white to-white/10 lg:hidden"></div>
                  <div className="my-3 w-72 h-[1px] bg-gradient-to-r from-white to-white/10"></div>
                </div>
              </Reveal>
              <Reveal options={{ x: -200 }}>
                <p className="text-sm md:text-xl text-[#CECECE] font-light lg:max-w-xl font-tt">
                  <span className="font-bold">{text[0]}</span>
                  <br />
                  <span className="my-3 block" />
                  <span className="font-normal">{text[1]}</span>
                </p>
              </Reveal>
              <Reveal options={{ x: -100 }}>
                <div className="hidden lg:block mt-6">
                  <ScrollLink
                    to="form"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={1500}
                  >
                    <Button>
                      <span className="pt-1 font-bold">{text[2]}</span>
                    </Button>
                  </ScrollLink>
                </div>
              </Reveal>
            </div>
            <div className="my-auto lg:ml-24">
              <Reveal options={{ x: 100 }} width="100%">
                <video width="640" height="360" autoPlay muted>
                  <source src="/images/Bank.webm" type="video/webm" />
                  Ваш браузер не поддерживает воспроизведение видео в формате
                  WEBM.
                </video>
              </Reveal>
            </div>
          </div>
          <Image
            alt="Bitcoin"
            src={"./images/Bitcoin.svg"}
            width={375}
            height={375}
            className="absolute left-0 -bottom-36 hidden lg:block pointer-events-none"
            loading="lazy"
            quality={10}
          />
        </section>
      </div>
      <Ticker />
    </>
  );
};

export default Main;
