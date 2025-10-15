import Image from "next/image";
import one from "@/public/images/left-arrow.png";
import two from "@/public/images/right-arrow.png";
import three from "@/public/images/spring.png";
import four from "@/public/images/left-th.png";
import five from "@/public/images/line.png";
import todaysFarm from "@/public/images/TodaysFarm.png";
import silverEgg from "@/public/images/silverEgg1.png";
import whiteChick from "@/public/images/whiteChick.png";
import yellowChick from "@/public/images/yellowChick.png";
import chickWhite3 from "@/public/images/chicken-white3.png";

const WorkSection = () => {
  return (
    <section className="work work-alter pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-9">
            <div
              className="section__header text-center mb-55"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Image
                src={todaysFarm}
                alt="Illustration of fast global transactions"
                loading="lazy"
                sizes="360px"
              />
              <p className="mt-16">
                Fafai combines gaming with blockchain to create an inclusive
                financial ecosystem. Players naturally earn tokens, access
                crypto tools, and participate in global digital finance, opening
                new economic opportunities.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Step 1 */}
          <div
            style={{ flex: "0 0 18%", textAlign: "center", marginTop: "270px" }}
          >
            <div
              className="work__single text-center"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              {" "}
              <Image
                src={silverEgg}
                alt="Step 1"
                style={{ width: "80%", height: "auto" }}
              />
              <h6>Silver Egg</h6>
              <p>When touched by hand, it hatches into a chick.</p>{" "}
            </div>
          </div>

          {/* Step 2 */}
          <div
            style={{ flex: "0 0 18%", textAlign: "center", marginTop: "330px" }}
          >
            <Image
              src={whiteChick}
              alt="Step 2"
              style={{ width: "80%", height: "auto" }}
            />
            <h6>Chick</h6>
            <p>Wait it to be Chick</p>
          </div>

          {/* Step 3 */}
          <div
            style={{ flex: "0 0 18%", textAlign: "center", marginTop: "270px" }}
          >
            <Image
              src={yellowChick}
              alt="Step 3"
              style={{ width: "80%", height: "auto" }}
            />
            <h6>Soondong</h6>
            <p>
              They are the most numerous chickens, laying eggs once every three
              days. Feeding and cleaning are essential.
            </p>
          </div>

          {/* Step 4 - bigger bird */}
          <div
            style={{
              flex: "0 0 40%",
              position: "relative",
              textAlign: "center",
            }}
          >
            <Image
              src={chickWhite3}
              alt="Step 4"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "800px",
                // objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      <div className="left-thumb">
        <Image src={three} alt="Spring decoration" />
      </div>
      <div className="right-thumb" style={{ right: "60%", top: "30%" }}>
        <Image src={four} alt="Left decoration" />
      </div>
      <div className="line">
        <Image src={five} alt="Line decoration" />
      </div>
    </section>
  );
};

export default WorkSection;
