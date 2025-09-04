import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/authentication/circle.png";
import two from "@/public/images/authentication/thumb.png";
import three from "@/public/images/authentication/numbers.png";
import four from "@/public/images/spring.png";
import five from "@/public/images/rocket-sm.png";

const AboutSection = () => {
  return (
    <section className="about about-alternate pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 col-xl-6">
            <div
              className="about__content"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <div className="section__content text-start">
                <span className="fw-6 secondary-text text-xl">
                  <strong>Trusted,</strong> by Thousands of Users
                </span>
                <h2
                  className="title-animation fw-6 mt-25"
                  style={{ textTransform: "none" }}
                >
                  Manage Your Money with <span>OMAD</span>
                </h2>
                <p className="mt-25">
                  OMAD is a fast, secure, and global wallet. Send, receive, and
                  manage digital assets with confidence in a simple, modern
                  experience.
                </p>
              </div>

              <hr className="divider mt-35 mb-40" />

              <div className="about__content-group">
                <div className="about__content-single">
                  <div className="thumb">
                    <i className="ti ti-shield-lock" aria-hidden="true"></i>
                  </div>
                  <div className="content">
                    <h6 className="fw-6">Bank-Grade Security</h6>
                    <p className="text-sm mt-8">
                      Advanced safeguards and best practices to help keep your
                      assets protected.
                    </p>
                  </div>
                </div>

                <span className="divider d-none d-xxl-block"></span>

                <div className="about__content-single">
                  <div className="thumb">
                    <i className="ti ti-bolt" aria-hidden="true"></i>
                  </div>
                  <div className="content">
                    <h6 className="fw-6">Instant Transfers</h6>
                    <p className="text-sm mt-8">
                      Move value globally in seconds with transparent,
                      predictable fees.
                    </p>
                  </div>
                </div>
              </div>

              <ul className="list-group-row mt-40">
                <li>
                  <i className="ti ti-check" aria-hidden="true"></i>
                  Multi-currency support
                </li>
                <li>
                  <i className="ti ti-check" aria-hidden="true"></i>Simple,
                  modern UI
                </li>
                <li>
                  <i className="ti ti-check" aria-hidden="true"></i>24/7 help
                  &amp; support
                </li>
                <li>
                  <i className="ti ti-check" aria-hidden="true"></i>Transparent
                  fees
                </li>
              </ul>

              <div className="mt-40">
                <Link
                  href="/sign-up"
                  aria-label="Create your OMAD account"
                  title="Create your OMAD account"
                  className="btn--primary"
                >
                  Get Started <i className="ti ti-arrow-narrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
            <div
              className="authentication__thumb text-center d-none d-lg-block"
              style={{
                backgroundImage: "url(/images/authentication/thumb-sm.png)",
              }}
            >
              <div className="circle-img">
                <Image
                  src={one}
                  alt="Floating circle decoration"
                  loading="lazy"
                  sizes="200px"
                />
              </div>
              <div className="thumb">
                <Image
                  src={two}
                  alt="OMAD wallet app mockup"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  loading="lazy"
                  sizes="(max-width: 1200px) 50vw, 520px"
                />
              </div>
              <div className="number-img">
                <Image
                  src={three}
                  alt="Statistics overlay decoration"
                  loading="lazy"
                  sizes="240px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="left-thumb">
        <Image
          src={four}
          alt="Spring flourish decoration"
          loading="lazy"
          sizes="260px"
        />
      </div>
      <div className="rocket">
        <Image
          src={five}
          alt="Small rocket decoration"
          loading="lazy"
          sizes="220px"
        />
      </div>
    </section>
  );
};

export default AboutSection;
