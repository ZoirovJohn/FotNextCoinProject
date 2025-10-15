import Link from "next/link";
import Image from "next/image";
import heroBg from "@/public/images/banner/hero.png";
import bannerThumb from "@/public/images/banner/banner-thumb.png";
import rocket from "@/public/images/banner/b-rocket.png";
import btc from "@/public/images/banner/btc.png";
import coinUp from "@/public/images/banner/b-coin-up.png";
import coinDown from "@/public/images/banner/b-coin-down.png";
import point from "@/public/images/banner/b-point.png";
import lottery from "@/public/images/banner/lottery.png";
import rightTh from "@/public/images/right-th.png";

import superLegendCoco from "@/public/images/banner/LegendCocosDiscoverSecSuperLegC.png";
import legendCoco from "@/public/images/banner/LegendCocosDiscoverSecLegC.png";

const LegendCocosDiscoverSection = () => {
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
              <h2 className="fw-7 mt-25">Digital Asset Custody</h2>
              <p className="text-xl mt-30">
                Digital asset custody goes beyond simple wallet storage, serving
                as critical infrastructure for secure and compliant
                participation in the token economy. FaFai’s solutions meet
                global security and regulatory standards.
              </p>
              <h2 className="fw-7 mt-25">
                <span className="primary-text">FaFai’s Impact</span>
              </h2>
              <p className="text-xl mt-30">
                FaFai collaborates with global partners to create a more
                equitable, sustainable, and inclusive economy.
              </p>
              <h2 className="fw-7 mt-25">
                Financial Inclusion and Accessibility
              </h2>
              <p className="text-xl mt-30">
                Globally, approximately 1.4 billion people remain unbanked, and
                2 billion are underbanked. FaFai leverages cryptocurrencies and
                blockchain to support low-cost remittances in emerging markets
                and the development of central bank digital currencies,
                significantly expanding financial accessibility and economic
                opportunities for these populations.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-5 col-xl-5">
            <div className="banner__thumb">
              <div className="thumb-wrapper">
                <div className="thumb">
                  <Image src={superLegendCoco} alt="Banner Thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rocket">
        <Image src={legendCoco} alt="Rocket" />
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

export default LegendCocosDiscoverSection;
