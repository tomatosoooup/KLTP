import { Reveal } from "app/components/Reveal";

const FormLogo = () => {
  return (
    <>
      <div className="text-center font-medium text-white mx-auto hidden lg:block lg:absolute lg:bottom-10 lg:left-[50%] lg:translate-x-[-50%] mb-5 font-cf">
        <Reveal options={{ x: 0, bottom: 100 }}>
          <>
            <div className="flex flex-col relative">
              <div className="w-12 md:w-24 lg:w-56 h-[1px] bg-gradient-to-l from-white to-white/10 absolute -left-16 md:-left-32 lg:-left-64 top-11 lg:top-16"></div>
              <span className="lg:text-6xl tracking-[0.7rem] font-extrabold mb-2">
                KLTP
              </span>
              <span className="text-2xl tracking-[0.8rem] lowercase font-extralight leading-4 font-ct">
                exchange
              </span>
              <div className="w-12 md:w-24 lg:w-56 h-[1px] bg-gradient-to-r from-white to-white/10 absolute -right-16 md:-right-32 lg:-right-64 top-11 lg:top-16"></div>
            </div>
          </>
        </Reveal>
      </div>
    </>
  );
};

export default FormLogo;
