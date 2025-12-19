import { useState } from 'react';
import { Check, Plus, ChevronDown } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [openCard, setOpenCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  const getText = (uk: string, en: string, ru: string) => {
    if (language === 'uk') return uk;
    if (language === 'ru') return ru;
    return en;
  };

  const packages = [
    {
      id: 1,
      location: getText('Сан-Мігель, Азори', 'São Miguel, Azores', 'Сан-Мигель, Азоры'),
      individualPrice: '2750 €',
      doublePrice: '2150 € / 2150 €',
      dates: getText('11-18 квітня • 7-14 листопада', 'April 11-18 • November 7-14', '11-18 апреля • 7-14 ноября'),
      features: [
        getText('Трансфер з/до аеропорту', 'Airport transfer', 'Трансфер из/в аэропорт'),
        getText('Приватне розміщення у готелі біля океану', 'Private accommodation in hotel by the ocean', 'Частное размещение в отеле у океана'),
        getText('Сніданки', 'Breakfasts', 'Завтраки'),
        getText('Вітальна вечеря', 'Welcome dinner', 'Приветственный ужин'),
        getText('5 уроків серфінгу з обладнанням, гідрокостюмом, страховкою', '5 surf lessons with equipment, wetsuit, insurance', '5 уроков серфинга с оборудованием, гидрокостюмом, страховкой'),
        getText('Лекція з серфінгу', 'Surf lecture', 'Лекция по серфингу'),
        getText('5 ранкових сесій океанотерапії', '5 morning ocean therapy sessions', '5 утренних сессий океанотерапии'),
        getText('5 сесій цігун та дихальних практик', '5 qigong and breathing sessions', '5 сессий цигун и дыхательных практик'),
        getText('5 практик для ментального відновлення', '5 mental recovery practices', '5 практик для ментального восстановления'),
        getText('Звукова терапія', 'Sound therapy', 'Звуковая терапия'),
        getText('Водна тілесна практика', 'Water body practice', 'Водная телесная практика'),
        getText('Подорож мовчання вулканічними тропами на озера Sete Cidades', 'Silent journey through volcanic trails to Sete Cidades lakes', 'Путешествие молчания вулканическими тропами к озерам Sete Cidades'),
        getText('Чаювання та енергетична практика в кратері вулкана', 'Tea ceremony and energy practice in volcano crater', 'Чаепитие и энергетическая практика в кратере вулкана'),
        getText('Практика відновлення у вологому лісі Caldeira Velha з купанням в лікувальних природних ванах та гарячому водопаді', 'Recovery practice in Caldeira Velha rainforest with bathing in healing natural pools and hot waterfall', 'Практика восстановления во влажном лесу Caldeira Velha с купанием в лечебных природных ваннах и горячем водопаде'),
        getText('Какао церемонія', 'Cacao ceremony', 'Какао церемония'),
        getText('Арт терапія', 'Art therapy', 'Арт терапия'),
        getText('Приватна фотосесія для кожного учасника ретріту', 'Private photo session for each retreat participant', 'Приватная фотосессия для каждого участника ретрита'),
      ],
      isSpecial: false,
      color: 'ocean'
    },
    {
      id: 2,
      location: getText('Португалія', 'Portugal', 'Португалия'),
      individualPrice: '2150 €',
      doublePrice: '1650 € / 1650 €',
      dates: getText('7-14 травня • 3-10 жовтня', 'May 7-14 • October 3-10', '7-14 мая • 3-10 октября'),
      features: [
        getText('Трансфер з/до аеропорту', 'Airport transfer', 'Трансфер из/в аэропорт'),
        getText('Розміщення в готелі біля океану', 'Accommodation in hotel by the ocean', 'Размещение в отеле у океана'),
        getText('Сніданки', 'Breakfasts', 'Завтраки'),
        getText('Вітальна вечеря', 'Welcome dinner', 'Приветственный ужин'),
        getText('5 уроків серфінгу з обладнанням, гідрокостюмом, страховкою', '5 surf lessons with equipment, wetsuit, insurance', '5 уроков серфинга с оборудованием, гидрокостюмом, страховкой'),
        getText('Лекція з серфінгу', 'Surf lecture', 'Лекция по серфингу'),
        getText('5 ранкових сесій океанотерапії', '5 morning ocean therapy sessions', '5 утренних сессий океанотерапии'),
        getText('5 сесій цигун та дихальних практик', '5 qigong and breathing sessions', '5 сессий цигун и дыхательных практик'),
        getText('5 практик для ментального відновлення', '5 mental recovery practices', '5 практик для ментального восстановления'),
        getText('3 уроки пілатесу', '3 pilates lessons', '3 урока пилатеса'),
        getText('Звукова терапія', 'Sound therapy', 'Звуковая терапия'),
        getText('Музично медитативне чаювання', 'Musical meditative tea ceremony', 'Музыкально медитативное чаепитие'),
        getText('Арт терапія', 'Art therapy', 'Арт терапия'),
        getText('СПА та масаж', 'SPA and massage', 'СПА и массаж'),
        getText('Приватна фотосесія для кожного учасника ретріту', 'Private photo session for each retreat participant', 'Приватная фотосессия для каждого участника ретрита'),
        getText('Садху терапія за бажанням', 'Sadhu therapy (optional)', 'Садху терапия по желанию'),
      ],
      isSpecial: false,
      color: 'ocean'
    },
    {
      id: 3,
      location: getText('Осегор, Франція', 'Hossegor, France', 'Оссегор, Франция'),
      individualPrice: '2750 €',
      doublePrice: '2150 € / 2150 €',
      dates: getText('6-13 червня • 7-14 вересня', 'June 6-13 • September 7-14', '6-13 июня • 7-14 сентября'),
      features: [
        getText('Трансфер з/до аеропорту та жд вокзалу', 'Transfer from/to airport and train station', 'Трансфер из/в аэропорт и жд вокзал'),
        getText('Розміщення на віллі біля океану', 'Accommodation in villa by the ocean', 'Размещение на вилле у океана'),
        getText('Сніданки та обіди', 'Breakfasts and lunches', 'Завтраки и обеды'),
        getText('Вітальна вечеря', 'Welcome dinner', 'Приветственный ужин'),
        getText('5 уроків серфінгу з обладнанням, гідрокостюмом, страховкою', '5 surf lessons with equipment, wetsuit, insurance', '5 уроков серфинга с оборудованием, гидрокостюмом, страховкой'),
        getText('Лекція з серфінгу', 'Surf lecture', 'Лекция по серфингу'),
        getText('5 ранкових сесій океанотерапії', '5 morning ocean therapy sessions', '5 утренних сессий океанотерапии'),
        getText('5 сесій цігун та дихальних практик', '5 qigong and breathing sessions', '5 сессий цигун и дыхательных практик'),
        getText('5 практик для ментального відновлення', '5 mental recovery practices', '5 практик для ментального восстановления'),
        getText('Водна тілесна практика з музичною терапією', 'Water body practice with music therapy', 'Водная телесная практика с музыкальной терапией'),
        getText('Подорож-мовчання лісом Les Landes з какао церемонією та практикою відновлення', 'Silent journey through Les Landes forest with cacao ceremony and recovery practice', 'Путешествие-молчание лесом Les Landes с какао церемонией и практикой восстановления'),
        getText('Вело прогулянка на озера Étang Noir з практикою Цигун', 'Bike ride to Étang Noir lakes with Qigong practice', 'Вело прогулка на озера Étang Noir с практикой Цигун'),
        getText('Арт терапія', 'Art therapy', 'Арт терапия'),
        getText('Масаж', 'Massage', 'Массаж'),
        getText('Приватна фотосесія для кожного учасника ретріту', 'Private photo session for each retreat participant', 'Приватная фотосессия для каждого участника ретрита'),
      ],
      isSpecial: false,
      color: 'ocean'
    },
    {
      id: 4,
      location: 'Oceantherapy + Grow New Body',
      individualPrice: '2550 €',
      doublePrice: '2150 € / 2150 €',
      dates: getText(
        'Португалія: 28 березня - 4 квітня • 25 вересня - 2 жовтня\nФранція: 6-13 червня',
        'Portugal: March 28 - April 4 • September 25 - October 2\nFrance: June 6-13',
        'Португалия: 28 марта - 4 апреля • 25 сентября - 2 октября\nФранция: 6-13 июня'
      ),
      features: [
        getText('Трансфер з/до аеропорту', 'Airport transfer', 'Трансфер из/в аэропорт'),
        getText('Приватне розміщення у готелі біля океану', 'Private accommodation in hotel by the ocean', 'Частное размещение в отеле у океана'),
        getText('Сніданки', 'Breakfasts', 'Завтраки'),
        getText('Вітальна вечеря', 'Welcome dinner', 'Приветственный ужин'),
        getText('5 уроків серфінгу з обладнанням, гідрокостюмом, страховкою', '5 surf lessons with equipment, wetsuit, insurance', '5 уроков серфинга с оборудованием, гидрокостюмом, страховкой'),
        getText('Лекція з серфінгу', 'Surf lecture', 'Лекция по серфингу'),
        getText('5 ранкових сесій океанотерапії', '5 morning ocean therapy sessions', '5 утренних сессий океанотерапии'),
        getText('5 сесій цігун та дихальних практик', '5 qigong and breathing sessions', '5 сессий цигун и дыхательных практик'),
        getText('5 практик для ментального відновлення', '5 mental recovery practices', '5 практик для ментального восстановления'),
      ],
      specialFeatures: [
        getText('7 тренувань пілатесу. Програма «Як вирости нове тіло»', '7 pilates trainings. "How to Grow a New Body" program', '7 тренировок пилатеса. Программа «Как вырастить новое тело»'),
        getText('+ подарунок — онлайн програма для продовження вдома', '+ gift — online program to continue at home', '+ подарок — онлайн программа для продолжения дома'),
        getText('1 сесія «Як вирости нове тіло». Рекомендації по харчуванню', '1 session "How to Grow a New Body". Nutrition recommendations', '1 сессия «Как вырастить новое тело». Рекомендации по питанию'),
        getText('Звукова терапія', 'Sound therapy', 'Звуковая терапия'),
        getText('СПА та масаж', 'SPA and massage', 'СПА и массаж'),
        getText('Приватна фотосесія для кожного учасника ретріту', 'Private photo session for each retreat participant', 'Приватная фотосессия для каждого участника ретрита'),
      ],
      isSpecial: true,
      color: 'amber'
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.id}
              className={`bg-white p-6 pt-8 rounded-xl shadow-md relative fade-in-section hover:translate-y-[-4px] transition-all duration-300 !border-0 ${pkg.isSpecial ? 'ring-2 ring-amber-400/50' : ''}`}
            >
              {pkg.isSpecial && (
                <div className="absolute top-2 right-3 z-10">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-medium px-2 py-1 rounded-full shadow-lg">
                    <Plus className="w-3 h-3" />
                    <span>grow new body program</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-ocean-800 mb-3">{pkg.location}</h3>
                <div className="space-y-1">
                  <div className="text-sm text-ocean-600">
                    {getText('Індивідуальна ціна', 'Individual price', 'Индивидуальная цена')}: <span className="font-semibold text-ocean-800">{pkg.individualPrice}</span>
                  </div>
                  <div className="text-xs text-ocean-500">{getText('повний пакет з приватним проживанням', 'full package with private accommodation', 'полный пакет с частным проживанием')}</div>
                  <div className="text-sm text-ocean-600 mt-2">
                    {getText('Участь для двох', 'Participation for two', 'Участие вдвоем')}: <span className="font-semibold text-ocean-800">{pkg.doublePrice}</span>
                  </div>
                  <div className="text-xs text-ocean-500">{getText('для пар або друзів які подорожують разом', 'for couples or friends traveling together', 'для пар или друзей путешествующих вместе')}</div>
                </div>
              </div>
              
              <div className={`p-2 rounded-lg mb-4 text-center ${pkg.isSpecial ? 'bg-amber-50' : 'bg-ocean-50'}`}>
                <div className={`text-xs font-medium whitespace-pre-line ${pkg.isSpecial ? 'text-amber-700' : 'text-ocean-700'}`}>
                  {pkg.dates}
                </div>
              </div>
              
              <div className="mb-4">
                <a
                  href="#contact"
                  className={`block w-full text-white text-center py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px] text-sm font-medium ${
                    pkg.isSpecial 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600' 
                      : 'bg-[#a0ccdb] hover:bg-[#8ebfcf]'
                  }`}
                >
                  {getText('Забронювати місце', 'Book Your Spot', 'Забронировать место')}
                </a>
              </div>
              
              <button 
                onClick={() => toggleCard(index)}
                className={`w-full p-2 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                  pkg.isSpecial ? 'bg-amber-50 hover:bg-amber-100' : 'bg-ocean-50 hover:bg-ocean-100'
                }`}
              >
                <span className={`text-xs font-medium ${pkg.isSpecial ? 'text-amber-800' : 'text-ocean-800'}`}>
                  {getText('Що включено', "What's included", 'Что включено')}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openCard === index ? 'rotate-180' : ''} ${pkg.isSpecial ? 'text-amber-600' : 'text-ocean-600'}`} />
              </button>
              
              {openCard === index && (
                <div className="mt-3 space-y-2">
                  <ul className="space-y-1.5">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${pkg.isSpecial ? 'text-amber-500' : 'text-ocean-600'}`} />
                        <span className="ml-2 text-[11px] text-ocean-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {pkg.specialFeatures && (
                    <div className="pt-3 mt-3 border-t border-amber-200">
                      <h4 className="text-xs font-medium text-amber-700 mb-2">+ Grow New Body</h4>
                      <ul className="space-y-1.5">
                        {pkg.specialFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span className="ml-2 text-[11px] text-ocean-800">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
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
