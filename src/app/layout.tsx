import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";

const hindSiliguri = Hind_Siliguri({
	variable: "--font-hind-siliguri",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "কৃষি পথ ",
	description: "Krishipath",
	keywords: ["krishipath", "krishi", "path", "কৃষি", "পথ"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={` ${hindSiliguri.variable} antialiased`}>
				<Header />
				{children}
				<MobileMenu />
				<Footer />
			</body>
		</html>
	);
}
