import dynamic from "next/dynamic";
import Image from "next/image";
import chicken from "@/public/images/chicken.png";
import chickenChamp from "@/public/images/chicken-champ.png";
import chickenLegend from "@/public/images/chicken-legend.png";
import chickenSuperLegend from "@/public/images/chicken-superlegend.png";

const Counter = dynamic(() => import("@/components/widgets/Counter"));

const CounterSection = () => {
  // console.log("Rendering CounterSection");
  
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
              <Image
                src={chicken}
                alt="Illustration of fast global transactions"
                loading="lazy"
                sizes="360px"
              />
            </div>
          </div>

          <div
            className="col-12 col-md-6 col-xl-3"
            data-aos="fade-up"
            data-aos-duration="100%"
          >
            <div className="counter__single text-center tilt">
              <Image
                src={chickenChamp}
                alt="Illustration of fast global transactions"
                loading="lazy"
                sizes="360px"
              />
            </div>
          </div>

          <div
            className="col-12 col-md-6 col-xl-3"
            data-aos="fade-up"
            data-aos-duration="100%"
          >
            <div className="counter__single text-center tilt">
              <Image
                src={chickenLegend}
                alt="Illustration of fast global transactions"
                loading="lazy"
                sizes="360px"
              />
            </div>
          </div>

          <div
            className="col-12 col-md-6 col-xl-3"
            data-aos="fade-up"
            data-aos-duration="100%"
          >
            <div className="counter__single text-center tilt">
              <Image
                src={chickenSuperLegend}
                alt="Illustration of fast global transactions"
                loading="lazy"
                sizes="360px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
