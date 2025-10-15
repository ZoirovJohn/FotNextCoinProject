import Image from "next/image";
import bg from "@/public/images/discover/discover-bg.png";
import one from "@/public/images/discover/one.png";
import two from "@/public/images/discover/two.png";
import three from "@/public/images/discover/three.png";
import four from "@/public/images/discover/four.png";
import vr from "@/public/images/discover/vr.png";
import square from "@/public/images/square.png";
import tower from "@/public/images/tower.png";
import chart from "@/public/images/chart.png";
import rightTh from "@/public/images/right-th.png";
import farmRobotDiscover from "@/public/images/discover/farmRobotDiscover.png";

const FarmRobotDiscoverSection = () => {
  return (
    <section
      className="discover pt-20 pb-20"
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
                  <Image src={farmRobotDiscover} alt="Discover Thumb" />
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
                <h2 className="title-animation fw-6 mt-25">
                  Operational Efficiency <span>and Choice</span>
                </h2>
                <p className="mt-25">
                  Our payment system provides new options, allowing users to
                  freely convert between fiat and cryptocurrencies while
                  leveraging the 24/7 operational nature of digital asset
                  payments.
                </p>
              </div>

              <div className="about__content-group mt-40">
                <div className="about__content-single">
                  <div className="content">
                    <p className="text-lg mt-8">
                      Trust and Regulatory Compliance FaFai adheres strictly to
                      local regulations, licensing, and data protection
                      requirements, building trust through secure and
                      transparent partnerships.
                    </p>
                  </div>
                </div>
                <div className="about__content-single mt-30">
                  <div className="content">
                    <p className="text-lg mt-8">
                      Business Expansion Opportunities Cryptocurrency Business:
                      Facilitates seamless entry and exit for cryptocurrencies
                      and stablecoins through a single connection, promoting
                      cross-border fund movement.
                    </p>
                  </div>
                </div>
                <div className="about__content-single mt-30">
                  <div className="content">
                    <p className="text-lg mt-8">
                      Fintech: Drives user growth and new revenue streams
                      through fast and transparent cross-border payments.
                      Banking: Naturally forms global payment flows based on the
                      financial needs of game users, achieving cost savings and
                      revenue generation simultaneously.
                    </p>
                  </div>
                </div>
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

export default FarmRobotDiscoverSection;
