import Image from "next/image";
import Button from "../../components/buttons/Button";

import { Reveal } from "../../components/Reveal";
import { Link as ScrollLink } from "react-scroll";

import Numbers from "../../components/Numbers";

const Main = ({ text }: { text: string[] }) => {
  return (
    <>
      <div className="max-w-[1200px] 2xl:max-w-[1400px] mx-auto" id="main">
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
                  <span className="font-bold tracking-tight">{text[0]}</span>
                  <br />
                  <span className="my-3 block" />
                  <span className="font-normal tracking-tight ">{text[1]}</span>
                </p>
              </Reveal>
              <Reveal options={{ x: -200 }}>
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
                <div className="video-mask-container mt-10 lg:mt-0 mx-auto w-10/12 h-10/12 md:w-7/12 md:h-7/12 lg:w-full lg:h-full">
                  <video autoPlay muted playsInline className="masked-video">
                    <source src="mp4/Bank.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                    <source src="images/Bank.webm" type="video/webm" />
                  </video>
                </div>
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
    </>
  );
};

export default Main;
