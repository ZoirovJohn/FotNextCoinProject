import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import CounterSection from "@/components/containers/CounterSection";
import WorkSection from "@/components/containers/WorkSection";
import CryptoPlatform from "@/components/containers/CryptoPlatform";
import ReferSection from "@/components/containers/ReferSection";
import Footer from "@/components/layout/footer/Footer";
import WorkSection1 from "@/components/containers/WorkSection1";
import WorkSection2 from "@/components/containers/WorkSection2";
import WorkSection3 from "@/components/containers/WorkSection3";
import FarmDiscoverSection from "@/components/containers/FarmDiscoverSection";
import PigCowDiscoverSection from "@/components/containers/PigCowDiscoverSection";
import ChicksDiscoverSection from "@/components/containers/ChicksDiscoverSection";
import FarmRobotDiscoverSection from "@/components/containers/FarmRobotDiscoverSection";
import LegendCocosDiscoverSection from "@/components/containers/LegendCocosDiscoverSection";

const HeroSectionTwo = dynamic(
  () => import("@/components/layout/banner/HeroSectionTwo")
);

const DiscoverSection = dynamic(
  () => import("@/components/containers/DiscoverSection")
);

const ClientWrapper = dynamic(
  () => import("@/components/widgets/ClientWrapper")
);

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "Home | Fafai - Online Crypto Gaming",
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
    <div className="page-wrapper a-cursor">
      <Header />
      <HeroSectionTwo />
      <DiscoverSection />
      <CounterSection />
      <WorkSection />
      <WorkSection1 />
      <WorkSection2 />
      <WorkSection3 />
      <PigCowDiscoverSection />
      <FarmDiscoverSection />
      <ChicksDiscoverSection />
      <FarmRobotDiscoverSection />
      <LegendCocosDiscoverSection />
      <CryptoPlatform />
      <ReferSection layout="two" />
      <Footer />
      <ClientWrapper />
    </div>
  );
};

export default page;
