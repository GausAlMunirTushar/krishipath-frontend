export const setupLeafletIcon = async () => {
	if (typeof window === "undefined") return;

	const L = await import("leaflet");

	const DefaultIcon = L.icon({
		iconUrl: "/images/leaflet/marker-icon.png",
		shadowUrl: "/images/leaflet/marker-shadow.png",
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41],
	});

	L.Marker.prototype.options.icon = DefaultIcon;
};
