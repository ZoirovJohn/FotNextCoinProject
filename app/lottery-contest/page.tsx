import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import LotteryItems from "@/components/containers/lottery/LotteryItems";
import StorySection from "@/components/containers/StorySection";
import Testimonial from "@/components/containers/testimonial/Testimonial";
import FooterTwo from "@/components/layout/footer/FooterTwo";
const ClientWrapper = dynamic(
  () => import("@/components/widgets/ClientWrapper")
);

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "Lottery Contest | Lvup - Online Crypto Gaming",
  description:
    "Welcome to Lvup - the ultimate crypto gaming & lottery experience.",
  keywords: ["crypto gaming", "lottery", "lvup", "casino", "blockchain"],
  openGraph: {
    title: "Lvup - Crypto Gaming & Lottery",
    description: "Experience seamless blockchain - based gaming and lotteries.",
    url: "https://lvup.netlify.app/",
    siteName: "Lvup",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lvup Crypto Gaming",
      },
    ],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
});

const page = () => {
  return (
    <div className="page-wrapper a-cursor">
      <Header />
      <Breadcrumb title="Lottery Contest" />
      <LotteryItems />
      <StorySection />
      <Testimonial showThumbs={false} />
      <FooterTwo />
      <ClientWrapper />
    </div>
  );
};

export default page;
