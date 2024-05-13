import React, { useEffect, useRef } from "react";
import './earth.css';
import L from "leaflet";

function EarthComponent() {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) {
            const map = L.map("map").setView([45.786, 2.981], 13);
            L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png").addTo(map);
            mapRef.current = map;
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    return <div id="map"></div>;
}

export default EarthComponent;
