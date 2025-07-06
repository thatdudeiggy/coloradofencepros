import React, { useState } from "react";
import cedarFenceImg from "../Assets/cedar.svg";
import GoogleMapMeasure from "./GoogleMapMeasure";
import { motion, AnimatePresence } from "framer-motion";

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

  const PRICE_PER_FOOT = 55;
  const TOP_CAP_COST = 5;
  const BOARD_ON_BOARD_COST = 10;

  const handleEstimate = () => {
    const base = linearFeet * PRICE_PER_FOOT;
    const gate = includeGate ? gateWidth * 3 * PRICE_PER_FOOT : 0;
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
    setResetMap(true); // Tell the map to reset
  };

  return (
    <section id="estimator" className="py-16 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <img src={cedarFenceImg} alt="Cedar Fence" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-center">
              Professional Fence Cost Estimator
            </h2>
            <p className="text-md text-gray-300 italic text-center">
              6ft Cedar | 3-Rail | Steel Posts | $55/ft
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Select Measurement Method
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setUseMap(false);
                  setMapReady(false);
                }}
                className={`px-4 py-2 rounded-lg shadow-sm border transition ${
                  !useMap
                    ? "bg-green-100 border-green-500 text-green-700"
                    : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
                }`}
              >
                Manual Input
              </button>
              <button
                onClick={() => {
                  setUseMap(true);
                  setMapReady(false);
                }}
                className={`px-4 py-2 rounded-lg shadow-sm border transition ${
                  useMap
                    ? "bg-green-100 border-green-500 text-green-700"
                    : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
                }`}
              >
                Use Google Map
              </button>
            </div>
          </div>

          {!useMap && (
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Enter Linear Footage (ft)
              </label>
              <input
                type="number"
                value={linearFeet}
                onChange={(e) => setLinearFeet(Number(e.target.value))}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-green-500 focus:outline-none dark:bg-gray-800 dark:text-white"
                placeholder="e.g. 120"
              />
            </div>
          )}

          {useMap && (
            <GoogleMapMeasure
              onDistanceCalculated={(feet) => {
                setLinearFeet(Number(feet));
                setMapReady(true);
              }}
              resetTrigger={resetMap}
              onResetHandled={() => setResetMap(false)}
            />
          )}

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={includeGate}
                onChange={() => setIncludeGate(!includeGate)}
                className="accent-green-600 scale-110"
              />
              <span className="text-gray-700 dark:text-gray-300">Add Standard Gate</span>
            </div>

            {includeGate && (
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-1">
                  Gate Width (ft)
                </label>
                <input
                  type="number"
                  value={gateWidth}
                  onChange={(e) => setGateWidth(Number(e.target.value))}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:bg-gray-800 dark:text-white"
                  placeholder="e.g. 4"
                />
              </div>
            )}

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={includeTopCap}
                onChange={() => setIncludeTopCap(!includeTopCap)}
                className="accent-green-600 scale-110"
              />
              <span className="text-gray-700 dark:text-gray-300">Add Decorative Top Cap</span>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={includeBoardOnBoard}
                onChange={() => setIncludeBoardOnBoard(!includeBoardOnBoard)}
                className="accent-green-600 scale-110"
              />
              <span className="text-gray-700 dark:text-gray-300">Add Board-on-Board Design</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {(!useMap || mapReady) ? (
              <button
                onClick={handleEstimate}
                className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 shadow-md transition-all duration-300"
              >
                Calculate Estimate
              </button>
            ) : (
              <p className="text-sm text-gray-500 italic">
                Draw your fence on the map to enable estimate.
              </p>
            )}

            {estimate !== null && (
              <button
                onClick={handleClear}
                className="bg-gray-100 text-red-600 px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300 text-sm"
              >
                Clear
              </button>
            )}
          </div>

          <AnimatePresence>
            {estimate !== null && (
              <motion.div
                className="mt-6 bg-green-50 dark:bg-green-900 text-green-900 dark:text-white p-6 rounded-xl text-center shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg">Estimated Total</p>
                <p className="text-4xl font-bold mt-2">${estimate.toLocaleString()}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FenceEstimator;
