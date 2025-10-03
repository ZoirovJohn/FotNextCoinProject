import dynamic from "next/dynamic";

const Counter = dynamic(() => import("@/components/widgets/Counter"));

const CounterSection = () => {
  return (
    <section className="counter">
      <div className="container">
        <div className="row gutter-24">
          {/* Global Users */}
          <div
            className="col-12 col-md-6 col-xl-3"
            data-aos="fade-up"
            data-aos-duration="100%"
          >
            <div className="counter__single text-center tilt">
              <div className="counter__single-thumb">
                <i className="ti ti-users"></i>
              </div>
              <div className="counter__single-content mt-25">
                <h3 className="fw-6">
                  <Counter value={10} />+
                </h3>
                <p className="text-lg fw-5">Countries Engaged</p>
              </div>
            </div>
          </div>

          {/* Active Participants */}
          <div
            className="col-12 col-md-6 col-xl-3"
            data-aos="fade-up"
            data-aos-duration="100%"
            data-aos-delay="200"
          >
            <div className="counter__single text-center tilt">
              <div className="counter__single-thumb">
                <i className="ti ti-device-gamepad-2"></i>
              </div>
              <div className="counter__single-content mt-25">
                <h3 className="fw-6">
                  <Counter value={5} />M<span className="prefix">+</span>
                </h3>
                <p className="text-lg fw-5">
                  Gamers Joining Blockchain Ecosystem
                </p>
              </div>
            </div>
          </div>

          {/* Partnerships */}
          <div
            className="col-12 col-md-6 col-xl-3"
            data-aos="fade-up"
            data-aos-duration="100%"
            data-aos-delay="400"
          >
            <div className="counter__single text-center tilt">
              <div className="counter__single-thumb">
                <i className="ti ti-handshake"></i>
              </div>
              <div className="counter__single-content mt-25">
                <h3 className="fw-6">
                  <Counter value={100} />+
                </h3>
                <p className="text-lg fw-5">
                  International Partnerships & Alliances
                </p>
              </div>
            </div>
          </div>

          {/* Years of Innovation */}
          <div
            className="col-12 col-md-6 col-xl-3"
            data-aos="fade-up"
            data-aos-duration="100%"
            data-aos-delay="600"
          >
            <div className="counter__single text-center tilt">
              <div className="counter__single-thumb">
                <i className="ti ti-rocket"></i>
              </div>
              <div className="counter__single-content mt-25">
                <h3 className="fw-6">
                  Since <Counter value={25} />
                </h3>
                <p className="text-lg fw-5">Pioneering Blockchain Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
