import React, { useState } from 'react';
import { ShoppingBag, Users, TrendingUp, Package, CheckCircle, Upload, Truck, DollarSign, MapPin, Target, BarChart3, Award, Star, X } from 'lucide-react';
import Footer from '../../../component/Footer';

export default function AoinSellerPage() {

  const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = [
    {
      id: 1,
      icon: Target,
      title: "How to Register on Aoinstore?",
      description: "Join Aoinstore to sell all of India online. Become a supplier with just a mobile number, active bank account and GSTIN to start online selling today.",
      videoUrl: "https://res.cloudinary.com/ddnb10zkq/video/upload/v1764162695/Aoin_video_bgrafb.mp4"
    },
    {
      id: 2,
      icon: Package,
      title: "Uploading Documents and Get Verification",
      description: "Learn how to upload your documents and complete the verification process to start selling on Aoinstore platform.",
      videoUrl: "https://res.cloudinary.com/ddnb10zkq/video/upload/v1764162688/2nd_part_f9uoco.mp4"
    },
    {
      id: 3,
      icon: BarChart3,
      title: "Listing Products on Aoinstore",
      description: "Understand listing on Aoinstore supplier panel with this end-to-end video guide. Upload your product catalog and sell online to lakhs of orders a day.",
      videoUrl: "https://res.cloudinary.com/ddnb10zkq/video/upload/v1764162631/WhatsApp_Video_2025-11-26_at_18.39.04_qjb2s9.mp4"
    }
  ];


  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-gray-600 mb-3 font-medium">Learn How to Sell Online</p>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Become an AOIN seller to start <span className="text-orange-600">selling your products online</span> at 0% commission
              </h1>
              {/* <div className="bg-orange-600 text-white inline-block px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                NEW BENEFITS
              </div> */}
              <p className="text-gray-700 mb-8">
                Don't have a GSTIN or have a Composition GSTIN? You can still sell on AOIN.
              </p>
              <a href="https://aoinstore.com/register-business">
              <button className="px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg">
                Start Selling Now
              </button>
              </a>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://res.cloudinary.com/ddnb10zkq/image/upload/v1764158271/1_kluob4.jpg" 
                alt="Seller with packages" 
                className="w-full max-w-lg rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Sell Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Sell Your Products On AOIN?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-3">0%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commission</h3>
              <p className="text-gray-600">Sell products online with 0% commission and no referral fee for a hassle-free selling experience.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-3">18.7+</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Crores of Customers</h3>
              <p className="text-gray-600">Access to 18.7+ crore customers across India for all types of products from 100+ Categories.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <MapPin className="w-12 h-12 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Delivering Pan-India</h3>
              <p className="text-gray-600">Sell to customers across 28,000+ pin codes in 19,500+ cities in states all over India.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Truck className="w-12 h-12 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable Shipping</h3>
              <p className="text-gray-600">Get your delivery courier charges as low as Rs 25/500gm for the shortest delivery distance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supplier Testimonials */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Why Suppliers Sell on Aoinstore?
          </h2>
          <p className="text-center text-gray-600 mb-12">Lakhs of sellers sell products online on Aoinstore</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-20 h-20 text-orange-600" />
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">▶</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Celebrity and Merchandise</h3>
                <p className="text-sm text-gray-700 mb-2 font-semibold">Celebrity Club, Kolkata</p>
                <p className="text-sm text-gray-600">
                  The biggest advantage of selling on AOIN is the superb reach all over India. Second would be the product recommendation tool which has worked wonders for our business.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="w-20 h-20 text-orange-600" />
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">▶</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Fragrances</h3>
                <p className="text-sm text-gray-700 mb-2 font-semibold">Samridhi Design, Delhi</p>
                <p className="text-sm text-gray-600">
                  AOIN has made my business quite famous in places. Managing and growing business on the app was simple with 0 penalties to pay, easy registration and 7-day payment cycle.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrendingUp className="w-20 h-20 text-orange-600" />
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">▶</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Knit and Woven</h3>
                <p className="text-sm text-gray-700 mb-2 font-semibold">Smartees, Tiruppur</p>
                <p className="text-sm text-gray-600">
                  Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to AOIN's insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* How to Sell Online */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
      How to Sell Your Products Online?
    </h2>

    <div className="space-y-20">

      {/* STEP 1 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
              1
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Register as an AOIN Seller</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Create an account on AOIN and list the products you want to sell online. All you need for AOIN seller registration is an active bank account and your GSTIN number (for GST sellers) or Enrolment ID / UIN (for non-GST sellers).
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md h-96 aspect-square bg-white rounded-xl shadow-md flex items-center justify-center p-4">
            <img
              src="https://res.cloudinary.com/ddnb10zkq/image/upload/v1764158487/sign_up_wsyyub.png"
              alt="Register as seller"
              className="w-full h-full object-fit"
            />
          </div>
        </div>
      </div>

      {/* STEP 2 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex justify-center">
          <div className="w-full max-w-md h-96 aspect-square bg-white rounded-xl shadow-md flex items-center justify-center p-4">
            <img
              src="https://res.cloudinary.com/ddnb10zkq/image/upload/v1764158808/List_Products_zubdoy.png"
              alt="Upload catalog"
              className="w-full h-full object-fit"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
              2
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Upload Catalog and Receive Orders</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Once registered, upload your product catalog on the AOIN Supplier Panel and start selling. Catalogs go live in 72 hours. Upload high quality images and detailed descriptions to attract customers.
          </p>
        </div>
      </div>

      {/* STEP 3 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
              3
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Shipping & Order Delivery</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            AOIN offers easy, affordable, reliable delivery. Our logistics partners pick up products from your location and deliver them to customers nationwide. Track all shipments in real-time.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md h-96 aspect-square rounded-xl shadow-md flex items-center justify-center p-4">
            <img
              src="https://res.cloudinary.com/ddnb10zkq/image/upload/v1764159986/Receive_Ship_Orders_qnyt08.png"
              alt="Shipping delivery"
              className="w-full h-full object-fit"
            />
          </div>
        </div>
      </div>

      {/* STEP 4 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex justify-center">
          <div className="w-full max-w-md h-96 aspect-square rounded-xl shadow-md flex items-center justify-center p-4">
            <img
              src="https://res.cloudinary.com/ddnb10zkq/image/upload/v1764161055/Receive_Payments_ccnug5.png"
              alt="Receive payment"
              className="w-full h-full object-fit"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
              4
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Receive Payment in Your Bank Account</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Payment is deposited directly into your bank account with a 7-day payment cycle from the order delivery date. COD orders included. Safe and secure payments guaranteed.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* Learn How to Sell */}
<section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Learn How to Sell Your Products on Aoinstore
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video) => {
              return (
                <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48 bg-black group cursor-pointer" onClick={() => setSelectedVideo(video)}>
                    <video
                      src={video.videoUrl}
                      className="w-full h-full object-cover"
                      muted
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all"></div>
                    <button
                      onClick={() => setSelectedVideo(video)}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors shadow-lg">
                        <span className="text-white font-bold text-2xl ml-1">▶</span>
                      </div>
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3">{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <div className="p-4">
              <h3 className="text-white text-xl font-bold mb-4">{selectedVideo.title}</h3>
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="w-full rounded"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Grow Your Business */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            How to Grow Your Online Selling Business on Aoinstore?
          </h2>
          <p className="text-center text-gray-600 mb-12">
            After you start your online business, its time to scale and grow your online business with these simple tips!
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Advertisements</h3>
              <p className="text-sm text-gray-600">
                Advertise your products using AOIN Ads to increase reach and visibility. Requires Regular GSTIN for advertising.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Product Recommendations</h3>
              <p className="text-sm text-gray-600">
                Set competitive prices and receive personalized product recommendations to optimize your catalog for better sales.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Price Recommendation</h3>
              <p className="text-sm text-gray-600">
                We give insights on market recommendations for all product categories to help you price your products competitively.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quality Dashboard</h3>
              <p className="text-sm text-gray-600">
                Use the Quality Dashboard for actionable insights to reduce returns, improve customer satisfaction and grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Popular Categories to Sell Online
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700 font-medium">Sell Sarees Online</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700 font-medium">Sell Jewellery Online</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700 font-medium">Sell T-shirts Online</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700 font-medium">Sell Shirts Online</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700 font-medium">Sell Watches Online</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700 font-medium">Sell Electronics Online</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700 font-medium">Sell Clothes Online</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700 font-medium">Sell Socks Online</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Aoinstore Supplier Support Available 24/7
          </h2>
          <p className="text-gray-600 mb-8">
            Aoinstore supplier support is available to solve all your doubts and issues before and after you start your online selling business.
          </p>
          <a href="https://aoinstore.com/register-business">
          <button className="px-8 py-3 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors font-semibold">
            Contact us at <span className="underline">infoaoinstore@gmail.com</span>
          </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}