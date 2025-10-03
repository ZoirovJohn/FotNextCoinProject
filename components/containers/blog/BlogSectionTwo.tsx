import dynamic from "next/dynamic";
import Image from "next/image";
import one from "@/public/images/left-th.png";
import two from "@/public/images/right-th.png";
import three from "@/public/images/rocket.png";

const BlogSliderTwo = dynamic(
  () => import("@/components/widgets/BlogSliderTwo")
);

const BlogSectionTwo = () => {
  return (
    <section className="blog pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-8">
            <div
              className="section__header text-center mb-55"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <span className="fw-6 secondary-text text-xl">
                <strong>Fafai,</strong> Insights & Innovations
              </span>
              <h2
                className="title-animation fw-6 mt-25"
                style={{ textTransform: "none" }}
              >
                Expanding Financial Access through Gaming & Blockchain
              </h2>
              <p className="mt-25">
                Discover how Fafai leverages blockchain and cryptocurrency to
                create inclusive financial opportunities worldwide. From gaming
                as a bridge to crypto ecosystems, explore our solutions,
                insights, and global initiatives that drive economic
                accessibility.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <BlogSliderTwo />
          </div>
        </div>
      </div>

      <div className="left-th">
        <Image src={one} alt="Decoration left" loading="lazy" sizes="220px" />
      </div>
      <div className="right-th">
        <Image src={two} alt="Decoration right" loading="lazy" sizes="220px" />
      </div>
      <div className="rc">
        <Image
          src={three}
          alt="Rocket decoration"
          loading="lazy"
          sizes="260px"
        />
      </div>
    </section>
  );
};

export default BlogSectionTwo;
