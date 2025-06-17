/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useState } from "react";
import {
	MapContainer,
	TileLayer,
	GeoJSON,
	Marker,
	Popup,
	useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import type { Feature, FeatureCollection, Geometry } from "geojson";

const DefaultIcon = L.icon({
	iconUrl: "/images/leaflet/marker-icon.png",
	shadowUrl: "/images/leaflet/marker-shadow.png",
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

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

const SetViewToUserLocation = ({
	location,
}: {
	location: [number, number];
}) => {
	const map = useMap();
	useEffect(() => {
		map.setView(location, 7);
	}, [location, map]);
	return null;
};

const DivisionMap = ({ productData }: { productData: Product[] }) => {
	const [geoJsonData, setGeoJsonData] = useState<FeatureCollection | null>(
		null
	);
	const [divisions, setDivisions] = useState<Division[]>([]);
	const [selectedDivision, setSelectedDivision] = useState<string | null>(
		null
	);
	const [userLocation, setUserLocation] = useState<[number, number] | null>(
		null
	);
	const [locationError, setLocationError] = useState<string | null>(null);

	// Load Bangladesh GeoJSON boundaries for divisions
	useEffect(() => {
		fetch("/data/bangladesh.geojson")
			.then((res) => res.json())
			.then((data) => setGeoJsonData(data))
			.catch(() => setGeoJsonData(null));
	}, []);

	// Load division metadata with lat/long
	useEffect(() => {
		fetch("/data/bd-divisions.json")
			.then((res) => res.json())
			.then((data) => setDivisions(data.divisions))
			.catch(() => setDivisions([]));
	}, []);

	// Get user location from browser
	useEffect(() => {
		if (!navigator.geolocation) {
			setLocationError("আপনার ব্রাউজারে লোকেশন সাপোর্ট নেই।");
			return;
		}

		navigator.geolocation.getCurrentPosition(
			(pos) => {
				const { latitude, longitude } = pos.coords;
				setUserLocation([latitude, longitude]);
			},
			(err) => {
				const msg =
					err.code === err.PERMISSION_DENIED
						? "আপনি লোকেশন পারমিশন প্রদান করেননি।"
						: err.code === err.POSITION_UNAVAILABLE
						? "লোকেশন তথ্য পাওয়া যায়নি।"
						: err.code === err.TIMEOUT
						? "লোকেশন নেওয়ার সময়সীমা শেষ হয়েছে।"
						: "অজানা ত্রুটি ঘটেছে।";
				setLocationError(msg);
			}
		);
	}, []);

	// Style for divisions on map
	const divisionStyle = {
		fillColor: "#a5b4fc",
		fillOpacity: 0.6,
		color: "#4338ca",
		weight: 1,
	};

	// Hover style for divisions
	const divisionHoverStyle = {
		fillColor: "#6366f1",
		fillOpacity: 0.8,
		color: "#312e81",
		weight: 2,
	};

	// Called for each GeoJSON feature (division)
	const onEachDivision = (
		feature: Feature<Geometry, any>,
		layer: L.Layer
	) => {
		const divisionName = feature.properties?.name;
		const matched = divisions.find((d) => d.name === divisionName);

		if (!layer || !(layer instanceof L.Path)) return;

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

	// Filter products by selected division (case insensitive)
	const filteredProducts = useMemo(() => {
		if (!selectedDivision) return [];
		return productData.filter(
			(p) => p.division?.toLowerCase() === selectedDivision?.toLowerCase()
		);
	}, [selectedDivision, productData]);

	return (
		<div className="w-full flex flex-col lg:flex-row gap-4">
			{/* Map section */}
			<div className="w-full lg:w-1/2 h-[600px] relative rounded-md overflow-hidden shadow-lg z-0">
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

					{/* Bangladesh Divisions Boundary */}
					{geoJsonData && (
						<GeoJSON
							data={geoJsonData}
							onEachFeature={onEachDivision}
							style={divisionStyle}
						/>
					)}

					{/* Division Markers */}
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

					{/* User location marker */}
					{userLocation && (
						<>
							<SetViewToUserLocation location={userLocation} />
							<Marker position={userLocation}>
								<Popup>আপনার বর্তমান অবস্থান</Popup>
							</Marker>
						</>
					)}
				</MapContainer>

				{/* Location error message */}
				{locationError && (
					<p className="text-red-600 mt-2 text-center font-medium">
						⚠️ {locationError}
					</p>
				)}
			</div>

			{/* Sidebar showing products */}
			<div className="w-full lg:w-1/2 max-h-[600px] overflow-y-auto border rounded-md p-4 shadow-inner bg-white">
				<h2 className="text-lg font-semibold mb-4 text-center">
					{selectedDivision
						? `এই বিভাগের পণ্যসমূহ: ${selectedDivision}`
						: "দয়া করে একটি বিভাগ নির্বাচন করুন"}
				</h2>

				{filteredProducts.length > 0 ? (
					<ul className="space-y-3">
						{filteredProducts.map((product) => (
							<li
								key={product.id}
								className="border p-3 bg-gray-50 rounded hover:shadow transition"
							>
								<p className="font-bold text-indigo-600">
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
