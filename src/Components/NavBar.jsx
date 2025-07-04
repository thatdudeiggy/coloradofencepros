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
    <nav className="sticky my-6 shadow-md top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4  md:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Desktop Button Only */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollTo("contact")}
            className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-white focus:outline-none"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden px-6 py-4 bg-white dark:bg-gray-800 shadow"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => scrollTo("contact")}
              className="block w-full text-left bg-green-600 text-white px-4 py-2 rounded-full font-medium hover:bg-green-700 transition"
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
