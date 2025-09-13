import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Users, TrendingUp, Shield, Headphones, Percent, Package, Zap } from 'lucide-react';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const features = [
    { icon: <TrendingUp className="w-4 h-4" />, title: "Unlimited Product Listings", desc: "List as many products as you want" },
    { icon: <Star className="w-4 h-4" />, title: "AoinLive Access", desc: "Unlimited live product launch & unboxing shows" },
    { icon: <Package className="w-4 h-4" />, title: "Smart Packaging Hub", desc: "Pickup, safe packaging, and doorstep delivery support" },
    { icon: <Zap className="w-4 h-4" />, title: "Marketing Boost", desc: "Social media, email, and in-app promotions" },
    { icon: <Users className="w-4 h-4" />, title: "Analytics Dashboard", desc: "Track sales, buyer behavior, and growth trends" },
    { icon: <Headphones className="w-4 h-4" />, title: "Customer Support", desc: "24/7 priority chat + call support" },
    { icon: <Percent className="w-4 h-4" />, title: "Low Commission", desc: "Flat 5% per sale only (no hidden charges)" }
  ];

  const pricing = {
    monthly: { inr: "₹2,999", usd: "$40", period: "month" },
    yearly: { inr: "₹29,999", usd: "$400", period: "year" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            One simple, powerful package for every <span className="text-orange-500">AoinStore</span> seller
          </h1>
          <p className="text-gray-600">Get all premium benefits without confusion or hidden costs.</p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly' ? 'bg-orange-500 text-white' : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all relative ${
                billingCycle === 'yearly' ? 'bg-orange-500 text-white' : 'text-gray-600'
              }`}
            >
              Yearly
              {billingCycle === 'yearly' && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full"
                >
                  20% OFF
                </motion.span>
              )}
            </button>
          </div>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Online Business Success"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Start Your Success Story</h3>
                <p className="text-white/90">Join thousands of sellers already growing with AoinStore</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">300M+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">AoinStore Pro</h3>
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <span className="text-3xl font-bold">{pricing[billingCycle].inr}</span>
                    <span className="text-sm opacity-80 ml-1">INR</span>
                  </div>
                  <span className="opacity-60">or</span>
                  <div>
                    <span className="text-3xl font-bold">{pricing[billingCycle].usd}</span>
                    <span className="text-sm opacity-80 ml-1">USD</span>
                  </div>
                </div>
                <p className="text-sm opacity-90 mt-2">per {pricing[billingCycle].period}</p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Everything included:</h4>
                <div className="space-y-3 mb-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      className="flex items-start gap-3 text-sm"
                    >
                      <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center text-orange-600 flex-shrink-0 mt-0.5">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{feature.title}</div>
                        <div className="text-gray-600 text-xs mt-0.5">{feature.desc}</div>
                      </div>
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all mb-4"
                >
                  Get Started Today
                </motion.button>

                {/* Benefits */}
                <div className="flex justify-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-green-500" /> No setup fees
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-green-500" /> 14-day trial
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-green-500" /> Cancel anytime
                  </span>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-600"
            >
              <Shield className="w-4 h-4 text-green-500" />
              Trusted by 50,000+ sellers worldwide
            </motion.div>
          </motion.div>
        </div>

        {/* Support Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-sm text-gray-600 mt-8"
        >
          Questions? <span className="text-orange-600 cursor-pointer hover:underline font-medium">Contact Support →</span>
        </motion.p>
      </div>
    </div>
  );
};

export default PricingSection;