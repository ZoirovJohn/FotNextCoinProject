import Image from "next/image";
import three from "@/public/images/spring.png";
import four from "@/public/images/left-th.png";
import five from "@/public/images/line.png";
import whiteChick from "@/public/images/whiteChick.png";
import yellowChick from "@/public/images/yellowChick.png";
import chickLegend3 from "@/public/images/chicken-legend3.png";
import eventRedEgg from "@/public/images/EventRedEgg1.png";

const WorkSection2 = () => {
  return (
    <section className="work work-alter pb-120">
      <div className="container">
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
                src={eventRedEgg}
                alt="Step 1"
                style={{ width: "80%", height: "auto" }}
              />
              <h6>Event Red egg</h6>
              <p>There is a chance that you will get a special chicken.</p>{" "}
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
            <p>Wait it to be Legend Coco.</p>
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
            <h6>Legend Coco</h6>
            <p>If you get Legend Coco, your friends will be extremely jealous of you.</p>
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
              src={chickLegend3}
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
      <div className="right-thumb" style={{ right: "60%", top: "0px" }}>
        <Image src={four} alt="Left decoration" />
      </div>
      <div className="line">
        <Image src={five} alt="Line decoration" />
      </div>
    </section>
  );
};

export default WorkSection2;
