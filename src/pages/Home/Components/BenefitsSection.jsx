import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Global Reach",
      emoji: "🌎",
      description: "Get instant access to international buyers and expand beyond local limits."
    },
    {
      title: "Higher Margins",
      emoji: "💰",
      description: "Keep more profits with our low commission structure compared to Amazon/Flipkart."
    },
    {
      title: "Fast & Easy Onboarding",
      emoji: "⚡",
      description: "Upload your catalog and start selling within minutes – no complicated setup."
    },
    {
      title: "Partner Support",
      emoji: "🤝",
      description: "Dedicated brand manager + AI growth tools to help you scale faster."
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Join Aoinstore?
          </h2>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-orange-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/20 transform hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden"
            >
              {/* Premium Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 opacity-0 group-hover:opacity-20 rounded-2xl blur-sm transition-opacity duration-300"></div>
              
              {/* Card Content */}
              <div className="relative z-10">
                {/* Emoji Icon */}
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.emoji}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>

              {/* Premium Shine Effect */}
              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-1000 ease-out"></div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 border-2 border-orange-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your business with Aoinstore?
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-orange-50 font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-orange-500/30">
            Get Started Today
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-amber-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-70"></div>
      </div>
    </section>
  );
};

export default BenefitsSection;