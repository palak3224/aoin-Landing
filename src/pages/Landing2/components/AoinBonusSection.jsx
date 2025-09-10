import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import MOckImg1 from "@/assets/Landing2/mock1.png"

const AoinBonusSection = () => {
  const features = [
    "Fast and easy start of your own Aoin store",
    "Access to 300 million active marketplace users",
    "A share of Aoin's $514 billion in revenue"
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 py-16 px-4">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full opacity-20 transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-700 rounded-full opacity-20 transform -translate-x-16 translate-y-16"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Bonus Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
            >
              BONUS
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Get an <span className="text-orange-600 bg-white px-2 rounded-md font-extrabold">Aoin</span> business<br />
              package for $0
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-800 mb-6"
            >
              When you act here and now!
            </motion.p>

            {/* Regular Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block border-2 border-white rounded-full px-6 py-2 text-white font-semibold mb-8"
            >
              Regular price: $399
            </motion.div>

            {/* Feature List */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center text-white text-lg"
                >
                  <Check className="w-6 h-6 text-white mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition-colors duration-300 shadow-xl"
            >
              GET NOW FOR FREE
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src={MOckImg1}
                alt="Aoin mobile app preview"
                className="w-full max-w-lg h-[80vh] rounded-2xl"
              />
              {/* Optional overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AoinBonusSection;