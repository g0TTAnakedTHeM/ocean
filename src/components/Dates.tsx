import React from 'react';
import { Sun, Leaf, Wind, Calendar } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

const Dates = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  const getDateTitle = (ukTitle, enTitle) => {
    if (language === 'en') return enTitle;
    if (language === 'ru') {
      // Convert Ukrainian month names to Russian
      return ukTitle
        .replace('ТРАВНЯ', 'МАЯ')
        .replace('ЧЕРВНЯ', 'ИЮНЯ')
        .replace('ЖОВТНЯ', 'ОКТЯБРЯ')
        .replace('ЛИСТОПАДА', 'НОЯБРЯ');
    }
    return ukTitle;
  };
  
  const retreatDates = [
    {
      season: t('dates.spring'),
      title: getDateTitle('01 – 08 ТРАВНЯ', 'MAY 01 – 08'),
      icon: <Sun className="w-6 h-6 stroke-1" />,
      availableSpots: 4,
      color: 'bg-coral-500/10'
    },
    {
      season: t('dates.summer'),
      title: getDateTitle('30 ТРАВНЯ – 06 ЧЕРВНЯ', 'MAY 30 – JUNE 06'),
      icon: <Sun className="w-6 h-6 stroke-1" />,
      availableSpots: 3,
      color: 'bg-coral-500/20'
    },
    {
      season: t('dates.autumn'),
      title: getDateTitle('03 – 10 ЖОВТНЯ', 'OCTOBER 03 – 10'),
      icon: <Leaf className="w-6 h-6 stroke-1" />,
      availableSpots: 5,
      color: 'bg-sky-300/20'
    },
    {
      season: t('dates.autumn'),
      title: getDateTitle('07 – 14 ЛИСТОПАДА', 'NOVEMBER 07 – 14'),
      icon: <Wind className="w-6 h-6 stroke-1" />,
      availableSpots: 6,
      color: 'bg-sky-300/15'
    }
  ];

  return (
    <section id="dates" className="apple-section bg-white">
      <div className="apple-container">
        <div className="text-center mb-16 fade-in-section">
          <div className="inline-flex items-center justify-center mb-4">
            <Calendar className="w-10 h-10 text-ocean-800 mr-3 stroke-1" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ocean-800">
              {t('dates.title')}
            </h2>
          </div>
          <p className="apple-subtitle text-ocean-800">
            {t('dates.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {retreatDates.map((date, index) => (
            <div 
              key={index}
              className="fade-in-section"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`ocean-card h-full flex flex-col p-6 transform transition-all duration-300 hover:scale-[1.03] rounded-xl overflow-hidden bg-[#a0ccdb]`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-white font-medium">{date.season}</div>
                  <div className="text-white">{date.icon}</div>
                </div>
                <h3 className="text-xl font-medium text-white mb-4">{date.title}</h3>
                <div className="mt-auto">
                  <div className="text-sm text-white/90 mb-5 font-medium border-t border-white/20 pt-4">
                    {t('dates.available')}: {date.availableSpots}
                  </div>
                  <a
                    href="#contact"
                    className="block w-full py-3 px-4 bg-white text-ocean-800 text-center rounded-md transition-all duration-300 transform hover:translate-y-[-2px] shadow-sm hover:shadow-md hover:bg-white/90"
                  >
                    {t('dates.book')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dates;
