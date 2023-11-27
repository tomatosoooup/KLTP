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
        className="text-5xl lg:text-6xl big-marquee font-cf font-bold uppercase overflow-y-hidden"
      >
        <span>KNOW ME</span>
        <div className="w-6 h-6 rounded-full bg-white/10"></div>
        <span>LiKE ME</span>
        <div className="w-6 h-6 rounded-full bg-white/10"></div>
        <span>TRUST ME</span>
        <div className="w-6 h-6 rounded-full bg-white/10"></div>
        <span>PAY ME</span>
        <div className="w-6 h-6 rounded-full bg-white/10"></div>
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
