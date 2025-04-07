import React from 'react';
import { Phone } from "lucide-react";
import Divider from './ui/Divider';
import { GradientText } from './ui/GradientText';

const About = () => {
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
          <div className="flex justify-center my-10">
            <img 
              src="/assets/logo/oceanlogotherapy.svg" 
              alt="Ocean Therapy Logo" 
              className="h-16 w-auto"
            />
          </div>
          <p className="apple-text mt-12 mb-10 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-light">
            7 днів відпочинку тільки для тебе, повного перезавантаження, нових і незабутніх емоцій, справжньої радості, ментального відновлення та піклування про внутрішній стан.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16 fade-in-section">
          <a
            href="tel:+380991234567"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Вирішилися? Зателефонуйте нам!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
