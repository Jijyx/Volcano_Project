import React, { useEffect, useRef } from "react";
import './earth.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'

import L from "leaflet";
import {CreateListMarker, DisplayMarker} from './marker.js';

function EarthComponent() {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) {
            // Create map
            const map = L.map("map").setView([45.786, 2.981], 13);
            
            var listMarker = CreateListMarker();

            DisplayMarker(listMarker, map);

            // Add tile layer
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

            // Store map instance in ref to avoid re-initialization
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
