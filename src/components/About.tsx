import React from 'react';
import Divider from './ui/Divider';

const About = () => {
  return (
    <section id="about" className="apple-section bg-white relative pb-0 mb-[-30px]">
      <div className="absolute inset-0 bg-white"></div>
      
      <div className="apple-container">
        <div className="text-center mb-0 fade-in-section">
          <div className="flex justify-center mb-6">
            <img 
              src="/assets/logo/oceantherapy-logo-options.pdf.png" 
              alt="OCEANTHERAPY Logo" 
              className="h-16 w-auto"
            />
          </div>
          <p className="apple-text mt-6 mb-0 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-light text-ocean-800">
            7 днів відпочинку тільки для тебе, повного перезавантаження, нових і незабутніх емоцій, справжньої радості, ментального відновлення та піклування про внутрішній стан.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
