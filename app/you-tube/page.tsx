"use client";

import { useEffect } from "react";

export default function GamePage() {
  useEffect(() => {
    // Open EggMoney in a new tab
    window.open(
      "https://www.youtube.com/@%EC%98%A4%EB%8A%98%EC%9D%98%EB%86%8D%EC%9E%A5/featured/",
      "_blank"
    );

    // Redirect current page to home
    window.location.replace("/");
  }, []);

  return null; // No UI needed
}
