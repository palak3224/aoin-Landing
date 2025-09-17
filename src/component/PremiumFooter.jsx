import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import LogoImg from '@/assets/logo.svg';

const PremiumFooter = () => {
  const footerLinks = [
    { name: 'About Aoinstore', href: '/landing' },
    { name: 'Partner Login', href: 'https://aoinstore.com/register-business' },
    { name: 'Support', href: 'https://aoinstore.com/contact' },
    { name: 'Terms & Policies', href: 'https://aoinstore.com/terms' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
    <div className="px-3 md:px-6 py-12 mt-16">
      <div className="max-w-8xl mx-auto">
        <footer className="rounded-3xl shadow-2xl border-2 border-orange-300 overflow-hidden bg-gradient-to-r from-[#ffe7db] to-white">
          {/* Main Footer Content */}
          <div className="px-6 md:px-12 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              {/* Logo and Brand Section */}
              <div className="lg:col-span-1 space-y-6">
                <div className="space-y-4">
                  <img 
                    src={LogoImg} 
                    alt="Aoinstore Logo" 
                    className="h-12 w-auto object-contain"
                  />
                  <p className="text-gray-600 leading-relaxed max-w-sm">
                    Empowering businesses to grow and scale with our innovative e-commerce platform.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Mail className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="text-sm">auoinstore@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Phone className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="text-sm">+91 9893361102</span>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="lg:col-span-1 space-y-6">
                <h3 className="text-lg font-bold text-gray-900">Quick Links</h3>
                <nav className="space-y-4">
                  {footerLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block text-gray-600 hover:text-orange-600 transition-colors duration-300 font-medium hover:translate-x-1 transform transition-transform"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Social Media and Newsletter */}
              <div className="lg:col-span-1 space-y-6">
                <h3 className="text-lg font-bold text-gray-900">Connect With Us</h3>
                
                {/* Social Media Links */}
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm">Follow us on social media</p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className="bg-orange-100 p-3 rounded-xl text-orange-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:bg-orange-200"
                          aria-label={social.name}
                        >
                          <IconComponent className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-2xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Stay Updated</h4>
                  <p className="text-sm text-gray-600 mb-4">Get the latest updates and offers</p>
                  <div className="flex space-x-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-300 text-sm font-medium">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-orange-200 bg-[#ffe7db] px-12 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-700 text-sm">
                © {new Date().getFullYear()} Aoinstore. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-700">
                <a href="https://aoinstore.com/privacy-policy" className="hover:text-orange-600 transition-colors duration-300">Privacy Policy</a>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <a href="#" className="hover:text-orange-600 transition-colors duration-300">Cookie Policy</a>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <a href="#" className="hover:text-orange-600 transition-colors duration-300">Sitemap</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PremiumFooter;
