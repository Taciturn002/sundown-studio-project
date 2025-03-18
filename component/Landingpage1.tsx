import React from 'react';
import { motion } from 'framer-motion';

function Landingpage1() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <img 
        src="/hero-background.jpg" 
        alt="Hero Background" 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      />

      {/* Background Image Overlay */}
      <img 
        src="/overlay-texture.png" 
        alt="Overlay Texture" 
        className="absolute top-0 left-0 w-full h-full object-cover mix-blend-overlay opacity-30"
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-8 md:px-16">
        <motion.h1 
          className="text-6xl md:text-7xl font-extrabold mb-4 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Sundown Studio
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Crafting stunning digital experiences with creativity and precision.
        </motion.p>

        <motion.button 
          className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-300 transition font-medium"
          whileHover={{ scale: 1.05 }}
        >
          Explore More
        </motion.button>
      </div>
    </div>
  );
}

export default Landingpage1;
