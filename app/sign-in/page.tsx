import dynamic from "next/dynamic";
import type { Metadata } from "next";
import HeaderThree from "@/components/layout/header/HeaderThree";
import AuthenticationSection from "@/components/containers/AuthenticationSection";
import FooterFour from "@/components/layout/footer/FooterFour";
const ClientWrapper = dynamic(
	() => import("@/components/widgets/ClientWrapper")
);

export const generateMetadata = async (): Promise<Metadata> => ({
	title: "Sign In | Betwins - Online Crypto Gaming",
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
		<div
			className="page-wrapper a-cursor authentication-bg"
			style={{ backgroundImage: "url(images/error-bg.jpg)" }}
		>
			<HeaderThree />
			<AuthenticationSection />
			<FooterFour />
			<ClientWrapper />
		</div>
	);
};

export default page;
