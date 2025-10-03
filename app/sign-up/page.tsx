import dynamic from "next/dynamic";
import type { Metadata } from "next";
import HeaderThree from "@/components/layout/header/HeaderThree";
import FooterFour from "@/components/layout/footer/FooterFour";

const CreateAccount = dynamic(
  () => import("@/components/containers/CreateAccount")
);
const ClientWrapper = dynamic(
  () => import("@/components/widgets/ClientWrapper")
);

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "Sign Up | LVUP",
  description: "Join LVUP — a streamlined experience built for our community.",
  keywords: ["lvup", "signup", "account", "community"],
  openGraph: {
    title: "LVUP",
    description: "Create your LVUP account and get started.",
    url: "/signup",
    siteName: "LVUP",
    images: [
      {
        // TODO: ensure this image exists in /public/images/lvup/
        url: "/images/lvup/og-image.png",
        width: 1200,
        height: 630,
        alt: "LVUP",
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
      style={{ backgroundImage: "url(images/error-bg.jpg)" }} // make sure this exists
    >
      <HeaderThree />
      <CreateAccount />
      <FooterFour />
      <ClientWrapper />
    </div>
  );
};

export default page;
