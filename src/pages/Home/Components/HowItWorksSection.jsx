import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Package, Globe, ArrowRight, Play, Pause, CheckCircle, Users, TrendingUp, Shield, Zap, Award } from "lucide-react";
import Step1Img from "@/assets/step1.png";
import Step2Img from "@/assets/step2.png";
import Step3Img from "@/assets/step3.png";

const HowItWorksSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoPlayInterval = 4000;


  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Join thousands of sellers on our multi-vendor marketplace. Set up your store in minutes with our intuitive onboarding process.",
      image: Step1Img,
      icon: User,
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      features: [
        { icon: CheckCircle, text: "Instant store verification" },
        { icon: Shield, text: "Secure seller protection" },
        { icon: Users, text: "Join 50,000+ active sellers" }
      ]
    },
    {
      number: "02", 
      title: "Upload Your Products",
      description: "Seamlessly list your products with our advanced catalog management system. Bulk upload, smart categorization, and AI-powered optimization.",
      image: Step2Img,
      icon: Package,
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50",
      features: [
        { icon: Zap, text: "AI-powered product optimization" },
        { icon: TrendingUp, text: "Smart pricing recommendations" },
        { icon: Award, text: "Quality score system" }
      ]
    },
    {
      number: "03",
      title: "Start Selling Globally", 
      description: "Reach millions of customers worldwide. Our platform handles payments, shipping, and customer service while you focus on growing your business.",
      image: Step3Img,
      icon: Globe,
      color: "from-orange-600 to-amber-600",
      bgColor: "from-orange-100 to-amber-100",
      features: [
        { icon: Globe, text: "Global marketplace reach" },
        { icon: TrendingUp, text: "Advanced analytics dashboard" },
        { icon: Users, text: "Multi-channel integration" }
      ]
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentStep((prev) => (prev + 1) % steps.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, steps.length, autoPlayInterval, isPlaying]);

  const handleStepClick = (index) => {
    setCurrentStep(index);
    setProgress(0);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-48 lg:w-72 h-32 sm:h-48 lg:h-72 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-2xl lg:blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 sm:w-64 lg:w-96 h-40 sm:h-64 lg:h-96 bg-gradient-to-bl from-orange-300/20 to-amber-300/20 rounded-full blur-2xl lg:blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Icons - Hidden on mobile */}
        <motion.div
          className="hidden lg:block absolute top-40 right-40 text-orange-300/20"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity }}
        >
          <Package size={60} />
        </motion.div>
        <motion.div
          className="hidden lg:block absolute bottom-40 left-40 text-amber-300/20"
          animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
          transition={{ duration: 35, repeat: Infinity }}
        >
          <Globe size={80} />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full text-orange-700 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6 border border-orange-200/50"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(251, 146, 60, 0.2)" }}
          >
            Multi-Vendor E-Commerce Platform
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-orange-800/70 max-w-3xl mx-auto leading-relaxed px-4">
            Transform your business with our streamlined platform designed for modern entrepreneurs and established brands
          </p>
        </motion.div>

        {/* Main Content - Mobile First, Desktop Grid */}
        <div className="lg:grid lg:grid-cols-5 lg:gap-12 lg:items-start space-y-8 lg:space-y-0">
          {/* Mobile Image Display - Shows on mobile, hidden on desktop */}
          <div className="lg:hidden">
            <motion.div
              className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl shadow-orange-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                {steps.map(
                  (step, index) =>
                    index === currentStep && (
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${step.color} opacity-10`}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        {/* Mobile Image Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${steps[currentStep].color} flex items-center justify-center backdrop-blur-sm`}>
                                {React.createElement(steps[currentStep].icon, { size: 20, strokeWidth: 2 })}
                              </div>
                              <div>
                                <h4 className="text-lg font-bold">{steps[currentStep].title}</h4>
                                <p className="text-orange-200 text-sm">Step {steps[currentStep].number}</p>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Left Side - Step Cards (3 columns on desktop, full width on mobile) */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6">
            {/* Enhanced Control Bar */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-orange-200/30 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <motion.button
                  onClick={toggleAutoPlay}
                  className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg sm:rounded-xl font-medium hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg text-sm sm:text-base"
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(251, 146, 60, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  {isPlaying ? 'Pause Tour' : 'Start Tour'}
                </motion.button>
                <div className="text-orange-700">
                  <span className="font-bold text-base sm:text-lg">Step {currentStep + 1}</span>
                  <span className="text-orange-600 ml-2 text-sm sm:text-base">of {steps.length}</span>
                </div>
              </div>
              
              {/* Enhanced Progress Indicators */}
              <div className="flex gap-2 sm:gap-3">
                {steps.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`h-2 sm:h-3 rounded-full transition-all duration-500 ${
                      index === currentStep 
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 w-8 sm:w-12 shadow-lg' 
                        : 'bg-orange-200 hover:bg-orange-300 w-2 sm:w-3'
                    }`}
                    onClick={() => handleStepClick(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      width: index === currentStep ? (window.innerWidth < 640 ? 32 : 48) : (window.innerWidth < 640 ? 8 : 12)
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Enhanced Step Cards Container */}
            <div className="relative h-auto lg:h-[500px] overflow-hidden">
              <AnimatePresence mode="wait">
                {steps.map((step, index) => (
                  index === currentStep && (
                    <motion.div
                      key={index}
                      className="lg:absolute lg:inset-0"
                      initial={{ x: 200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -200, opacity: 0 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        duration: 0.7
                      }}
                    >
                      {/* Enhanced Main Active Card */}
                      <motion.div
                        className={`relative p-4 sm:p-6 lg:p-7 rounded-2xl lg:rounded-3xl bg-gradient-to-br ${step.bgColor} border-2 border-orange-200/50 shadow-xl lg:shadow-2xl shadow-orange-500/10 overflow-hidden group`}
                        whileHover={{ scale: [1, 1.01][+(window.innerWidth >= 1024)], boxShadow: "0 20px 40px rgba(251, 146, 60, 0.15)" }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Enhanced Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_orange_1px,_transparent_1px)] bg-[length:30px_30px] sm:bg-[length:40px_40px]"></div>
                        </div>

                        {/* Floating Decorative Elements - Hidden on mobile */}
                        <motion.div
                          className="hidden sm:block absolute top-4 sm:top-6 right-4 sm:right-6 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-xl"
                          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                          transition={{ duration: 20, repeat: Infinity }}
                        />

                        {/* Card Content */}
                        <div className="relative z-10 h-full flex flex-col">
                          {/* Header */}
                          <motion.div 
                            className="flex items-center gap-3 sm:gap-4 lg:gap-6 mb-3 sm:mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <motion.div
                              className={`w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl`}
                              whileHover={{ rotate: [0, 360][+(window.innerWidth >= 1024)], scale: [1, 1.1][+(window.innerWidth >= 1024)] }}
                              transition={{ duration: 0.6 }}
                            >
                              {React.createElement(step.icon, { size: window.innerWidth < 640 ? 24 : window.innerWidth < 1024 ? 30 : 36, strokeWidth: 2 })}
                            </motion.div>
                            
                            <div>
                              <motion.div 
                                className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-600 mb-1 sm:mb-2"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: "spring" }}
                              >
                                {step.number}
                              </motion.div>
                              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                                {step.title}
                              </h3>
                            </div>
                          </motion.div>

                          {/* Description */}
                          <motion.p 
                            className="text-sm sm:text-base lg:text-lg text-orange-800/80 leading-relaxed mb-3 sm:mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            {step.description}
                          </motion.p>

                          {/* Features List */}
                          <motion.div 
                            className="mb-4 sm:mb-6 lg:mb-8 space-y-3 sm:space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Key Features:</h4>
                            <div className="space-y-2 sm:space-y-3">
                              {step.features.map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  className="flex items-center gap-3 p-2 sm:p-3 bg-white/60 rounded-lg sm:rounded-xl backdrop-blur-sm"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.6 + idx * 0.1 }}
                                  whileHover={{ x: [0, 5][+(window.innerWidth >= 1024)], backgroundColor: "rgba(255,255,255,0.8)" }}
                                >
                                  <div className={`w-6 sm:w-8 h-6 sm:h-8 rounded-md sm:rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center text-white`}>
                                    {React.createElement(feature.icon, { size: window.innerWidth < 640 ? 14 : 16 })}
                                  </div>
                                  <span className="text-gray-800 font-medium text-sm sm:text-base">{feature.text}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>

            {/* Enhanced Preview Cards with Progress - Mobile Optimized */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-6 lg:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {steps.map((step, index) => (
                <motion.button
                  key={index}
                  className={`flex-1 p-3 sm:p-4 lg:p-5 rounded-xl lg:rounded-2xl border-2 transition-all duration-500 relative overflow-hidden ${
                    index === currentStep
                      ? 'border-orange-300 bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg lg:shadow-xl'
                      : 'border-orange-100 bg-white hover:border-orange-200 hover:bg-orange-25 shadow-md lg:shadow-lg'
                  }`}
                  onClick={() => handleStepClick(index)}
                  whileHover={{ scale: [1, 1.03][+(window.innerWidth >= 1024)], y: [0, -5][+(window.innerWidth >= 1024)] }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    backgroundColor: index === currentStep ? "rgba(255, 247, 237, 1)" : "rgba(255, 255, 255, 1)"
                  }}
                >
                  {/* Progress Bar for Current Step */}
                  {index === currentStep && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-orange-500 to-amber-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  )}
                  
                  <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                    <motion.div 
                      className={`w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 rounded-lg lg:rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ rotate: [0, 180][+(window.innerWidth >= 1024)] }}
                      transition={{ duration: 0.3 }}
                    >
                      {React.createElement(step.icon, { size: window.innerWidth < 640 ? 16 : window.innerWidth < 1024 ? 18 : 20 })}
                    </motion.div>
                    <div className="text-left flex-1">
                      <div className="font-bold text-gray-900 text-xs sm:text-sm mb-1">
                        {step.title}
                      </div>
                      <div className="text-xs text-orange-600 mb-1 sm:mb-2">
                        Step {step.number}
                      </div>
                      {index === currentStep && (
                        <motion.div 
                          className="text-xs text-orange-700 font-medium"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {Math.round(progress)}% Complete
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Enhanced Image Display (2 columns) - Desktop Only */}
          <div className="hidden lg:block lg:col-span-2">
            <motion.div
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/20"
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                {steps.map(
                  (step, index) =>
                    index === currentStep && (
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.1, x: 50, rotateY: 10 }}
                        animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 0.9, x: -50, rotateY: -10 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${step.color} opacity-10`}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>

              {/* Enhanced Image Overlay - Desktop Only */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${steps[currentStep].color} flex items-center justify-center backdrop-blur-sm`}>
                      {React.createElement(steps[currentStep].icon, { size: 24, strokeWidth: 2 })}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">{steps[currentStep].title}</h4>
                      <p className="text-orange-200">Step {steps[currentStep].number} • Multi-Vendor Platform</p>
                    </div>
                  </div>
                  
                  {/* Mini stats in overlay */}
                  <div className="flex gap-4 mt-4">
                    {steps[currentStep].features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded bg-gradient-to-r ${steps[currentStep].color} flex items-center justify-center`}>
                          {React.createElement(feature.icon, { size: 12 })}
                        </div>
                        <span className="text-sm text-orange-200">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 hover:from-orange-600 hover:via-orange-500 hover:to-amber-500 text-white font-bold text-base sm:text-lg lg:text-xl px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-xl lg:rounded-2xl shadow-lg lg:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            <span className="relative z-10 flex items-center justify-center gap-3 sm:gap-4">
              <span>Start Your Journey Today</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight size={window.innerWidth < 640 ? 20 : 24} />
              </motion.div>
            </span>
          </motion.button>
          
          <motion.p 
            className="text-orange-700/70 mt-4 text-sm sm:text-base lg:text-lg px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Join thousands of successful sellers on our platform
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorksSection; 