import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import ReferSection from "@/components/containers/ReferSection";
import WorkTwoSection from "@/components/containers/WorkTwoSection";
import Testimonial from "@/components/containers/testimonial/Testimonial";
import FooterTwo from "@/components/layout/footer/FooterTwo";

const FaqSection = dynamic(() => import("@/components/containers/FaqSection"));

const Sponsors = dynamic(() => import("@/components/containers/Sponsors"));

const ClientWrapper = dynamic(
  () => import("@/components/widgets/ClientWrapper")
);

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "FAQ | Fafai - Online Crypto Gaming",
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
    <div className="page-wrapper a-cursor fcq">
      <Header />
      <Breadcrumb title="FAQ" />
      <FaqSection />
      <ReferSection />
      <WorkTwoSection />
      <Sponsors />
      <Testimonial />
      <FooterTwo />
      <ClientWrapper />
    </div>
  );
};

export default page;
