import React from 'react';
import { ShoppingBag, DollarSign, CreditCard, Shield, TrendingUp, CheckCircle, XCircle, Truck, RotateCcw, Clock, Wallet, Package, IndianRupee } from 'lucide-react';
import Footer from '../../../component/Footer';

export default function AoinstorePricing() {
  return (
    <div className="min-h-screen bg-white">
      
            {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center w-20 h-20 bg-orange-600 rounded-full md:mx-0 mx-auto">
                  <IndianRupee className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                <span className="text-orange-600">0% Commission</span> Across All Categories
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Aoinstore charges 0% commission on every sale, so you keep your full earnings every time you sell a product. No hidden fees, no surprises.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-gray-700 font-semibold">100% of Your Earnings, Always</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/undraw_wallet_diag.png" 
                alt="Zero Commission Illustration" 
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zero Commission Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-12 text-center text-white shadow-xl">
            <h2 className="text-4xl font-bold mb-4">Keep 100% of Your Revenue</h2>
            <p className="text-xl text-orange-100 mb-8">
              Unlike other platforms that charge 5% to 25% commission, we charge absolutely nothing
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">0%</div>
                <div className="text-orange-100">Commission Fee</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">0%</div>
                <div className="text-orange-100">Registration Fee</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">0%</div>
                <div className="text-orange-100">Listing Fee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No Hidden Fees Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">No Hidden Fees</h2>
            <p className="text-xl text-gray-600">Complete transparency in pricing. What you earn is what you keep.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8 border-t-4 border-orange-600">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">No Registration Fee</h3>
              <p className="text-gray-600 text-center">
                Register as an Aoinstore seller with no account setup cost or product listing fee. Start selling immediately without any upfront investment.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 border-t-4 border-orange-600">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                <CreditCard className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">No Collection Fee</h3>
              <p className="text-gray-600 text-center">
                You keep 100% of your sale price. There are no charges on payment gateway or cash on delivery orders. Every rupee goes to you.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 border-t-4 border-orange-600">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                <XCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">No Penalties</h3>
              <p className="text-gray-600 text-center">
                Cancel orders without the fear of penalties. Aoinstore supports tension-free selling even in case of unavoidable cancellations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Cycle Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fast & Secure Payments</h2>
            <p className="text-xl text-gray-600">Get paid quickly with our transparent payment system</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 bg-orange-600 rounded-lg">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">7-Day Payment Cycle</h3>
                  <p className="text-gray-600 mb-4">
                    The settlement amount is securely deposited into your bank account within 7 days of order delivery, including COD orders.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Example:</span> If your product is delivered on January 1st, payment will be in your account by January 8th.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 bg-orange-600 rounded-lg">
                    <Wallet className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Secure Payments</h3>
                  <p className="text-gray-600 mb-4">
                    Track your deposited balance and upcoming payments directly from your Aoinstore Supplier Panel with complete transparency.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">Real-time payment tracking</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">Direct bank deposits</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">No payment gateway fees</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping & Returns Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shipping & Returns</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and seller-friendly policies</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Easy Shipping</h3>
              <p className="text-gray-600 text-center mb-4">
                Aoinstore handles your shipping and delivery with only 18% GST applicable on shipping charges.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Sell to customers across India</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Access to local couriers</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Set your own prices</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                <RotateCcw className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Hassle-Free Returns</h3>
              <p className="text-gray-600 text-center mb-4">
                Instantly see and manage returns via the Aoinstore Supplier Panel.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Easy return management</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Optimize inventory</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Keep customers happy</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                <Package className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">No RTO Penalties</h3>
              <p className="text-gray-600 text-center mb-4">
                If a customer does not accept delivery (Return To Origin), Aoinstore does not charge a return shipping fee.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Zero RTO charges</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">No penalty fees</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Risk-free selling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Sellers Choose Aoinstore</h2>
            <p className="text-xl text-gray-600">See how we compare to other platforms</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-orange-600">Aoinstore</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Other Platforms</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Commission Rate</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center text-orange-600 font-bold">0%</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">5% - 25%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Registration Fee</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="w-5 h-5 text-gray-400 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Payment Gateway Fee</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="w-5 h-5 text-gray-400 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">RTO Charges</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="w-5 h-5 text-gray-400 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Cancellation Penalty</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="w-5 h-5 text-gray-400 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Payment Cycle</td>
                    <td className="px-6 py-4 text-center text-orange-600 font-semibold">7 Days</td>
                    <td className="px-6 py-4 text-center text-gray-600">15-30 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Selling on Aoinstore Today!
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join the fastest growing e-commerce platform and grow your business online—enjoy 0% commission and reach crores of buyers instantly.
          </p>
          <a href="https://aoinstore.com/register-business">
          <button className="px-8 py-4 bg-white text-orange-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
            Register Now - It's Free
          </button>
          </a>
          <p className="mt-6 text-orange-100">
            Have questions? Contact us at <a href="mailto:infoaoinstore@gmail.com" className="underline font-semibold">infoaoinstore@gmail.com</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}