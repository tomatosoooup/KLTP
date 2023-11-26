import Marquee from "react-fast-marquee";

const Ticker = () => {
  return (
    <>
      <Marquee autoFill direction="right" className="small-marquee uppercase">
        <span className="text-xs font-bold font-tt text-[11px]">
          IN CRYPTO WE TRUST
        </span>
      </Marquee>
      <Marquee
        autoFill
        className="text-5xl lg:text-6xl big-marquee font-tt font-black uppercase"
      >
        <span>KNOW ME</span>
        <span>LiKE ME</span>
        <span>TRUST ME</span>
        <span>PAY ME</span>
      </Marquee>
      <Marquee autoFill direction="right" className="small-marquee uppercase">
        <span className="text-xs font-bold font-tt rotate-180 text-[11px]">
          IN CRYPTO WE TRUST
        </span>
      </Marquee>
    </>
  );
};

export default Ticker;
