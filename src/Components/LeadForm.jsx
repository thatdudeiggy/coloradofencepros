import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaStickyNote, FaPaperPlane } from "react-icons/fa";

const LeadForm = ({
  linearFeet,
  selectedFence,
  FENCE_TYPES,
  includeGate,
  gateWidth,
  includeTopCap,
  includeBoardOnBoard,
  estimate,
}) => {
  return (
    <form
      action="https://formspree.io/f/xdkzjjaz"
      method="POST"
      className="mt-8 space-y-5 max-w-xl mx-auto p-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg"
    >
      <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">
        Get Your Estimate and Quote
      </h3>

      {/* Name */}
      <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2">
        <FaUser className="text-green-600" />
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full bg-transparent focus:outline-none dark:text-white"
        />
      </div>

      {/* Email */}
      <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2">
        <FaEnvelope className="text-green-600" />
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full bg-transparent focus:outline-none dark:text-white"
        />
      </div>

      <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2">
        <FaPhone className="text-green-600" />
        <input
          type="tel"
          name="phone"
          placeholder="Phone (optional)"
          className="w-full bg-transparent focus:outline-none dark:text-white"
        />
      </div>

      <textarea
        name="message"
        hidden
        value={
          `Fence Estimate Summary\n\n` +
          `Linear Feet: ${linearFeet} ft\n` +
          `Fence Type: ${FENCE_TYPES[selectedFence].label} ($${FENCE_TYPES[selectedFence].price}/ft)\n` +
          `Gate Included: ${includeGate ? "Yes" : "No"}\n` +
          (includeGate ? `➡️ Gate Width: ${gateWidth} ft\n` : "") +
          `Decorative Top Cap: ${includeTopCap ? "Yes" : "No"}\n` +
          `Board-on-Board Design: ${includeBoardOnBoard ? "Yes" : "No"}\n` +
          `Total Estimate: $${estimate?.toLocaleString()}\n`
        }
        readOnly
      />

      {/* Extra Notes */}
      <div className="flex gap-3 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2">
        <FaStickyNote className="text-green-600 mt-1" />
        <textarea
          name="extra_notes"
          placeholder="Any additional message for us?"
          rows="4"
          className="w-full bg-transparent focus:outline-none dark:text-white resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300 shadow-md"
      >
        <FaPaperPlane />
        Send My Estimate
      </button>
    </form>
  );
};

export default LeadForm;
