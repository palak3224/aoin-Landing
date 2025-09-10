import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      videoSrc: "https://via.placeholder.com/400x300/000000/ffffff?text=Video+1",
      duration: "0:24",
      quote: "What's your rate, from 1 to 10? I'd rate 11.",
      name: "Ksenia",
      location: "USA"
    },
    {
      id: 2,
      videoSrc: "https://via.placeholder.com/400x300/000000/ffffff?text=Video+2",
      duration: "0:38",
      quote: "You guys literally do everything. It's like having somebody hold your hand.",
      name: "Ruby",
      location: "USA"
    },
    {
      id: 3,
      videoSrc: "https://via.placeholder.com/400x300/000000/ffffff?text=Video+3",
      duration: "0:57",
      quote: "It's not just about the money for me. It feels like I bought a lifestyle.",
      name: "Miandra",
      location: "New Zealand"
    },
    {
      id: 4,
      videoSrc: "https://via.placeholder.com/400x300/000000/ffffff?text=Video+4",
      duration: "1:12",
      quote: "The support team is amazing. They help you with everything you need.",
      name: "James",
      location: "Canada"
    },
    {
      id: 5,
      videoSrc: "https://via.placeholder.com/400x300/000000/ffffff?text=Video+5",
      duration: "0:45",
      quote: "I never thought I could run my own business, but here I am!",
      name: "Sarah",
      location: "Australia"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Don't take our word for it, check why
            <br />
            1,000,000+ store owners love us:
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            disabled={currentIndex + 3 >= testimonials.length}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-6"
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <AnimatePresence mode="wait">
                {getVisibleTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.id}-${currentIndex}`}
                    className="flex-shrink-0 w-full md:w-1/3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                      
                      {/* Video Container */}
                      <div className="relative aspect-video bg-gray-900 rounded-t-2xl overflow-hidden">
                        <video
                          className="w-full h-full object-cover"
                          poster={testimonial.videoSrc}
                          controls={false}
                        >
                          <source src={testimonial.videoSrc} type="video/mp4" />
                        </video>
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                          <button className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all duration-300">
                            <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
                          </button>
                        </div>

                        {/* Video Duration */}
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                          {testimonial.duration}
                        </div>

                        {/* Video Controls Bar */}
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 h-2">
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                            <button className="text-white hover:text-orange-400 transition-colors">
                              <Play size={12} />
                            </button>
                            <span className="text-white text-xs">{testimonial.duration}</span>
                          </div>
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                            <button className="text-white hover:text-orange-400 transition-colors">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                              </svg>
                            </button>
                            <button className="text-white hover:text-orange-400 transition-colors">
                              ⋮
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <blockquote className="text-lg text-gray-800 mb-4 leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-black">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                Math.floor(currentIndex / 3) === index 
                  ? 'bg-orange-500' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;