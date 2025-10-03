import dynamic from "next/dynamic";
import type { Metadata } from "next";
import HeaderThree from "@/components/layout/header/HeaderThree";
import LoginSection from "@/components/containers/LoginSection";
import FooterFour from "@/components/layout/footer/FooterFour";
const ClientWrapper = dynamic(
  () => import("@/components/widgets/ClientWrapper")
);

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "Sign In | Fafai - Online Crypto Gaming",
  description:
    "Welcome to Fafai - the ultimate crypto gaming & lottery experience.",
  keywords: ["crypto gaming", "lottery", "fafai", "casino", "blockchain"],
  openGraph: {
    title: "Fafai - Crypto Gaming & Lottery",
    description: "Experience seamless blockchain - based gaming and lotteries.",
    url: "https://fafai.netlify.app/",
    siteName: "Fafai",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fafai Crypto Gaming",
      },
    ],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
});

const page = () => {
  return (
    <div
      className="page-wrapper a-cursor authentication-bg"
      style={{ backgroundImage: "url(images/error-bg.jpg)" }}
    >
      <HeaderThree />
      <LoginSection />
      <FooterFour />
      <ClientWrapper />
    </div>
  );
};

export default page;
