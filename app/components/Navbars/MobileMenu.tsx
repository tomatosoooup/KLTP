import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const MobileMenu = ({ isVisible, onClick }) => {
  const t = useTranslations("Navbar");
  const t2 = useTranslations("Footer");

  const handleScrollClick = (targetId: string) => {
    let c = document.getElementById(targetId).getBoundingClientRect();
    window.scrollTo({
      behavior: "smooth",
      top: document.getElementById(targetId).scrollTop + c.top - 20,
    });
  };

  return (
    <div
      className={clsx(
        `
        h-screen w-72 md:w-80 bg-[#121212]/95 fixed inset-0 -translate-x-full py-20 rounded-tr-3xl
        transition-all 
        duration-700
        overflow-y-auto
    `,
        isVisible && "translate-x-0 flex flex-col transition-all duration-700 "
      )}
      onClick={onClick}
    >
      <div className="z-10 w-full h-screen absolute bg-[#121212]/80 blur-sm inset-0 rounded-tr-3xl"></div>
      <ul className="flex flex-col text-[#ffffff] px-5 gap-10 font-medium text-2xl mt-5 relative uppercase z-20 font-tt">
        <span
          onClick={() => {
            onClick();
            handleScrollClick("main");
          }}
          className="ml-5 pt-2"
        >
          {t("main")}
        </span>
        <div className="absolute h-[1px] left-0 top-14 w-full bg-white/10"></div>
        <span
          onClick={() => {
            onClick();
            handleScrollClick("about");
          }}
          className="ml-5"
        >
          {t("about")}
        </span>
        <div className="absolute h-[1px] left-0 top-32 w-full bg-white/10"></div>
        <span
          onClick={() => {
            onClick();
            handleScrollClick("services");
          }}
          className="ml-5"
        >
          {t("services")}
        </span>
        <div className="absolute h-[1px] left-0 top-[200px] w-full bg-white/10"></div>
        <span
          onClick={() => {
            onClick();
            handleScrollClick("footer");
          }}
          className="ml-5"
        >
          {t("contacts")}
        </span>
        <div className="absolute h-[1px] left-0 -bottom-4 w-full bg-white/10"></div>
      </ul>

      <div className="flex flex-col px-5 mt-8 text-[#D9D9D9] font-bold z-20 font-ct gap-y-6">
        <div className="flex flex-col">
          <span>Wrocław</span>
          <span className="font-normal">Ofiar Oświęcimskich 17</span>
        </div>

        <div className="flex flex-col">
          <span>Poznań</span>
          <span className="font-normal">Poznańska 1</span>
        </div>

        <div className="flex flex-col">
          <span>Warszawa</span>
          <span className="font-normal">Żurawia 6/12, офис 418</span>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-4">
            <span className="font-bold">{t2("date_1")}</span>
            <span className="font-bold">10:00-20:00</span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold">{t2("date_2")}</span>
            <span className="font-bold">{t2("temp")}</span>
          </div>
        </div>
        <Link href={"/"} className="font-normal">
          kltp.finance@gmail.com
        </Link>

        <div className="flex gap-5 font-ct">
          <Link href={"https://t.me/KLTP_EX"}>
            <Image
              alt="telegram"
              src={"./images/telegram.svg"}
              width={30}
              height={30}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
          <Link
            href={"https://instagram.com/kltp.exchange?igshid=MzMyNGUyNmU2YQ=="}
          >
            <Image
              alt="instagram"
              src={"./images/instagram.svg"}
              width={30}
              height={30}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
