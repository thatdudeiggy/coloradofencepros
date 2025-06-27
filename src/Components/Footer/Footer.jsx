import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-white dark:bg-[#051504] py-16 px-6 md:px-20 text-gray-900 dark:text-green-100"
    >
      {/* Glow Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-green-200/10 to-blue-300/10 blur-2xl z-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-semibold text-green-500 font-poppins mb-2">
            Jeylan Tesi
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-green-200">
            UI/UX Designer & Full Stack Developer <br />
            Based in Ethiopia 🌍
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-green-400 mb-3">
            Quick Links
          </h3>
          <ul className="text-sm space-y-2">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-green-500 transition duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-green-400 mb-3">
            Follow Me
          </h3>
          <div className="flex gap-6 text-2xl mt-2">
            {[
              { icon: <FaGithub />, link: "https://github.com/jeylanab" },
              { icon: <FaLinkedin />, link: "https://linkedin.com/in/jeylan-tesi-53a746257" },
              { icon: <FaTwitter />, link: "https://x.com/jetu81" },
              { icon: <FaInstagram />, link: "https://instagram.com/your-profile" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-green-500 hover:text-green-300 transition duration-200"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-12 text-center text-sm text-gray-500 dark:text-green-200">
        © {new Date().getFullYear()} Jeylan Tesi. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
