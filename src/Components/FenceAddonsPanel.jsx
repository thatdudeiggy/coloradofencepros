import React from "react";
import {
  FaCheckSquare,
  FaRegSquare,
  FaRulerHorizontal,
  FaBorderStyle,
  FaDrawPolygon,
  FaDoorClosed,
} from "react-icons/fa";

const FenceAddonsPanel = ({
  includeGate,
  setIncludeGate,
  gateWidth,
  setGateWidth,
  includeTopCap,
  setIncludeTopCap,
  includeBoardOnBoard,
  setIncludeBoardOnBoard,
}) => {
  const Checkbox = ({ checked, onChange, label, icon }) => (
    <div
      onClick={onChange}
      className="flex items-center gap-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800 p-3 rounded-lg transition"
    >
      {checked ? (
        <FaCheckSquare className="text-green-600 text-xl" />
      ) : (
        <FaRegSquare className="text-gray-400 text-xl" />
      )}
      <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
        {icon}
        {label}
      </span>
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Add Gate */}
      <Checkbox
        checked={includeGate}
        onChange={() => setIncludeGate(!includeGate)}
        label="Add Standard Gate"
        icon={<FaDoorClosed />}
      />

      {includeGate && (
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
            <FaRulerHorizontal className="text-green-600" />
            Gate Width (ft)
          </label>
          <input
            type="number"
            value={gateWidth}
            onChange={(e) => setGateWidth(Number(e.target.value))}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="e.g. 4"
          />
        </div>
      )}

      {/* Decorative Top Cap */}
      <Checkbox
        checked={includeTopCap}
        onChange={() => setIncludeTopCap(!includeTopCap)}
        label="Add Decorative Top Cap"
        icon={<FaDrawPolygon />}
      />

      {/* Board-on-Board Design */}
      <Checkbox
        checked={includeBoardOnBoard}
        onChange={() => setIncludeBoardOnBoard(!includeBoardOnBoard)}
        label="Add Board-on-Board Design"
        icon={<FaBorderStyle />}
      />
    </div>
  );
};

export default FenceAddonsPanel;
