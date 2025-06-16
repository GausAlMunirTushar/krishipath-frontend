"use client"; // Required for hooks like useParams

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import ProductDetails from "@/pages/web/products/ProductDetails";
import productData from "@/data/productData";
import { useEffect, useState } from "react";

export default function ProductPage() {
	const params = useParams<{ id: string }>();
	const [product, setProduct] = useState<(typeof productData)[0] | null>(
		null
	);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (params?.id) {
			const foundProduct = productData.find(
				(p) => String(p.id) === params.id
			);
			setProduct(foundProduct || null);
			setLoading(false);
		}
	}, [params?.id]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!product) {
		notFound();
	}

	return (
		<div className="product-page">
			<ProductDetails product={product} />
		</div>
	);
}
