import Link from "next/link";
import Image from "next/image";
import heroBg from "@/public/images/banner/hero.png";
import bannerThumb from "@/public/images/banner/banner-thumb.png";
import rocket from "@/public/images/banner/b-rocket.png";
import btc from "@/public/images/banner/btc.png";
import coinDown from "@/public/images/banner/b-coin-down.png";
import point from "@/public/images/banner/b-point.png";
import rightTh from "@/public/images/right-th.png";

const HeroSectionTwo = () => {
  console.log("");

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
              <span className="fw-6 secondary-text text-xl sub-title">
                <strong>My Farm</strong> & My Crypto
              </span>
              <h1 className="fw-7 mt-25">
                The Value of Building{" "}
                <span className="primary-text">Internet Solutions</span>
              </h1>
              <p className="text-xl mt-30">
                FaFai delivers information and value to more people through
                blockchain-based internet solutions, enabling economic
                opportunities to spread more equitably across borders. <br />
                <b>Our Mission</b> To create a world without economic
                boundaries, FaFai supports global businesses, individuals, and
                developers in moving, managing, and distributing value while
                transitioning to blockchain-based systems. Our goal is to
                empower everyone to create greater economic opportunities.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-5 col-xl-5">
            <div className="banner__thumb">
              <div className="thumb-wrapper">
                <div className="thumb">
                  <Image src={bannerThumb} alt="Banner Thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rocket" style={{ right: "35%" }}>
        <Image src={rocket} alt="Rocket" />
      </div>
      <div className="btc d-none d-sm-block">
        <Image src={btc} alt="Bitcoin Icon" />
      </div>
      {/* <div className="coin-up">
        <Image src={coinUp} alt="Coin Up" />
      </div> */}
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

export default HeroSectionTwo;
