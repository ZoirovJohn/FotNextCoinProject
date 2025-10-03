import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import PrivacySection from "@/components/containers/PrivacySection";
import FooterTwo from "@/components/layout/footer/FooterTwo";
const ClientWrapper = dynamic(
  () => import("@/components/widgets/ClientWrapper")
);

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "Terms & Conditions | Fafai - Online Crypto Gaming",
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
      <Breadcrumb title="Terms & Conditions" />
      <PrivacySection />
      <FooterTwo />
      <ClientWrapper />
    </div>
  );
};

export default page;
