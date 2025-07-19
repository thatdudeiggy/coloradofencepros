import React, { useState } from "react";
import {
  FaMapMarkedAlt,
  FaRulerCombined,
  FaCalculator,
} from "react-icons/fa";

import GoogleMapMeasure from "./GoogleMapMeasure";
import FenceTypeSelector from "./FenceTypeSelector";
import FenceAddonsPanel from "./FenceAddonsPanel";
import FenceControls from "./FenceControls";
import EstimateOutput from "./EstimateOutput";
import LeadForm from "./LeadForm";

// Fence options
const FENCE_TYPES = {
  cedar: { label: "6ft Cedar", price: 55 },
  splitRail2: { label: "2 Rail Split Rail (Rough Cedar)", price: 50 },
  splitRail3: { label: "3 Rail Premium Western Cedar", price: 67 },
  chainLink4: { label: "4ft Chain Link", price: 38 },
  chainLink7: { label: "7ft Chain Link", price: 45 },
  steel4: { label: "4ft Steel Ornamental", price: 85 },
  steel6: { label: "6ft Steel Ornamental", price: 95 },
};

const TOP_CAP_COST = 5;
const BOARD_ON_BOARD_COST = 10;

const FenceEstimator = () => {
  const [linearFeet, setLinearFeet] = useState(0);
  const [includeGate, setIncludeGate] = useState(false);
  const [gateWidth, setGateWidth] = useState(0);
  const [includeTopCap, setIncludeTopCap] = useState(false);
  const [includeBoardOnBoard, setIncludeBoardOnBoard] = useState(false);
  const [estimate, setEstimate] = useState(null);
  const [useMap, setUseMap] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [resetMap, setResetMap] = useState(false);
  const [selectedFence, setSelectedFence] = useState("cedar");

  const handleEstimate = () => {
    const price = FENCE_TYPES[selectedFence].price;
    const base = linearFeet * price;
    const gate = includeGate ? gateWidth * 3 * price : 0;
    const topCap = includeTopCap ? linearFeet * TOP_CAP_COST : 0;
    const boardOnBoard = includeBoardOnBoard ? linearFeet * BOARD_ON_BOARD_COST : 0;
    const total = base + gate + topCap + boardOnBoard;
    setEstimate(total);
  };

  const handleClear = () => {
    setLinearFeet(0);
    setIncludeGate(false);
    setGateWidth(0);
    setIncludeTopCap(false);
    setIncludeBoardOnBoard(false);
    setEstimate(null);
    setMapReady(false);
    setResetMap(true);
  };

  return (
    <section
      id="estimator"
      className="w-full bg-gradient-to-tr from-green-600 to-green-400 py-16 relative overflow-hidden"
    >

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
        <div className="bg-white dark:bg-gray-900 p-6 sm:p-10 rounded-xl shadow-2xl space-y-6">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 flex items-center gap-3">
            <FaCalculator className="text-green-600" />
            Fence Cost Estimator
          </h2>

          {/* Measurement Method */}
          <div>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Select Measurement Method
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setUseMap(false);
                  setMapReady(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition font-medium ${
                  !useMap
                    ? "bg-green-100 border-green-500 text-green-700"
                    : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
                }`}
              >
                <FaRulerCombined />
                Manual Input
              </button>

              <button
                onClick={() => {
                  setUseMap(true);
                  setMapReady(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition font-medium ${
                  useMap
                    ? "bg-green-100 border-green-500 text-green-700"
                    : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
                }`}
              >
                <FaMapMarkedAlt />
                Use Google Map
              </button>
            </div>
          </div>

          {/* Input Area */}
          {!useMap ? (
            <div>
              <label
                htmlFor="linearFeet"
                className="block text-gray-700 dark:text-gray-300 mb-1"
              >
                Enter Linear Footage (ft)
              </label>
              <input
                id="linearFeet"
                type="number"
                min={0}
                value={linearFeet}
                onChange={(e) => setLinearFeet(Number(e.target.value))}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="e.g. 120"
              />
            </div>
          ) : (
            <GoogleMapMeasure
              onDistanceCalculated={(feet) => {
                setLinearFeet(Number(feet));
                setMapReady(true);
              }}
              resetTrigger={resetMap}
              onResetHandled={() => setResetMap(false)}
            />
          )}

          {/* Fence Type Selector */}
          <FenceTypeSelector
            selectedFence={selectedFence}
            setSelectedFence={setSelectedFence}
            FENCE_TYPES={FENCE_TYPES}
          />

          {/* Add-Ons */}
          <FenceAddonsPanel
            includeGate={includeGate}
            setIncludeGate={setIncludeGate}
            gateWidth={gateWidth}
            setGateWidth={setGateWidth}
            includeTopCap={includeTopCap}
            setIncludeTopCap={setIncludeTopCap}
            includeBoardOnBoard={includeBoardOnBoard}
            setIncludeBoardOnBoard={setIncludeBoardOnBoard}
          />

          {/* Action Buttons */}
          <FenceControls
            handleEstimate={handleEstimate}
            handleClear={handleClear}
            estimate={estimate}
            mapReady={mapReady}
            useMap={useMap}
          />

          {/* Estimate Output */}
          <EstimateOutput estimate={estimate} />

          {/* Lead Form */}
          {estimate !== null && (
            <LeadForm
              linearFeet={linearFeet}
              selectedFence={selectedFence}
              FENCE_TYPES={FENCE_TYPES}
              includeGate={includeGate}
              gateWidth={gateWidth}
              includeTopCap={includeTopCap}
              includeBoardOnBoard={includeBoardOnBoard}
              estimate={estimate}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default FenceEstimator;
