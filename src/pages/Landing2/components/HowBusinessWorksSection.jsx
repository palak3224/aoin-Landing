import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Package, MapPin, TrendingUp } from 'lucide-react';

const HowBusinessWorksSection = () => {
  const steps = [
    {
      step: "STEP 1",
      icon: <UserCheck className="w-6 h-6 text-orange-500" />,
      title: "Register in 5 minutes",
      description: "Quick and easy registration process to get your business up and running. Complete your profile and verify your details in just a few minutes."
    },
    {
      step: "STEP 2",
      icon: <Package className="w-6 h-6 text-orange-500" />,
      title: "List your products",
      description: "Add your products with high-quality images, detailed descriptions, and competitive pricing. Our platform makes product listing simple and effective."
    },
    {
      step: "STEP 3",
      icon: <MapPin className="w-6 h-6 text-orange-500" />,
      title: "Start selling across India",
      description: "Reach customers nationwide with our extensive delivery network. Your products will be available to millions of potential buyers across the country."
    },
    {
      step: "STEP 4",
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
      title: "Grow with live shows & marketing support",
      description: "Boost your sales with our live streaming features and comprehensive marketing support. Get the tools and guidance you need to scale your business."
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
            It's as simple as 1, 2, 3, 4
          </p>
        </motion.div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer relative overflow-hidden"
            >
              {/* Step Badge */}
              <div className='flex justify-center'>
                <div className="bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-6 flex items-center gap-2">
                  {step.icon} {step.step}
                </div>
              </div>

              {/* Title */}
              <motion.h3
                className="text-lg font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300 text-center"
              >
                {step.title}
              </motion.h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-center text-sm">
                {step.description}
              </p>

              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ pointerEvents: 'none' }}
              />
            </motion.div>
          ))}
        </div>

<a href="https://aoinstore.com/register-business">

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
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
            START FOR ₹0? YES PLEASE!
          </motion.button>
        </motion.div>
</a>
      </div>
    </section>
  );
};

export default HowBusinessWorksSection;