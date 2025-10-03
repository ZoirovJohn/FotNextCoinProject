import dynamic from "next/dynamic";
import Image from "next/image";
import one from "@/public/images/chart.png";
import two from "@/public/images/btc-two.png";
import three from "@/public/images/rocket.png";
import four from "@/public/images/left-th.png";

const RecentChampionTab = dynamic(
  () => import("@/components/widgets/RecentChampionTab")
);

const RecentChampions = () => {
  return (
    <section
      className="ch-list ch-list-alternate ch-fcq pt-120 pb-120"
      style={{ backgroundImage: "url(/images/game-bg.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div
              className="section__header text-center mb-55"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <span className="fw-6 secondary-text text-xl">
                <strong>FAFAICoin</strong> — Live Payouts
              </span>
              <h2 className="title-animation fw-6 mt-25">
                Recent Champions, Paid Instantly
              </h2>
              <p className="mt-25">
                Watch real-time wins powered by <strong>FAFAICoin</strong>. From
                epic streaks to last-minute victories, players are cashing out
                instantly with borderless crypto payments.
              </p>
            </div>
          </div>
        </div>
        <RecentChampionTab />
      </div>

      <div className="chart">
        <Image
          src={one}
          alt="Chart"
          loading="lazy"
          sizes="(max-width: 768px) 60vw, 400px"
        />
      </div>
      <div className="btc">
        <Image
          src={two}
          alt="Bitcoin badge"
          loading="lazy"
          sizes="(max-width: 768px) 40vw, 280px"
        />
      </div>
      <div className="rocket">
        <Image
          src={three}
          alt="Rocket"
          loading="lazy"
          sizes="(max-width: 768px) 40vw, 260px"
        />
      </div>
      <div className="left-thumb">
        <Image
          src={four}
          alt="Left thumb"
          loading="lazy"
          sizes="(max-width: 768px) 30vw, 200px"
        />
      </div>
    </section>
  );
};

export default RecentChampions;
