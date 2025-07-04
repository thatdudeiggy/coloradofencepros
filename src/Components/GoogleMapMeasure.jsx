import React, { useRef, useEffect } from "react";

const GoogleMapMeasure = ({ onDistanceCalculated }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const drawingManager = useRef(null);
  const polyline = useRef(null);

  useEffect(() => {
    // Load the Maps script with Drawing library
    const loadGoogleMaps = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=drawing`;
        script.async = true;
        script.onload = initMap;
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    const initMap = () => {
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 14,
      });

      drawingManager.current = new window.google.maps.drawing.DrawingManager({
        drawingMode: window.google.maps.drawing.OverlayType.POLYLINE,
        drawingControl: true,
        drawingControlOptions: {
          position: window.google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [window.google.maps.drawing.OverlayType.POLYLINE],
        },
        polylineOptions: {
          strokeColor: "#2dda0a",
          strokeWeight: 4,
        },
      });

      drawingManager.current.setMap(mapInstance.current);

      window.google.maps.event.addListener(
        drawingManager.current,
        "polylinecomplete",
        (line) => {
          if (polyline.current) {
            polyline.current.setMap(null);
          }

          polyline.current = line;

          const path = line.getPath();
          let totalDistance = 0;

          for (let i = 0; i < path.getLength() - 1; i++) {
            const point1 = path.getAt(i);
            const point2 = path.getAt(i + 1);
            totalDistance += window.google.maps.geometry.spherical.computeDistanceBetween(point1, point2);
          }

          const feet = (totalDistance * 3.28084).toFixed(2);
          onDistanceCalculated(parseFloat(feet));
        }
      );
    };

    loadGoogleMaps();
  }, [onDistanceCalculated]);

  return (
    <div className="mt-12">
      <div className="mb-6"> 
            <h3 className="text-xl font-semibold text-start  text-green-500">
        Measure your fence directly on the map
      </h3>
      <p className="text-gray-600">Add points to draw the boundary.</p>
      </div>

      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg" ref={mapRef}></div>
    </div>
  );
};

export default GoogleMapMeasure;
