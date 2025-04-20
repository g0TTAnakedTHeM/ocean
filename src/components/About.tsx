import React from 'react';
import Divider from './ui/Divider';
import { useTranslation } from '../hooks/useTranslation';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="apple-section bg-white relative pb-8 mb-[-10px]">
      <div className="absolute inset-0 bg-white"></div>
      
      <div className="apple-container">
        <div className="text-center mb-4 fade-in-section">
          <div className="flex justify-center mb-6">
            <img 
              src="/assets/logo/oceantherapy-logo-options.pdf.png" 
              alt="OCEANTHERAPY Logo" 
              className="h-16 w-auto"
            />
          </div>
          <p className="apple-text mt-6 mb-6 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-light text-ocean-800">
            {t('services.retreatMoments.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
