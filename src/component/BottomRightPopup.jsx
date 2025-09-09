import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import popupImg from '../assets/popupImg.png';

export default function BottomRightPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 1 second
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div 
        className={`relative transform transition-all duration-500 ease-out ${
          isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
        }`}
      >
        {/* Main popup container */}
        <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Image */}
          <img
            src={popupImg}
            alt="Popup content"
            className="h-[26rem] object-cover"
          />
          
          {/* Close button */}
          <button
            onClick={closePopup}
            className="absolute top-2 right-2 bg-black bg-opacity-80 hover:bg-opacity-100 text-white rounded-full p-2 transition-all duration-200 hover:scale-110"
            aria-label="Close popup"
          >
            <X size={16} />
          </button>
        </div>
      </div>
      
      {/* Demo button to show popup again */}
      {!isVisible && (
        <button
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 left-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Show Popup Again
        </button>
      )}
    </div>
  );
}