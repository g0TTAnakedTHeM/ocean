import { useState } from 'react';
import { Check, Star, ChevronDown } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [datesOpen, setDatesOpen] = useState(false);
  
  const limitedDates = language === 'ru' 
    ? ['28 марта - 4 апреля (Португалия)', '29 мая - 5 июня (Франция)', '25 сентября - 2 октября (Португалия)', '7-14 ноября (Азоры)']
    : language === 'uk'
    ? ['28 березня - 4 квітня (Португалія)', '29 травня - 5 червня (Франція)', '25 вересня - 2 жовтня (Португалія)', '7-14 листопада (Азори)']
    : ['March 28 - April 4 (Portugal)', 'May 29 - June 5 (France)', 'September 25 - October 2 (Portugal)', 'November 7-14 (Azores)'];
  
  const includedFeatures = [
    t('pricing.included.accommodation'),
    t('pricing.included.breakfasts'),
    t('pricing.included.surfing'),
    t('pricing.included.oceanTherapy'),
    t('pricing.included.activities'),
    t('pricing.included.practices'),
    t('pricing.included.transfer'),
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ocean-800 mb-6">{t('pricing.title')}</h2>
          <div className="flex justify-center my-10">
            <img 
              src="/assets/logo/oceanlogotherapy.svg" 
              alt="Ocean Therapy Logo" 
              className="h-16 w-auto"
            />
          </div>
          <p className="text-lg text-ocean-800 max-w-3xl mx-auto">
            {t('pricing.description')}
          </p>
        </div>
        
        {/* Top row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Individual pricing card */}
          <div className="bg-white p-6 rounded-xl shadow-md fade-in-section hover:translate-y-[-4px] transition-all duration-300 !border-0">
            <div className="text-center">
              <h3 className="text-xl font-medium text-ocean-800 mb-2">{t('pricing.individual.title')}</h3>
              <div className="mt-3 flex items-center justify-center">
                <span className="text-xl font-medium tracking-tight text-ocean-800">{t('pricing.individual.price')}</span>
              </div>
              <p className="mt-3 text-sm text-ocean-800">
                {t('pricing.individual.description')}
              </p>
            </div>
            
            <div className="mt-6">
              <a
                href="#contact"
                className="block w-full bg-[#a0ccdb] hover:bg-[#8ebfcf] text-white text-center py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px] text-sm font-medium"
              >
                {t('pricing.individual.button')}
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium text-ocean-800 mb-3">{t('pricing.included.title')}</h4>
              <ul className="space-y-2">
                {includedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-4 h-4 text-ocean-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-xs text-ocean-800">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Group pricing card */}
          <div className="bg-white p-6 pt-8 rounded-xl shadow-md relative fade-in-section hover:translate-y-[-4px] transition-all duration-300 !border-0">
            <div className="absolute top-2 right-3 z-10">
              <div className="flex items-center gap-1 bg-ocean-800 text-white text-[10px] font-medium px-2 py-1 rounded-full shadow-lg">
                <Star className="w-3 h-3 fill-white" />
                <span>{t('pricing.double.popular')}</span>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-medium text-ocean-800 mb-2">{t('pricing.double.title')}</h3>
              <div className="mt-3 flex items-center justify-center">
                <span className="text-xl font-medium tracking-tight text-ocean-800">{t('pricing.double.price')}</span>
              </div>
              <p className="mt-3 text-sm text-ocean-800">
                {t('pricing.double.description')}
              </p>
            </div>
            
            <div className="mt-6">
              <a
                href="#contact"
                className="block w-full bg-[#a0ccdb] hover:bg-[#8ebfcf] text-white text-center py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px] text-sm font-medium"
              >
                {t('pricing.double.button')}
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium text-ocean-800 mb-3">{t('pricing.included.title')}</h4>
              <ul className="space-y-2">
                {includedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-4 h-4 text-ocean-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-xs text-ocean-800">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom row - Special course card (full width) */}
        <div className="mt-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 pt-8 rounded-xl shadow-md relative fade-in-section hover:translate-y-[-4px] transition-all duration-300 !border-0">
            <div className="absolute top-2 right-3 z-10">
              <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-medium px-2 py-1 rounded-full shadow-lg">
                <Star className="w-3 h-3 fill-white" />
                <span>{t('pricing.limited.badge')}</span>
              </div>
            </div>
            
            {/* Title, price, description - centered */}
            <div className="text-center">
              <h3 className="text-xl font-medium text-ocean-800 mb-2">{t('pricing.limited.title')}</h3>
              <div className="mt-3">
                <span className="text-xl font-medium tracking-tight text-ocean-800">{t('pricing.limited.price')}</span>
              </div>
              <p className="mt-3 text-sm text-ocean-800">
                {t('pricing.limited.description')}
              </p>
            </div>
            
            {/* Button */}
            <div className="mt-6 max-w-md mx-auto">
              <a
                href="#contact"
                className="block w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-center py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px] text-sm font-medium"
              >
                {t('pricing.limited.button')}
              </a>
            </div>
            
            {/* Collapsible Available dates */}
            <div className="mt-4 max-w-md mx-auto">
              <button 
                onClick={() => setDatesOpen(!datesOpen)}
                className="w-full p-2 bg-amber-50 rounded-lg flex items-center justify-between cursor-pointer hover:bg-amber-100 transition-colors"
              >
                <span className="text-xs text-amber-800 font-medium">
                  {language === 'ru' ? 'Доступные даты' : language === 'uk' ? 'Доступні дати' : 'Available dates'}
                </span>
                <ChevronDown className={`w-4 h-4 text-amber-600 transition-transform ${datesOpen ? 'rotate-180' : ''}`} />
              </button>
              {datesOpen && (
                <div className="mt-2 p-2 bg-amber-50/50 rounded-lg">
                  <ul className="space-y-1">
                    {limitedDates.map((date, index) => (
                      <li key={index} className="text-[10px] text-amber-800 font-medium">• {date}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Features - 2 columns */}
            <div className="mt-6 md:flex md:gap-8">
              {/* Standard features */}
              <div className="md:w-1/2">
                <h4 className="text-sm font-medium text-ocean-800 mb-3">{t('pricing.included.title')}</h4>
                <ul className="space-y-2">
                  {includedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-ocean-600 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-xs text-ocean-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Special features */}
              <div className="md:w-1/2 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-amber-200 md:pl-6">
                <h4 className="text-sm font-medium text-amber-700 mb-3">+ Special</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-xs text-ocean-800">{t('pricing.limited.features.pilates')}</span>
                  </li>
                  <li className="pl-6">
                    <span className="text-[10px] text-amber-600 italic">{t('pricing.limited.features.pilatesGift')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-xs text-ocean-800">{t('pricing.limited.features.session')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-xs text-ocean-800">{t('pricing.limited.features.psychology')}</span>
                  </li>
                  <li className="pl-6">
                    <span className="text-[10px] text-amber-600 italic">{t('pricing.limited.features.psychologyGift')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-ocean-800 max-w-2xl mx-auto">
            {t('pricing.note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
