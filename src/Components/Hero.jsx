import React from "react";
import { motion } from "framer-motion";

import fence1 from "../Assets/fence1.svg";
import fence2 from "../Assets/fence2.svg";
import fence3 from "../Assets/fence3.svg";

const Hero = () => {


  return (
    <section className=" mx-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative">
        {/* Left Side Text */}
        <div className="text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl font-bold  text-green-500 mb-6" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
            Get an Instant Fence Estimate Online
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Choose your fence style, enter your footage, and get an accurate cost.
          </p>
          <a
            href="#estimator"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition duration-300"
          >
            Get My Estimate
          </a>
        </div>

        {/* Right Side Visual Design */}
        <div className="relative w-full h-[600px] flex items-center justify-center z-0">
          {/* Background Design Layout */}
          <div className="relative w-[450px] h-[550px] flex flex-col gap-4 items-center justify-center">
            {/* Top Row */}
            <div className="flex gap-4">
              <motion.img
                src={fence1}
                alt="Fence 1"
                className="w-[210px] h-[150px] object-cover rounded-xl shadow-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
              <motion.img
                src={fence2}
                alt="Fence 2"
                className="w-[210px] h-[150px] object-cover rounded-xl shadow-md"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            </div>

            <motion.img
              src={fence3}
              alt="Fence 3"
              className="w-[420px] h-[180px] object-cover rounded-xl shadow-lg mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            />
          </div>

          {/* Placeholder Circles (Replace with SVG Later) */}
          <motion.div
            className="w-6 h-6 bg-green-400 rounded-full absolute top-4 left-4"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <motion.div
            className="w-6 h-6 bg-green-400 rounded-full absolute bottom-6 right-6"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2.4 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
