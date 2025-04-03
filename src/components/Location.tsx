import React, { useState } from 'react';
import { MapPin, Anchor, Sun, Home, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import '@/styles/location.css';
import Divider from './ui/Divider';

const Location = () => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  
  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({
      ...prev,
      [index]: true
    }));
  };

  // High-quality images of Baleal, Portugal with surfing and oceanfront accommodations
  const images = [
    "/assets/images/IMG_8229.JPG", // Surfing action shot
    "/assets/images/hotel8 2.jpg", // Hotel room interior
    "/assets/images/TNL_9631 2.jpg", // Surf students on beach
    "/assets/images/5.JPG", // Meditation at sunset
  ];

  return (
    <section id="location" className="py-20 bg-gradient-to-b from-white to-ocean-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="ocean-title flex items-center justify-center">
            <MapPin className="w-8 h-8 mr-2 text-ocean-600" />
            Португалія, Балеал — найкращий серф-спот Європи
          </h2>
          <Divider />
          <div className="mt-8 mb-12 max-w-2xl mx-auto">
            <ul className="space-y-3 text-center">
              <li className="flex items-center justify-center">
                <span className="flex-shrink-0 text-ocean-600 mr-2">✦</span>
                <span>Приватне розміщення в одному з найкращих готелів Балеалу</span>
              </li>
              <li className="flex items-center justify-center">
                <span className="flex-shrink-0 text-ocean-600 mr-2">✦</span>
                <span>2 хв до океану</span>
              </li>
              <li className="flex items-center justify-center">
                <span className="flex-shrink-0 text-ocean-600 mr-2">✦</span>
                <span>Смачні і корисні сніданки</span>
              </li>
              <li className="flex items-center justify-center">
                <span className="flex-shrink-0 text-ocean-600 mr-2">✦</span>
                <span>Тиша та гармонія</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Highlight badge */}
        <div className="max-w-3xl mx-auto bg-ocean-50 text-ocean-800 p-6 rounded-lg border border-ocean-100 mb-12 text-center fade-in-section transition-all duration-300">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-6 h-6 mr-3 text-ocean-600" />
            <p className="font-medium text-lg">Лише 4 ретрити у сезоні 2025. Лімітована кількість гостей — до 12 людей.</p>
          </div>
          <a 
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-6 py-2 rounded-full transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Забронювати
          </a>
        </div>
        
        {/* Mobile view with continuous animation */}
        <div className="block md:hidden mb-10 fade-in-section">
          <div className="image-slider">
            <div className="slide-track">
              {/* Top row - moving left */}
              <div className="slide-row top">
                {[...images, ...images].map((img, index) => (
                  <div key={`mobile-top-${index}`} className="slide">
                    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                      <img 
                        src={img} 
                        alt={`Baleal, Portugal - ${index % 4 + 1}`} 
                        className={`transition-all duration-1000 ${
                          loadedImages[index % 4] ? 'loaded' : 'lazy-image'
                        }`}
                        onLoad={() => handleImageLoad(index % 4)}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom row - moving right */}
              <div className="slide-row bottom">
                <div className="slide">
                  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <img src="/assets/images/IMG_2830 2.jpg" alt="Baleal, Portugal - 5" className="transition-all duration-1000 loaded" />
                  </div>
                </div>
                <div className="slide">
                  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <img src="/assets/images/hotel3 2.jpg" alt="Baleal, Portugal - 6" className="transition-all duration-1000 loaded" />
                  </div>
                </div>
                <div className="slide">
                  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <img src="/assets/images/L1250573 2.jpg" alt="Baleal, Portugal - 7" className="transition-all duration-1000 loaded" />
                  </div>
                </div>
                <div className="slide">
                  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <img src="/assets/images/DSC_7136 2.JPG" alt="Baleal, Portugal - 8" className="transition-all duration-1000 loaded" />
                  </div>
                </div>
                <div className="slide">
                  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <img src="/assets/images/DSC_3165.JPG" alt="Baleal, Portugal - 9" className="transition-all duration-1000 loaded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop view with continuous animation */}
        <div className="hidden md:block mt-12 fade-in-section">
          <div className="image-slider">
            <div className="slide-track">
              {/* Top row - moving left */}
              <div className="slide-row top">
                {[...images, ...images].map((img, index) => (
                  <div key={`desktop-top-${index}`} className="slide">
                    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                      <img 
                        src={img} 
                        alt={`Baleal, Portugal - ${index % 4 + 1}`} 
                        className={`transition-all duration-1000 ${
                          loadedImages[index % 4] ? 'loaded' : 'lazy-image'
                        }`}
                        onLoad={() => handleImageLoad(index % 4)}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom row - moving right */}
              <div className="slide-row bottom">
                <div className="slide">
                  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <img src="/assets/images/IMG_2830 2.jpg" alt="Baleal, Portugal - 5" className="transition-all duration-1000 loaded" />
                  </div>
                </div>
                <div className="slide">
                  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <img src="/assets/images/hotel3 2.jpg" alt="Baleal, Portugal - 6" className="transition-all duration-1000 loaded" />
                  </div>
                </div>
                <div className="slide">
                  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <img src="/assets/images/L1250573 2.jpg" alt="Baleal, Portugal - 7" className="transition-all duration-1000 loaded" />
                  </div>
                </div>
                <div className="slide">
                  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <img src="/assets/images/DSC_7136 2.JPG" alt="Baleal, Portugal - 8" className="transition-all duration-1000 loaded" />
                  </div>
                </div>
                <div className="slide">
                  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <img src="/assets/images/DSC_3165.JPG" alt="Baleal, Portugal - 9" className="transition-all duration-1000 loaded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
