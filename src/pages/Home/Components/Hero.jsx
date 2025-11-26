import React from 'react';
import { ShoppingBag, Users, TrendingUp, Package, CreditCard, Clock, CheckCircle, Upload, Truck, DollarSign, Headphones } from 'lucide-react';
import Footer from '../../../component/Footer';

export default function AoinstoreLanding() {
  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Sell Online to Crores of Customers at <span className="text-orange-600">0% Commission</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Become an Aoinstore seller and join lakhs of sellers who are growing their business everyday
              </p>
              <a href="https://aoinstore.com/register-business">
              <button className="px-8 py-4 bg-orange-600 text-white text-lg rounded-lg hover:bg-orange-700 transition-colors shadow-lg">
                Start Selling Now
              </button>
              </a>
              <p className="mt-4 text-sm text-gray-500">
                Don't have a GSTIN or have a Composition GSTIN? You can still sell on Aoinstore.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/undraw_web-shopping_xd5k.png" 
                alt="Sell Online Illustration" 
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Lakhs of</h3>
              <p className="text-gray-600">Sellers trust Meesho to sell online</p>
            </div>
            <div className="text-center">
              <ShoppingBag className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Crores of</h3>
              <p className="text-gray-600">Customers buying across India</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Thousands of</h3>
              <p className="text-gray-600">Successful pin codes across India</p>
            </div>
            <div className="text-center">
              <Package className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Hundreds of</h3>
              <p className="text-gray-600">Categories to sell online</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sellers Love Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Suppliers Love Aoinstore
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">0% Commission Fee</h3>
              <p className="text-gray-600">
                Keep 100% of your earnings with 0% commission on all products. No hidden charges.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">7-Day Payment Cycle</h3>
              <p className="text-gray-600">
                Fast payment processing with a 7-day cycle from order delivery including COD orders.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth for Every Supplier</h3>
              <p className="text-gray-600">
                Access to crores of customers and dedicated support to help your business grow.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ease of Doing Business</h3>
              <p className="text-gray-600">
                Cost-effective shipping across India with reliable logistics partners picking up from your location.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Next Day Dispatch Program</h3>
              <p className="text-gray-600">
                Opt for NDD program to increase visibility and get more orders with faster delivery options.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Dedicated supplier support available round the clock to solve all your queries and issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>
          <div className="relative">
            {/* <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-1 bg-orange-200" style={{width: '50%', left: '25%'}}></div> */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative bg-white border-4 border-orange-600" style={{backgroundColor: '#ea580c'}}>
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sign Up for Free</h3>
                <p className="text-gray-600">
                  Register with mobile, email, GSTIN/Enrolment ID, and bank account details
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative bg-white border-4 border-orange-600" style={{backgroundColor: '#ea580c'}}>
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">List Products</h3>
                <p className="text-gray-600">
                  Upload your product catalog on the Supplier Panel. Goes live within 72 hours
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative bg-white border-4 border-orange-600" style={{backgroundColor: '#ea580c'}}>
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Receive & Ship Orders</h3>
                <p className="text-gray-600">
                  Get orders from crores of customers. Our logistics partners handle pickup and delivery
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative bg-white border-4 border-orange-600" style={{backgroundColor: '#ea580c'}}>
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Receive Payments</h3>
                <p className="text-gray-600">
                  Get paid directly to your bank account on the 7th day from order delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What You Need to Get Started
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Mobile Number & Email ID</h3>
                  <p className="text-gray-600">Active contact details for account verification and notifications</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">GSTIN or Enrolment ID/UIN</h3>
                  <p className="text-gray-600">For GST sellers provide GSTIN, for non-GST sellers provide Enrolment ID or UIN</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Active Bank Account</h3>
                  <p className="text-gray-600">Bank account linked with the same GST for secure payment deposits</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Product Catalog</h3>
                  <p className="text-gray-600">High-quality product images and details to list your products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Tips to Grow Your Business
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <Upload className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">List More Products</h3>
              <p className="text-gray-600">
                Upload at least 5-7 product listings in the first few days. Usually takes 5-7 catalogs to start getting orders.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <DollarSign className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Set Competitive Prices</h3>
              <p className="text-gray-600">
                Consider costs and margins for competitive pricing. Use the Price Recommendation Tool to get an edge.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <TrendingUp className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow Trends</h3>
              <p className="text-gray-600">
                List trending products to increase visibility and attract more customers to your store.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Online Business?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join lakhs of sellers and sell your products to crores of customers at 0% commission
          </p>
          <a href="https://aoinstore.com/register-business">
          <button className="px-8 py-4 bg-white text-orange-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
            Start Selling Now
          </button>
          </a>
          <p className="mt-6 text-orange-100">
            Need help? Contact us at <a href="mailto:infoaoinstore@gmail.com" className="underline font-semibold">infoaoinstore@gmail.com</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}