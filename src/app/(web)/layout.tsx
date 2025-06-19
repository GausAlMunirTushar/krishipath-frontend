import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import ChatGemini from "@/pages/web/home/ChatGeminiUI";

export default function WebLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<MobileMenu />
				<ChatGemini />
				<Footer />
			</body>
		</html>
	);
}
