import React from 'react';
import { cn } from '../../lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  variant?: 'blue' | 'alt' | 'rainbow' | 'purple' | 'sunset' | 'custom';
  customGradient?: string;
  animate?: boolean;
}

const GradientText = ({
  children,
  className,
  as: Component = 'span',
  variant = 'blue',
  customGradient,
  animate = false,
}: GradientTextProps) => {
  const gradientStyles = {
    blue: 'bg-gradient-to-r from-apple-blue via-apple-highlight to-apple-blue',
    alt: 'bg-gradient-to-r from-apple-error via-apple-warning to-apple-accent',
    rainbow: 'bg-gradient-to-r from-[#5558DA] via-[#5FD3F3] via-[#9069ED] via-[#D560A3] to-[#F26095]',
    purple: 'bg-gradient-to-r from-[#8A2BE2] via-[#9370DB] to-[#9966FF]',
    sunset: 'bg-gradient-to-r from-[#FF5E3A] via-[#FF9500] to-[#FFCC00]',
    custom: customGradient || '',
  };

  return (
    <Component
      className={cn(
        gradientStyles[variant],
        animate && 'animate-gradient-x',
        'bg-clip-text text-transparent inline-block',
        className
      )}
    >
      {children}
    </Component>
  );
};

export { GradientText }; 