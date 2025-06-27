import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSend = () => {
    window.location.href = "mailto:mymail@gmail.com";
  };

  return (
    <section className="relative py-36 px-6 md:px-20 transition-colors">
      {/* Soft Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form with Blur Card Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full p-8 bg-white/80 dark:bg-[#0a1a08]/80 backdrop-blur-xl border border-gray-300 dark:border-[#1f3a22] rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl text-green-500 font-semibold mb-3">
            Let’s work together
          </h2>
          <p className="text-gray-600 dark:text-green-100 mb-6 text-sm leading-relaxed">
            I’m open to full-time, freelance, or collaboration opportunities. Let’s create something impactful!
          </p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300  text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 h-28 rounded-lg border border-gray-300 dark:border-gray-600  text-black placeholder:text-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-green-400"
            />
            <button
              onClick={handleSend}
              className="w-full py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-300"
            >
              Send Email
            </button>
          </div>
        </motion.div>
{/* Contact Info */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="flex flex-col justify-center gap-8 px-4 py-6 w-full md:w-3/4 bg-white/70 dark:bg-[#0a1a08]/60 backdrop-blur-xl rounded-2xl border border-gray-300 dark:border-[#1f3a22] shadow-lg"
>
  <div className="flex items-start gap-4">
    <FiPhone className="text-green-400 text-3xl" />
    <div>
      <h4 className="dark:text-green-500 text-lg font-semibold mb-1">Phone</h4>
      <p className="text-black dark:text-white text-sm">(+00) 1234 5678 90</p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <FiMail className="text-green-400 text-3xl" />
    <div>
      <h4 className="dark:text-green-500 text-lg font-semibold mb-1">Email</h4>
      <p className="text-black dark:text-white text-sm">yourname@example.com</p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <FiMapPin className="text-green-400 text-3xl" />
    <div>
      <h4 className="dark:text-green-500 text-lg font-semibold mb-1">Location</h4>
      <p className="text-black dark:text-white text-sm">City, Country</p>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Contact;
