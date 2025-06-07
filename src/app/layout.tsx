import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

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
				{children}
			</body>
		</html>
	);
}
