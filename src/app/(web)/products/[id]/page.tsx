import { notFound } from "next/navigation";
import productData from "@/data/productData";
import ProductDetails from "@/pages/web/products/ProductDetails";

interface PageProps {
	params: { id: string };
}

export function generateStaticParams() {
	return productData.map((product) => ({
		id: product.id,
	}));
}

export default function ProductPage({ params }: PageProps) {
	const product = productData.find((p) => String(p.id) === params.id);
	if (!product) return notFound();

	return <ProductDetails product={product} />;
}
