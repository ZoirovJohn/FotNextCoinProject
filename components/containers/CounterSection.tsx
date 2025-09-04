import dynamic from "next/dynamic";

const Counter = dynamic(() => import("@/components/widgets/Counter"));

const CounterSection = () => {
  return (
    <section className="counter">
      <div className="container">
        <div className="row gutter-24">
          {/* Total Transactions */}
          <div
            className="col-12 col-md-6 col-xl-3"
            data-aos="fade-up"
            data-aos-duration="100%"
          >
            <div className="counter__single text-center tilt">
              <div className="counter__single-thumb">
                <i className="ti ti-arrows-exchange"></i>
              </div>
              <div className="counter__single-content mt-25">
                <h3 className="fw-6">
                  <Counter value={25} />M<span className="prefix">+</span>
                </h3>
                <p className="text-lg fw-5">Total Transactions Processed</p>
              </div>
            </div>
          </div>

          {/* Verified Users */}
          <div
            className="col-12 col-md-6 col-xl-3"
            data-aos="fade-up"
            data-aos-duration="100%"
            data-aos-delay="200"
          >
            <div className="counter__single text-center tilt">
              <div className="counter__single-thumb">
                <i className="ti ti-users"></i>
              </div>
              <div className="counter__single-content mt-25">
                <h3 className="fw-6">
                  <Counter value={500} />K<span className="prefix">+</span>
                </h3>
                <p className="text-lg fw-5">Verified Users Worldwide</p>
              </div>
            </div>
          </div>

          {/* Supported Currencies */}
          <div
            className="col-12 col-md-6 col-xl-3"
            data-aos="fade-up"
            data-aos-duration="100%"
            data-aos-delay="400"
          >
            <div className="counter__single text-center tilt">
              <div className="counter__single-thumb">
                <i className="ti ti-currency-dollar"></i>
              </div>
              <div className="counter__single-content mt-25">
                <h3 className="fw-6">
                  <Counter value={50} />
                </h3>
                <p className="text-lg fw-5">Fiat & Crypto Currencies</p>
              </div>
            </div>
          </div>

          {/* Total Value Transferred */}
          <div
            className="col-12 col-md-6 col-xl-3"
            data-aos="fade-up"
            data-aos-duration="100%"
            data-aos-delay="600"
          >
            <div className="counter__single text-center tilt">
              <div className="counter__single-thumb">
                <i className="ti ti-wallet"></i>
              </div>
              <div className="counter__single-content mt-25">
                <h3 className="fw-6">
                  <Counter value={12} />B<span className="prefix">+</span>
                </h3>
                <p className="text-lg fw-5">Total Value Transferred</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
