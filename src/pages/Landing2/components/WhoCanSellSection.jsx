import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const WhoCanSellSection = () => {
  const sellerTypes = [
    "Manufacturers",
    "Wholesalers", 
    "Retailers",
    "Local Shops",
    "Small Businesses & Startups"
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Title and Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Who Can{' '}
              <span className="text-orange-500">Sell?</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              AoinStore welcomes all types of businesses to join our marketplace. 
              Whether you're a manufacturer, retailer, or just starting your entrepreneurial journey, 
              we provide the perfect platform to reach customers across India.
            </motion.p>
          </motion.div>

          {/* Right Side - Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {sellerTypes.map((seller, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  x: 10,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                className="flex items-center space-x-4 group cursor-pointer"
              >
                {/* Checkmark */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                >
                  <Check className="w-5 h-5 text-white" />
                </motion.div>
                
                {/* Text */}
                <motion.span 
                  className="text-2xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300"
                >
                  {seller}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanSellSection;