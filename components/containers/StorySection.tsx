import Image from "next/image";
import StoryData from "@/public/data/story-data";
import one from "@/public/images/chart.png";
import two from "@/public/images/btc-two.png";
import three from "@/public/images/rocket.png";

interface StoryProps {
  layout?: "one" | "two";
}

const StorySection = ({ layout = "one" }: StoryProps) => {
  // Create reversed copy (non-destructive)
  const reversed = StoryData.slice().reverse();

  return (
    <section className={`story pt-120${layout === "two" ? " pb-120" : ""}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-9">
            <div
              className="section__header text-center mb-55"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <span className="fw-6 secondary-text text-xl">
                <strong>Real Voices,</strong> Real Impact
              </span>
              <h2 className="title-animation fw-6 mt-25">
                Stories from the FAFAICoin Community
              </h2>
              <p className="mt-25">
                Hear directly from players around the world using{" "}
                <strong>FAFAICoin</strong> for instant rewards, smooth gameplay,
                and borderless payouts. Every win is more than just a number—
                it’s a story worth sharing.
              </p>
            </div>
          </div>
        </div>

        <div className="row gutter-24">
          {/* Left column */}
          <div className="col-12 col-xl-4">
            <div className="story__inner">
              <div className="story__wrapper story__left-wrapper">
                {StoryData.map((item) => (
                  <div className="story__single" key={item.id}>
                    <i className="ti ti-quote"></i>
                    <div className="review">
                      {Array.from({ length: item.stars }).map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                    <div className="story__meta mt-16">
                      <p>{item.authorHandle}</p>
                      <p>{item.date}</p>
                    </div>
                    <div className="story__content mt-25">
                      <blockquote>
                        <q className="text-lg">{item.quote}</q>
                      </blockquote>
                    </div>
                    <div className="author__info mt-35">
                      <div className="thumb">
                        <Image
                          src={item.image}
                          alt={item.alt || `${item.authorName} avatar`}
                          loading="lazy"
                          sizes="64px"
                        />
                      </div>
                      <div className="content">
                        <p className="text-xl fw-6">{item.authorName}</p>
                        <p>{item.authorRole}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center column with reversed order */}
          <div className="col-12 col-xl-4">
            <div className="story__inner story__inner-center">
              <div className="story__wrapper story__wrapper-center">
                {reversed.map((item) => (
                  <div className="story__single" key={item.id}>
                    <i className="ti ti-quote"></i>
                    <div className="review">
                      {Array.from({ length: item.stars }).map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                    <div className="story__meta mt-16">
                      <p>{item.authorHandle}</p>
                      <p>{item.date}</p>
                    </div>
                    <div className="story__content mt-25">
                      <blockquote>
                        <q className="text-lg">{item.quote}</q>
                      </blockquote>
                    </div>
                    <div className="author__info mt-35">
                      <div className="thumb">
                        <Image
                          src={item.image}
                          alt={item.alt || `${item.authorName} avatar`}
                          loading="lazy"
                          sizes="64px"
                        />
                      </div>
                      <div className="content">
                        <p className="text-xl fw-6">{item.authorName}</p>
                        <p>{item.authorRole}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="col-12 col-xl-4">
            <div className="story__inner">
              <div className="story__wrapper story__right-wrapper">
                {StoryData.map((item) => (
                  <div className="story__single" key={item.id}>
                    <i className="ti ti-quote"></i>
                    <div className="review">
                      {Array.from({ length: item.stars }).map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                    <div className="story__meta mt-16">
                      <p>{item.authorHandle}</p>
                      <p>{item.date}</p>
                    </div>
                    <div className="story__content mt-25">
                      <blockquote>
                        <q className="text-lg">{item.quote}</q>
                      </blockquote>
                    </div>
                    <div className="author__info mt-35">
                      <div className="thumb">
                        <Image
                          src={item.image}
                          alt={item.alt || `${item.authorName} avatar`}
                          loading="lazy"
                          sizes="64px"
                        />
                      </div>
                      <div className="content">
                        <p className="text-xl fw-6">{item.authorName}</p>
                        <p>{item.authorRole}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative assets */}
      <div className="chart">
        <Image src={one} alt="Chart decoration" loading="lazy" sizes="300px" />
      </div>
      <div className="btc">
        <Image src={two} alt="Coin badge" loading="lazy" sizes="220px" />
      </div>
      <div className="rocket">
        <Image
          src={three}
          alt="Rocket decoration"
          loading="lazy"
          sizes="220px"
        />
      </div>
    </section>
  );
};

export default StorySection;
