import React from "react";
import { motion } from "framer-motion";
import FinalCtaImg from "@/assets/Landing2/finalCta.png"

const BusinessStartSection = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden py-16 min-h-[80vh]">
      {/* Orange Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600"></div>
      
      {/* Decorative Wave Effects */}
      <div className="absolute inset-0">
        {/* Top Wave */}
        <motion.div
          className="absolute top-0 left-0 w-full h-32 opacity-15"
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V96Z"
              fill="rgba(255, 255, 255, 0.08)"
            />
          </svg>
        </motion.div>

        {/* Bottom Wave */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-32 opacity-12"
          initial={{ x: 100 }}
          animate={{ x: -100 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full rotate-180"
          >
            <path
              d="M0,96L48,80C96,64,192,32,288,32C384,32,480,64,576,80C672,96,768,96,864,80C960,64,1056,32,1152,32C1248,32,1344,64,1392,80L1440,96V120H1392C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V96Z"
              fill="rgba(255, 255, 255, 0.06)"
            />
          </svg>
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                Ready to start your
                <br />
                <span className="bg-gradient-to-r from-yellow-200 to-yellow-100 bg-clip-text text-transparent">
                  online business?
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-xl lg:text-2xl text-orange-50 leading-relaxed max-w-lg drop-shadow-md font-medium">
                Take the best option to achieve financial
                <br />
                independence and move your life forward!
              </p>
            </motion.div>

            {/* Buttons Container */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Primary CTA Button */}
              <motion.button
                className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-500 hover:to-yellow-400 text-orange-900 font-bold text-xl px-12 py-4 rounded-lg shadow-2xl transition-all duration-300 border-2 border-yellow-500"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                START NOW FOR $0
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-semibold text-lg px-12 py-4 rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                GET FREE CONSULTATION
              </motion.button>
            </motion.div>

            {/* Small Disclaimer Text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-orange-100 text-sm lg:text-base drop-shadow-sm opacity-90">
                Try <span className="text-orange-500 bg-white font-bold p-2 rounded-md">Aoin</span> for free for 14 days. $39/month after trial. Cancel anytime
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src={FinalCtaImg}
                alt="Woman with laptop showing business analytics"
                className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded-2xl border-4 border-white/20"
              />
              
              {/* Floating Dashboard Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-orange-200"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-sm text-gray-600 font-medium mb-1">Total Sales</div>
                <div className="text-2xl font-bold text-orange-600">$11,637</div>
                <div className="text-xs text-green-600 font-medium">+12.3% vs last week</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-orange-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="text-sm text-gray-600 font-medium mb-1">Unique Visitors</div>
                <div className="text-2xl font-bold text-orange-600">2,563</div>
                <div className="text-xs text-blue-600 font-medium">61.3% vs last week</div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default BusinessStartSection;