import React from "react";
import { FaTree, FaLink, FaRulerCombined } from "react-icons/fa";
import { GiFence } from "react-icons/gi";

const FENCE_TYPES = {
  cedar: { label: "6ft Cedar", price: 55, icon: <GiFence /> },
  splitRail2: {
    label: "2 Rail Split Rail (Rough Cedar)",
    price: 50,
    icon: <FaTree />,
  },
  splitRail3: {
    label: "3 Rail Premium Western Cedar",
    price: 67,
    icon: <FaTree />,
  },
  chainLink4: {
    label: "4ft Chain Link",
    price: 38,
    icon: <FaLink />,
  },
  chainLink7: {
    label: "7ft Chain Link",
    price: 45,
    icon: <FaLink />,
  },
  steel4: {
    label: "4ft Steel Ornamental",
    price: 85,
    icon: <FaRulerCombined />,
  },
  steel6: {
    label: "6ft Steel Ornamental",
    price: 95,
    icon: <FaRulerCombined />,
  },
};

const FenceTypes = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
          Our Fence Types
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(FENCE_TYPES).map(([key, { label, price, icon }]) => (
            <div
              key={key}
              className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition duration-300 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-green-600 text-3xl">{icon}</div>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  ${price}/linear ft
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {label}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                High-quality, durable, and professionally installed.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FenceTypes;
