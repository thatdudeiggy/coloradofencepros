import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import profile from '../../Assets/pic.png';
import joecv from '../../Assets/joecv.pdf';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const socialLinks = [
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/jeylan-tesi-53a746257/' },
  { icon: FaTwitter, url: 'https://x.com/jetu81' },
  { icon: FaGithub, url: 'https://github.com/jeylanab/' },
  { icon: FaInstagram, url: 'https://www.instagram.com/your-profile' }
];

export const Hero = () => {
  return (
    <motion.div
      className="relative text-black min-h-screen flex items-center justify-center px-6 py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 z-10">

{/* Left - Text */}
<motion.div
  className="flex-1 text-center lg:text-left space-y-3"
  variants={itemVariants}
>
  <p className="text-black uppercase tracking-widest text-base sm:text-lg font-medium">
    👋 Hello
  </p>

  <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
    I'm <span className="text-green-400 font-bold font-poppins">Jane Doe</span>
    <br />
    UI/UX Designer
  </h1>

  <p className="text-gray-950 text-sm sm:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed">
    I design stunning, user-focused interfaces for websites and digital products. Clean aesthetics meet strategic UX.
  </p>

  {/* CTA Buttons */}
  <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
    <motion.a
      href="#projects"
      whileHover={{ scale: 1.05 }}
      className="bg-green-500 text-black px-7 py-3.5 rounded-md font-semibold text-base sm:text-lg shadow-lg transition"
    >
      View My Designs
    </motion.a>
    <motion.a
      href={joecv}
      download
      whileHover={{ scale: 1.05 }}
      className="border border-green-400 px-7 py-3.5 rounded-md font-semibold text-green-500 hover:bg-green-500 hover:text-black transition text-base sm:text-lg"
    >
      Download Resume
    </motion.a>
  </div>

  {/* Social Icons */}
  <div className="flex justify-center lg:justify-start gap-6 pt-6">
    {socialLinks.map(({ icon: Icon, url }, i) => (
      <a
        key={i}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Social profile link`}
        className="text-green-600 text-3xl hover:text-black transition transform hover:scale-110"
      >
        <Icon />
      </a>
    ))}
  </div>
</motion.div>


{/* Right - Image (Modern Overlap Design - Final) */}
<motion.div
  className="flex-1 flex justify-center items-center relative"
  variants={itemVariants}
>
  {/* Green rectangle background shape */}
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:-translate-x-0 lg:left-auto lg:right-12 bg-green-500 w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-xl z-0"></div>

  {/* Image block overlapping the shape */}
  <div className="relative z-10 -mt-28 sm:-mt-36 lg:-mt-52 lg:mr-12">
    <img
      src={profile}
      alt="Jane Doe"
      className="w-72 shadow-none sm:w-96 lg:w-[460px] rounded-2xl object-cover shadow-xl"
    />
    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-black text-xs sm:text-sm px-4 py-1 rounded-full font-semibold shadow-md bg-white">
      UI/UX Portfolio 2025
    </div>
  </div>
</motion.div>




      </div>
    </motion.div>
  );
};
