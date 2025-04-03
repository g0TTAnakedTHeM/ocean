import React, { useEffect, useRef } from 'react';
import { ArrowRight } from "lucide-react";
import Divider from './ui/Divider';
import { GradientText } from './ui/GradientText';

const About = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);

  // Add staggered animation to benefits
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const benefitElements = entry.target.querySelectorAll('.benefit-item');
            benefitElements.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = '1';
                (item as HTMLElement).style.transform = 'translateY(0)';
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }

    return () => {
      if (benefitsRef.current) {
        observer.unobserve(benefitsRef.current);
      }
    };
  }, []);

  const benefits = [
    {
      title: "7 днів",
      description: "відпочинку тільки для тебе",
      icon: "/assets/images/calendar-svgrepo-com.svg"
    },
    {
      title: "Повне перезавантаження",
      description: "нових і незабутніх емоцій",
      icon: "/assets/images/restart-circle-svgrepo-com.svg"
    },
    {
      title: "Справжня радість",
      description: "ментального відновлення",
      icon: "/assets/images/heart-exclamation-svgrepo-com.svg"
    },
    {
      title: "Піклування",
      description: "про внутрішній стан",
      icon: "/assets/images/care-ecology-environment-svgrepo-com.svg"
    },
    {
      title: "Відновлення",
      description: "внутрішньої гармонії",
      icon: "/assets/images/recovery-plus-solid-svgrepo-com.svg",
      variant: "blue"
    }
  ];

  return (
    <section id="about" className="apple-section bg-white relative">
      <div className="absolute inset-0 bg-white"></div>
      
      <div className="apple-container">
        <div className="text-center mb-24 fade-in-section">
          <h2 className="apple-title font-light tracking-tight mb-8">
            Що таке <GradientText 
              className="font-semibold" 
              variant="blue"
              animate={true}
            >
              OCEANTHERAPY
            </GradientText>
          </h2>
          <div className="apple-divider"></div>
          <p className="apple-text mt-12 mb-10 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-light">
            7 днів відпочинку тільки для тебе, повного перезавантаження, нових і незабутніх емоцій, справжньої радості, ментального відновлення та піклування про внутрішній стан.
          </p>
        </div>
        
        <div 
          ref={benefitsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-item relative overflow-hidden"
              style={{ 
                opacity: 0, 
                transform: 'translateY(20px)', 
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
              }}
            >
              <div className="apple-card h-[280px] flex flex-col items-center text-center p-8">
                <div className="h-[72px] flex items-center justify-center">
                  <h3 className="text-2xl font-medium text-apple-gray-800 tracking-tight">
                    {benefit.title}
                  </h3>
                </div>
                {benefit.icon && (
                  <div className="h-[72px] flex items-center justify-center">
                    <img 
                      src={benefit.icon} 
                      alt={`${benefit.title} icon`}
                      className="w-12 h-12"
                    />
                  </div>
                )}
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-apple-gray-500 text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
