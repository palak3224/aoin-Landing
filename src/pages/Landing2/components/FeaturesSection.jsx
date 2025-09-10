import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Zap, TrendingUp } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Smile className="w-8 h-8 text-gray-600" />,
      title: "100% hassle-free",
      description: "Your business launch is organized by us from A to Z. No inventory, no upfront costs, no unsold stock!"
    },
    {
      icon: <Zap className="w-8 h-8 text-gray-600" />,
      title: "Start with zero experience",
      description: "Your store will bring profits on autopilot and the management is totally beginner friendly"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gray-600" />,
      title: "Financial freedom",
      description: "You get a stable source of income and a brilliant opportunity to change your life for the better"
    }
  ];

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;