import React from "react";
import { FaCalculator, FaRedo } from "react-icons/fa";

const FenceControls = ({ handleEstimate, handleClear, estimate, mapReady, useMap }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {(!useMap || mapReady) ? (
        <button
          onClick={handleEstimate}
          className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-lg transition-all duration-300"
        >
          <FaCalculator className="text-lg" />
          Calculate Estimate
        </button>
      ) : (
        <p className="text-sm text-gray-500 italic mt-2 text-center w-full">
          Draw your fence on the map to enable estimate.
        </p>
      )}

      {estimate !== null && (
        <button
          onClick={handleClear}
          className="flex items-center gap-2 bg-gray-100 text-red-600 px-5 py-2 rounded-full hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 text-sm"
        >
          <FaRedo className="text-base" />
          Clear & Reset Map
        </button>
      )}
    </div>
  );
};

export default FenceControls;
