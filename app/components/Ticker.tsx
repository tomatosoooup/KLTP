import Marquee from "react-fast-marquee";

const Ticker = () => {
  return (
    <>
      <Marquee autoFill direction="right" className="small-marquee">
        <span className="text-xs font-bold font-tt text-[11px]">
          IN CRYPTO WE TRUST
        </span>
      </Marquee>
      <Marquee
        autoFill
        className="text-5xl lg:text-6xl big-marquee font-cf font-normal"
      >
        <span>KNOW ME</span>
        <span>LiKE ME</span>
        <span>TRUST ME</span>
        <span>PAY ME</span>
      </Marquee>
      <Marquee autoFill direction="right" className="small-marquee">
        <span className="text-xs font-bold font-tt rotate-180 text-[11px]">
          IN CRYPTO WE TRUST
        </span>
      </Marquee>
      {/* <div className="items-wrap font-tt">
        <div className="items marquee reverse text-xs leading-none font-bold">
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
        </div>
        <div className="items marquee reverse text-xs leading-none font-bold">
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
        </div>
      </div> */}
      {/* End of first marquee */}
      {/* <div className="items-wrap font-cf h-14">
        <div className="items marquee text-5xl lg:text-6xl leading-none dots font-bold">
          
          <p></p>
          <span>KNOW ME</span>
          <p></p>
          <span>LiKE ME</span>
          <p></p>
          <span>TRUST ME</span>
          <p></p>
          <span>PAY ME</span>
          <p></p>
        </div>
        <div className="items marquee text-5xl lg:text-6xl leading-none dots font-bold">
          <span>KNOW ME</span>
          <p></p>
          <span>LiKE ME</span>
          <p></p>
          <span>TRUST ME</span>
          <p></p>
          <span>PAY ME</span>
          <p></p>
          <span>KNOW ME</span>
          <p></p>
          <span>LiKE ME</span>
          <p></p>
          <span>TRUST ME</span>
          <p></p>
          <span>PAY ME</span>
          <p></p>
        </div>
      </div> */}
      {/* REVERSE */}
      {/* <div className="items-wrap gap-2 font-tt leading-none">
        <div className="items marquee reverse rotate text-xs font-bold">
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
        </div>
        <div className="items marquee reverse rotate text-xs font-bold">
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
        </div>
      </div> */}
    </>
  );
};

export default Ticker;
