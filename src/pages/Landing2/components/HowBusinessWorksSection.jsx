import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ShoppingCart, DollarSign } from 'lucide-react';

const HowBusinessWorksSection = () => {
  const steps = [
    {
      step: "STEP 1",
      icon: <Calendar className="w-6 h-6 text-orange-500" />,
      title: "Claim your free store with hot products",
      description: "Receive a high-quality ecommerce site, ready to sell in 30 seconds: professionally designed, fully set up by us, and stocked with the latest hits."
    },
    {
      step: "STEP 2",
      icon: <ShoppingCart className="w-6 h-6 text-orange-500" />,
      title: "Make sales and redirect your orders to us",
      description: "Let's say your customer buys a Car Trunk Organizer listed on your store for $299. You then redirect the order to us at a purchase price of only $99."
    },
    {
      step: "STEP 3",
      icon: <DollarSign className="w-6 h-6 text-orange-500" />,
      title: "Keep the profits and let us ship your orders",
      description: "We pack the Organizer and ship it straight to your customer on your behalf. You keep your $200 profit and withdraw it to your bank account."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-sky-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How will my business work?
          </h2>
          <p className="text-xl text-gray-600">
            It's as simple as 1, 2, 3
          </p>
        </motion.div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
            >
              {/* Step Badge */}
              <div className='flex justify-center'>
                <div className="bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-6 flex items-center gap-4">
                {step.icon} {step.step}
              </div>
              </div>

              {/* Title */}
              <motion.h3
                className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300"
              >
                {step.title}
              </motion.h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {step.description}
              </p>

              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ pointerEvents: 'none' }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 140, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-10 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform"
          >
            START FOR $0? YES PLEASE!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowBusinessWorksSection;