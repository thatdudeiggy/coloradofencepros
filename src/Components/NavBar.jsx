import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../Assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </a>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollTo("contact")}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow-sm transition duration-300 ease-in-out"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-white focus:outline-none transition"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden px-4 pb-4 pt-2 bg-white dark:bg-gray-900 shadow-md rounded-b-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={() => scrollTo("contact")}
              className="w-full bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-medium transition duration-300"
            >
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
