import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import ContactSection from "@/components/containers/ContactSection";
import ContactMap from "@/components/containers/ContactMap";
import FooterTwo from "@/components/layout/footer/FooterTwo";

import ClientWrapper from "@/components/widgets/ClientWrapper";

export const generateMetadata = async (): Promise<Metadata> => ({
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://fafai.example"
  ),
  alternates: { canonical: "/contact-us" },
  title: "Contact Us | FAFAI — Borderless Digital Payments",
  description:
    "Get in touch with FAFAI — a fast, secure, global wallet for digital assets and everyday payments.",
  keywords: [
    "FAFAI",
    "digital wallet",
    "payments",
    "crypto",
    "global transfers",
    "remittance",
  ],
  openGraph: {
    title: "FAFAI — Borderless Digital Payments",
    description:
      "Experience fast, secure, blockchain-based payments with FAFAI.",
    url: "/contact-us",
    siteName: "FAFAI",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "FAFAI Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAFAI — Borderless Digital Payments",
    description:
      "Experience fast, secure, blockchain-based payments with FAFAI.",
    images: ["/images/og-image.png"],
  },
  robots: { index: true, follow: true },
});

const Page = () => {
  return (
    <div className="page-wrapper a-cursor">
      <Header />
      <Breadcrumb title="Contact FAFAI" />
      <ContactSection />
      <ContactMap />
      <FooterTwo layout="two" showNewsletter={false} />
      <ClientWrapper />
    </div>
  );
};

export default Page;
