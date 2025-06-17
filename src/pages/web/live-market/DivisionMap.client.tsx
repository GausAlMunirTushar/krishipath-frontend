/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useMemo, useState } from "react";
import type { Feature, FeatureCollection, Geometry } from "geojson";

// Import Leaflet CSS
import "leaflet/dist/leaflet.css";

type Product = {
	id: string;
	name: string;
	price: number;
	division: string;
};

type Division = {
	id: string;
	name: string;
	bn_name: string;
	lat: string;
	long: string;
};

const DivisionMap = ({ productData }: { productData: Product[] }) => {
	const [geoJsonData, setGeoJsonData] = useState<FeatureCollection | null>(
		null
	);
	const [divisions, setDivisions] = useState<Division[]>([]);
	const [selectedDivision, setSelectedDivision] = useState<string | null>(
		null
	);
	const [mapComponents, setMapComponents] = useState<any>(null);
	const [leafletLoaded, setLeafletLoaded] = useState(false);

	// Dynamically import all map-related components
	useEffect(() => {
		const loadMapComponents = async () => {
			try {
				const [
					{ MapContainer, TileLayer, GeoJSON, Marker, Popup },
					leaflet,
					{ setupLeafletIcon },
				] = await Promise.all([
					import("react-leaflet"),
					import("leaflet"),
					import("@/utils/setupLeaflet"),
				]);

				// Setup leaflet icon
				await setupLeafletIcon();

				setMapComponents({
					MapContainer,
					TileLayer,
					GeoJSON,
					Marker,
					Popup,
					L: leaflet.default,
				});
				setLeafletLoaded(true);
			} catch (error) {
				console.error("Error loading map components:", error);
			}
		};

		loadMapComponents();
	}, []);

	useEffect(() => {
		if (!leafletLoaded) return;

		fetch("/data/bangladesh.geojson")
			.then((res) => res.json())
			.then((data) => setGeoJsonData(data))
			.catch((error) => {
				console.error("Error loading GeoJSON:", error);
				setGeoJsonData(null);
			});
	}, [leafletLoaded]);

	useEffect(() => {
		if (!leafletLoaded) return;

		fetch("/data/bd-divisions.json")
			.then((res) => res.json())
			.then((data) => setDivisions(data.divisions))
			.catch((error) => {
				console.error("Error loading divisions:", error);
				setDivisions([]);
			});
	}, [leafletLoaded]);

	const divisionStyle = {
		fillColor: "#86efac",
		fillOpacity: 0.6,
		color: "#16a34a",
		weight: 1,
	};

	const divisionHoverStyle = {
		fillColor: "#22c55e",
		fillOpacity: 0.8,
		color: "#166534",
		weight: 2,
	};

	const onEachDivision = (feature: Feature<Geometry, any>, layer: any) => {
		if (!mapComponents) return;

		const divisionName = feature.properties?.name;
		const matched = divisions.find((d) => d.name === divisionName);

		if (!layer || !(layer instanceof mapComponents.L.Path)) return;

		layer.on({
			click: () => setSelectedDivision(divisionName),
			mouseover: () => layer.setStyle(divisionHoverStyle),
			mouseout: () => layer.setStyle(divisionStyle),
		});

		layer.setStyle(
			selectedDivision === divisionName
				? divisionHoverStyle
				: divisionStyle
		);

		layer.bindTooltip(matched?.bn_name || divisionName, {
			permanent: false,
			direction: "top",
			className: "font-medium",
		});
	};

	const filteredProducts = useMemo(() => {
		if (!selectedDivision) return [];
		return productData.filter(
			(p) => p.division?.toLowerCase() === selectedDivision?.toLowerCase()
		);
	}, [selectedDivision, productData]);

	// Show loading state until all components are loaded
	if (!mapComponents || !leafletLoaded) {
		return (
			<div className="w-full flex flex-col lg:flex-row gap-4">
				<div className="w-full lg:w-1/2 h-56 sm:h-[600px] flex items-center justify-center bg-gray-100 rounded-md">
					<p className="text-center">মানচিত্র লোড হচ্ছে...</p>
				</div>
				<div className="w-full lg:w-1/2 max-h-[600px] border-2 border-green-400 rounded-md p-4 shadow-inner bg-white">
					<h2 className="text-lg font-semibold mb-4 text-center">
						দয়া করে একটি বিভাগ নির্বাচন করুন
					</h2>
					<p className="text-center text-gray-400 mt-6">
						বিভাগ নির্বাচন করুন পণ্য দেখতে।
					</p>
				</div>
			</div>
		);
	}

	const { MapContainer, TileLayer, GeoJSON, Marker, Popup } = mapComponents;

	return (
		<div className="w-full flex flex-col lg:flex-row gap-4">
			<div className="w-full lg:w-1/2 h-56 sm:h-[600px] relative rounded-md overflow-hidden shadow-lg z-0">
				<MapContainer
					center={[23.685, 90.3563]}
					zoom={6.5}
					style={{ width: "100%", height: "100%" }}
					scrollWheelZoom
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>

					{geoJsonData && (
						<GeoJSON
							data={geoJsonData}
							onEachFeature={onEachDivision}
							style={divisionStyle}
						/>
					)}

					{divisions.map((d) => (
						<Marker
							key={d.id}
							position={[parseFloat(d.lat), parseFloat(d.long)]}
							eventHandlers={{
								click: () => setSelectedDivision(d.name),
							}}
						>
							<Popup>{d.bn_name}</Popup>
						</Marker>
					))}
				</MapContainer>
			</div>

			<div className="w-full lg:w-1/2 max-h-[600px] overflow-y-auto border-2 border-green-400 rounded-md p-4 shadow-inner bg-white">
				<h2 className="text-lg font-semibold mb-4 text-center">
					{selectedDivision
						? `এই বিভাগের পণ্যসমূহ: ${selectedDivision}`
						: "দয়া করে একটি বিভাগ নির্বাচন করুন"}
				</h2>

				{filteredProducts.length > 0 ? (
					<ul className="space-y-3">
						{filteredProducts.map((product) => (
							<li
								key={product.id}
								className="border-2 border-green-500 p-3 bg-gray-50 rounded hover:shadow transition"
							>
								<p className="font-bold text-green-600">
									{product.name}
								</p>
								<p className="text-sm text-gray-700">
									৳ {product.price.toLocaleString()}
								</p>
							</li>
						))}
					</ul>
				) : selectedDivision ? (
					<p className="text-center text-gray-500 mt-6">
						এই বিভাগে কোনো পণ্য উপলব্ধ নেই।
					</p>
				) : (
					<p className="text-center text-gray-400 mt-6">
						বিভাগ নির্বাচন করুন পণ্য দেখতে।
					</p>
				)}
			</div>
		</div>
	);
};

export default DivisionMap;
