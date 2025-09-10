import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import HeroVideo from "@/assets/Landing2/heroVideo.mp4"
import HeroTicketImg from "@/assets/Landing2/heroTicket.png"

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative flex items-center justify-center overflow-hidden py-16">
      {/* Medium Orange Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600"></div>
      
      {/* Wavy Effects */}
      <div className="absolute inset-0">
        {/* Top Wave */}
        <motion.div
          className="absolute top-0 left-0 w-full h-32 opacity-20"
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V96Z"
              fill="rgba(255, 255, 255, 0.1)"
            />
          </svg>
        </motion.div>

        {/* Bottom Wave */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-32 opacity-15"
          initial={{ x: 100 }}
          animate={{ x: -100 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full rotate-180"
          >
            <path
              d="M0,96L48,80C96,64,192,32,288,32C384,32,480,64,576,80C672,96,768,96,864,80C960,64,1056,32,1152,32C1248,32,1344,64,1392,80L1440,96V120H1392C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V96Z"
              fill="rgba(255, 255, 255, 0.08)"
            />
          </svg>
        </motion.div>

        {/* Middle Wave */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-40 opacity-12"
          initial={{ x: -50 }}
          animate={{ x: 50 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,90.7C672,85,768,75,864,69.3C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V64Z"
              fill="rgba(255, 255, 255, 0.06)"
            />
          </svg>
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full px-3 md:px-32 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                Start your online
                <br />
                <span className="bg-gradient-to-r from-yellow-200 to-yellow-100 bg-clip-text text-transparent drop-shadow-sm">
                  business for FREE
                </span>
                <br />
                today!
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-orange-50 leading-relaxed max-w-lg drop-shadow-md">
                Claim your perfect ecommerce store with hot-selling products!
                <br />
                It will run on autopilot and generate profits for years to come.
              </p>
            </motion.div>

            {/* Ticket Image */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={HeroTicketImg}
                alt="Special Offer Ticket"
                className="rounded-lg h-32 w-80"
              />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-500 hover:to-yellow-400 text-orange-900 font-bold text-xl px-12 py-4 rounded-lg shadow-2xl transition-all duration-300 border-2 border-yellow-500"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                GET ALL FOR FREE
              </motion.button>
            </motion.div>

            {/* Small Text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-orange-100 text-sm drop-shadow-sm">
                Try Sellvia for free for 14 days. $39/month after trial. Cancel anytime
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              
              {/* Video Container */}
              <div className="relative">
                <video
                  ref={videoRef}
                  className="w-full h-96 object-cover rounded-2xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={HeroVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play/Pause Button Overlay */}
                <motion.button
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-300 rounded-2xl"
                  onClick={handlePlayPause}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="bg-white hover:bg-orange-50 rounded-full p-4 shadow-xl border-2 border-orange-200"
                    whileHover={{ scale: 1.1 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, type: "spring" }}
                  >
                    {isPlaying ? (
                      <Pause size={32} className="text-orange-600 ml-1" />
                    ) : (
                      <Play size={32} className="text-orange-600 ml-1" />
                    )}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;