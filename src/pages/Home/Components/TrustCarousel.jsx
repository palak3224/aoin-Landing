import React from 'react';

const TrustCarousel = () => {
  // Sample company names for first row
  const companies1 = [
    "TechCorp",
    "InnovateLab",
    "GrowthMax",
    "StartupHub",
    "ScaleUp",
    "BusinessPro",
    "MarketLeader",
    "VisionTech",
    "NextGen",
    "FutureWorks",
    "AlphaCorp",
    "BetaLabs"
  ];

  // Sample company names for second row
  const companies2 = [
    "CloudSync",
    "DataFlow",
    "SmartEdge",
    "QuantumLabs",
    "RocketBoost",
    "PeakPerform",
    "EliteTech",
    "PowerDrive",
    "CoreLogic",
    "ByteForce",
    "NeoSoft",
    "ProActive"
  ];

  // Create infinite arrays by duplicating companies multiple times for seamless loop
  const infiniteCompanies1 = [...companies1, ...companies1, ...companies1];
  const infiniteCompanies2 = [...companies2, ...companies2, ...companies2];

  return (
    <div className="bg-orange-500 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-center text-white mb-12">
          Trusted by Growing Brands
        </h3>
        
        {/* Container for both carousels */}
        <div className="space-y-8">
          {/* First Carousel - Right to Left */}
          <div className="relative overflow-hidden">
            {/* Gradient masks for smooth edges */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-orange-500 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-orange-500 to-transparent z-10 pointer-events-none"></div>
            
            {/* First scrolling container */}
            <div 
              className="flex"
              style={{
                animation: 'scrollRight 35s linear infinite',
                width: 'max-content'
              }}
            >
              {infiniteCompanies1.map((company, index) => (
                <div
                  key={`row1-${company}-${index}`}
                  className="flex-shrink-0 mx-6"
                >
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-8 py-4 hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20 cursor-pointer">
                    <p className="text-white font-semibold text-lg whitespace-nowrap tracking-wide">
                      {company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Carousel - Left to Right */}
          <div className="relative overflow-hidden">
            {/* Gradient masks for smooth edges */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-orange-500 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-orange-500 to-transparent z-10 pointer-events-none"></div>
            
            {/* Second scrolling container */}
            <div 
              className="flex"
              style={{
                animation: 'scrollLeft 35s linear infinite',
                width: 'max-content'
              }}
            >
              {infiniteCompanies2.map((company, index) => (
                <div
                  key={`row2-${company}-${index}`}
                  className="flex-shrink-0 mx-6"
                >
                  <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-full px-8 py-4 hover:bg-opacity-25 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-15 cursor-pointer">
                    <p className="text-white font-medium text-lg whitespace-nowrap tracking-wide">
                      {company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes scrollLeft {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TrustCarousel;