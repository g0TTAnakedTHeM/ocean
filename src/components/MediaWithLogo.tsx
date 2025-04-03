import React from 'react';

interface MediaWithLogoProps {
  mediaSrc: string;
  logoSrc: string;
  mediaType: 'image' | 'video';
  alt?: string;
  className?: string;
}

export const MediaWithLogo: React.FC<MediaWithLogoProps> = ({
  mediaSrc,
  logoSrc,
  mediaType,
  alt = '',
  className = '',
}) => {
  return (
    <div className="relative w-full h-full">
      {mediaType === 'image' ? (
        <img
          src={mediaSrc}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
        />
      ) : (
        <video
          src={mediaSrc}
          className={`w-full h-full object-cover ${className}`}
          controls
          playsInline
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={logoSrc}
          alt="Logo overlay"
          className="w-1/4 h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  );
}; 