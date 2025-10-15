"use client";

import { useEffect } from "react";

export default function GamePage() {
  useEffect(() => {
    // Open EggMoney in a new tab
    window.open("https://eggmoney.io/", "_blank");

    // Redirect current page to home
    window.location.replace("/");
  }, []);

  return null; // No UI needed
}
