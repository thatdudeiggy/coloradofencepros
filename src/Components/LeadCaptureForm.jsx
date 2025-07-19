import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FooterLeadForm = ({ estimate, linearFeet, gateWidth, includeTopCap, includeBoardOnBoard }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    const validation = validate();
    if (!estimate) {
      e.preventDefault();
      toast.error("Please calculate your estimate first before submitting the form.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } else if (Object.keys(validation).length > 0) {
      e.preventDefault();
      setErrors(validation);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <footer id="contact" className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12 px-6 md:px-20">
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-semibold text-gray-900 dark:text-white mb-10">
          Request a Free Estimate
        </h2>

        {submitted ? (
          <p className="text-center text-green-600 dark:text-green-400 text-lg font-medium">
            ✅ Thank you! We'll be in touch shortly.
          </p>
        ) : (
            <form
              id="lead-form"
            action="https://formspree.io/f/xdkzjjaz"
            method="POST"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg"
          >
            {/* Hidden Estimate Fields */}
            <input type="hidden" name="estimate" value={`$${estimate || 0}`} />
            <input type="hidden" name="linearFeet" value={linearFeet || 0} />
            <input type="hidden" name="gateWidth" value={gateWidth || 0} />
            <input type="hidden" name="includeTopCap" value={includeTopCap ? "Yes" : "No"} />
            <input type="hidden" name="includeBoardOnBoard" value={includeBoardOnBoard ? "Yes" : "No"} />

            {/* Column 1: Name & Email */}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                  placeholder="Your Name"
                  required
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                  placeholder="you@example.com"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>

            {/* Column 2: Phone & Address */}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                  placeholder="123 Apple St, Cupertino, CA"
                />
              </div>
            </div>

            {/* Column 3: Message & Submit */}
            <div className="flex flex-col justify-between space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm resize-none"
                  placeholder="Let us know about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-4 bg-black text-white py-3 rounded-full hover:bg-green-700 transition duration-300 shadow-md"
              >
                Get Estimate
              </button>
            </div>
          </form>
        )}
      </div>
    </footer>
  );
};

export default FooterLeadForm;
