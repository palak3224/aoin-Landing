import React from 'react';
import { motion } from 'framer-motion';
import BenefitsImg from '@/assets/benefits.png';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Global Reach",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: "Get instant access to international buyers and expand beyond local limits with our global marketplace"
    },
    {
      title: "Higher Margins",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: "Keep more profits with our competitive commission structure and transparent pricing model."
    },
    {
      title: "Fast Integration",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "Upload your catalog and start selling within minutes with our streamlined onboarding process."
    },
    {
      title: "Premium Support",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "Dedicated account manager and AI-powered analytics tools to accelerate your business growth."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="bg-gradient-to-br from-gray-50 via-white to-orange-50/30 py-20 px-6 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          variants={titleVariants}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why Join Aoinstore?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Experience the next generation of e-commerce with our cutting-edge platform
          </motion.p>
        </motion.div>

        {/* Hero Image with Fade Effect */}
        <motion.div 
          className="relative mb-8"
          variants={imageVariants}
        >
          <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden ">
            <motion.img 
              src={BenefitsImg}
              alt="Business growth and success"
              className="w-full h-full object-fit"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            
            {/* Gradient Fade from Bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff61] via-[#ffffff20] to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            
            {/* Additional fade for smoother transition */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/95 to-transparent"></div>
          </div>
        </motion.div>

        {/* Benefits Cards Grid - Positioned to start from fade area */}
        <motion.div 
          className="relative -mt-32 z-10"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Main Card */}
                <div className="relative bg-white/80 backdrop-blur-xl border border-orange-100/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  
                  {/* Premium Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-white/60 to-amber-50/40"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-orange-100/60 via-white/80 to-amber-100/60 transition-opacity duration-500"></div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-200 via-amber-200 to-orange-200 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="absolute inset-[1px] rounded-3xl bg-white/90 backdrop-blur-xl"></div>
                  
                  {/* Card Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <motion.div 
                      className="relative w-16 h-16 mb-6 mx-auto"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center text-white group-hover:shadow-lg transition-all duration-300">
                        {benefit.icon}
                      </div>
                      
                      {/* Icon Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-110"></div>
                    </motion.div>
                    
                    {/* Title */}
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-700 transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      {benefit.title}
                    </motion.h3>
                    
                    {/* Description */}
                    <motion.p 
                      className="text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 * index }}
                    >
                      {benefit.description}
                    </motion.p>
                  </div>

                  {/* Premium Shine Effect */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-3xl">
                    <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-1000 ease-out"></div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-6 right-6 w-2 h-2 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
                  <div className="absolute bottom-6 left-6 w-3 h-3 border-2 border-orange-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4 w-1 h-1 bg-amber-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute bottom-4 right-4 w-1 h-1 bg-orange-400 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Ready to transform your business with Aoinstore?
          </motion.p>
          <motion.button 
            className="group relative px-12 py-5 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white font-semibold rounded-2xl shadow-xl overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <span className="relative z-10">Get Started Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-700 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-3 h-3 bg-orange-300 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-32 right-16 w-4 h-4 bg-amber-300 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.9, 0.5]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-20 w-2 h-2 bg-yellow-400 rounded-full"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </motion.section>
  );
};

export default BenefitsSection;