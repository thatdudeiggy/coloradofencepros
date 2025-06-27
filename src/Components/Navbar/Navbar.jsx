import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../Assets/logo.svg";
import { navLinks } from "../../constants";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply dark/light theme
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="fixed top-4 left-0 w-full z-50 transition-all duration-300 scroll-hidden">
      <div className="flex justify-between items-center mx-5 lg:mx-20 py-4">
        {/* Logo */}
        <div className="navbar__logo">
          <a href={navLinks[0].link}>
            <img className="h-10 w-auto" src={logo} alt="Logo" />
          </a>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className="text-2xl focus:outline-none text-green-600 dark:text-orange-400 transition-colors"
            title="Toggle theme"
          >
            <span className="material-icons">{theme === "dark" ? "dark_mode" : "light_mode"}</span>
          </button>

          {/* Menu button */}
          <button onClick={() => setIsMenuOpen(true)} className="focus:outline-none">
            <span className="text-green-600 material-icons text-4xl">menu</span>
          </button>
        </div>
      </div>

      {/* Full-Screen Menu */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-green-600/90 dark:bg-black/90 backdrop-blur-md text-white font-bold flex flex-col items-center justify-center z-50 transition-all ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-7 right-8 md:right-16 text-4xl focus:outline-none"
        >
          <span className="text-black dark:text-white material-icons text-5xl">close</span>
        </button>

        <ul className="space-y-8 text-xl text-center">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
              transition={{ delay: 0.1 * link.id, duration: 0.3 }}
            >
              <a
                href={link.link}
                className="hover:text-[#010200] dark:hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, scale: isMenuOpen ? 1 : 0.8 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="dark:bg-green-500 text-black px-6 py-3 my-3 bg-white rounded-lg text-lg hover:bg-gray-300 transition-all"
          onClick={() =>
            window.open("https://www.linkedin.com/in/your_linkedin/", "_blank")
          }
        >
          Hire Me
        </motion.button>
      </motion.div>
    </nav>
  );
};
