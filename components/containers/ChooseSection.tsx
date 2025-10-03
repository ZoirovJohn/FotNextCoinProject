import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/winner.png";
import two from "@/public/images/light.png";
import three from "@/public/images/car.png";
import four from "@/public/images/spring.png";
import five from "@/public/images/rocket-xs.png";
import six from "@/public/images/left-th.png";
import seven from "@/public/images/trophy.png";

interface ChooseProps {
  layout?: "one" | "two";
}

const ChooseSection = ({ layout = "one" }: ChooseProps) => {
  return (
    <section
      className={`choose choose-alternate pt-120 tertiary-bg${
        layout === "two" ? " pb-120" : " pb-190"
      }`}
    >
      <div className="container">
        <div className="row">
          {/* Visual column */}
          <div className="col-12 col-lg-5 col-xl-5">
            <div className="choose__thumb d-none d-lg-block">
              <div className="winner">
                <Image
                  src={one}
                  alt="User celebrating successful transfer"
                  className="winner-img"
                  loading="lazy"
                  sizes="(max-width: 1200px) 40vw, 420px"
                />
                <div className="light">
                  <Image
                    src={two}
                    alt="Glowing light effect"
                    className="light-thumb"
                    loading="lazy"
                    sizes="240px"
                  />
                </div>
              </div>
              <div className="car">
                <Image
                  src={three}
                  alt="Fast global movement illustration"
                  loading="lazy"
                  sizes="360px"
                />
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
            <div
              className="choose__content"
              data-aos="fade-left"
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
                  Trusted Platform for Secure <span>Digital</span> Payments
                </h2>
                <p className="mt-25">
                  LVUP puts security and simplicity first. Send and receive
                  value globally with a fast, modern experience built for
                  everyday payments.
                </p>
              </div>

              <div
                className="rating__group mt-40"
                aria-label="User rating summary"
              >
                <div className="left-group">
                  <h3 className="fw-6">
                    4.7<span className="secondary-text">★</span>
                  </h3>
                </div>
                <div className="divider"></div>
                <div className="right-group">
                  <p className="text-lg">Based on 2,500+ reviews</p>
                  <div className="review mt-16" aria-hidden="true">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>

              <ul className="list-group-row mt-40">
                <li>
                  <i className="ti ti-check" aria-hidden="true"></i>
                  Multi-currency support
                </li>
                <li>
                  <i className="ti ti-check" aria-hidden="true"></i>Instant
                  global transfers
                </li>
                <li>
                  <i className="ti ti-check" aria-hidden="true"></i>24/7 help
                  &amp; support
                </li>
                <li>
                  <i className="ti ti-check" aria-hidden="true"></i>Transparent,
                  predictable fees
                </li>
              </ul>

              <div className="mt-40">
                <Link
                  href="/terms-conditions"
                  aria-label="Read more about LVUP"
                  title="Read more"
                  className="btn--primary"
                >
                  Read More <i className="ti ti-arrow-narrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative assets */}
      <div className="left-thumb">
        <Image
          src={four}
          alt="Spring flourish decoration"
          loading="lazy"
          sizes="240px"
        />
      </div>
      <div className="rocket">
        <Image
          src={five}
          alt="Small rocket decoration"
          loading="lazy"
          sizes="200px"
        />
      </div>
      <div className="right-thumb">
        <Image
          src={six}
          alt="Right decorative shape"
          loading="lazy"
          sizes="220px"
        />
      </div>
      <div className="trophy">
        <Image
          src={seven}
          alt="Trophy decoration"
          data-aos="fade-left"
          data-aos-duration="600"
          loading="lazy"
          sizes="220px"
        />
      </div>
    </section>
  );
};

export default ChooseSection;
