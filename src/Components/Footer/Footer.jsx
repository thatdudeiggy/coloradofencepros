import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="w-full border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0A0A0A] text-black dark:text-white px-6 py-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Column 1: Branding */}
        <div>
          <h2 className="text-2xl font-semibold font-poppins tracking-tight">
            Jeylan Tesi
          </h2>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
            UI/UX Designer & Full Stack Developer.<br />
            Based in Ethiopia 🌍
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
            <li><a href="/" className="hover:text-green-500">Home</a></li>
            <li><a href="/about" className="hover:text-green-500">About</a></li>
            <li><a href="/projects" className="hover:text-green-500">Projects</a></li>
            <li><a href="/contact" className="hover:text-green-500">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Social Icons */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Follow Me</h3>
          <div className="flex gap-6 mt-2 text-2xl">
            <a
              href="https://github.com/jeylanab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/jeylan-tesi-53a746257"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/jetu81"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Jeylan Tesi. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
