import BurgerMenu from "./BurgerMenu";
import DropDown from "./DropDown";

const MobileNavbar = ({ locale }: { locale?: string }) => {
  return (
    <div className="relative inset-0 h-[70px] lg:hidden z-30">
      <div className="max-w-full mx-auto mt-5 px-5 mb-5 flex items-center">
        <BurgerMenu />
        <div className="text-center flex flex-col font-semibold ml-6 text-white">
          <span className="text-4xl tracking-[0.2rem] font-cf">KLTP</span>
          <span className="text-xs tracking-[0.3rem] lowercase font-light font-ct">
            exchange
          </span>
        </div>
        <DropDown locale={locale} />
      </div>
    </div>
  );
};

export default MobileNavbar;
