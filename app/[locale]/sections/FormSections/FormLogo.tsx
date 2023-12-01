import { Reveal } from "app/components/Reveal";
import Image from "next/image";

const FormLogo = () => {
  return (
    <>
      <div className="text-center font-medium text-white mx-auto hidden lg:block lg:absolute lg:bottom-10 lg:left-[50%] lg:translate-x-[-50%] mb-5 font-cf">
        <Reveal options={{ x: 0, bottom: 100 }}>
          <>
            <div className="flex flex-col relative">
              <div className="w-12 md:w-24 lg:w-56 h-[1px] bg-gradient-to-l from-white to-white/10 absolute -left-16 md:-left-32 lg:-left-64 top-11 lg:top-16"></div>
              <Image
                src={"/images/logo.png"}
                width={200}
                height={100}
                alt="logo"
                className="hidden lg:block mt-2"
              />
              <div className="w-12 md:w-24 lg:w-56 h-[1px] bg-gradient-to-r from-white to-white/10 absolute -right-16 md:-right-32 lg:-right-64 top-11 lg:top-16"></div>
            </div>
          </>
        </Reveal>
      </div>
    </>
  );
};

export default FormLogo;
