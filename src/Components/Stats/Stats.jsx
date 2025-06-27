import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const stats = [
    { value: 3.5, suffix: "k", label: "GitHub Commits" },
    { value: 22, label: "Client Projects Delivered" },
    { value: 6, label: "SaaS Dashboards Designed" },
    { value: 12, label: "Technologies Mastered" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-16 bg-white dark:bg-[#051504] transition-colors"
    >
      {/* Soft Glow Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-green-200/10 to-blue-300/10 blur-2xl z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className="bg-white/80 dark:bg-[#0a1a08]/80 border border-gray-200 dark:border-[#1d3a1a] backdrop-blur-xl rounded-2xl px-6 py-8 shadow-xl hover:scale-105 transition-all"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-[#62e847] font-poppins">
              {inView ? (
                <CountUp
                  end={stat.value}
                  decimals={stat.suffix ? 1 : 0}
                  duration={2}
                />
              ) : (
                "0"
              )}
              {stat.suffix || ""}+
            </h2>
            <p className="text-sm text-gray-600 dark:text-green-100 mt-2 tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
