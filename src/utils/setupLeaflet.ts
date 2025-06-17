export const setupLeafletIcon = async () => {
  // Only run this code in the browser
  if (typeof window === "undefined") return;
  
  try {
    const L = await import("leaflet");
    
    const DefaultIcon = L.default.icon({
      iconUrl: "/images/leaflet/marker-icon.png",
      shadowUrl: "/images/leaflet/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    L.default.Marker.prototype.options.icon = DefaultIcon;
  } catch (error) {
    console.error("Error setting up Leaflet icon:", error);
  }
};