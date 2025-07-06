import React, { useRef, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
  Autocomplete,
} from "@react-google-maps/api";

// Map container style
const containerStyle = {
  width: "100%",
  height: "400px",
};

// Default map center (Downtown Colorado Springs, CO)
const defaultCenter = {
  lat: 38.8339,
  lng: -104.8214,
};

const GoogleMapMeasure = ({ onDistanceCalculated }) => {
  const [path, setPath] = useState([]);
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const autocompleteRef = useRef(null);

  // Add points to path on map click
  const handleMapClick = (event) => {
    const newPath = [...path, { lat: event.latLng.lat(), lng: event.latLng.lng() }];
    setPath(newPath);

    if (newPath.length > 1) {
      const distanceInMeters = window.google.maps.geometry.spherical.computeLength(
        newPath.map((point) => new window.google.maps.LatLng(point.lat, point.lng))
      );
      const distanceInFeet = distanceInMeters * 3.28084;
      onDistanceCalculated(parseFloat(distanceInFeet.toFixed(2)));
    }
  };

  // Move map center when a place is searched
  const onPlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    if (place.geometry && place.geometry.location) {
      setMapCenter({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={["places", "geometry"]}
    >
      {/* Address search bar */}
      <div className="mb-4">
        <Autocomplete
          onLoad={(ref) => (autocompleteRef.current = ref)}
          onPlaceChanged={onPlaceChanged}
        >
          <input
            type="text"
            placeholder="Search your address"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
          />
        </Autocomplete>
      </div>

      {/* Interactive map */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={14}
        onClick={handleMapClick}
      >
        {path.map((point, index) => (
          <Marker key={index} position={point} />
        ))}

        {path.length > 1 && (
          <Polyline
            path={path}
            options={{
              strokeColor: "#00C853",
              strokeOpacity: 0.8,
              strokeWeight: 3,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapMeasure;
