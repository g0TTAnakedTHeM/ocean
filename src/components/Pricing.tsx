import React from 'react';
import { Check, Info, Star } from 'lucide-react';

const Pricing = () => {
  const includedFeatures = [
    'Проживання в готелі на березі океану',
    'Сніданки',
    '5 уроків серфінгу (з обладнанням, гідрокостюмом, страховкою)',
    '5 ранкових практик океанотерапії, дихальні практики, цигун, чаювання',
    'Всі додаткові активності: СПА, масаж, фотосесія, вечеря, екскурсії',
    'Всі практики: пілатес, саунд хілінг, терапія з дошками Садху, церемонії та медитації',
    'Трансфер з/до аеропорту',
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ocean-800 mb-6">Вартість</h2>
          <div className="flex justify-center my-10">
            <img 
              src="/assets/logo/oceanlogotherapy.svg" 
              alt="Ocean Therapy Logo" 
              className="h-16 w-auto"
            />
          </div>
          <p className="text-lg text-ocean-800 max-w-3xl mx-auto">
            Ти найцінніше що в тебе є! Твій стан, твоє ментальне здоров'я та самопочуття.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Individual pricing card */}
          <div className="bg-white p-8 rounded-xl shadow-md fade-in-section hover:translate-y-[-4px] transition-all duration-300 !border-0">
            <div className="text-center">
              <h3 className="text-2xl font-medium text-ocean-800 mb-2">Індивідуальна участь</h3>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-5xl font-cormorant font-medium tracking-tight text-ocean-800">1850 €</span>
                <span className="ml-2 text-xl text-ocean-800">/ 1 особа</span>
              </div>
              <p className="mt-4 text-sm text-ocean-800">
                Повний пакет з індивідуальним розміщенням
              </p>
            </div>
            
            <div className="mt-8">
              <a
                href="#contact"
                className="block w-full bg-[#a0ccdb] hover:bg-[#8ebfcf] text-white text-center py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                Забронювати місце
              </a>
            </div>
            
            <div className="mt-8">
              <h4 className="text-sm font-medium text-ocean-800 mb-4">Що включено</h4>
              <ul className="space-y-3">
                {includedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-ocean-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-sm text-ocean-800">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Group pricing card */}
          <div className="bg-white p-8 rounded-xl shadow-md relative fade-in-section hover:translate-y-[-4px] transition-all duration-300 !border-0">
            <div className="absolute top-2 right-4 z-10">
              <div className="flex items-center gap-1 bg-ocean-800 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                <Star className="w-3.5 h-3.5 fill-white" />
                <span>Найпопулярніше</span>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-medium text-ocean-800 mb-2">Участь вдвох</h3>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-5xl font-cormorant font-medium tracking-tight text-ocean-800">1550 €</span>
                <span className="ml-2 text-xl text-ocean-800">/ кожен</span>
              </div>
              <p className="mt-4 text-sm text-ocean-800">
                Для пар або друзів, що подорожують разом
              </p>
            </div>
            
            <div className="mt-8">
              <a
                href="#contact"
                className="block w-full bg-[#a0ccdb] hover:bg-[#8ebfcf] text-white text-center py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                Забронювати місця
              </a>
            </div>
            
            <div className="mt-8">
              <h4 className="text-sm font-medium text-ocean-800 mb-4">Що включено</h4>
              <ul className="space-y-3">
                {includedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-ocean-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-sm text-ocean-800">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-ocean-800 max-w-2xl mx-auto">
            Від вас потрібно тільки придбати квиток і приїхати. Далі ми вас зустрінемо і все організуємо
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
