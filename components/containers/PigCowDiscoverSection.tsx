import Link from "next/link";
import Image from "next/image";
import heroBg from "@/public/images/banner/hero.png";
import btc from "@/public/images/banner/btc.png";
import coinUp from "@/public/images/banner/b-coin-up.png";
import coinDown from "@/public/images/banner/b-coin-down.png";
import point from "@/public/images/banner/b-point.png";
import lottery from "@/public/images/banner/lottery.png";
import rightTh from "@/public/images/right-th.png";

import cowImage from "@/public/images/banner/CowDiscoverSection.png";
import pigImage from "@/public/images/banner/PigDiscoverSection.png";

const PigCowDiscoverSection = () => {
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
              <h1 className="fw-7 mt-25">Innovative Crypto Solutions</h1>
              <p className="text-xl mt-30">
                In a rapidly changing world, FaFai ensures no one is left behind
                by providing innovative and connected crypto solutions.
              </p>
              <h2 className="fw-7 mt-25">
                <span className="primary-text">Collaborative Vision</span>
              </h2>
              <p className="text-xl mt-30">
                Rather than disrupting existing systems, FaFai focuses on
                improving them. We simplify infrastructure alongside customers
                and collaborate with regulators, governments, and central banks
                to ensure our solutions are secure and compliant.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-5 col-xl-5">
            <div className="banner__thumb">
              <div className="thumb-wrapper">
                <div className="thumb">
                  <Image src={cowImage} alt="Banner Thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rocket">
        <Image src={pigImage} alt="Rocket" />
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

export default PigCowDiscoverSection;
