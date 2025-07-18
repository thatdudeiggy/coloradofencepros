import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const EstimateOutput = ({ estimate }) => {
  return (
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
  );
};

export default EstimateOutput;
