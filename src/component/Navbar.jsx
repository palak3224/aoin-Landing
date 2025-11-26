import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeLinkStyle = {
    color: '#ea580c',
    fontWeight: '600',
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <img src="/logo.png" alt="Aoinstore logo" className="h-8" />
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink 
                to="/seller" 
                style={({ isActive }) => isActive ? activeLinkStyle : undefined} 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Sell Online
              </NavLink>
              <NavLink 
                to="/pricing" 
                style={({ isActive }) => isActive ? activeLinkStyle : undefined} 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Pricing & Commission
              </NavLink>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-orange-600 border border-orange-600 rounded hover:bg-orange-50 transition-colors">
                Login
              </button>
              <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors">
                Start Selling
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <nav className="flex flex-col space-y-4">
                <NavLink 
                  to="/seller" 
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined} 
                  className="text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sell Online
                </NavLink>
                <NavLink 
                  to="/pricing" 
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined} 
                  className="text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing & Commission
                </NavLink>
              </nav>
              
              <div className="flex items-center space-x-4">
            <a href="https://aoinstore.com/register-business">
            <button className="px-4 py-2 text-orange-600 border border-orange-600 rounded hover:bg-orange-50 transition-colors">
              Login
            </button>
            </a>
            <a href="https://aoinstore.com/register-business">
            <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors">
              Start Selling
            </button>
            </a>
          </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
