"use client";
import { useEffect } from "react";

export default function Video() {
  useEffect(() => {
    // Try to set 1080p quality after iframe loads
    const interval = setInterval(() => {
      const iframe = document.getElementById("youtube-video") as HTMLIFrameElement;
      if (iframe && iframe.contentWindow) {
        // Request 1080p HD
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "setPlaybackQuality", args: ["hd1080"] }),
          "*"
        );
        clearInterval(interval);
      }
    }, 500);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#30312eff",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", width: "40vw", height: "100%" }}>
        <iframe
          id="youtube-video"
          src={`https://www.youtube.com/embed/rQkiZqR-ie0?autoplay=1&loop=1&playlist=rQkiZqR-ie0&playsinline=1&enablejsapi=1`}
          title="YouTube Shorts"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            margin: "0 auto",
          }}
        ></iframe>
      </div>
    </div>
  );
}
