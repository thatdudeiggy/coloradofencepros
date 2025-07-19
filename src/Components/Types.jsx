import React from "react";
import { motion } from "framer-motion";

const FENCE_TYPES = {
  cedar: { label: "6ft Cedar", price: 55 },
  splitRail2: { label: "2 Rail Split Rail (Rough Cedar)", price: 50 },
  splitRail3: { label: "3 Rail Premium Western Cedar", price: 67 },
  chainLink4: { label: "4ft Chain Link", price: 38 },
  chainLink7: { label: "7ft Chain Link", price: 45 },
  steel4: { label: "4ft Steel Ornamental", price: 85 },
  steel6: { label: "6ft Steel Ornamental", price: 95 },
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
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-green-500 mb-6">
          Our Fence Types
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg mb-12">
          Choose from premium, durable, and beautifully designed fence options tailored to your style and budget.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(FENCE_TYPES).map(([key, { label, price }], index) => (
            <motion.div
              key={key}
              className="bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-gray-900 border border-green-200 dark:border-green-700 rounded-3xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300"
              initial="hidden"
              animate="visible"
              custom={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {label}
              </h3>
              <p className="text-green-600 dark:text-green-400 text-md font-medium mb-3">
                ${price} per linear foot
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Crafted for longevity and elegance. Installed by certified professionals with care and precision.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FenceTypes;
