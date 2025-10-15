"use client";
import Link from "next/link";
import Image from "next/image";

import one from "@/public/images/game/one.jpg";
import two from "@/public/images/game/two.jpg";
// remove import for three if not used as image
// import three from "@/public/images/game/three.jpg";
import four from "@/public/images/game/four.jpg";
import five from "@/public/images/game/five.jpg";
import six from "@/public/images/game/six.jpg";

import oneSmall from "@/public/images/game/one-small.jpg";
import twoSmall from "@/public/images/game/two-small.jpg";
import threeSmall from "@/public/images/game/three-small.jpg";

const CryptoPlatform = () => {
  return (
    <section
      className="cr-platform pt-120 pb-120"
      style={{ backgroundImage: "url(/images/cr-bg.png)" }}
    >
      <div className="container">
        {/* header omitted for brevity */}

        <div className="row gutter-24" style={{ justifyContent: "center" }}>
          <div className="col-12">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              {/* Row 1 */}
              <div style={{ flex: "0 0 560px", textAlign: "center" }}>
                <Image
                  src={one}
                  alt="Game 1"
                  style={{
                    width: "560px",
                    height: "420px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ flex: "0 0 250px", textAlign: "center" }}>
                <Image
                  src={two}
                  alt="Game 2"
                  style={{
                    width: "250px",
                    height: "420px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ flex: "0 0 250px", textAlign: "center" }}>
                {/* 3rd slot: replace with YouTube Shorts video */}
                <iframe
                  width="250"
                  height="420"
                  src="https://www.youtube.com/embed/rQkiZqR-ie0?autoplay=1&mute=1&loop=1&playlist=rQkiZqR-ie0&playsinline=1&enablejsapi=1"
                  title="Game 3 Video"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  style={{
                    width: "230px",
                    height: "420px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                ></iframe>
              </div>

              {/* Row 2 */}
              <div
                style={{
                  flex: "0 0 560px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                {/* replace Game 4 with video as before */}
                <iframe
                  width="560"
                  height="420"
                  src="https://www.youtube.com/embed/iIRu6geqhto?autoplay=1&mute=1&loop=1&playlist=iIRu6geqhto&playsinline=1&enablejsapi=1"
                  title="FaFai Gameplay Video"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  style={{
                    width: "560px",
                    height: "420px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                ></iframe>
              </div>

              <div style={{ flex: "0 0 250px", textAlign: "center" }}>
                <Image
                  src={five}
                  alt="Game 5"
                  style={{
                    width: "250px",
                    height: "420px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ flex: "0 0 250px", textAlign: "center" }}>
                <Image
                  src={six}
                  alt="Game 6"
                  style={{
                    width: "250px",
                    height: "420px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* thumbs omitted */}
    </section>
  );
};

export default CryptoPlatform;
