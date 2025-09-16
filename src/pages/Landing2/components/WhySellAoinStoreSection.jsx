import React from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  Video, 
  Truck, 
  TrendingUp, 
  BarChart3, 
  Headphones, 
  Percent 
} from 'lucide-react';

const WhySellAoinStoreSection = () => {
  const features = [
    {
      icon: <Package className="w-8 h-8 text-orange-500" />,
      title: "Unlimited Product Listings",
      description: "List as many products as you want without any restrictions. Scale your business without limits."
    },
    {
      icon: <Video className="w-8 h-8 text-orange-500" />,
      title: "Live Product Launch Shows (AoinLive)",
      description: "Showcase your products through engaging live streams and connect directly with customers."
    },
    {
      icon: <Truck className="w-8 h-8 text-orange-500" />,
      title: "Smart Packaging & Hassle-free Delivery",
      description: "Professional packaging and reliable delivery network ensures customer satisfaction every time."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: "Marketing Boost – We promote your products",
      description: "Our dedicated marketing team helps promote your products across multiple channels to increase visibility."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: "Analytics Dashboard to track growth",
      description: "Comprehensive insights and analytics to monitor your sales performance and business growth."
    },
    {
      icon: <Headphones className="w-8 h-8 text-orange-500" />,
      title: "24/7 Seller Support",
      description: "Round-the-clock support to help you resolve any issues and maximize your selling potential."
    },
    {
      icon: <Percent className="w-8 h-8 text-orange-500" />,
      title: "Flat 5% Commission",
      description: "Transparent and affordable pricing with just 5% commission on sales. No hidden fees or charges."
    }
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Sell on <span className="text-orange-500">AoinStore</span>?
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to succeed in one powerful platform
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer relative overflow-hidden ${
                index === 6 ? 'lg:col-start-2' : ''
              }`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100/50 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
              
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="p-3 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                >
                  {feature.icon}
                </motion.div>
              </div>


              {/* Content */}
              <div className="text-center relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Checkmark Badge */}
              <div className="absolute top-4 left-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
              </div>

              {/* Hover Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ pointerEvents: 'none' }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
                <a href="https://aoinstore.com/register-business">
                
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 140, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-12 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform"
          >
            Start Selling Today!
          </motion.button>
                </a>
          <p className="mt-4 text-sm text-gray-500">
            Join thousands of successful sellers on AoinStore
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySellAoinStoreSection;