import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { GradientText } from './ui/GradientText';

const VideoGrid = () => {
  // Track which videos are visible and should play
  const [visibleVideos, setVisibleVideos] = useState<Record<number, boolean>>({});
  const videoRefs = useRef<Array<HTMLDivElement | null>>([]);

  const videos = [
    {
      src: '/assets/videos/11.mp4',
      title: 'Pilates / Breathwork'
    },
    {
      src: '/assets/videos/13-2.mp4',
      title: 'Sound Healing'
    },
    {
      src: '/assets/videos/19.mp4',
      title: 'Meditation / Qi Gong'
    },
    {
      src: '/assets/videos/3.mp4',
      title: 'Surfing'
    },
    {
      src: '/assets/videos/12-2.mp4',
      title: 'Mental Practice'
    },
    {
      src: '/assets/videos/15.mp4',
      title: 'Massage / Spa'
    }
  ];

  // Setup intersection observer to detect which videos are visible
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = parseInt(entry.target.getAttribute('data-index') || '-1', 10);
        if (index >= 0) {
          setVisibleVideos(prev => ({
            ...prev,
            [index]: entry.isIntersecting
          }));
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
  }, []);

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
                {/* Only load and play videos when they're visible in viewport */}
                {visibleVideos[index] && (
                  <ReactPlayer
                    url={video.src}
                    playing={visibleVideos[index]}
                    loop={true}
                    muted={true}
                    playsinline={true}
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: 0, left: 0 }}
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
                )}
                {/* Show placeholder while video isn't loaded */}
                {!visibleVideos[index] && (
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