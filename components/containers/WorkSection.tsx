import Image from "next/image";
import one from "@/public/images/left-arrow.png";
import two from "@/public/images/right-arrow.png";
import three from "@/public/images/spring.png";
import four from "@/public/images/left-th.png";
import five from "@/public/images/line.png";

const WorkSection = () => {
  return (
    <section className="work work-alter pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-9">
            <div
              className="section__header text-center mb-55"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <span className="fw-6 secondary-text text-xl">
                <strong>Step,</strong> into the Future
              </span>
              <h2 className="title-animation fw-6 mt-25">How Lvup Works</h2>
              <p className="mt-16">
                Lvup combines gaming with blockchain to create an inclusive
                financial ecosystem. Players naturally earn tokens, access
                crypto tools, and participate in global digital finance, opening
                new economic opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="row gutter-60">
          {/* Step 1 */}
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="work__single text-center"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="thumb">
                <i className="ti ti-device-gamepad-2"></i>
                <span>01</span>
                <Image
                  src={one}
                  alt="Left arrow"
                  className="lg-arrow d-none d-xl-block"
                />
              </div>
              <div className="content mt-25">
                <h6 className="fw-6">Play & Earn Tokens</h6>
                <p className="text-sm mt-12">
                  Engage in games while earning LVUP tokens. Each action
                  connects you to blockchain-based rewards and financial tools.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="work__single work__single-alt text-center"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="thumb">
                <i className="ti ti-link"></i>
                <span>02</span>
                <Image
                  src={two}
                  alt="Right arrow"
                  className="lg-arrow lg-r-arrow d-none d-xl-block"
                />
              </div>
              <div className="content mt-25">
                <h6 className="fw-6">Access Blockchain</h6>
                <p className="text-sm mt-12">
                  Use your earned tokens to enter the cryptocurrency ecosystem,
                  manage wallets, and participate in cross-border financial
                  solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="work__single text-center"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <div className="thumb">
                <i className="ti ti-world"></i>
                <span>03</span>
              </div>
              <div className="content mt-25">
                <h6 className="fw-6">Expand Financial Opportunities</h6>
                <p className="text-sm mt-12">
                  Transform gameplay into real-world financial impact—make
                  payments, trade, and join global digital markets safely and
                  efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="left-thumb">
        <Image src={three} alt="Spring decoration" />
      </div>
      <div className="right-thumb">
        <Image src={four} alt="Left decoration" />
      </div>
      <div className="line">
        <Image src={five} alt="Line decoration" />
      </div>
    </section>
  );
};

export default WorkSection;
