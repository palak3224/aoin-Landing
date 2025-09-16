import React from 'react';
import { motion } from 'framer-motion';
import TabletImg from "@/assets/Landing2/tabletImg.png"
import laptopVideo from "@/assets/Landing2/laptopVideo.webm"
import MobileImg from "@/assets/Landing2/mobileImg.png"

const StorePreviewSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 py-16 px-4">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full opacity-20 transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-700 rounded-full opacity-20 transform -translate-x-16 translate-y-16"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What will my store look like?
          </h2>
          <p className="text-xl text-orange-100">
            Flip the slider to explore some of our everyday and holiday-themed designs:
          </p>
        </motion.div>

        {/* Devices Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center space-x-8 mb-16"
        >
          {/* Tablet - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={TabletImg}
              alt="Tablet store preview"
              className="rounded-2xl shadow-2xl w-48"
            />
          </motion.div>

          {/* Laptop - Center */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full max-w-2xl h-auto laptop-video"
              src={laptopVideo}
            >
              <source src={laptopVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Mobile - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={MobileImg}
              alt="Mobile store preview"
              className="rounded-3xl shadow-2xl w-36"
            />
          </motion.div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-center mb-8"
        >
          <p className="text-xl text-white font-medium">
            Switch to seasonal themes and back in just 1 click!
          </p>
        </motion.div>

        <a href="https://aoinstore.com/register-business">
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-12 py-4 rounded-lg text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform"
          >
            YES! I WANT IT!
          </motion.button>
        </motion.div>
        </a>

      </div>
    </section>
  );
};

export default StorePreviewSection;