import Link from "next/link";
import Image from "next/image";
import bg from "@/public/images/discover/discover-bg.png";
import farmDiscover1 from "@/public/images/discover/farmDiscover1.png";
import one from "@/public/images/discover/one.png";
import two from "@/public/images/discover/two.png";
import three from "@/public/images/discover/three.png";
import four from "@/public/images/discover/four.png";
import vr from "@/public/images/discover/vr.png";
import square from "@/public/images/square.png";
import tower from "@/public/images/tower.png";
import chart from "@/public/images/chart.png";
import rightTh from "@/public/images/right-th.png";
import { log } from "console";

const FarmDiscoverSection = () => {
  console.log();
  
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
                  <Image src={farmDiscover1} alt="Discover Thumb" />
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
                  The Role of a Bridge <span>Based on Game Users</span>
                </h2>
                <p className="mt-25">
                  FaFai’s most powerful differentiator is its role as a bridge
                  that leads to financial expansion through securing game users.
                </p>
              </div>

              <div className="about__content-group mt-40">
                <div className="about__content-single">
                  <div className="content">
                    <p className="text-lg mt-8">
                      Game participants go beyond mere entertainment, naturally
                      entering the cryptocurrency and blockchain ecosystem.
                    </p>
                  </div>
                </div>
                <div className="about__content-single mt-30">
                  <div className="content">
                    <p className="text-lg mt-8">
                      This user base creates a new customer segment that
                      traditional financial markets struggled to reach,
                      providing a pathway to expand into financial participation
                      through gaming experiences.
                    </p>
                  </div>
                </div>
                <div className="about__content-single mt-30">
                  <div className="content">
                    <p className="text-lg mt-8">
                      As a result, gaming serves as a gateway to FaFai’s
                      financial ecosystem expansion and a key driver in
                      accelerating global financial inclusion.
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

export default FarmDiscoverSection;
