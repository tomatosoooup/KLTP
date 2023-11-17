import "./Ticker.css";

const Ticker = () => {
  return (
    <>
      <div className="items-wrap font-tt">
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
      </div>
      {/* End of first marquee */}
      <div className="items-wrap font-cf">
        <div className="items marquee text-5xl lg:text-6xl leading-none dots xl:mb-4 font-bold">
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
        <div className="items marquee text-5xl lg:text-6xl leading-none dots xl:mb-4 font-bold">
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
      </div>
      {/* REVERSE */}
      <div className="items-wrap gap-2 font-tt">
        <div className="items marquee reverse rotate text-xs leading-none font-bold">
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
        <div className="items marquee reverse rotate text-xs leading-none font-bold">
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
      </div>
    </>
  );
};

export default Ticker;
