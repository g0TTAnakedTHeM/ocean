import React, { useState, useEffect } from 'react';
import { MapPin, Anchor, Sun, Home, Users, Plane, Car, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import '@/styles/location.css';

const Location = () => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);
  
  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.image-slider');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({
      ...prev,
      [index]: true
    }));
  };

  // URL encode helper function that specifically handles spaces for srcSet
  const encodeSrcSetUrl = (url: string) => {
    return url.replace(/ /g, '%20');
  };

  // Optimized image paths with different sizes for top row
  const topRowImages = [
    {
      mobile: "/assets/images/new-optimized/surf_6-mobile.jpg",
      desktop: "/assets/images/new-optimized/surf_6-desktop.jpg",
      alt: "Surfing session"
    },
    {
      mobile: "/assets/images/new-optimized/cacao3-mobile.jpg",
      desktop: "/assets/images/new-optimized/cacao3-desktop.jpg",
      alt: "Cacao ceremony"
    },
    {
      mobile: "/assets/images/new-optimized/dinner_2-mobile.jpg",
      desktop: "/assets/images/new-optimized/dinner_2-desktop.jpg",
      alt: "Dinner experience"
    },
    {
      mobile: "/assets/images/new-optimized/massage-mobile.jpg",
      desktop: "/assets/images/new-optimized/massage-desktop.jpg",
      alt: "Therapeutic massage"
    },
    {
      mobile: "/assets/images/new-optimized/morning_routine_2-mobile.jpg",
      desktop: "/assets/images/new-optimized/morning_routine_2-desktop.jpg",
      alt: "Morning routine"
    }
  ];

  // Optimized image paths with different sizes for bottom row
  const bottomRowImages = [
    {
      mobile: "/assets/images/new-optimized/singing_bowls_2-mobile.jpg",
      desktop: "/assets/images/new-optimized/singing_bowls_2-desktop.jpg",
      alt: "Sound healing"
    },
    {
      mobile: "/assets/images/new-optimized/sunsets_-mobile.jpg",
      desktop: "/assets/images/new-optimized/sunsets_-desktop.jpg",
      alt: "Beautiful sunset"
    },
    {
      mobile: "/assets/images/new-optimized/DSC_1025-mobile.jpg",
      desktop: "/assets/images/new-optimized/DSC_1025-desktop.jpg",
      alt: "Ocean view"
    },
    {
      mobile: "/assets/images/new-optimized/Photo2-mobile.jpg",
      desktop: "/assets/images/new-optimized/Photo2-desktop.jpg",
      alt: "Beach view"
    },
    {
      mobile: "/assets/images/new-optimized/DSC_9084_2-mobile.jpg",
      desktop: "/assets/images/new-optimized/DSC_9084_2-desktop.jpg",
      alt: "Ocean therapy"
    }
  ];

  return (
    <section id="location" className="apple-section bg-gradient-to-b from-white to-ocean-50 pt-0 z-10 relative">
      <div className="apple-container">
        <div className="text-center fade-in-section">
          <h2 className="apple-title text-ocean-800">
            <MapPin className="w-8 h-8 mr-2 inline-block text-ocean-800" />
            Де?
          </h2>
          <div className="flex justify-center my-4">
            <img 
              src="/assets/logo/oceanlogotherapy.svg" 
              alt="Ocean Therapy Logo" 
              className="h-16 w-auto"
            />
          </div>
          
          {/* Main location showcase */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/images/optimized/baleal-desktop.jpg" 
                alt="Балеал з висоти" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">Балеал, Португалія</h3>
                <p className="text-sm opacity-90">Унікальний півострів з ідеальними умовами для серфінгу</p>
              </div>
            </div>
            <div className="text-left space-y-6 px-4">
              <h3 className="text-3xl font-semibold text-ocean-800">
                Найкращий серф-спот Європи
              </h3>
              <p className="text-lg text-apple-gray-700 leading-relaxed">
                Балеал — це унікальне місце, де океан створює ідеальні умови для серфінгу цілий рік. 
                Тут ви знайдете хвилі для будь-якого рівня підготовки, від початківців до професіоналів.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start space-x-3">
                  <Plane className="w-6 h-6 text-ocean-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-ocean-800">Легко дістатися</h4>
                    <p className="text-apple-gray-600">Прямі рейси лоукостери в Ліссабон та швидкісні трансфери на Балеал</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Car className="w-6 h-6 text-ocean-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-ocean-800">Зручна логістика</h4>
                    <p className="text-apple-gray-600">Трансфер від аеропорту до місця проживання</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-ocean-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-ocean-800">Ідеальний час</h4>
                    <p className="text-apple-gray-600">Комфортна погода та хвилі цілий рік</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Home className="w-6 h-6 text-ocean-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-ocean-800">Все поруч</h4>
                    <p className="text-apple-gray-600">Океан, кафе, магазини в пішій доступності</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location features */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <img 
                src="/assets/images/optimized/hotel3 2-desktop.jpg" 
                alt="Готель та інфраструктура" 
                className="w-full h-80 object-cover rounded-lg"
              />
              <img 
                src="/assets/images/optimized/hotel4-desktop.jpg" 
                alt="Готель та інфраструктура" 
                className="w-full h-80 object-cover rounded-lg"
              />
              <img 
                src="/assets/images/optimized/hotel5-desktop.jpg" 
                alt="Готель та інфраструктура" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img 
                src="/assets/images/optimized/hotel6-desktop.jpg" 
                alt="Готель та інфраструктура" 
                className="w-full h-80 object-cover rounded-lg"
              />
              <img 
                src="/assets/images/optimized/hotel7-desktop.jpg" 
                alt="Готель та інфраструктура" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div className="mt-8 text-center">
              <h4 className="text-lg font-medium text-ocean-800 mb-2">Комфортне проживання</h4>
              <p className="text-apple-gray-600 max-w-2xl mx-auto">
                Сучасний готель з усіма зручностями. Затишні номери, спа-зона та тераса для відпочинку.
              </p>
            </div>
          </div>

          {/* Mobile view with continuous animation */}
          <div className="block md:hidden mt-16 mb-10 fade-in-section">
            <div className="image-slider">
              <div className="slide-track">
                {/* Top row - moving left */}
                <div className="slide-row top">
                  {topRowImages.map((img, index) => (
                    <div key={`mobile-top-${index}`} className="slide">
                      <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                        <img 
                          src={img.mobile}
                          srcSet={`${encodeSrcSetUrl(img.mobile)} 300w, ${encodeSrcSetUrl(img.desktop)} 600w`}
                          sizes="(max-width: 768px) 300px, 600px"
                          alt={`Baleal, Portugal - ${img.alt}`}
                          className={`transition-all duration-1000 ${
                            loadedImages[index % 4] ? 'loaded' : 'lazy-image'
                          }`}
                          loading="lazy"
                          onLoad={() => handleImageLoad(index % 4)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Bottom row - moving right */}
                <div className="slide-row bottom">
                  {bottomRowImages.map((img, index) => (
                    <div key={`mobile-bottom-${index}`} className="slide">
                      <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                        <img 
                          src={img.mobile}
                          srcSet={`${encodeSrcSetUrl(img.mobile)} 300w, ${encodeSrcSetUrl(img.desktop)} 600w`}
                          sizes="(max-width: 768px) 300px, 600px"
                          alt={`Baleal, Portugal - ${img.alt}`}
                          className={`transition-all duration-1000 ${
                            loadedImages[index % 4] ? 'loaded' : 'lazy-image'
                          }`}
                          loading="lazy"
                          onLoad={() => handleImageLoad(index % 4)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop view with continuous animation */}
          <div className="hidden md:block mt-16 fade-in-section">
            <div className="image-slider">
              <div className="slide-track">
                {/* Top row - moving left */}
                <div className="slide-row top">
                  {topRowImages.map((img, index) => (
                    <div key={`desktop-top-${index}`} className="slide">
                      <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                        <img 
                          src={img.desktop}
                          srcSet={`${encodeSrcSetUrl(img.mobile)} 300w, ${encodeSrcSetUrl(img.desktop)} 600w`}
                          sizes="(min-width: 768px) 600px, 300px"
                          alt={`Baleal, Portugal - ${img.alt}`}
                          className={`transition-all duration-1000 ${
                            loadedImages[index % 4] ? 'loaded' : 'lazy-image'
                          }`}
                          loading="lazy"
                          onLoad={() => handleImageLoad(index % 4)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Bottom row - moving right */}
                <div className="slide-row bottom">
                  {bottomRowImages.map((img, index) => (
                    <div key={`desktop-bottom-${index}`} className="slide">
                      <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                        <img 
                          src={img.desktop}
                          srcSet={`${encodeSrcSetUrl(img.mobile)} 300w, ${encodeSrcSetUrl(img.desktop)} 600w`}
                          sizes="(min-width: 768px) 600px, 300px"
                          alt={`Baleal, Portugal - ${img.alt}`}
                          className={`transition-all duration-1000 ${
                            loadedImages[index % 4] ? 'loaded' : 'lazy-image'
                          }`}
                          loading="lazy"
                          onLoad={() => handleImageLoad(index % 4)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Highlight badge */}
          <div className="apple-card max-w-3xl mx-auto p-8 mt-16 text-center fade-in-section">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-6 h-6 mr-3 text-ocean-600" />
              <p className="font-medium text-lg text-apple-gray-800">
                Лише 4 ретрити у сезоні 2025. Лімітована кількість гостей — до 12 людей.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-block bg-ocean-800 hover:bg-ocean-700 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              Забронювати
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;