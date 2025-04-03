import React from 'react';
import ReactPlayer from 'react-player';
import Divider from './ui/Divider';
import { GradientText } from './ui/GradientText';

const VideoGrid = () => {
  const videos = [
    {
      src: '/assets/videos/11.mp4',
      title: 'Ocean Therapy Experience'
    },
    {
      src: '/assets/videos/13-2.mp4',
      title: 'Surfing Moments'
    },
    {
      src: '/assets/videos/19.mp4',
      title: 'Meditation by the Ocean'
    },
    {
      src: '/assets/videos/3.mp4',
      title: 'Ocean Waves'
    }
  ];

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
          <Divider />
          <p className="text-xl md:text-2xl text-ocean-700/80 max-w-3xl mx-auto leading-relaxed mt-12 mb-4">
            Яскраві спогади та емоції з наших океанічних пригод
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] fade-in-section group"
            >
              <div className="aspect-[4/3] relative">
                <ReactPlayer
                  url={video.src}
                  playing={true}
                  loop={true}
                  muted={true}
                  playsinline={true}
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                  config={{
                    file: {
                      attributes: {
                        style: {
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }
                      }
                    }
                  }}
                />
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