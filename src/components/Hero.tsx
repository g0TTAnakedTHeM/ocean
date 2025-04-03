import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Preload video if needed
    const video = document.getElementById('ocean-video') as HTMLVideoElement;
    if (video) {
      video.load();
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video with higher quality ocean footage */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-ocean-900/40 z-10"></div>
        <video 
          id="ocean-video"
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute min-w-full min-h-full object-cover scale-[1.02]"
          poster="/assets/images/placeholder.jpg"
        >
          <source 
            src="/assets/videos/IMG_1699.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
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
          href="#about" 
          className="bg-blue-800 hover:bg-blue-700 group ripple-btn text-lg px-8 py-4 text-white font-medium rounded-full inline-flex items-center transition-all duration-300 shadow-lg"
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
