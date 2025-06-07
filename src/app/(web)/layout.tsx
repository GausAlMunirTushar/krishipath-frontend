import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";

export default function WebLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="">
				<Header />
				{children}
				<MobileMenu />
				<Footer />
			</body>
		</html>
	);
}
