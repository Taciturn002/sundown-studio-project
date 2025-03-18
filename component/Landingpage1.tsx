import React from 'react';
import { motion } from 'framer-motion';
import Nav from './Nav';

function Landingpage1() {
  return (
    <div className="relative w-full flex flex-col bg-white text-black overflow-hidden">
      <div  className='z-[999] absolute w-full'>
        <Nav />
      </div>

     

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-16 mt-44">
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
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition font-medium"
          whileHover={{ scale: 1.05 }}
        >
          Explore More
        </motion.button>
      </div>

      {/* Infinite Scrolling Text Section */}
      <div className='w-full h-1/3 mt-52 overflow-hidden whitespace-nowrap relative'>
        <motion.div
          className='flex space-x-20'
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          style={{ width: '200%' }}
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <h1
              key={index}
              className='inline-block text-[10vw] leading-none text-black uppercase font-semibold pr-20'
            >
              Connect communities
            </h1>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Landingpage1;