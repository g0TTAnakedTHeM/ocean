import React from 'react';
import { Award, Droplets, Users } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Expertise = () => {
  const { t } = useTranslation();
  
  const expertise = [
    {
      title: t('whyTrust.award.title'),
      description: t('whyTrust.award.description'),
      icon: <Award className="w-10 h-10 stroke-1 text-ocean-700" />,
    },
    {
      title: t('whyTrust.experience.title'),
      description: t('whyTrust.experience.description'),
      icon: <Droplets className="w-10 h-10 stroke-1 text-ocean-700" />,
    },
    {
      title: t('whyTrust.guests.title'),
      description: t('whyTrust.guests.description'),
      icon: <Users className="w-10 h-10 stroke-1 text-ocean-700" />,
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-ocean-50/70 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="ocean-title text-center text-ocean-800 mb-12 text-4xl md:text-5xl lg:text-6xl font-semibold">
          {t('whyTrust.title')}
        </h2>
        
        <div className="flex justify-center my-10">
          <img 
            src="/assets/logo/oceanlogotherapy.svg" 
            alt="Ocean Therapy Logo" 
            className="h-16 w-auto"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {expertise.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-ocean-50 p-4 rounded-full mb-4">
                <div className="flex justify-center">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-apple-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
