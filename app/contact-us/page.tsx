import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import ContactSection from "@/components/containers/ContactSection";
import ContactMap from "@/components/containers/ContactMap";
import FooterTwo from "@/components/layout/footer/FooterTwo";
const ClientWrapper = dynamic(
	() => import("@/components/widgets/ClientWrapper")
);

export const generateMetadata = async (): Promise<Metadata> => ({
	title: "Contact Us | Betwins - Online Crypto Gaming",
	description:
		"Welcome to Betwins - the ultimate crypto gaming & lottery experience.",
	keywords: ["crypto gaming", "lottery", "betwins", "casino", "blockchain"],
	openGraph: {
		title: "Betwins - Crypto Gaming & Lottery",
		description: "Experience seamless blockchain - based gaming and lotteries.",
		url: "https://betwins.netlify.app/",
		siteName: "Betwins",
		images: [
			{
				url: "/images/og-image.png",
				width: 1200,
				height: 630,
				alt: "Betwins Crypto Gaming",
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
			<Breadcrumb title="Contact Us" />
			<ContactSection />
			<ContactMap />
			<FooterTwo layout="two" showNewsletter={false} />
			<ClientWrapper />
		</div>
	);
};

export default page;
