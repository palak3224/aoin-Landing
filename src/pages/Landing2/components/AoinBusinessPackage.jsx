import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import MOckImg1 from "@/assets/Landing2/mock1.png"

const AoinBusinessPackage = () => {
  const features = [
    "All you need to expand to Aoin right away",
    "Superb product listings for your top-selling products",
    "Easy-to-follow guide on starting an Aoin business"
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-orange-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/6 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tl from-orange-500/20 to-orange-300/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Image with phones */}
          <motion.div 
            className="relative flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/40 to-orange-600/30 rounded-full blur-3xl scale-150"></div>
              
              {/* Placeholder for phone images */}
              <div className="relative z-10">
                <img 
                  src={MOckImg1}
                  alt="Mobile phones showing Aoin interface"
                  className="w-full max-w-lg h-[80vh] rounded-2xl transform scale-x-[-1]"
                />
              </div>
              
              {/* Decorative sparkles */}
              <motion.div
                className="absolute top-8 right-8 text-orange-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={24} />
              </motion.div>
              
              <motion.div
                className="absolute bottom-12 left-4 text-orange-300"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            
            {/* Bonus badge */}
            <motion.div 
              className="inline-block"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                BONUS
              </span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Get an{' '}
                <span className="relative inline-block">
                  <span className="bg-white text-orange-500 px-3 py-1 rounded-lg">
                    aoin
                  </span>
                </span>{' '}
                business
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold">
                package for FREE
              </h2>
            </div>

            {/* Subheading */}
            <p className="text-xl text-gray-300">
              When you act here and now!
            </p>

            {/* Price tag */}
            <div className="inline-block border border-gray-600 rounded-full px-4 py-2">
              <span className="text-gray-400">Regular price: </span>
              <span className="text-orange-500 font-semibold">$399</span>
            </div>

            {/* Features list */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-gray-200">{feature}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 uppercase tracking-wide"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              GET NOW FOR FREE
            </motion.button>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AoinBusinessPackage;