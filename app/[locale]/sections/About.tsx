import Image from "next/image";
import classes from "app/animations/Image.module.css";

import Numbers from "../../components/Numbers";
import { Reveal } from "../../components/Reveal";

const images = [
  {
    alt: "ETH",
    src: "/images/ETH.png",
    width: 225,
    height: 225,
    class: `absolute z-10 top-32 left-[2rem] pointer-events-none filter  ${classes.imgLeft} ${classes.img}`,
  },
  {
    alt: "tez",
    src: "/images/Tez.png",
    width: 300,
    height: 300,
    class: `absolute z-20 top-20 left-[10rem] pointer-events-none filter ${classes.imgCenter} ${classes.img}`,
  },
  {
    alt: "btc",
    src: "/images/BTC.png",
    width: 225,
    height: 225,
    class: `absolute z-10 top-32 left-[24rem] pointer-events-none filter  ${classes.imgRight} ${classes.img}`,
  },
];

const imagesMobile = [
  {
    alt: "ETH",
    src: "/images/ETH.png",
    width: 150,
    height: 150,
    class: `absolute z-10 top-8 left-[2.5rem] pointer-events-none filter ${classes.imgLeft} ${classes.img}`,
  },
  {
    alt: "tez",
    src: "/images/Tez.png",
    width: 175,
    height: 175,
    class: `absolute z-20 top-3 left-[7rem] pointer-events-none filter ${classes.imgCenter} ${classes.img}`,
  },
  {
    alt: "btc",
    src: "/images/BTC.png",
    width: 150,
    height: 150,
    class: `absolute z-10 top-8 left-[12.5rem] pointer-events-none filter  ${classes.imgRight} ${classes.img}`,
  },
];

const About = ({ text }: { text: string[] }) => {
  const liList = [
    { content: text[2] },
    {
      content: text[4],
      subcontent: <span className="font-bold ">{text[3]}</span>,
    },
    { content: text[5] },
    { content: text[6] },
    {
      content: text[7],
      subcontent: (
        <span className="uppercase font-bold mr-1 font-cf tracking-[0.1rem]">
          KLTP EXCHANGE
        </span>
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
          className="relative max-w-[1200px] 2xl:max-w-[1400px] mx-auto"
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
            <div className="lg:hidden relative h-[215px] max-w-[400px] mx-auto mt-5">
              {imagesMobile.map((img) => (
                <Image
                  alt={img.alt}
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  className={img.class}
                  key={img.alt}
                  quality={10}
                />
              ))}
            </div>
            <div className="relative hidden lg:block md:scale-75 2xl:scale-100">
              {images.map((img) => (
                <Image
                  alt={img.alt}
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  className={img.class}
                  key={img.alt}
                  loading="lazy"
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
    </>
  );
};

export default About;
