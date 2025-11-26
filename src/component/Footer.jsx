import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: "About Aoinstore",
      links: [
        { name: "About Us", href: "https://aoinstore.com/about" },
        { name: "Careers", href: "https://aoinstore.com/careers" },
        { name: "Press & Media", href: "https://aoinstore.com/press" },
        { name: "Success Stories", href: "https://aoinstore.com/stories" }
      ]
    },
    {
      title: "Sell With Us",
      links: [
        { name: "Start Selling", href: "https://aoinstore.com/register-business" },
        { name: "Seller Dashboard", href: "https://aoinstore.com/seller-panel" },
        { name: "Fees & Pricing", href: "https://aoinstore.com/pricing" },
        { name: "Seller Resources", href: "https://aoinstore.com/seller-resources" },
        { name: "Business Growth", href: "https://aoinstore.com/grow-business" }
      ]
    },
    {
      title: "Help & Support",
      links: [
        { name: "Help Center", href: "https://aoinstore.com/help" },
        { name: "Track Your Order", href: "https://aoinstore.com/track-order" },
        { name: "Returns & Refunds", href: "https://aoinstore.com/return-refund" },
        { name: "Shipping Info", href: "https://aoinstore.com/shipping" },
        { name: "FAQs", href: "https://aoinstore.com/faq" },
        { name: "Contact Support", href: "https://aoinstore.com/contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "https://aoinstore.com/terms" },
        { name: "Privacy Policy", href: "https://aoinstore.com/privacy-policy", target: "_blank" },
        { name: "Cookie Policy", href: "https://aoinstore.com/cookie-policy" },
        { name: "Cancellation Policy", href: "https://aoinstore.com/cancellation-policy" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Aoinstore" className="h-10" />
            </div>
            <p className="text-sm mb-4">
              India's trusted marketplace for sellers. Reach millions of customers with zero commission.
            </p>
            <a href="https://aoinstore.com/register-business">
              <button className="mt-4 px-5 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors font-medium text-sm">
                Start Selling Today
              </button>
            </a>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white mb-2">Get in Touch</p>
              <p className="text-xs">
                <a href="mailto:infoaoinstore@gmail.com" className="hover:text-white">
                  Email: infoaoinstore@gmail.com
                </a>
              </p>
              <p className="text-xs">
                <a href="tel:+919893361162" className="hover:text-white">
                  Phone: +91 9893361162
                </a>
              </p>
            </div>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      target={link.target || "_self"}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center text-sm">
            <p>&copy; 2025 Aoinstore. All rights reserved.</p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;