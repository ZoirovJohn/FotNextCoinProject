import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/faq/faq-thumb.png";
import two from "@/public/images/faq/circle.png";
import btc from "@/public/images/faq/btc.png";
import eth from "@/public/images/faq/eth.png";
import arrow from "@/public/images/faq/arrow.png";
import ten from "@/public/images/faq/left-thumb.png";

const ReferTwoSection = () => {
  return (
    <section className="refer refer-alter pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center rtl-header">
          <div className="col-12 col-lg-6 col-xl-6">
            <div
              className="refer__content"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <div className="section__content text-start">
                <span className="fw-6 secondary-text text-xl">
                  <strong>Share,</strong> and Grow
                </span>
                <h2
                  className="title-animation fw-6 mt-25"
                  style={{ textTransform: "none" }}
                >
                  Boost Your Earnings with <span>Referrals</span>
                </h2>
                <p className="mt-16">
                  Invite your friends to FAFAI and unlock rewards together. Our
                  Refer & Earn program lets you earn every time your network
                  grows and engages with the platform.
                </p>
              </div>

              <div className="refer__content-group mt-35">
                <div className="refer__content-single">
                  <p className="text-xl fw-5">
                    <i className="fa-solid fa-circle-arrow-right"></i> Unlimited
                    Rewards
                  </p>
                  <p className="text-sm mt-8">
                    There’s no limit to your earning potential. Invite more
                    friends and watch your rewards increase exponentially.
                  </p>
                </div>

                <div className="divider d-none d-xl-block"></div>

                <div className="refer__content-single">
                  <p className="text-xl fw-5">
                    <i className="fa-solid fa-circle-arrow-right"></i> Instant
                    Payouts
                  </p>
                  <p className="text-sm mt-8">
                    Get your referral bonuses immediately after every successful
                    sign-up, no delays, no waiting periods.
                  </p>
                </div>
              </div>

              <div className="mt-40">
                <Link
                  href="/sign-up"
                  aria-label="Start earning today"
                  title="Start earning today"
                  className="btn--primary"
                >
                  Start Earning <i className="ti ti-arrow-narrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
            <div className="refer__thumb d-none d-lg-block">
              <div
                className="thumb"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <Image
                  src={one}
                  alt="Refer & Earn illustration"
                  loading="lazy"
                  sizes="(max-width: 1200px) 50vw, 520px"
                />
              </div>
              <div className="circle">
                <Image src={two} alt="" loading="lazy" sizes="240px" />
              </div>
              <div className="btc">
                <Image src={btc} alt="" loading="lazy" sizes="160px" />
              </div>
              <div className="eth">
                <Image src={eth} alt="" loading="lazy" sizes="160px" />
              </div>
              <div className="arrow">
                <Image src={arrow} alt="" loading="lazy" sizes="200px" />
              </div>
              <div className="btc-alt">
                <Image src={btc} alt="" loading="lazy" sizes="140px" />
              </div>
              <div className="eth-alt">
                <Image src={eth} alt="" loading="lazy" sizes="140px" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Out-of-section decorations */}
      <div className="btc-out">
        <Image src={btc} alt="" loading="lazy" sizes="160px" />
      </div>
      <div className="arrow-out">
        <Image src={arrow} alt="" loading="lazy" sizes="220px" />
      </div>
      <div className="left-thumb">
        <Image src={ten} alt="" loading="lazy" sizes="220px" />
      </div>
    </section>
  );
};

export default ReferTwoSection;
