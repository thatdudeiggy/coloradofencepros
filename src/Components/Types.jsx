import React from "react";
import { motion } from "framer-motion";

const FENCE_TYPES = {
  cedar: {
    label: "6ft Cedar",
    price: 55,
    description: "Classic privacy fence with natural cedar beauty.",
  },
  splitRail2: {
    label: "2 Rail Split Rail",
    price: 50,
    description: "Rustic charm for open boundaries and gardens.",
  },
  splitRail3: {
    label: "3 Rail Western Cedar",
    price: 67,
    description: "Premium western cedar with enhanced durability.",
  },
  chainLink4: {
    label: "4ft Chain Link",
    price: 38,
    description: "Secure and affordable perimeter fencing.",
  },
  chainLink7: {
    label: "7ft Chain Link",
    price: 45,
    description: "Taller chain link for added privacy and safety.",
  },
  steel4: {
    label: "4ft Steel Ornamental",
    price: 85,
    description: "Elegant steel design for secure curb appeal.",
  },
  steel6: {
    label: "6ft Steel Ornamental",
    price: 95,
    description: "High-end steel fencing with stylish strength.",
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const FenceTypes = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-green-500 mb-6">
          Fence Options
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 text-lg">
          Clean styles. Strong builds. Choose what fits best.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(FENCE_TYPES).map(
            ([key, { label, price, description }], index) => (
              <motion.div
                key={key}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-md p-6 sm:p-7 transition-all duration-300 hover:bg-green-500 hover:text-white group"
                initial="hidden"
                animate="visible"
                custom={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-white mb-1 transition-colors">
                  {label}
                </h3>
                <p className="text-green-600 dark:text-green-400 font-medium mb-2 group-hover:text-white">
                  ${price} / linear foot
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-100">
                  {description}
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FenceTypes;
