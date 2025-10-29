import Image from "next/image";
import heroBg from "@/public/images/banner/hero.png";
import btc from "@/public/images/banner/btc.png";
import coinDown from "@/public/images/banner/b-coin-down.png";
import point from "@/public/images/banner/b-point.png";
import rightTh from "@/public/images/right-th.png";

import yellowChick from "@/public/images/banner/ChicksDiscoverSectionYellow.png";
import whiteChick from "@/public/images/banner/ChicksDiscoverSectionWhite.png";

const ChicksDiscoverSection = () => {
  console.log();
  
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${heroBg.src})`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-7 col-xl-7">
            <div className="banner-three__content">
              <h2 className="fw-7 mt-25">Investing in the Future of Finance</h2>
              <p className="text-xl mt-30">
                Since 2024, FaFai has collaborated with top blockchain
                developers to expand solutions and ecosystems, leading the
                charge in building a financial system that creates value through
                the internet.
              </p>
              <h2 className="fw-7 mt-25">
                <span className="primary-text">Leadership and Expertise</span>
              </h2>
              <p className="text-xl mt-30">
                FaFai’s leaders, with extensive experience in technology,
                finance, cryptocurrency, and regulatory compliance, are building
                an inclusive and interoperable future.
              </p>
              <h2 className="fw-7 mt-25">Cryptocurrency Payment Innovation</h2>
              <p className="text-xl mt-30">
                FaFai enables real-time cross-border payments. By integrating
                stablecoins and cryptocurrencies into payment flows, we
                facilitate global expansion and offer diverse payment options,
                including fiat and local currencies. This enables fast, secure,
                and low-cost international payments.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-5 col-xl-5">
            <div className="banner__thumb">
              <div className="thumb-wrapper">
                <div className="thumb">
                  <Image src={yellowChick} alt="Banner Thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rocket">
        <Image src={whiteChick} alt="Rocket" />
      </div>
      <div className="btc d-none d-sm-block">
        <Image src={btc} alt="Bitcoin Icon" />
      </div>
      <div className="coin-down">
        <Image src={coinDown} alt="Coin Down" />
      </div>
      <div className="point d-none d-sm-block">
        <Image src={point} alt="Point" />
      </div>
      <div className="right-th">
        <Image src={rightTh} alt="Right Thumbnail" />
      </div>
    </section>
  );
};

export default ChicksDiscoverSection;
