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
  Target
} from "lucide-react";

const AnimatedComparisonBattle = () => {
  const [currentRound, setCurrentRound] = useState(0);
  const [aoinstoreScore, setAoinstoreScore] = useState(0);
  const [competitorScore, setCompetitorScore] = useState(0);
  const [showWinner, setShowWinner] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const battles = [
    {
      feature: "Commission Fees",
      aoinstore: "Only 5-8% fees",
      competitor: "Heavy 15-20% fees",
      icon: DollarSign,
      aoinstoreWins: true
    },
    {
      feature: "Brand Visibility",
      aoinstore: "Premium showcase",
      competitor: "Lost in millions of listings",
      icon: Eye,
      aoinstoreWins: true
    },
    {
      feature: "Global Reach",
      aoinstore: "180+ countries instantly",
      competitor: "Limited regional access",
      icon: Globe,
      aoinstoreWins: true
    },
    {
      feature: "Partner Support",
      aoinstore: "Dedicated success team",
      competitor: "Generic automated support",
      icon: Handshake,
      aoinstoreWins: true
    }
  ];

  useEffect(() => {
    const startBattle = () => {
      if (currentRound < battles.length) {
        setIsAnimating(true);
        
        // Show the battle after 1 second
        setTimeout(() => {
          if (battles[currentRound].aoinstoreWins) {
            setAoinstoreScore(prev => prev + 1);
          } else {
            setCompetitorScore(prev => prev + 1);
          }
          setCurrentRound(prev => prev + 1);
          setIsAnimating(false);
        }, 2000);
      } else {
        // Show winner
        setTimeout(() => {
          setShowWinner(true);
        }, 1000);
        
        // Reset after showing winner
        setTimeout(() => {
          setCurrentRound(0);
          setAoinstoreScore(0);
          setCompetitorScore(0);
          setShowWinner(false);
        }, 4000);
      }
    };

    const timer = setTimeout(startBattle, 1000);
    return () => clearTimeout(timer);
  }, [currentRound, showWinner]);

  const currentBattle = battles[currentRound];
  const progressPercentage = (currentRound / battles.length) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Scoreboard */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 mb-8 shadow-xl border border-orange-100">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Aoinstore Score */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Aoinstore</h3>
              <motion.div 
                className="text-4xl font-bold"
                key={aoinstoreScore}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
              >
                {aoinstoreScore}
              </motion.div>
            </div>
          </div>

          {/* VS & Progress */}
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-600 mb-4">VS</div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-orange-500 to-amber-500 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Round {currentRound} of {battles.length}
            </p>
          </div>

          {/* Competitor Score */}
          <div className="text-center">
            <div className="bg-gray-500 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Amazon / FLipkart</h3>
              <motion.div 
                className="text-4xl font-bold"
                key={competitorScore}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
              >
                {competitorScore}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Battle Arena */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-100 min-h-[300px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {showWinner ? (
            <motion.div
              key="winner"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Star className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">🏆 Winner!</h3>
              <p className="text-2xl font-semibold text-orange-600 mb-2">Aoinstore</p>
              <p className="text-lg text-gray-600">The clear choice for sellers</p>
            </motion.div>
          ) : currentBattle ? (
            <motion.div
              key={currentRound}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="w-full"
            >
              {/* Battle Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <currentBattle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{currentBattle.feature}</h3>
              </div>

              {/* Battle Statements */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Aoinstore Statement */}
                <motion.div
                  className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200"
                  initial={{ opacity: 1, scale: 1 }}
                  animate={
                    isAnimating && currentBattle.aoinstoreWins
                      ? { 
                          backgroundColor: ["rgb(255 237 213)", "rgb(255 247 237)", "rgb(255 237 213)"],
                          scale: [1, 1.05, 1],
                          borderColor: ["rgb(251 146 60)", "rgb(245 158 11)", "rgb(251 146 60)"]
                        }
                      : {}
                  }
                  transition={{ duration: 1, repeat: isAnimating ? 2 : 0 }}
                >
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Aoinstore</h4>
                    <p className="text-lg text-orange-600 font-semibold">{currentBattle.aoinstore}</p>
                    {isAnimating && currentBattle.aoinstoreWins && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-4"
                      >
                        <Check className="w-8 h-8 text-green-500 mx-auto" />
                        <p className="text-green-600 font-semibold mt-2">Winner!</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Competitor Statement */}
                <motion.div
                  className={`rounded-2xl p-6 border-2 transition-all duration-1000 ${
                    isAnimating && currentBattle.aoinstoreWins 
                      ? 'bg-gray-100 border-gray-300' 
                      : 'bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200'
                  }`}
                  initial={{ opacity: 1 }}
                  animate={
                    isAnimating && currentBattle.aoinstoreWins
                      ? { opacity: 0.5 }
                      : {}
                  }
                  transition={{ duration: 1, delay: 1 }}
                >
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-700 mb-3">Competitors</h4>
                    <p className={`text-lg font-semibold transition-colors duration-1000 ${
                      isAnimating && currentBattle.aoinstoreWins 
                        ? 'text-gray-500' 
                        : 'text-orange-600'
                    }`}>
                      {currentBattle.competitor}
                    </p>
                    {isAnimating && currentBattle.aoinstoreWins && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-4"
                      >
                        <X className="w-8 h-8 text-red-400 mx-auto" />
                        <p className="text-red-500 font-semibold mt-2">Not enough</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500"
            >
              <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-xl">Preparing battle...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const ProofAndTrustSection = () => {
  // Extended brand list for infinite carousel
  const partnerBrands = [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop&crop=center" },
    { name: "StyleHub", logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=100&h=100&fit=crop&crop=center" },
    { name: "GreenLeaf", logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop&crop=center" },
    { name: "ModernCraft", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center" },
    { name: "UrbanTrend", logo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=center" },
    { name: "EliteGoods", logo: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=center" },
    { name: "FreshMart", logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?w=100&h=100&fit=crop&crop=center" },
    { name: "TechFlow", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center" }
  ];

  // Duplicate for seamless infinite scroll
  const infiniteBrands = [...partnerBrands, ...partnerBrands];

  const comparisonData = [
    {
      feature: "Commission Fees",
      aoinstore: "5-8% Low Fees",
      aoinStoreDetail: "Keep more of your profits",
      competitors: "15-20% High Fees",
      competitorDetail: "Heavy commission cuts",
      icon: DollarSign,
      aoinstoreAdvantage: true
    },
    {
      feature: "Brand Visibility",
      aoinstore: "Premium Showcase",
      aoinStoreDetail: "Stand out from the crowd",
      competitors: "Lost in Crowd",
      competitorDetail: "Millions of competing listings",
      icon: Eye,
      aoinstoreAdvantage: true
    },
    {
      feature: "Global Reach",
      aoinstore: "Worldwide Access",
      aoinStoreDetail: "180+ countries instantly",
      competitors: "Limited Regions",
      competitorDetail: "Geographic restrictions",
      icon: Globe,
      aoinstoreAdvantage: true
    },
    {
      feature: "Partner Support",
      aoinstore: "Dedicated Success Team",
      aoinStoreDetail: "1-on-1 growth partnership",
      competitors: "Generic Support",
      competitorDetail: "Automated responses only",
      icon: Handshake,
      aoinstoreAdvantage: true
    }
  ];

  const testimonials = [
    {
      quote: "Within weeks of joining Aoinstore, we started seeing orders from international markets we never reached before.",
      author: "Sarah Johnson",
      role: "Founder, StyleHub",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "The lower fees and better visibility helped us grow our revenue by 300% in just 6 months.",
      author: "Mike Chen",
      role: "CEO, TechCorp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "Finally, a platform that treats us as partners, not just another seller. The support is incredible.",
      author: "Emma Davis",
      role: "Owner, GreenLeaf",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-20 px-6 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Proof & Trust
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join successful brands already growing with Aoinstore
          </motion.p>
        </div>

        {/* Infinite Brand Carousel */}

        {/* Enhanced Comparison Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Aoinstore?
            </h3>
            <p className="text-lg text-gray-600">
              See the clear advantage over traditional marketplaces
            </p>
          </div>

          <div className="grid gap-8">
            {/* Platform Headers */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="relative bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 text-white shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold mb-2">Aoinstore</div>
                  <p className="text-orange-100">Partner-First Marketplace</p>
                  <div className="mt-4 inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm">
                    <Star className="w-4 h-4" />
                    Recommended Choice
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative bg-gray-500 rounded-2xl p-8 text-white shadow-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold mb-2 text-gray-200">Traditional Platforms</div>
                  <p className="text-gray-300">Amazon, Flipkart & Others</p>
                  <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                    <X className="w-4 h-4" />
                    Seller-Unfriendly
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Comparison Items */}
            <div className="space-y-4">
              {comparisonData.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 shadow-lg border border-orange-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Aoinstore Side */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-lg font-semibold text-gray-900">{item.feature}</h4>
                          <Check className="w-5 h-5 text-green-500" />
                        </div>
                        <p className="text-orange-600 font-semibold text-lg">{item.aoinstore}</p>
                        <p className="text-gray-600 text-sm">{item.aoinStoreDetail}</p>
                      </div>
                    </div>

                    {/* Competitors Side */}
                    <div className="flex items-center gap-4 opacity-75">
                      <div className="w-12 h-12 bg-gray-400 rounded-xl flex items-center justify-center text-white shadow-md">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-lg font-medium text-gray-700">{item.feature}</h4>
                          <X className="w-5 h-5 text-red-400" />
                        </div>
                        <p className="text-gray-600 font-medium text-lg">{item.competitors}</p>
                        <p className="text-gray-500 text-sm">{item.competitorDetail}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary Card */}
            <motion.div 
              className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white text-center shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-2">The Clear Winner</h4>
              <p className="text-orange-100 text-lg">
                Higher profits, better visibility, and genuine partnership support
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            What Our Partners Say
          </h3>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-12 shadow-xl border border-orange-100"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
              >
                {/* Star Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-orange-400 fill-current" />
                  ))}
                </div>

                <div className="text-6xl text-orange-300 mb-6">"</div>
                <p className="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed mb-8">
                  {testimonials[currentTestimonial].quote}
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].author}
                    className="w-16 h-16 rounded-full object-cover shadow-lg"
                  />
                  <div className="text-left">
                    <p className="text-lg font-semibold text-gray-900">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-orange-600 font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-orange-500 w-8'
                      : 'bg-orange-200 hover:bg-orange-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-orange-500" />
              <span className="font-medium">Secure Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-orange-500" />
              <span className="font-medium">Fast Payouts</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-orange-500" />
              <span className="font-medium">Growth Focused</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-6 h-6 text-orange-500" />
              <span className="font-medium">Partner First</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProofAndTrustSection;