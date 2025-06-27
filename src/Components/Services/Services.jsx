import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiMonitor,
  FiZap,
  FiSmartphone,
  FiCode,
} from "react-icons/fi";
import "./Services.css";

const features = [
  {
    id: 1,
    title: "Pixel-Perfect Design",
    description:
      "Every section is crafted with precision—from fluid typography to balanced spacing. Built to impress clients and recruiters.",
    icon: <FiMonitor className="w-10 h-10 text-green-400" />,
  },
  {
    id: 2,
    title: "Lightning Fast Performance",
    description:
      "Built with clean, lightweight code. No slow animations or bloated plugins—your portfolio loads instantly, even on 3G.",
    icon: <FiZap className="w-10 h-10 text-green-400" />,
  },
  {
    id: 3,
    title: "100% Responsive & Dark Mode Ready",
    description:
      "Looks stunning on phones, tablets, desktops—and even smart TVs. Comes with light and dark themes out of the box.",
    icon: <FiSmartphone className="w-10 h-10 text-green-400" />,
  },
  {
    id: 4,
    title: "Developer-Friendly Setup",
    description:
      "Made with React.js, TailwindCSS, and Framer Motion. Easy to customize, deploy on Vercel, and update when your work grows.",
    icon: <FiCode className="w-10 h-10 text-green-400" />,
  },
];

const FeatureCard = ({ id, title, description, icon, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{ duration: 0.6, delay: id * 0.15, ease: "easeOut" }}
    className="glassmorphism p-6 rounded-xl shadow-lg border border-gray-700 text-start w-full max-w-sm bg-white/10 backdrop-blur-md"
  >
    <div className="flex justify-between items-center mb-4">
      <span className="text-3xl text-green-500 font-bold">{`0${id}`}</span>
      {icon}
    </div>
    <h3 className="text-xl font-semibold dark:text-white text-black">{title}</h3>
    <p className="dark:text-green-300  text-black text-sm mt-2 leading-relaxed">{description}</p>
  </motion.div>
);

const PortfolioFeaturesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="container mx-auto py-32 px-6 md:px-16 relative text-gray-300"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-green-500"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Why This Template Stands Out
      </motion.h2>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center justify-center">
        {features.map((item) => (
          <FeatureCard key={item.id} {...item} inView={inView} />
        ))}
      </motion.div>


      {/* Background Blur Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-700/20 to-blue-700/20 blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      />
    </motion.div>
  );
};

export default PortfolioFeaturesSection;
