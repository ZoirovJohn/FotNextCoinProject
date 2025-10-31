"use client";

import Image from "next/image";

// Use a path relative to public folder
const whitePaperImage = "/images/whitepaper/noname-down.webp";

const WhitePaperSection = () => {
  return (
    <section className="whitepaper-section pt-120 pb-120">
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
          }}
        >
          <div style={{ width: "100%", maxWidth: "1277px" }}>
            <Image
              src={whitePaperImage}
              alt="Whitepaper"
              width={1277} // fixed width
              height={14832} // fixed height (for aspect ratio)
              style={{ width: "100%", height: "auto", display: "block" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaperSection;
