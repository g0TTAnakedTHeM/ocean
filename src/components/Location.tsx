import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Anchor, Sun, Home, Users, Plane, Car, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import '@/styles/location.css';

const Location = () => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentRetreatSlide, setCurrentRetreatSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const retreatSliderRef = useRef<HTMLDivElement>(null);
  
  const totalSlides = 5; // Total number of slides
  const totalRetreatSlides = 6; // Total number of retreat slides
  
  // Handle next and previous slide navigation
  const goToSlide = (slideIndex: number) => {
    let targetIndex = slideIndex;
    
    // Handle wrapping around at the ends
    if (targetIndex < 0) targetIndex = totalSlides - 1;
    if (targetIndex >= totalSlides) targetIndex = 0;
    
    setCurrentSlide(targetIndex);
    
    // Scroll to the slide
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollTo({
        left: slideWidth * targetIndex,
        behavior: 'smooth'
      });
    }
  };
  
  // Handle next and previous retreat slide navigation
  const goToRetreatSlide = (slideIndex: number) => {
    let targetIndex = slideIndex;
    
    // Handle wrapping around at the ends
    if (targetIndex < 0) targetIndex = totalRetreatSlides - 1;
    if (targetIndex >= totalRetreatSlides) targetIndex = 0;
    
    setCurrentRetreatSlide(targetIndex);
    
    // Scroll to the slide
    if (retreatSliderRef.current) {
      const slideWidth = retreatSliderRef.current.clientWidth;
      retreatSliderRef.current.scrollTo({
        left: slideWidth * targetIndex,
        behavior: 'smooth'
      });
    }
  };
  
  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);
  const nextRetreatSlide = () => goToRetreatSlide(currentRetreatSlide + 1);
  const prevRetreatSlide = () => goToRetreatSlide(currentRetreatSlide - 1);
  
  // Handle manual scrolling to update currentSlide indicator
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollPosition = sliderRef.current.scrollLeft;
        const slideWidth = sliderRef.current.clientWidth;
        const newIndex = Math.round(scrollPosition / slideWidth);
        
        if (newIndex !== currentSlide) {
          setCurrentSlide(newIndex);
        }
      }
    };
    
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentSlide]);

  // Handle manual scrolling to update currentRetreatSlide indicator
  useEffect(() => {
    const handleScroll = () => {
      if (retreatSliderRef.current) {
        const scrollPosition = retreatSliderRef.current.scrollLeft;
        const slideWidth = retreatSliderRef.current.clientWidth;
        const newIndex = Math.round(scrollPosition / slideWidth);
        
        if (newIndex !== currentRetreatSlide) {
          setCurrentRetreatSlide(newIndex);
        }
      }
    };
    
    const sliderElement = retreatSliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentRetreatSlide]);

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
    <section id="location" className="apple-section bg-white pt-0 z-10 relative">
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
          <div className="mt-12">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="overflow-x-auto hide-scrollbar snap-x snap-mandatory touch-pan-x flex w-full" ref={sliderRef}>
                <div className="relative flex-none w-full flex-shrink-0 snap-center">
                  <img 
                    src="/assets/images/optimized/baleal-upscaled-desktop.jpg" 
                    srcSet="/assets/images/optimized/baleal-upscaled-desktop.jpg 1024w"
                    className="w-full h-[350px] md:h-[450px] object-cover hidden md:block"
                    alt="Балеал з висоти"
                  />
                  <img 
                    src="/assets/images/optimized/baleal-upscaled-mobile.jpg" 
                    className="w-full h-[280px] object-cover md:hidden"
                    alt="Балеал з висоти"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">Балеал, Португалія</h3>
                    <p className="text-sm opacity-90">Унікальний півострів з ідеальними умовами для серфінгу</p>
                  </div>
                </div>
                
                <div className="relative flex-none w-full flex-shrink-0 snap-center">
                  <img 
                    src="/assets/images/optimized/17-upscaled-desktop.jpg"
                    srcSet="/assets/images/optimized/17-upscaled-desktop.jpg 1024w"
                    className="w-full h-[350px] md:h-[450px] object-cover hidden md:block"
                    alt="Пляж Балеалу" 
                  />
                  <img 
                    src="/assets/images/optimized/17-upscaled-mobile.jpg" 
                    className="w-full h-[280px] object-cover md:hidden"
                    alt="Пляж Балеалу"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">Пляжі Балеалу</h3>
                    <p className="text-sm opacity-90">Прекрасні пляжі для відпочинку і серфінгу</p>
                  </div>
                </div>
                
                <div className="relative flex-none w-full flex-shrink-0 snap-center">
                  <img 
                    src="/assets/images/optimized/DSC_3165-upscaled-desktop.jpg"
                    srcSet="/assets/images/optimized/DSC_3165-upscaled-desktop.jpg 1024w"
                    className="w-full h-[350px] md:h-[450px] object-cover hidden md:block"
                    alt="Океанські хвилі"
                  />
                  <img 
                    src="/assets/images/optimized/DSC_3165-upscaled-mobile.jpg" 
                    className="w-full h-[280px] object-cover md:hidden"
                    alt="Океанські хвилі"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">Атлантичний океан</h3>
                    <p className="text-sm opacity-90">Ідеальні хвилі для серфінгу будь-якого рівня</p>
                  </div>
                </div>
                
                <div className="relative flex-none w-full flex-shrink-0 snap-center">
                  <img 
                    src="/assets/images/optimized/DSC_7136 2-desktop.jpg"
                    srcSet="/assets/images/optimized/DSC_7136 2-desktop.jpg 1024w"
                    className="w-full h-[350px] md:h-[450px] object-cover hidden md:block"
                    alt="Серфінг на Балеалі"
                  />
                  <img 
                    src="/assets/images/optimized/DSC_7136 2-mobile.jpg" 
                    className="w-full h-[280px] object-cover md:hidden"
                    alt="Серфінг на Балеалі"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">Серфінг</h3>
                    <p className="text-sm opacity-90">Популярний спорт на Балеалі для всіх рівнів</p>
                  </div>
                </div>
                
                <div className="relative flex-none w-full flex-shrink-0 snap-center">
                  <img 
                    src="/assets/images/optimized/IMG_2830 2-desktop.jpg"
                    srcSet="/assets/images/optimized/IMG_2830 2-desktop.jpg 1024w"
                    className="w-full h-[350px] md:h-[450px] object-cover hidden md:block"
                    alt="Вечір на Балеалі"
                  />
                  <img 
                    src="/assets/images/optimized/IMG_2830 2-mobile.jpg" 
                    className="w-full h-[280px] object-cover md:hidden"
                    alt="Вечір на Балеалі"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">Закати на узбережжі</h3>
                    <p className="text-sm opacity-90">Мальовничі вечори та атмосферні заходи сонця</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
                {[...Array(totalSlides)].map((_, index) => (
                  <div 
                    key={`dot-${index}`}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                      currentSlide === index ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => goToSlide(index)}
                  ></div>
                ))}
              </div>

              {/* Arrow indicators for swiping */}
              <div 
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 p-2 rounded-full text-white hidden sm:flex cursor-pointer transition-all duration-300"
                onClick={prevSlide}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
              <div 
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 p-2 rounded-full text-white hidden sm:flex cursor-pointer transition-all duration-300"
                onClick={nextSlide}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
            
            <div className="text-left space-y-6 px-4 mt-8">
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

          {/* Retreat Program Showcase */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-semibold text-ocean-800 mb-8">
              Унікальна програма ретриту
            </h2>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="overflow-x-auto hide-scrollbar snap-x snap-mandatory touch-pan-x flex w-full" ref={retreatSliderRef}>
                <div className="relative flex-none w-full flex-shrink-0 snap-center">
                  <img 
                    src="/assets/images/optimized/hotel3 2-desktop.jpg" 
                    className="w-full h-[350px] md:h-[450px] object-cover hidden md:block"
                    alt="Готель та інфраструктура"
                  />
                  <img 
                    src="/assets/images/optimized/hotel3 2-desktop.jpg" 
                    className="w-full h-[280px] object-cover md:hidden"
                    alt="Готель та інфраструктура"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">Комфортне проживання</h3>
                    <p className="text-sm opacity-90">Сучасні номери для відпочинку після активного дня</p>
                  </div>
                </div>
                
                <div className="relative flex-none w-full flex-shrink-0 snap-center">
                  <img 
                    src="/assets/images/optimized/hotel5-desktop.jpg"
                    className="w-full h-[350px] md:h-[450px] object-cover hidden md:block"
                    alt="Готель та інфраструктура" 
                  />
                  <img 
                    src="/assets/images/optimized/hotel5-desktop.jpg" 
                    className="w-full h-[280px] object-cover md:hidden"
                    alt="Готель та інфраструктура"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">Зручна інфраструктура</h3>
                    <p className="text-sm opacity-90">Всі необхідні умови для комфортного перебування</p>
                  </div>
                </div>
                
                <div className="relative flex-none w-full flex-shrink-0 snap-center">
                  <img 
                    src="/assets/images/optimized/L1250573 2-desktop.jpg"
                    className="w-full h-[350px] md:h-[450px] object-cover hidden md:block"
                    alt="Програма ретриту"
                  />
                  <img 
                    src="/assets/images/optimized/L1250573 2-desktop.jpg" 
                    className="w-full h-[280px] object-cover md:hidden"
                    alt="Програма ретриту"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">Групові практики</h3>
                    <p className="text-sm opacity-90">Цінний досвід і підтримка у колі однодумців</p>
                  </div>
                </div>
                
                <div className="relative flex-none w-full flex-shrink-0 snap-center">
                  <img 
                    src="/assets/images/optimized/hotel8 2-desktop.jpg"
                    className="w-full h-[350px] md:h-[450px] object-cover hidden md:block"
                    alt="Готель та інфраструктура"
                  />
                  <img 
                    src="/assets/images/optimized/hotel8 2-desktop.jpg" 
                    className="w-full h-[280px] object-cover md:hidden"
                    alt="Готель та інфраструктура"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">Зона відпочинку</h3>
                    <p className="text-sm opacity-90">Місце для спілкування та обміну враженнями</p>
                  </div>
                </div>
                
                <div className="relative flex-none w-full flex-shrink-0 snap-center">
                  <img 
                    src="/assets/images/optimized/7-desktop.jpg"
                    className="w-full h-[350px] md:h-[450px] object-cover hidden md:block"
                    alt="Готель та інфраструктура"
                  />
                  <img 
                    src="/assets/images/optimized/7-desktop.jpg" 
                    className="w-full h-[280px] object-cover md:hidden"
                    alt="Готель та інфраструктура"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">Зона релаксації</h3>
                    <p className="text-sm opacity-90">Затишні місця для відпочинку та релаксації</p>
                  </div>
                </div>
                
                <div className="relative flex-none w-full flex-shrink-0 snap-center">
                  <img 
                    src="/assets/images/optimized/breakfast-desktop.jpg"
                    className="w-full h-[350px] md:h-[450px] object-cover hidden md:block"
                    alt="Сніданок"
                  />
                  <img 
                    src="/assets/images/optimized/breakfast-desktop.jpg" 
                    className="w-full h-[280px] object-cover md:hidden"
                    alt="Сніданок"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">Здорове харчування</h3>
                    <p className="text-sm opacity-90">Смачні та корисні сніданки для енергії на весь день</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
                {[...Array(totalRetreatSlides)].map((_, index) => (
                  <div 
                    key={`retreat-dot-${index}`}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                      currentRetreatSlide === index ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => goToRetreatSlide(index)}
                  ></div>
                ))}
              </div>

              {/* Arrow indicators for swiping */}
              <div 
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 p-2 rounded-full text-white hidden sm:flex cursor-pointer transition-all duration-300"
                onClick={prevRetreatSlide}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
              <div 
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 p-2 rounded-full text-white hidden sm:flex cursor-pointer transition-all duration-300"
                onClick={nextRetreatSlide}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
        
        {/* Mobile view with continuous animation */}
          <div className="block md:hidden mt-16 mb-10 fade-in-section">
          <div className="image-slider">
            <div className="slide-track">
              {/* Top row - moving left */}
              <div className="slide-row top">
                  {[...topRowImages, ...topRowImages].map((img, index) => (
                  <div key={`mobile-top-${index}`} className="slide">
                    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                      <img 
                          src={img.mobile}
                          srcSet={`${encodeSrcSetUrl(img.mobile)} 300w, ${encodeSrcSetUrl(img.desktop)} 600w`}
                          sizes="(max-width: 768px) 300px, 600px"
                          alt={`Baleal, Portugal - ${img.alt}`}
                        className={`transition-all duration-1000 ${
                            loadedImages[index % topRowImages.length] ? 'loaded' : 'lazy-image'
                        }`}
                          loading="lazy"
                          onLoad={() => handleImageLoad(index % topRowImages.length)}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom row - moving right */}
              <div className="slide-row bottom">
                  {[...bottomRowImages, ...bottomRowImages].map((img, index) => (
                  <div key={`mobile-bottom-${index}`} className="slide">
                    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                      <img 
                          src={img.mobile}
                          srcSet={`${encodeSrcSetUrl(img.mobile)} 300w, ${encodeSrcSetUrl(img.desktop)} 600w`}
                          sizes="(max-width: 768px) 300px, 600px"
                          alt={`Baleal, Portugal - ${img.alt}`}
                        className={`transition-all duration-1000 ${
                            loadedImages[(index + topRowImages.length) % bottomRowImages.length] ? 'loaded' : 'lazy-image'
                        }`}
                          loading="lazy"
                          onLoad={() => handleImageLoad((index + topRowImages.length) % bottomRowImages.length)}
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
                  {[...topRowImages, ...topRowImages].map((img, index) => (
                  <div key={`desktop-top-${index}`} className="slide">
                    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                      <img 
                          src={img.desktop}
                          srcSet={`${encodeSrcSetUrl(img.mobile)} 300w, ${encodeSrcSetUrl(img.desktop)} 600w`}
                          sizes="(min-width: 768px) 600px, 300px"
                          alt={`Baleal, Portugal - ${img.alt}`}
                        className={`transition-all duration-1000 ${
                            loadedImages[index % topRowImages.length] ? 'loaded' : 'lazy-image'
                        }`}
                          loading="lazy"
                          onLoad={() => handleImageLoad(index % topRowImages.length)}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom row - moving right */}
              <div className="slide-row bottom">
                  {[...bottomRowImages, ...bottomRowImages].map((img, index) => (
                  <div key={`desktop-bottom-${index}`} className="slide">
                    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                      <img 
                          src={img.desktop}
                          srcSet={`${encodeSrcSetUrl(img.mobile)} 300w, ${encodeSrcSetUrl(img.desktop)} 600w`}
                          sizes="(min-width: 768px) 600px, 300px"
                          alt={`Baleal, Portugal - ${img.alt}`}
                        className={`transition-all duration-1000 ${
                            loadedImages[(index + topRowImages.length) % bottomRowImages.length] ? 'loaded' : 'lazy-image'
                        }`}
                          loading="lazy"
                          onLoad={() => handleImageLoad((index + topRowImages.length) % bottomRowImages.length)}
                      />
                    </div>
                  </div>
                ))}
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