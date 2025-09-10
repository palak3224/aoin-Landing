import React, { useEffect } from 'react';
import HeroImg from '@/assets/hero.png';
import SupHero1Img from '@/assets/sup-hero1.png';
import SupHero2Img from '@/assets/sup-hero2.png';
import SupHero3Img from '@/assets/sup-hero3.png';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';




// Mock hero image for demo
// const HeroImg = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop";

// Utility function to combine class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col min-h-screen items-center justify-center bg-orange-50 dark:bg-orange-900 text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `aurora-background
               absolute -inset-[10px] opacity-50 will-change-transform
               pointer-events-none filter blur-[10px] invert dark:invert-0`,
              showRadialGradient &&
              `aurora-mask`
            )}
            style={{
              backgroundImage: `
                repeating-linear-gradient(100deg, #ffffff 0%, #ffffff 7%, transparent 10%, transparent 12%, #ffffff 16%),
                repeating-linear-gradient(100deg, #f97316 10%, #fb923c 15%, #fdba74 20%, #fcd34d 25%, #f59e0b 30%)
              `,
              backgroundSize: '300%, 200%',
              backgroundPosition: '50% 50%, 50% 50%'
            }}
          >
            <div
              className="aurora-after absolute inset-0 mix-blend-difference"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(100deg, #ffffff 0%, #ffffff 7%, transparent 10%, transparent 12%, #ffffff 16%),
                  repeating-linear-gradient(100deg, #f97316 10%, #fb923c 15%, #fdba74 20%, #fcd34d 25%, #f59e0b 30%)
                `,
                backgroundSize: '200%, 100%',
                backgroundAttachment: 'fixed'
              }}
            ></div>
          </div>

          {/* Dark mode version */}
          <div
            className={cn(
              `aurora-background-dark hidden dark:block
               absolute -inset-[10px] opacity-50 will-change-transform
               pointer-events-none filter blur-[10px]`,
              showRadialGradient &&
              `aurora-mask`
            )}
            style={{
              backgroundImage: `
                repeating-linear-gradient(100deg, #000000 0%, #000000 7%, transparent 10%, transparent 12%, #000000 16%),
                repeating-linear-gradient(100deg, #f97316 10%, #fb923c 15%, #fdba74 20%, #fcd34d 25%, #f59e0b 30%)
              `,
              backgroundSize: '300%, 200%',
              backgroundPosition: '50% 50%, 50% 50%'
            }}
          >
            <div
              className="aurora-after absolute inset-0 mix-blend-difference"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(100deg, #000000 0%, #000000 7%, transparent 10%, transparent 12%, #000000 16%),
                  repeating-linear-gradient(100deg, #f97316 10%, #fb923c 15%, #fdba74 20%, #fcd34d 25%, #f59e0b 30%)
                `,
                backgroundSize: '200%, 100%',
                backgroundAttachment: 'fixed'
              }}
            ></div>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

const HeroHeader = () => {
  useEffect(() => {
    // Add the aurora animation CSS
    const styles = `
      @keyframes aurora {
        0% {
          background-position: 50% 50%, 50% 50%;
        }
        100% {
          background-position: 350% 50%, 350% 50%;
        }
      }

      .aurora-after {
        animation: aurora 60s linear infinite;
      }

      .aurora-mask {
        mask-image: radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%);
        -webkit-mask-image: radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%);
      }

      /* Mobile responsive fixes */
      @media (max-width: 768px) {
        .aurora-mask {
          mask-image: radial-gradient(ellipse at 50% 20%, black 20%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 20%, black 20%, transparent 80%);
        }
      }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);

    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  return (
    <AuroraBackground className="px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Hero Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-16 sm:py-20">

          {/* Left Side - Text Content */}
          <div className="text-left order-2 lg:order-1">
            {/* Hero Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
              Sell Smarter. Go Global.{' '}
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Partner with Aoinstore.
              </span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-orange-600 mb-6 sm:mb-8 leading-relaxed max-w-xl">
              Expand your brand into the U.S., UK, and Australian markets with zero upfront cost and higher margins.
            </p>

            {/* CTA Button */}
            <Link to={"/landing"}>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-orange-50 font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                Apply to Become a Partner
              </button>
            </div>
            </Link>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
              {['Zero Upfront Cost', 'Higher Margins', 'Global Reach', '3 Markets'].map((feature) => (
                <span
                  key={feature}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500/20 text-orange-600 rounded-full text-xs sm:text-sm backdrop-blur-sm border border-orange-400/30 hover:bg-orange-500/30 transition-colors duration-200"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-sm sm:max-w-md">
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-orange-300 mb-1">USA</div>
                <div className="text-orange-200 text-xs">Market</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-amber-300 mb-1">UK</div>
                <div className="text-orange-200 text-xs">Market</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-yellow-300 mb-1">AUS</div>
                <div className="text-orange-200 text-xs">Market</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 p-12 md:p-0">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Main Hero Image */}
              <img
                src={HeroImg}
                alt="Aoinstore Partnership Success"
                className="w-full h-auto rounded-2xl transform hover:scale-105 transition-transform duration-300"
                style={{ objectFit: 'cover' }}
              />

              {/* Supporting Images */}
              <motion.img
  src={SupHero1Img}
  alt="Supporting Top Left"
  className="absolute -top-6 -left-6 w-24 h-36 md:w-36 md:h-60 rounded-lg shadow-lg border-2 border-white"
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
/>

<motion.img
  src={SupHero2Img}
  alt="Supporting Top Right"
  className="absolute -top-6 -right-6 w-24 h-36 md:w-36 md:h-60 rounded-lg shadow-lg border-2 border-white"
  animate={{ x: [0, 20, 0] }}
  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
/>

<motion.img
  src={SupHero3Img}
  alt="Supporting Bottom Left"
  className="absolute -bottom-6 -left-6 w-24 h-36 md:w-36 md:h-60 rounded-lg shadow-lg border-2 border-white"
  animate={{ y: [0, 20, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
/>
            </div>
          </div>


        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 text-orange-600 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Learn More</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default HeroHeader;