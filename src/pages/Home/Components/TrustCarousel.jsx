import React, { useState, useEffect } from 'react';

const TrustCarousel = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // E-commerce focused company names for first row
  const companies1 = [
    "ShopCentral",
    "MarketPlace Pro",
    "TradePath",
    "CommerceHub",
    "VendorLink",
    "BuyNow Solutions",
    "RetailMax",
    "E-Trade Global",
    "SellSmart",
    "MegaMart",
    "QuickSell",
    "StoreFront Plus"
  ];

  // E-commerce focused company names for second row  
  const companies2 = [
    "OnlineVendor",
    "DigitalBazaar",
    "FastCheckout",
    "PayEasy",
    "ShopStream",
    "VendorNet",
    "EcomGrow",
    "TradeWorks",
    "SaleForce",
    "BuyBridge",
    "MarketSync",
    "CommercePro"
  ];

  // Third row for more visual depth
  const companies3 = [
    "GlobalTrade",
    "SmartVendor",
    "EasyCommerce",
    "TradeMaster",
    "ShopWise",
    "VendorHub",
    "QuickTrade",
    "BuyFast",
    "SellEasy",
    "MarketEdge",
    "CommerceLink",
    "TradeBoost"
  ];

  // Create infinite arrays by duplicating companies multiple times
  const infiniteCompanies1 = [...companies1, ...companies1, ...companies1, ...companies1];
  const infiniteCompanies2 = [...companies2, ...companies2, ...companies2, ...companies2];
  const infiniteCompanies3 = [...companies3, ...companies3, ...companies3, ...companies3];

  const handleMouseEnter = (company, rowIndex, itemIndex) => {
    setHoveredItem(`${company}-${rowIndex}-${itemIndex}`);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 py-12 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-10 left-20 w-96 h-96 bg-gradient-to-r from-orange-300/20 to-amber-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-l from-orange-400/25 to-amber-400/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-orange-200/15 to-amber-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative ">
        {/* Enhanced Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-6 px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <span className="text-white/90 font-bold text-sm uppercase tracking-widest">
              Trusted Partnership
            </span>
          </div>
          
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="block">Trusted by</span>
            <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
              Growing Brands
            </span>
          </h3>
          
          {/* <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful vendors who trust our platform to grow their business
          </p> */}
          
          {/* Stats */}

        </div>
        
        {/* Container for all three carousels */}
        <div className={`space-y-6 transform transition-all duration-1500 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
          {/* First Carousel - Right to Left (Fastest) */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-orange-500 via-orange-500/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-orange-500 via-orange-500/80 to-transparent z-10 pointer-events-none"></div>
            
            <div 
              className="flex"
              style={{
                animation: 'scrollRight 30s linear infinite',
                width: 'max-content'
              }}
            >
              {infiniteCompanies1.map((company, index) => (
                <div
                  key={`row1-${company}-${index}`}
                  className="flex-shrink-0 mx-4"
                  onMouseEnter={() => handleMouseEnter(company, 1, index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`
                    relative bg-white/15 backdrop-blur-md rounded-2xl px-8 py-5 
                    transition-all duration-500 transform hover:scale-110 
                    border border-white/20 cursor-pointer group overflow-hidden
                    ${hoveredItem === `${company}-1-${index}` ? 'bg-white/25 shadow-2xl' : 'hover:bg-white/20'}
                  `}>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <p className="relative text-white font-bold text-lg whitespace-nowrap tracking-wide group-hover:text-orange-100 transition-colors">
                      {company}
                    </p>
                    
                    {/* Subtle bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Carousel - Left to Right (Medium Speed) */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-orange-500 via-orange-500/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-orange-500 via-orange-500/80 to-transparent z-10 pointer-events-none"></div>
            
            <div 
              className="flex"
              style={{
                animation: 'scrollLeft 40s linear infinite',
                width: 'max-content'
              }}
            >
              {infiniteCompanies2.map((company, index) => (
                <div
                  key={`row1-${company}-${index}`}
                  className="flex-shrink-0 mx-4"
                  onMouseEnter={() => handleMouseEnter(company, 1, index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`
                    relative bg-white/15 backdrop-blur-md rounded-2xl px-8 py-5 
                    transition-all duration-500 transform hover:scale-110 
                    border border-white/20 cursor-pointer group overflow-hidden
                    ${hoveredItem === `${company}-1-${index}` ? 'bg-white/25 shadow-2xl' : 'hover:bg-white/20'}
                  `}>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <p className="relative text-white font-bold text-lg whitespace-nowrap tracking-wide group-hover:text-orange-100 transition-colors">
                      {company}
                    </p>
                    
                    {/* Subtle bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Third Carousel - Right to Left (Slowest) */}
          {/* <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-orange-500 via-orange-500/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-orange-500 via-orange-500/80 to-transparent z-10 pointer-events-none"></div>
            
            <div 
              className="flex"
              style={{
                animation: 'scrollRight 50s linear infinite',
                width: 'max-content'
              }}
            >
              {infiniteCompanies3.map((company, index) => (
                <div
                  key={`row3-${company}-${index}`}
                  className="flex-shrink-0 mx-4"
                  onMouseEnter={() => handleMouseEnter(company, 3, index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`
                    relative bg-white/8 backdrop-blur-md rounded-xl px-6 py-3 
                    transition-all duration-500 transform hover:scale-110 
                    border border-white/10 cursor-pointer group overflow-hidden
                    ${hoveredItem === `${company}-3-${index}` ? 'bg-white/25 shadow-2xl' : 'hover:bg-white/20'}
                  `}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <p className="relative text-white font-medium text-sm whitespace-nowrap tracking-wider group-hover:text-orange-100 transition-colors">
                      {company}
                    </p>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1500 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-white/70 text-lg mb-6">Join our growing community of successful vendors</p>
          <button className="group relative bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold px-10 py-4 rounded-2xl border border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            <span className="relative z-10">Start Selling Today</span>
          </button>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        
        @keyframes scrollLeft {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Pause animation on hover for better UX */
        .carousel-row:hover div[style*="animation"] {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TrustCarousel;