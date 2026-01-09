"use client";

import { useEffect, useRef } from "react";

export default function MapboxMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const mapboxLoaded = useRef(false);

  useEffect(() => {
    if (map.current || !mapContainer.current || mapboxLoaded.current) return;

    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    // If no Mapbox token, skip and use Google Maps embed
    if (!mapboxToken) {
      return;
    }

    // Check if Mapbox GL is already loaded
    if ((window as any).mapboxgl) {
      initializeMap();
      return;
    }

    // Load Mapbox GL JS
    const script = document.createElement("script");
    script.src = "https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js";
    script.async = true;
    
    // Load Mapbox GL CSS
    const link = document.createElement("link");
    link.href = "https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    script.onload = () => {
      mapboxLoaded.current = true;
      initializeMap();
    };

    script.onerror = () => {
      console.error("Failed to load Mapbox GL JS");
    };

    document.head.appendChild(script);

    function initializeMap() {
      if (!mapContainer.current || map.current) return;

      const mapboxgl = (window as any).mapboxgl;
      mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

      try {
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v12",
          center: [-77.3955, 39.0068], // Sterling, VA coordinates
          zoom: 13,
        });

        // Add marker
        new mapboxgl.Marker({ color: "#ef4444" })
          .setLngLat([-77.3955, 39.0068])
          .addTo(map.current);
      } catch (error) {
        console.error("Error initializing Mapbox map:", error);
      }
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  // If no Mapbox token, use Google Maps embed (works without API key)
  if (!mapboxToken) {
    return (
      <div className="w-full h-full min-h-[400px] sm:min-h-[500px] rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.123456789!2d-77.3955!3d39.0068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6483c0b5b8b3f%3A0x8b5b8b3f8b5b8b3f!2sSterling%2C%20VA%2020166!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[400px] sm:min-h-[500px] rounded-lg overflow-hidden bg-gray-200">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}

