"use client";

import Image from "next/image";
import Link from "next/link";

// Import your 20 images
import img1 from "@/public/images/whitepaper/img1.png";
import img2 from "@/public/images/whitepaper/img2.png";
import img3 from "@/public/images/whitepaper/img3.png";
import img4 from "@/public/images/whitepaper/img4.png";
import img5 from "@/public/images/whitepaper/img5.png";
import img6 from "@/public/images/whitepaper/img6.png";
import img7 from "@/public/images/whitepaper/img7.png";
import img8 from "@/public/images/whitepaper/img8.png";
import img9 from "@/public/images/whitepaper/img9.png";
import img10 from "@/public/images/whitepaper/img10.png";
// use public folder path instead of importing the PDF (public is served statically)
const file = "/files/Whitepaper.pdf";
// ... continue up to img20

const whitePaperImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];

const WhitePaperSection = () => {
  return (
    <section className="whitepaper-section pt-120 pb-120">
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px", // space between images
          }}
        >
          {whitePaperImages.map((img, index) => (
            <div key={index} style={{ width: "100%", maxWidth: "1000px" }}>
              <Image
                src={img}
                alt={`Whitepaper Image ${index + 1}`}
                style={{ width: "100%", height: "auto", display: "block" }}
                loading="lazy"
              />
            </div>
          ))}

          {/* Link at the bottom */}
          <Link
            href={file} // path to your PDF file in the public folder
            download
            className="btn--primary mt-50"
            style={{ marginTop: "50px" }}
          >
            Download Whitepaper
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhitePaperSection;
