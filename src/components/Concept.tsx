import React from 'react';
import { Anchor, Moon, Leaf } from 'lucide-react';
import Divider from './ui/Divider';
import { GradientText } from './ui/GradientText';

const Concept = () => {
  const concepts = [
    {
      title: 'ОКЕАН',
      description: 'Природна терапія для відновлення нервової системи. Контакт із водою знижує рівень стресу, активізує роботу мозку та сприяє емоційному розслабленню.',
      icon: <img src="/assets/images/ocean-2-svgrepo-com.svg" alt="Ocean" className="w-10 h-10" />
    },
    {
      title: 'СЕРФІНГ',
      description: 'Це не лише спорт, а й потужна терапія. Сприяє викиду ендорфінів «гармонів щастя» і знижує рівень стресу, даруючи відчуття свободи та радості.',
      icon: <img src="/assets/images/surfing-svgrepo-com.svg" alt="Surfing" className="w-10 h-10" />
    },
    {
      title: 'СИЛА',
      description: 'Серфінг вчить довіряти собі та моменту, зміцнює емоційну стійкість і пробуджує внутрішню силу та гармонію.',
      icon: <img src="/assets/images/strength-svgrepo-com.svg" alt="Strength" className="w-10 h-10" />
    },
    {
      title: 'СПОКІЙ',
      description: 'Можливість вимкнути шум міста й соцмереж. Природа навколо допомагає зупинитися, відчути момент і наповнитися гармонією.',
      icon: <img src="/assets/images/peace-svgrepo-com.svg" alt="Peace" className="w-10 h-10" />
    },
    {
      title: 'ПРОБУДЖЕННЯ',
      description: 'Дихальні практики, цигун, медитація, саундхілінг, пілатес, масажі, практики садху відновлюють внутрішній баланс та ясність розуму. Справжнє піклування про ментальне здоров\'я.',
      icon: <img src="/assets/images/fire-alt-svgrepo-com.svg" alt="Awakening" className="w-10 h-10" />
    },
    {
      title: 'РАДІСТЬ',
      description: 'Найголовніше в житті – це ти і твій внутрішній стан. Ти найцінніше що в тебе є. Дозволь внутрішній дитині відчувати справжню радість, а душі – гармонію.',
      icon: <img src="/assets/images/joy-figure-svgrepo-com.svg" alt="Joy" className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle wave pattern */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/pattern.png')] opacity-[0.03]"></div>
        
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-ocean-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-ocean-100/30 rounded-full blur-3xl"></div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-ocean-50/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-cormorant text-ocean-800 mb-6">
            <span className="block text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
              <GradientText 
                variant="blue"
                className="font-semibold"
                animate={true}
              >
                OCEANTHERAPY
              </GradientText>
            </span>
            <span className="block text-xl md:text-2xl lg:text-3xl font-normal text-ocean-700/80 max-w-3xl mx-auto leading-relaxed">
              це унікальна програма яка поєднує серфінг та терапії для покращення ментального здоров'я та внутрішнього балансу
            </span>
          </h2>
          <Divider />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {concepts.map((concept, index) => (
            <div 
              key={index} 
              className="fade-in-section bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border border-ocean-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 bg-ocean-50 p-4 rounded-full">
                  {concept.icon}
                </div>
                <h3 className="text-xl font-medium text-ocean-800 mb-3">{concept.title}</h3>
                <p className="text-ocean-800">{concept.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concept;
