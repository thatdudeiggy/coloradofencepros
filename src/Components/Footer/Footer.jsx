import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

// =====================
// Footer Content Object
// =====================
const footerContent = {
  branding: {
    name: "Jane Smith",
    description:
      "UI/UX Designer crafting user-centric, responsive web applications with modern UI and clean design.",
  },
  links: ["Home", "About", "Projects", "Contact"],
  socials: [
    { icon: <FaGithub />, link: "https://github.com/janesmith" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/janesmith" },
    { icon: <FaTwitter />, link: "https://x.com/janesmith" },
    { icon: <FaInstagram />, link: "https://instagram.com/your-profile" },
  ],
  copyright:
    "© " + new Date().getFullYear() + " Jane Smith. All rights reserved.",
};

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 px-6 md:px-20 text-gray-900 dark:text-green-100 bg-transparent"
    >
      {/* Glow Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-green-200/10 to-blue-300/10 blur-2xl z-0"
      />

      {/* Grid Layout */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-green-500 font-poppins mb-3">
            {footerContent.branding.name}
          </h2>
          <p className="text-sm text-gray-700 dark:text-green-200 leading-relaxed">
            {footerContent.branding.description}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-green-400 mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            {footerContent.links.map((link) => (
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

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-green-400 mb-4">Follow Me</h3>
          <div className="flex flex-wrap gap-4 text-2xl mt-2">
            {footerContent.socials.map((social, index) => (
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

      {/* Footer Bottom */}
      <div className="relative z-10 mt-12 text-center text-sm text-gray-500 dark:text-green-200">
        {footerContent.copyright}
      </div>
    </motion.footer>
  );
};

export default Footer;
