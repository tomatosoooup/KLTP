import BurgerMenu from "./BurgerMenu";
import DropDown from "./DropDown";

const MobileNavbar = ({ locale }: { locale?: string }) => {
  return (
    <div className="relative inset-0 h-[70px] lg:hidden z-30">
      <div className="max-w-full mx-auto mt-5 px-5 mb-5 flex items-center">
        <BurgerMenu />
        <DropDown locale={locale} />
      </div>
    </div>
  );
};

export default MobileNavbar;
