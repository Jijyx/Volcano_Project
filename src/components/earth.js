import React, { useEffect, useRef } from "react";
import './earth.css';
import L from "leaflet";

function EarthComponent() {
    const mapRef = useRef(null);

    useEffect(() => {
        // Create map only if it's not already initialized
        if (!mapRef.current) {
            // Create map
            const map = L.map("map").setView([51.505, -0.09], 13);

            // Add tile layer
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

            // Store map instance in ref to avoid re-initialization
            mapRef.current = map;
        }

        // Clean up function
        return () => {
            // Remove map instance when component unmounts
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []); // Empty dependency array to run once after initial render

    return <div id="map"></div>;
}

export default EarthComponent;
