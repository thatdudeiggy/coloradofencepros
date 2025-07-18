import React from "react";
import { FaBorderStyle } from "react-icons/fa";

const FenceTypeSelector = ({ selectedFence, setSelectedFence, FENCE_TYPES }) => {
  return (
    <div className="w-full">
      <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-semibold flex items-center gap-2">
        <FaBorderStyle className="text-green-600" />
        Select Fence Type
      </label>
      <select
        value={selectedFence}
        onChange={(e) => setSelectedFence(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
      >
        {Object.entries(FENCE_TYPES).map(([key, { label }]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FenceTypeSelector;
