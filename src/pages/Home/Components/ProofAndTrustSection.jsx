import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  DollarSign, 
  Eye, 
  Globe, 
  Handshake, 
  Check, 
  X,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Crown,
  Award,
  Users,
  Heart
} from "lucide-react";

const ProofAndTrustSection = () => {
  const comparisonData = [
    {
      feature: "Commission Fees",
      aoinstore: "Only 5-8% Low Fees",
      aoinStoreDetail: "Keep more of your profits with our transparent pricing",
      competitors: "Heavy 15-20% Fees",
      competitorDetail: "Massive commission cuts eating your margins",
      icon: DollarSign,
    },
    {
      feature: "Brand Visibility", 
      aoinstore: "Premium Showcase",
      aoinStoreDetail: "Stand out with dedicated brand spotlight",
      competitors: "Lost in Millions",
      competitorDetail: "Buried among countless competing listings",
      icon: Eye,
    },
    {
      feature: "Global Reach",
      aoinstore: "180+ Countries Instantly",
      aoinStoreDetail: "Worldwide access from day one",
      competitors: "Limited Regional Access",
      competitorDetail: "Geographic restrictions limit growth",
      icon: Globe,
    },
    {
      feature: "Partner Support",
      aoinstore: "Dedicated Success Team",
      aoinStoreDetail: "1-on-1 growth partnership & strategy",
      competitors: "Generic Automated Support",
      competitorDetail: "Robotic responses with no personal touch",
      icon: Handshake,
    }
  ];

  const testimonials = [
    {
      quote: "Aoinstore transformed our business completely. We went from struggling with high fees to thriving with their partnership approach. The global reach opened markets we never imagined accessing.",
      author: "Sarah Johnson",
      role: "Founder & CEO, StyleHub Fashion",
      company: "StyleHub",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      growth: "300% Revenue Growth",
      period: "6 months"
    },
    {
      quote: "The difference is night and day. Lower fees, better visibility, and actual human support that cares about our success. Our international sales skyrocketed within weeks of joining.",
      author: "Mike Chen",
      role: "CEO & Co-founder, TechCorp Solutions",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      growth: "500% International Sales",
      period: "4 months"
    },
    {
      quote: "Finally, a platform that treats us as true partners, not just another seller number. The dedicated support team genuinely invests in our growth and success story.",
      author: "Emma Davis",
      role: "Owner & Creative Director, GreenLeaf Organics",
      company: "GreenLeaf",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      growth: "250% Market Expansion",
      period: "8 months"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Clear Winner
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            See why smart sellers choose Aoinstore over traditional marketplaces
          </motion.p>
        </motion.div>

        {/* Battle Header with VS Design */}
        <motion.div 
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">
            {/* Aoinstore Side */}
            <motion.div 
              className="flex-1 max-w-md w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10 text-center">
                  {/* Aoinstore Logo */}
                  <motion.div 
                    className="w-32 md:w-40 h-16 md:h-20 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                  >
                    <div className="w-28 md:w-36 h-12 md:h-16 bg-white rounded-2xl flex items-center justify-center">
                        <img 
                      src="https://res.cloudinary.com/do3vxz4gw/image/upload/v1751687784/public_assets_images/public_assets_images_logo.svg" 
                      alt="Aoinstore Logo" 
                      className="w-24 md:w-32 h-12 md:h-16 object-fit rounded-lg"
                    />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Aoinstore</h3>
                  <p className="text-orange-100 text-base md:text-lg mb-4">Partner-First Marketplace</p>
                  
                  <div className="flex items-center justify-center gap-2 bg-white/20 px-3 md:px-4 py-2 rounded-full backdrop-blur-sm">
                    <Crown className="w-4 md:w-5 h-4 md:h-5 text-yellow-300" />
                    <span className="font-semibold text-sm md:text-base">Seller's Choice</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Animated VS Section */}
            <motion.div 
              className="relative mx-4 md:mx-8 z-10"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <div className="relative">
                {/* Background Circle */}
                <div className="w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-white font-black text-lg md:text-2xl tracking-wider">VS</span>
                </div>
                
                {/* Animated Ring */}
                <motion.div
                  className="absolute inset-0 border-2 md:border-4 border-orange-300 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-0 bg-orange-400 rounded-full opacity-20"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            {/* Traditional Platforms Side */}
            <motion.div 
              className="flex-1 max-w-md w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10 text-center">
                  {/* Competitor Logos Grid */}
                  <div className="grid grid-cols-3 gap-2 md:gap-4 w-48 md:w-72 mx-auto mb-4">
                    <motion.div 
                      className="w-14 md:w-20 h-14 md:h-20 bg-white/20 rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotateY: 10 }}
                    >
                      <img 
                        src="https://images.icon-icons.com/729/PNG/512/flipkart_icon-icons.com_62718.png" 
                        alt="Competitor 1" 
                        className="w-10 md:w-16 h-10 md:h-16 object-cover rounded-lg"
                      />
                    </motion.div>
                    <motion.div 
                      className="w-14 md:w-20 h-14 md:h-20 bg-white/20 rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotateY: 10 }}
                    >
                      <img 
                        src="https://asset.watch.impress.co.jp/img/ktw/docs/1450/733/icon_l.jpg" 
                        alt="Competitor 2" 
                        className="w-10 md:w-16 h-10 md:h-16 object-cover rounded-lg"
                      />
                    </motion.div>
                    <motion.div 
                      className="w-14 md:w-20 h-14 md:h-20 bg-white/20 rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotateY: 10 }}
                    >
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/3/33/Meesho_logo.png" 
                        alt="Competitor 3" 
                        className="w-10 md:w-16 h-10 md:h-16 object-cover rounded-lg"
                      />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-200">Traditional Platforms</h3>
                  <p className="text-gray-300 text-base md:text-lg mb-4">Amazon, Flipkart & Others</p>
                  
                  <div className="flex items-center justify-center gap-2 bg-white/10 px-3 md:px-4 py-2 rounded-full">
                    <X className="w-4 md:w-5 h-4 md:h-5 text-red-300" />
                    <span className="font-semibold text-gray-300 text-sm md:text-base">Seller-Unfriendly</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Two-Column Comparison */}
        <motion.div 
          className="mb-16 md:mb-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Aoinstore Column */}
          <motion.div 
            className="bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-3xl p-6 md:p-8 shadow-xl border-2 border-orange-200 relative overflow-hidden"
            whileHover={{ scale: 1.02, borderColor: "rgb(251 146 60)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-full -translate-y-16 md:-translate-y-32 translate-x-16 md:translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-24 md:w-48 h-24 md:h-48 bg-gradient-to-tr from-amber-100/50 to-transparent rounded-full translate-y-12 md:translate-y-24 -translate-x-12 md:-translate-x-24"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-6 md:mb-8">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Aoinstore Advantages</h4>
                <p className="text-orange-600 font-semibold text-sm md:text-base">Built for Seller Success</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 md:space-y-6">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 md:gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <item.icon className="w-5 md:w-6 h-5 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-900 break-words">{item.feature}</h5>
                        <Check className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0" />
                      </div>
                      <p className="text-orange-600 font-semibold text-sm md:text-lg mb-1 break-words">{item.aoinstore}</p>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed break-words">{item.aoinStoreDetail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Badge */}
              <motion.div 
                className="mt-6 md:mt-8 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
                  <TrendingUp className="w-4 md:w-5 h-4 md:h-5" />
                  <span className="font-semibold text-sm md:text-base">Proven Results</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Traditional Platforms Column */}
          <motion.div 
            className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-3xl p-6 md:p-8 shadow-xl border-2 border-gray-300 relative overflow-hidden opacity-90"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-bl from-gray-200/50 to-transparent rounded-full -translate-y-16 md:-translate-y-32 translate-x-16 md:translate-x-32"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-6 md:mb-8">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <X className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">Traditional Platform Issues</h4>
                <p className="text-gray-600 font-semibold text-sm md:text-base">Common Seller Struggles</p>
              </div>

              {/* Issues List */}
              <div className="space-y-4 md:space-y-6">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 md:gap-4 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-gray-500 rounded-xl flex items-center justify-center text-white shadow-md flex-shrink-0">
                      <item.icon className="w-5 md:w-6 h-5 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="text-base md:text-lg font-bold text-gray-700 break-words">{item.feature}</h5>
                        <X className="w-4 md:w-5 h-4 md:h-5 text-red-400 flex-shrink-0" />
                      </div>
                      <p className="text-gray-600 font-semibold text-sm md:text-lg mb-1 break-words">{item.competitors}</p>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed break-words">{item.competitorDetail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Badge */}
              <div className="mt-6 md:mt-8 text-center">
                <div className="inline-flex items-center gap-2 bg-gray-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg opacity-75">
                  <X className="w-4 md:w-5 h-4 md:h-5" />
                  <span className="font-semibold text-sm md:text-base">Limited Growth</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Testimonials */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 md:mb-12">
            <motion.h3 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Success Stories That Speak Volumes
            </motion.h3>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Real results from real partners
            </motion.p>
          </div>

          <div className="relative max-w-5xl mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="relative"
                initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              >
                <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-3xl p-6 md:p-12 shadow-2xl border-2 border-orange-200 relative overflow-hidden">
                  {/* Background Decorations */}
                  <div className="absolute top-0 right-0 w-16 md:w-32 h-16 md:h-32 bg-orange-100/50 rounded-full -translate-y-8 md:-translate-y-16 translate-x-8 md:translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-12 md:w-24 h-12 md:h-24 bg-amber-100/50 rounded-full translate-y-6 md:translate-y-12 -translate-x-6 md:-translate-x-12"></div>
                  
                  <div className="relative z-10">
                    {/* Growth Badge */}
                    <motion.div 
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <TrendingUp className="w-3 md:w-4 h-3 md:h-4" />
                      <span className="break-words">
                        {testimonials[currentTestimonial].growth} in {testimonials[currentTestimonial].period}
                      </span>
                    </motion.div>

                    {/* Star Rating */}
                    <div className="flex justify-center gap-1 mb-4 md:mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                          <Star className="w-5 md:w-7 h-5 md:h-7 text-orange-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="relative mb-6 md:mb-8">
                      <div className="text-4xl md:text-6xl text-orange-300/50 absolute -top-2 md:-top-4 -left-1 md:-left-2">"</div>
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 font-medium leading-relaxed relative z-10 px-4 md:px-8 break-words">
                        {testimonials[currentTestimonial].quote}
                      </p>
                      <div className="text-4xl md:text-6xl text-orange-300/50 absolute -bottom-4 md:-bottom-8 -right-1 md:-right-2 rotate-180">"</div>
                    </div>
                    
                    {/* Author Info */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                      <motion.div 
                        className="relative flex-shrink-0"
                        whileHover={{ scale: 1.1, rotateY: 5 }}
                      >
                        <img 
                          src={testimonials[currentTestimonial].avatar}
                          alt={testimonials[currentTestimonial].author}
                          className="w-16 md:w-20 h-16 md:h-20 rounded-full object-cover shadow-xl border-4 border-white"
                        />
                        <div className="absolute -bottom-2 -right-2 w-6 md:w-8 h-6 md:h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                          <Check className="w-3 md:w-5 h-3 md:h-5 text-white" />
                        </div>
                      </motion.div>
                      
                      <div className="text-center sm:text-left">
                        <p className="text-xl md:text-2xl font-bold text-gray-900 mb-1 break-words">
                          {testimonials[currentTestimonial].author}
                        </p>
                        <p className="text-orange-600 font-semibold text-base md:text-lg mb-1 break-words">
                          {testimonials[currentTestimonial].role}
                        </p>
                        <p className="text-gray-500 font-medium text-sm md:text-base break-words">
                          {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Navigation */}
            <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'w-8 md:w-12 h-3 md:h-4 bg-gradient-to-r from-orange-500 to-amber-500'
                      : 'w-3 md:w-4 h-3 md:h-4 bg-orange-200 hover:bg-orange-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index === currentTestimonial && (
                    <motion.div
                      className="absolute inset-0 bg-white/30 rounded-full"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Trust Indicators */}
        <motion.div 
          className="mt-12 md:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-6 md:p-8 text-white shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { icon: Shield, label: "Secure Platform", value: "Bank-Grade Security" },
                { icon: Zap, label: "Fast Payouts", value: "24h Processing" },
                { icon: Users, label: "Active Partners", value: "10K+ Sellers" },
                { icon: Heart, label: "Partner First", value: "Your Success = Our Success" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 backdrop-blur-sm">
                    <item.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                  </div>
                  <p className="font-bold text-sm md:text-lg mb-1 break-words px-1">{item.value}</p>
                  <p className="text-orange-100 font-medium text-xs md:text-base break-words px-1">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProofAndTrustSection;