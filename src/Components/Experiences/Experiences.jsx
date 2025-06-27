import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiAdobexd,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Design Tools",
    description:
      "Modern design tools I use to create intuitive and accessible user interfaces.",
    skills: [
      { name: "Figma", icon: <SiFigma />, level: 85 },
      { name: "Adobe XD", icon: <SiAdobexd />, level: 70 },
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Languages and frameworks for building responsive and dynamic UIs.",
    skills: [
      { name: "HTML5", icon: <SiHtml5 />, level: 95 },
      { name: "CSS3", icon: <SiCss3 />, level: 90 },
      { name: "JavaScript", icon: <SiJavascript />, level: 88 },
      { name: "TypeScript", icon: <SiTypescript />, level: 75 },
      { name: "React.js", icon: <SiReact />, level: 85 },
    ],
  },
  {
    title: "Backend & Database",
    description:
      "Technologies I use to handle logic, APIs, and persistent data storage.",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, level: 80 },
      { name: "Express.js", icon: <SiExpress />, level: 78 },
      { name: "MongoDB", icon: <SiMongodb />, level: 85 },
      { name: "Java", icon: <FaJava />, level: 60 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="relative py-32 px-6 md:px-20 duration-500">
    
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-500 mb-20">
          Skills
        </h2>

        <div className="space-y-24">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="space-y-10"
            >
              {/* Title & Description */}
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-green-500 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-green-100 text-base">
                  {category.description}
                </p>
              </div>

              {/* Skill Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-2xl bg-white/80 dark:bg-[#0a1a08]/80 backdrop-blur-xl shadow-lg border border-gray-200 dark:border-[#1d3a1a] text-center hover:shadow-xl transition-all"
                  >
                    <div className="text-green-500 text-5xl mb-3">
                      {skill.icon}
                    </div>
                    <p className="font-medium text-sm text-gray-800 dark:text-white mb-2">
                      {skill.name}
                    </p>
                    <div className="w-full h-2 bg-gray-300 dark:bg-green-950 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-green-500"
                      />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-green-200 mt-1">
                      {skill.level}%
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
