import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaCode, FaReact, FaFigma } from 'react-icons/fa';
import profileImage from '../Assets/pic.png';

// =====================
// Text Content Object
// =====================
const aboutData = {
  title: "About Me",
  description: `I'm a creative UI/UX Designer and Frontend Developer who transforms ideas into beautiful, user-friendly web experiences.`,
  highlights: [
    {
      icon: <FaPaintBrush className="text-green-500 mt-1 text-xl" />,
      title: "UI/UX Design",
      text: "Focused on clean and user-centered design with modern tools.",
    },
    {
      icon: <FaCode className="text-green-500 mt-1 text-xl" />,
      title: "Frontend Dev",
      text: "Expert in building modern interfaces with React & Tailwind.",
    },
    {
      icon: <FaReact className="text-green-500 mt-1 text-xl" />,
      title: "React & Motion",
      text: "Animated, responsive UIs using Framer Motion.",
    },
    {
      icon: <FaFigma className="text-green-500 mt-1 text-xl" />,
      title: "Figma Workflows",
      text: "Wireframing, prototyping, and Handoff design.",
    },
  ],
};

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="min-h-[70vh] px-6 py-12 flex items-center justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-2xl shadow-xl object-cover w-full h-auto max-h-[400px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-green-500">
            {aboutData.title}
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            {aboutData.description.split(/(UI\/UX Designer|Frontend Developer)/g).map((part, i) =>
              part === 'UI/UX Designer' || part === 'Frontend Developer' ? (
                <span key={i} className="text-green-500 font-semibold">{part}</span>
              ) : (
                part
              )
            )}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {item.icon}
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="bg-green-500 text-black px-6 py-3 rounded-md text-lg font-medium hover:bg-green-600 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-green-500 text-green-500 px-6 py-3 rounded-md text-lg font-medium hover:bg-green-500 hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
