import React from 'react';
import { motion } from 'framer-motion';

const WhatWillISellSection = () => {
const products = [
  {
    image: "https://www.vopmart.com/media/catalog/product/cache/ee14c5ab36c97d39d331f867fa3bee63/k/u/kunpeng_50-1.jpg",
    title: "Wireless Bluetooth Gamepad",
    profit: "₹699"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0287/1138/7195/files/E900X_2.jpg?v=1722490661",
    title: "Wireless Gaming Headset",
    profit: "₹2599"
  },
  {
    image: "https://shopatsc.com/cdn/shop/files/SRS-XV500-2500x2500.jpg?v=1708510005",
    title: "Portable Bluetooth Speaker",
    profit: "₹999"
  },
  {
    image: "https://ae01.alicdn.com/kf/S2dc2cb8fea524be4b021092063992bfaZ.jpg",
    title: "Educational Toy for Toddlers",
    profit: "₹299"
  },
  {
    image: "https://ptron.in/cdn/shop/products/61f5CIBmXQS._SL1100.jpg?v=1632972007",
    title: "Multifunction Charging Hub",
    profit: "₹459"
  },
  {
    image: "https://static-01.daraz.pk/p/a586b3c48496a3a2098914eb9d9c10bd.jpg",
    title: "Transparent Smart Watch",
    profit: "₹659"
  },
  {
    image: "https://i5.walmartimages.com/asr/bb7e3cdc-7e52-496c-a84e-8e8b942dabbe.409a6a1cb1db3380bdbb29580ba2bdc3.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    title: "Mini Camera Drone",
    profit: "₹1299"
  },
  {
    image: "https://res.cloudinary.com/jerrick/image/upload/v1686743064/6489a81809df18001d5562ab.jpg",
    title: "Virtual Reality Headset",
    profit: "₹1999"
  },
  {
    image: "https://img.overclockers.co.uk/images/KB-04X-GR/530afdd839afe16a5f19d9b296e03fb9.jpg",
    title: "RGB Mechanical Keyboard",
    profit: "₹459"
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/Pk5ydxYo6ty2Q4SX9vznP6.jpg",
    title: "Smart Fitness Tracker Band",
    profit: "₹2999"
  }
];


  // Duplicate products for seamless loop
  const duplicatedProducts = [...products, ...products];

  return (
    <section className="relative bg-gradient-to-b from-blue-900 to-blue-950 py-16 overflow-hidden">
      <div className="mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What will I sell?
          </h2>
          <p className="text-xl text-gray-300">
            Your store comes pre-loaded with proven best-sellers! Check some examples:
          </p>
        </motion.div>

        {/* Continuous Carousel */}
        <div className="relative mb-16">
          {/* Fade effects on sides */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-950 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-950 to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [`0%`, `-${(products.length * (300 + 24))}px`]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {duplicatedProducts.map((product, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-72 h-96 rounded-2xl overflow-hidden group cursor-pointer"
                >
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Bottom Fade Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Content at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg font-semibold mb-2">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Your profit per sale:</span>
                      <span className="text-lg font-bold text-white bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full">
                        {product.profit}
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <a href="https://aoinstore.com/register-business">
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 193, 7, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-10 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform"
          >
            START SELLING TODAY
          </motion.button>
        </motion.div>
        </a>

      </div>
    </section>
  );
};

export default WhatWillISellSection;