import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Optimize video loading - only load when needed
    const video = videoRef.current;
    if (video) {
      video.preload = "metadata"; // Just load metadata first
      
      // Create a lightweight observer to start loading video when close to viewport
      const preloadObserver = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            video.preload = "auto"; // Switch to auto when close
            video.load();
            preloadObserver.disconnect();
          }
        },
        { rootMargin: "500px 0px" } // Start preloading when 500px from viewport
      );
      
      preloadObserver.observe(video);
      
      // Create another observer to track visibility for play/pause
      const visibilityObserver = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setIsVisible(entry.isIntersecting);
          
          if (entry.isIntersecting) {
            if (video.paused) video.play().catch(e => console.log('Video play failed:', e));
          } else {
            if (!video.paused) video.pause();
          }
        },
        { threshold: 0.1 }
      );
      
      if (sectionRef.current) {
        visibilityObserver.observe(sectionRef.current);
      }
      
      return () => {
        preloadObserver.disconnect();
        visibilityObserver.disconnect();
      };
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video with higher quality ocean footage */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-ocean-900/40 z-10"></div>
        <video 
          ref={videoRef}
          id="ocean-video"
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/assets/images/optimized/ocean-poster.jpg" // Add a poster image for initial load
        >
          <source src="/assets/videos/hero_compressed_g.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Content */}
      <div 
        className={`relative z-20 text-center px-4 max-w-3xl mx-auto transition-all duration-1000 ease-out pt-16 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/assets/logo/oceantherapy-logo-option-white.png" 
            alt="OCEANTHERAPY Logo" 
            className="h-20 mx-auto"
            style={{
              animation: isLoaded ? 'fadeIn 0.6s ease-out 0.4s both' : 'none'
            }}
          />
        </div>

        {/* Primary CTA */}
        <a 
          href="#contact" 
          className="bg-[#a0ccdb] hover:bg-[#8ebfcf] group ripple-btn text-lg px-8 py-4 text-white font-medium rounded-full inline-flex items-center transition-all duration-300 shadow-lg"
          style={{
            animation: isLoaded ? 'fadeIn 0.8s ease-out 0.6s both' : 'none'
          }}
        >
          Забронювати місце зараз
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 ml-2 transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        
        {/* Secondary CTA */}
        <div className="mt-6">
          <a 
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full text-ocean-800 font-medium hover:bg-white/70 transition-all duration-300 group"
          >
            Дізнатись більше
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
