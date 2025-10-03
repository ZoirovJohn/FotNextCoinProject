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
                  <strong>Refer,</strong> and Earn
                </span>
                <h2
                  className="title-animation fw-6 mt-25"
                  style={{ textTransform: "none" }}
                >
                  Maximize Your Earnings with <span>Referrals</span>
                </h2>
                <p className="mt-16">
                  Earn more with LVUP by inviting friends. Our Refer &amp; Earn
                  program rewards you when your referrals join and start using
                  the wallet.
                </p>
              </div>

              <div className="refer__content-group mt-35">
                <div className="refer__content-single">
                  <p className="text-xl fw-5">
                    <i className="fa-solid fa-circle-arrow-right"></i> Unlimited
                    Earning Potential
                  </p>
                  <p className="text-sm mt-8">
                    There&apos;s no cap on how much you can earn. Invite more
                    friends, unlock more rewards.
                  </p>
                </div>

                <div className="divider d-none d-xl-block"></div>

                <div className="refer__content-single">
                  <p className="text-xl fw-5">
                    <i className="fa-solid fa-circle-arrow-right"></i> Instant
                    LVUP Payouts
                  </p>
                  <p className="text-sm mt-8">
                    Receive referral bonuses instantly after each successful
                    sign-up.
                  </p>
                </div>
              </div>

              <div className="mt-40">
                <Link
                  href="/sign-up"
                  aria-label="Join now"
                  title="Join now"
                  className="btn--primary"
                >
                  Join Now <i className="ti ti-arrow-narrow-right"></i>
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
