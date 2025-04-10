import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { GradientText } from './ui/GradientText';

const VideoGrid = () => {
  // Track which videos are visible and should play
  const [visibleVideos, setVisibleVideos] = useState<Record<number, boolean>>({});
  const [loadedVideos, setLoadedVideos] = useState<Record<number, boolean>>({});
  const videoRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Check screen size to determine which video version to use
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const getVideoSrc = (baseName: string) => {
    if (isMobile) {
      return `/assets/videos/optimized/${baseName}_mobile.mp4`;
    } else if (isTablet) {
      return `/assets/videos/optimized/${baseName}_tablet.mp4`;
    } else {
      // Use tablet version for desktop as well, since originals are moved to backup
      return `/assets/videos/optimized/${baseName}_tablet.mp4`;
    }
  };

  const videos = [
    {
      baseName: '11',
      title: 'Pilates / Breathwork'
    },
    {
      baseName: '13-2',
      title: 'Sound Healing'
    },
    {
      baseName: '19',
      title: 'Meditation / Qi Gong'
    },
    {
      baseName: '3',
      title: 'Surfing'
    },
    {
      baseName: '12-2',
      title: 'Mental Practice'
    },
    {
      baseName: '15',
      title: 'Massage / Spa'
    }
  ];

  // Initialize loadedVideos state
  useEffect(() => {
    const initialLoadedState: Record<number, boolean> = {};
    videos.forEach((_, index) => {
      initialLoadedState[index] = false;
    });
    setLoadedVideos(initialLoadedState);
  }, []);

  // Setup intersection observer to detect which videos are visible
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '100px', // Load videos a bit before they come into view
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = parseInt(entry.target.getAttribute('data-index') || '-1', 10);
        if (index >= 0) {
          // Mark video as visible or not
          setVisibleVideos(prev => ({
            ...prev,
            [index]: entry.isIntersecting
          }));
          
          // If video becomes visible and hasn't been loaded yet, mark it as loaded
          if (entry.isIntersecting && !loadedVideos[index]) {
            setLoadedVideos(prev => ({
              ...prev,
              [index]: true
            }));
          }
        }
      });
    }, options);

    videoRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      videoRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [loadedVideos]);

  // Handle video ready event
  const handleVideoReady = (index: number) => {
    setLoadedVideos(prev => ({
      ...prev,
      [index]: true
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-ocean-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            <GradientText 
              variant="blue"
              className="font-semibold"
              animate={true}
            >
              Моменти ретріту
            </GradientText>
          </h2>
          <div className="flex justify-center my-10">
            <img 
              src="/assets/logo/oceanlogotherapy.svg" 
              alt="Ocean Therapy Logo" 
              className="h-16 w-auto"
            />
          </div>
          <p className="text-xl md:text-2xl text-ocean-700/80 max-w-3xl mx-auto leading-relaxed mt-12 mb-4">
            Яскраві спогади та емоції з наших океанічних пригод
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div 
              key={index}
              ref={el => videoRefs.current[index] = el}
              data-index={index}
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] fade-in-section group"
            >
              <div className="aspect-[4/3] relative bg-ocean-100">
                {/* Use optimized video sources based on screen size */}
                <ReactPlayer
                  url={getVideoSrc(video.baseName)}
                  playing={visibleVideos[index]}
                  loop={true}
                  muted={true}
                  playsinline={true}
                  width="100%"
                  height="100%"
                  onReady={() => handleVideoReady(index)}
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0,
                    opacity: loadedVideos[index] ? 1 : 0, // Hide until loaded
                    transition: 'opacity 0.5s ease'
                  }}
                  config={{
                    file: {
                      attributes: {
                        preload: 'auto',
                        style: {
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }
                      },
                      forceVideo: true,
                    }
                  }}
                />
                
                {/* Show placeholder until video is loaded */}
                {!loadedVideos[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-ocean-50">
                    <div className="animate-pulse flex flex-col items-center">
                      <div className="h-12 w-12 rounded-full bg-ocean-200"></div>
                      <div className="h-4 w-24 mt-2 rounded bg-ocean-200"></div>
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-medium">{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGrid; 