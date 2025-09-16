import React from 'react';
import { motion } from 'framer-motion';

const OfferStrip = () => {
  const offerText = "🎉 Limited Offer: First 50 sellers get FREE 1-month subscription to launch their store!";
  
  return (
    <div className="relative w-full bg-black overflow-hidden py-3 border-t-2 border-b-2 border-gradient-to-r from-orange-400 via-orange-500 to-orange-400">
      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400"></div>
      
      {/* Gradient Border Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400"></div>
      
      {/* Shiny Gradient Border Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 165, 0, 0.3) 50%, transparent 100%)',
        }}
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Scrolling Text Container */}
      <div className="relative flex whitespace-nowrap">
        {/* Continuous Scrolling Text */}
        <motion.div
          className="flex items-center text-white text-lg font-semibold"
          animate={{
            x: ['0%', '-50%']
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {Array(10).fill(null).map((_, index) => (
            <span key={index} className="flex items-center flex-shrink-0">
              <span className="text-orange-400 mx-8">{offerText}</span>
              <span className="text-orange-500 mx-8">|</span>
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {Array(10).fill(null).map((_, index) => (
            <span key={`dup-${index}`} className="flex items-center flex-shrink-0">
              <span className="text-orange-400 mx-8">{offerText}</span>
              <span className="text-orange-500 mx-8">|</span>
            </span>
          ))}
        </motion.div>
      </div>
      
      {/* Shine Effect Overlay */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-full opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
          filter: 'blur(1px)'
        }}
        animate={{
          x: ['-200px', 'calc(100vw + 200px)']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />
      
      {/* Sparkle Effects */}
      {Array(8).fill(null).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-orange-300 rounded-full"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${Math.random() * 100}%`
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

export default OfferStrip;