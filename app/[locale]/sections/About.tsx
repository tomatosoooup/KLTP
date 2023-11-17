import Image from "next/image";
import classes from "app/animations/Image.module.css";

import Numbers from "../../components/Numbers";
import Ticker from "../../components/Ticker";
import { Reveal } from "../../components/Reveal";

const images = [
  {
    alt: "BTC-small-left",
    src: "./images/BTC-left.svg",
    width: 325,
    height: 325,
    class: `absolute z-10 top-10 -left-8 pointer-events-none filter ${classes.imgLeft} ${classes.img}`,
  },
  {
    alt: "BTC",
    src: "./images/BTC.svg",
    width: 425,
    height: 425,
    class: `absolute z-20 left-24 pointer-events-none filter ${classes.imgCenter} ${classes.img}`,
  },
  {
    alt: "BTC-small-right",
    src: "./images/BTC-right.svg",
    width: 335,
    height: 335,
    class: `absolute z-10 top-10 left-72 pointer-events-none filter ${classes.imgRight} ${classes.img}`,
  },
];

const imagesMobile = [
  {
    alt: "BTC-small-left",
    src: "./images/BTC-left.svg",
    width: 225,
    height: 225,
    class: `absolute z-10 top-0 -left-8 pointer-events-none filter ${classes.imgLeft} ${classes.img}`,
  },
  //
  {
    alt: "BTC",
    src: "./images/BTC.svg",
    width: 275,
    height: 275,
    class: `absolute z-20 -top-4 left-14 pointer-events-none filter ${classes.imgCenter} ${classes.img}`,
  },
  {
    alt: "BTC-small-right",
    src: "./images/BTC-right.svg",
    width: 225,
    height: 225,
    class: `absolute z-10 top-0 left-44 pointer-events-none filter ${classes.imgRight} ${classes.img}`,
  },
];

const About = ({ text }: { text: string[] }) => {
  const liList = [
    { content: text[2] },
    {
      content: text[4],
      subcontent: <span className="font-bold">{text[3]}</span>,
    },
    { content: text[5] },
    { content: text[6] },
    {
      content: text[7],
      subcontent: (
        <span className="uppercase font-bold mr-1 font-cf">KLTP EXCHANGE</span>
      ),
    },
  ];

  function AnimatedText({ children }) {
    return <Reveal options={{ x: 100 }}>{children}</Reveal>;
  }

  return (
    <>
      <div className="relative">
        <Numbers
          containerClass="text-7xl -top-32 left-24"
          spanClass="blur opacity-40"
          nums={[0, 0, 1, 0]}
        />
        <section
          className="relative max-w-[1150px] 2xl:max-w-screen-2xl mx-auto"
          id="about"
        >
          <h2 className="text-center text-white text-4xl mt-12 lg:mt-24 font-bold uppercase font-tt">
            {text[0]}
          </h2>
          <div className="flex justify-center">
            <div className="my-5 w-40 lg:w-64 h-[1px] bg-gradient-to-l from-white to-white/10 "></div>
            <div className="my-5 w-40 lg:w-64 h-[1px] bg-gradient-to-r from-white to-white/10"></div>
          </div>
          <p className="text-center text-white text-lg font-semibold px-5 font-tt">
            {text[1]}
          </p>
          <div className="lg:grid lg:grid-cols-2 text-white mb-10 lg:mb-12">
            <div className="lg:hidden relative h-[225px] max-w-[400px] mx-auto">
              {imagesMobile.map((img) => (
                <Image
                  alt={img.alt}
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  className={img.class}
                  key={img.alt}
                  quality={10}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              ))}
            </div>
            <div className="relative hidden lg:block">
              {images.map((img) => (
                <Image
                  alt={img.alt}
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  className={img.class}
                  key={img.alt}
                  loading="eager"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              ))}
            </div>
            <div>
              <ul className="flex flex-col gap-5 my-5 lg:my-20 text-[#EAEAEA] font-normal text-lg px-8 relative font-tt">
                {liList.map((li, index) => (
                  <AnimatedText key={index}>
                    {li?.subcontent} {li.content}
                  </AnimatedText>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <Image
          alt="globus"
          src={"./images/globus.svg"}
          width={500}
          height={500}
          className={`absolute right-0 -top-20 pointer-events-none hidden lg:block ${classes.img} ${classes.imgTop}`}
          loading="lazy"
        />
      </div>
      <Ticker />
    </>
  );
};

export default About;
