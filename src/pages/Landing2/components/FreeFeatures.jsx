import React from 'react';
import { motion } from 'framer-motion';
import { Store, Palette, Package, CreditCard, User, Clock } from 'lucide-react';

const FreeFeatures = () => {
  const features = [
    {
      icon: Store,
      title: "Top-notch online store",
      description: "You receive a fully hosted standalone ecommerce website, domain name & SSL included."
    },
    {
      icon: Palette,
      title: "Professional design",
      description: "Enjoy switchable, mobile-friendly design with vibrant videos and engaging visuals that turn shoppers into buyers."
    },
    {
      icon: Package,
      title: "Thousands of best-sellers",
      description: "Gain access to our handpicked collections of the trendiest items and add as many products as you like."
    },
    {
      icon: CreditCard,
      title: "Payment system",
      description: "Your store is fully ready to accept customers' payments through all credit & debit cards, PayPal, etc."
    },
    {
      icon: User,
      title: "Personal manager",
      description: "Your dedicated manager will guide you through all the steps of your business launch and growth."
    },
    {
      icon: Clock,
      title: "24/7 tech support",
      description: "Feel free to contact our friendly support team whenever you have any technical issues."
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What do I get for free?
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to sell online and succeed!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 border-2 border-gray-100 transition-shadow duration-100 flex flex-col items-center"
              whileHover={{ 
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                y: -5
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.button
            className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-10 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            GET ALL FOR FREE
          </motion.button>
          <p className="text-sm text-gray-500 mt-4">
            Try <span className='font-bold text-orange-500'>Aoin</span> for free for 14 days. $39/month after trial. Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreeFeatures;