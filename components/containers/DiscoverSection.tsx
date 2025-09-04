import Link from "next/link";
import Image from "next/image";
import bg from "@/public/images/discover/discover-bg.png";
import thumb from "@/public/images/discover/thumb.png";
import one from "@/public/images/discover/one.png";
import two from "@/public/images/discover/two.png";
import three from "@/public/images/discover/three.png";
import four from "@/public/images/discover/four.png";
import vr from "@/public/images/discover/vr.png";
import square from "@/public/images/square.png";
import tower from "@/public/images/tower.png";
import chart from "@/public/images/chart.png";
import rightTh from "@/public/images/right-th.png";

const DiscoverSection = () => {
  return (
    <section
      className="discover pt-120 pb-190"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container">
        <div className="row align-items-center rtl-header">
          <div className="col-12 col-lg-4 col-xl-5">
            <div className="discover__thumb">
              <div className="refer__thumb d-none d-lg-block">
                <div
                  className="thumb text-start"
                  data-aos="fade-right"
                  data-aos-duration="600"
                >
                  <Image src={thumb} alt="Discover Thumb" />
                </div>
                <div className="btc">
                  <Image src={one} alt="BTC Icon" />
                </div>
                <div className="eth">
                  <Image src={two} alt="ETH Icon" />
                </div>
                <div className="arrow">
                  <Image src={three} alt="Arrow Icon" />
                </div>
                <div className="btc-alt">
                  <Image src={four} alt="BTC Alt" />
                </div>
                <div className="eth-alt">
                  <Image src={vr} alt="VR Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 offset-lg-1 col-xl-6 offset-xl-1">
            <div
              className="discover__content"
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="section__content text-start">
                <span className="fw-6 secondary-text text-xl">
                  <strong>Why,</strong> Choose Omad!
                </span>
                <h2 className="title-animation fw-6 mt-25">
                  Discover the Future of <span>Banking & Crypto</span>
                </h2>
                <p className="mt-25">
                  Omad combines the reliability of digital banking with the
                  innovation of cryptocurrency. Manage your money securely,
                  transfer globally, and trade top digital assets — all in one
                  seamless platform.
                </p>
              </div>
              <div className="about__content-group mt-40">
                <div className="about__content-single">
                  <div className="thumb">
                    <i className="ti ti-credit-card"></i>
                  </div>
                  <div className="content">
                    <h6 className="fw-6">Multi-Currency Accounts</h6>
                    <p className="text-sm mt-8">
                      Open and manage accounts in USD, EUR, KRW and more. Send
                      and receive funds via SEPA, SWIFT, and fast transfers with
                      low fees.
                    </p>
                  </div>
                </div>

                <div className="about__content-single mt-30">
                  <div className="thumb">
                    <i className="ti ti-coins"></i>
                  </div>
                  <div className="content">
                    <h6 className="fw-6">Seamless Crypto Services</h6>
                    <p className="text-sm mt-8">
                      Buy, sell, and swap leading cryptocurrencies like Bitcoin,
                      Ethereum, and USDT. Instantly convert between crypto and
                      fiat with ease.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-40">
                <Link
                  href="about-us"
                  aria-label="Read More"
                  title="Read More"
                  className="btn--primary"
                >
                  Learn More <i className="ti ti-arrow-narrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-thumb">
        <Image src={square} alt="Square Decor" />
      </div>
      <div className="right-thumb">
        <Image src={tower} alt="Tower Decor" />
      </div>
      <div className="chart">
        <Image src={chart} alt="Chart Decor" />
      </div>
      <div className="left-th">
        <Image src={rightTh} alt="Right Thumb" />
      </div>
    </section>
  );
};

export default DiscoverSection;
