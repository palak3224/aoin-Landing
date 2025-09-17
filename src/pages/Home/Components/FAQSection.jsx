import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, CreditCard, Wallet, Store, MessageCircle, Sparkles } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Start with first FAQ open

  const faqs = [
    {
      question: "Is there any upfront cost?",
      answer: "No. You can list and sell for free. We believe in empowering businesses to grow without barriers, so there are no hidden fees or upfront charges to get started on our platform.",
      icon: CreditCard
    },
    {
      question: "How will I get paid?",
      answer: "Secure payouts directly to your bank in your local currency. Our payment system ensures fast, reliable, and secure transfers with real-time tracking and detailed transaction history.",
      icon: Wallet
    },
    {
      question: "Can small shops join?",
      answer: "Yes. We welcome both independent shops and established D2C brands. Whether you're just starting out or scaling up, our platform is designed to support businesses at every stage of growth.",
      icon: Store
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-orange-100 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-200 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-50 rounded-full opacity-40 blur-lg"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-4 rounded-2xl shadow-lg transform -rotate-3">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <div className="ml-3">
              <Sparkles className="w-6 h-6 text-orange-500" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Frequently Asked
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about getting started with our platform. 
            Can't find what you're looking for? We're here to help!
          </p>
        </div>

        {/* Enhanced FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`group border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-orange-300 shadow-2xl shadow-orange-100 bg-gradient-to-r from-orange-50 to-orange-25' 
                    : 'border-gray-200 hover:border-orange-200 shadow-lg hover:shadow-xl'
                } transform hover:-translate-y-1`}
              >
                <button
                  className="w-full px-8 py-6 text-left transition-all duration-300 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl transition-all duration-300 ${
                        isOpen 
                          ? 'bg-orange-600 shadow-lg shadow-orange-200' 
                          : 'bg-orange-100 group-hover:bg-orange-200'
                      }`}>
                        <IconComponent className={`w-6 h-6 transition-colors duration-300 ${
                          isOpen ? 'text-white' : 'text-orange-600'
                        }`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${
                      isOpen 
                        ? 'bg-orange-600 shadow-lg' 
                        : 'bg-orange-100 group-hover:bg-orange-200'
                    }`}>
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-white" />
                      ) : (
                        <Plus className="w-5 h-5 text-orange-600" />
                      )}
                    </div>
                  </div>
                </button>
                
                {/* Enhanced Answer Section */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8">
                    <div className="border-t border-orange-200 pt-6">
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-16 text-center">
          <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-3xl p-10 shadow-2xl shadow-orange-200">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-white bg-opacity-10 rounded-3xl"></div>
            <div className="absolute top-4 right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white bg-opacity-5 rounded-full blur-lg"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-white mr-2" />
                <Sparkles className="w-6 h-6 text-orange-200" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-orange-100 mb-8 text-lg max-w-md mx-auto leading-relaxed">
                Our expert support team is ready to help you succeed. Get personalized assistance within minutes.
              </p>
              <a href="https://aoinstore.com/register-business" target="_blank" rel="noopener noreferrer">
              <button className="group bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center mx-auto space-x-2">
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Contact Support</span>
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;