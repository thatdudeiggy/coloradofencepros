import React, { useRef, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polygon,
  Autocomplete,
} from "@react-google-maps/api";

// Map styling
const containerStyle = {
  width: "100%",
  height: "400px",
};

// Default center: Colorado Springs
const defaultCenter = {
  lat: 38.8339,
  lng: -104.8214,
};

const GoogleMapMeasure = ({ onDistanceCalculated }) => {
  const [path, setPath] = useState([]);
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const autocompleteRef = useRef(null);
  const mapRef = useRef(null);

  // Calculate and return total perimeter
  const calculateDistance = (points) => {
    if (points.length > 1) {
      const distanceInMeters = window.google.maps.geometry.spherical.computeLength(
        points.map((p) => new window.google.maps.LatLng(p.lat, p.lng))
      );
      return parseFloat((distanceInMeters * 3.28084).toFixed(2)); // in feet
    }
    return 0;
  };

  const handleMapClick = (event) => {
    const newPoint = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    const newPath = [...path, newPoint];
    setPath(newPath);
    onDistanceCalculated(calculateDistance(newPath));
  };

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry && place.geometry.location) {
        const newCenter = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setMapCenter(newCenter);
      }
    }
  };

  const clearMap = () => {
    setPath([]);
    onDistanceCalculated(0);
    if (mapRef.current) {
      mapRef.current.panTo(defaultCenter);
      mapRef.current.setZoom(14);
    }
  };

  return (
    <>
      {/* Custom marker dot styling */}
      <style>{`
        .custom-marker {
          width: 12px;
          height: 12px;
          background-color: #10b981;
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 0 4px rgba(0,0,0,0.3);
        }
      `}</style>

      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        libraries={["places", "geometry"]}
      >
        <div className="mb-4 space-y-2">
          {/* Search bar */}
          <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={onPlaceChanged}
          >
            <input
              type="text"
              placeholder="Search your address"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
            />
          </Autocomplete>

          {/* Clear map */}
          <button
            onClick={clearMap}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Clear Map
          </button>
        </div>

        {/* Map itself */}
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={14}
          onClick={handleMapClick}
          onLoad={(map) => (mapRef.current = map)}
        >
          {/* Dot markers */}
          {path.map((point, index) => (
            <Marker
              key={index}
              position={point}
              icon={{
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 6,
                fillColor: "#10b981",
                fillOpacity: 1,
                strokeWeight: 2,
                strokeColor: "#ffffff",
              }}
            />
          ))}

          {/* Area Polygon */}
          {path.length > 2 && (
            <Polygon
              path={path}
              options={{
                fillColor: "#10b981",
                fillOpacity: 0.2,
                strokeColor: "#10b981",
                strokeOpacity: 0.8,
                strokeWeight: 2,
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default GoogleMapMeasure;
