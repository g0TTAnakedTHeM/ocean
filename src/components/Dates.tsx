import React from 'react';
import { Calendar, Star } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

const Dates = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  const getCountryName = (country: 'portugal' | 'france' | 'azores') => {
    const names = {
      portugal: { uk: 'Португалія', en: 'Portugal', ru: 'Португалия' },
      france: { uk: 'Франція', en: 'France', ru: 'Франция' },
      azores: { uk: 'Азори', en: 'Azores', ru: 'Азоры' }
    };
    return names[country][language] || names[country].en;
  };
  
  const getDateTitle = (ukTitle: string, enTitle: string) => {
    if (language === 'en') return enTitle;
    if (language === 'ru') {
      return ukTitle
        .replace('БЕРЕЗНЯ', 'МАРТА')
        .replace('КВІТНЯ', 'АПРЕЛЯ')
        .replace('ТРАВНЯ', 'МАЯ')
        .replace('ЧЕРВНЯ', 'ИЮНЯ')
        .replace('ВЕРЕСНЯ', 'СЕНТЯБРЯ')
        .replace('ЖОВТНЯ', 'ОКТЯБРЯ')
        .replace('ЛИСТОПАДА', 'НОЯБРЯ');
    }
    return ukTitle;
  };
  
  const retreatDates = [
    {
      country: 'portugal' as const,
      title: getDateTitle('28 БЕРЕЗНЯ – 4 КВІТНЯ', 'MARCH 28 – APRIL 4'),
      availableSpots: 6,
      isLimited: true
    },
    {
      country: 'azores' as const,
      title: getDateTitle('11 – 18 КВІТНЯ', 'APRIL 11 – 18'),
      availableSpots: 5,
      isLimited: false
    },
    {
      country: 'portugal' as const,
      title: getDateTitle('7 – 14 ТРАВНЯ', 'MAY 7 – 14'),
      availableSpots: 6,
      isLimited: false
    },
    {
      country: 'france' as const,
      title: getDateTitle('29 ТРАВНЯ – 5 ЧЕРВНЯ', 'MAY 29 – JUNE 5'),
      availableSpots: 8,
      isLimited: true
    },
    {
      country: 'france' as const,
      title: getDateTitle('3 – 10 ВЕРЕСНЯ', 'SEPTEMBER 3 – 10'),
      availableSpots: 8,
      isLimited: false
    },
    {
      country: 'portugal' as const,
      title: getDateTitle('25 ВЕРЕСНЯ – 2 ЖОВТНЯ', 'SEPTEMBER 25 – OCTOBER 2'),
      availableSpots: 6,
      isLimited: true
    },
    {
      country: 'portugal' as const,
      title: getDateTitle('3 – 10 ЖОВТНЯ', 'OCTOBER 3 – 10'),
      availableSpots: 5,
      isLimited: false
    },
    {
      country: 'azores' as const,
      title: getDateTitle('7 – 14 ЛИСТОПАДА', 'NOVEMBER 7 – 14'),
      availableSpots: 6,
      isLimited: true
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {retreatDates.map((date, index) => (
            <div 
              key={index}
              className="fade-in-section"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`ocean-card h-full flex flex-col p-6 pt-8 transform transition-all duration-300 hover:scale-[1.03] rounded-2xl relative ${date.isLimited ? 'bg-gradient-to-br from-[#a0ccdb] to-[#8ebfcf] ring-2 ring-amber-400/50' : 'bg-[#a0ccdb]'}`}>
                {date.isLimited && (
                  <div className="absolute top-2 right-2 z-10">
                    <div className="flex items-center gap-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[9px] font-medium px-2 py-1 rounded-full shadow-lg">
                      <Star className="w-2.5 h-2.5 fill-white" />
                      <span>Special available</span>
                    </div>
                  </div>
                )}
                <div className="mb-4">
                  <div className="text-xl font-semibold text-white">{getCountryName(date.country)}</div>
                </div>
                <h3 className="text-lg font-medium text-white mb-5">{date.title}</h3>
                <div className="mt-auto">
                  <div className="text-sm text-white/90 mb-5 font-medium border-t border-white/20 pt-4">
                    {t('dates.available')}: {date.availableSpots}
                  </div>
                  <a
                    href="#contact"
                    className="block w-full py-3 px-4 bg-white/95 text-ocean-800 text-center rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] font-semibold border border-ocean-300/60 shadow-[0_0_8px_rgba(99,151,168,0.25)] hover:shadow-[0_0_12px_rgba(99,151,168,0.4)] hover:border-ocean-400/70"
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
