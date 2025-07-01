import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaFigma } from 'react-icons/fa';
import profileImage from '../Assets/pic.png';

const aboutData = {
  title: 'About Me',
  description: `UI/UX Designer and Frontend Developer building beautiful, performant user interfaces.`,
  highlights: [
    {
      icon: <FaCode className="text-green-500 text-xl" />,
      title: 'Frontend Dev',
      text: 'React & Tailwind focused development.',
    },
    {
      icon: <FaFigma className="text-green-500 text-xl" />,
      title: 'Design Systems',
      text: 'Figma-based workflows for scalable design.',
    },
  ],
};

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="min-h-[60vh] px-6 py-16 flex items-center justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-2xl shadow-md object-cover w-full max-h-[360px]"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-green-500">{aboutData.title}</h2>

          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            {aboutData.description}
          </p>

          {/* Highlights */}
          <div className="space-y-4">
            {aboutData.highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {item.icon}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex gap-4">
            <a
              href="#projects"
              className="bg-green-500 text-black px-5 py-2.5 rounded-md text-sm font-medium hover:bg-green-600 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-green-500 text-green-500 px-5 py-2.5 rounded-md text-sm font-medium hover:bg-green-500 hover:text-black transition"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
