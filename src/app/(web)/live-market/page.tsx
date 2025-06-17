"use client";
import dynamic from "next/dynamic";

const DivisionMapWrapper = dynamic(
	() => import("@/pages/web/live-market/DivisionMapWrapper"),
	{
		ssr: false,
	}
);

export default function ProductMapPage() {
	return <DivisionMapWrapper />;
}
