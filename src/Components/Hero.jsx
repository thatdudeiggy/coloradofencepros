import React from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

import fence1 from "../Assets/fence1.svg";
import fence2 from "../Assets/fence2.svg";
import fence3 from "../Assets/fence3.svg";

const Hero = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-600 leading-tight mb-6">
            Get an Instant Fence Estimate
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Choose your fence style, enter your footage, and get an accurate cost in seconds.
          </p>

          <a
            href="#estimator"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full shadow-lg transition"
          >
            Get My Estimate <ArrowRightCircle size={22} />
          </a>
        </motion.div>

        {/* Right Side Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 flex flex-col items-center md:items-end justify-center gap-4"
        >
          {/* Top Two Images Side by Side */}
          <div className="flex gap-4">
            <motion.img
              src={fence1}
              alt="Fence Style 1"
              className="w-40 sm:w-48 rounded-xl shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.img
              src={fence2}
              alt="Fence Style 2"
              className="w-40 sm:w-48 rounded-xl shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            />
          </div>

          {/* Bottom Image Centered */}
          <motion.img
            src={fence3}
            alt="Fence Style 3"
            className="w-[90%] sm:w-[420px] rounded-xl shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
