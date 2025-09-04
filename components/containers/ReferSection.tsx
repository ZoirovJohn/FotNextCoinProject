import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/faq/faq-thumb.png";
import two from "@/public/images/faq/circle.png";
import three from "@/public/images/faq/btc.png";
import four from "@/public/images/faq/eth.png";
import five from "@/public/images/faq/arrow.png";
import six from "@/public/images/faq/btc.png";
import seven from "@/public/images/faq/eth.png";
import eight from "@/public/images/faq/left-thumb.png";
import nine from "@/public/images/faq/right-thumb.png";

interface ReferProps {
  layout?: "one" | "two";
}

const ReferSection = ({ layout = "one" }: ReferProps) => {
  return (
    <section
      className={`refer pt-120 pb-120${layout === "two" ? " tertiary-bg" : ""}`}
      style={{ backgroundImage: "url(/images/faq/faq-bg.png)" }}
    >
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
                <h2 className="title-animation fw-6 mt-25">
                  Maximize Your Earnings with <span>Referrals</span>
                </h2>
                <p className="mt-16">
                  Your journey doesn&apos;t end at gameplay—earn more by
                  inviting friends. Our Refer &amp; Earn program rewards you for
                  every successful referral, paid out in OMADCoin.
                </p>
              </div>

              <div className="refer__content-group mt-35">
                <div className="refer__content-single">
                  <p className="text-xl fw-5">
                    <i className="fa-solid fa-circle-arrow-right"></i> Unlimited
                    Earning Potential
                  </p>
                  <p className="text-sm mt-8">
                    There&apos;s no cap—invite more friends, unlock more
                    rewards.
                  </p>
                </div>

                <div className="divider d-none d-xl-block"></div>

                <div className="refer__content-single">
                  <p className="text-xl fw-5">
                    <i className="fa-solid fa-circle-arrow-right"></i> Instant
                    OMADCoin Payouts
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
                  aria-label="join now"
                  title="join now"
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
                  alt="Referral program illustration"
                  loading="lazy"
                  sizes="(max-width: 1200px) 50vw, 520px"
                />
              </div>
              <div className="circle">
                <Image
                  src={two}
                  alt="Glowing circle decoration"
                  loading="lazy"
                  sizes="240px"
                />
              </div>
              <div className="btc">
                <Image
                  src={three}
                  alt="Coin badge"
                  loading="lazy"
                  sizes="160px"
                />
              </div>
              <div className="eth">
                <Image
                  src={four}
                  alt="Token badge"
                  loading="lazy"
                  sizes="160px"
                />
              </div>
              <div className="arrow">
                <Image
                  src={five}
                  alt="Arrow accent"
                  loading="lazy"
                  sizes="200px"
                />
              </div>
              <div className="btc-alt">
                <Image
                  src={six}
                  alt="Coin badge alt"
                  loading="lazy"
                  sizes="140px"
                />
              </div>
              <div className="eth-alt">
                <Image
                  src={seven}
                  alt="Token badge alt"
                  loading="lazy"
                  sizes="140px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="btc-out">
        <Image src={seven} alt="Token badge" loading="lazy" sizes="160px" />
      </div>
      <div className="arrow-out">
        <Image src={five} alt="Arrow decoration" loading="lazy" sizes="220px" />
      </div>
      <div className="left-thumb">
        <Image
          src={eight}
          alt="Left decorative thumb"
          loading="lazy"
          sizes="220px"
        />
      </div>
      <div className="right-thumb">
        <Image
          src={nine}
          alt="Right decorative thumb"
          loading="lazy"
          sizes="220px"
        />
      </div>
    </section>
  );
};

export default ReferSection;
