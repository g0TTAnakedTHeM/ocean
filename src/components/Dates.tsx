import React from 'react';
import { Calendar, ChevronLeft, ChevronRight, Sun, Leaf, Wind } from 'lucide-react';
import Divider from './ui/Divider';

const Dates = () => {
  const retreatDates = [
    { 
      period: '01 – 08 ТРАВНЯ', 
      season: 'Весна', 
      availability: 'Доступно місць: 4',
      icon: <Sun className="w-6 h-6 stroke-1" />,
      color: 'bg-coral-500/10 shadow-md'
    },
    { 
      period: '30 ТРАВНЯ – 06 ЧЕРВНЯ', 
      season: 'Літо', 
      availability: 'Доступно місць: 3',
      icon: <Sun className="w-6 h-6 stroke-1" />,
      color: 'bg-coral-500/20 shadow-md'
    },
    { 
      period: '03 – 10 ЖОВТНЯ', 
      season: 'Осінь', 
      availability: 'Доступно місць: 5',
      icon: <Leaf className="w-6 h-6 stroke-1" />, 
      color: 'bg-sky-300/20'
    },
    { 
      period: '07 – 14 ЛИСТОПАДА', 
      season: 'Осінь', 
      availability: 'Доступно місць: 6',
      icon: <Wind className="w-6 h-6 stroke-1" />,
      color: 'bg-sky-300/15'
    },
  ];

  // Horizontal scroll handler
  const scrollContainer = (direction: 'left' | 'right') => {
    const container = document.getElementById('dates-container');
    if (container) {
      const scrollAmount = 300;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="dates" className="py-20 md:py-28 bg-ocean-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <div className="inline-flex items-center justify-center mb-4">
            <Calendar className="w-10 h-10 text-blue-600 mr-3 stroke-1" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800">Коли?</h2>
          </div>
          <Divider />
          <p className="ocean-text max-w-3xl mx-auto">
            Оберіть зручну для вас дату та зарезервуйте місце на нашому ретріті.
            Кожен сезон має свій особливий шарм і унікальні можливості для серфінгу.
          </p>
        </div>

        {/* Mobile dates carousel */}
        <div className="block md:hidden">
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => scrollContainer('left')}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-200 text-ocean-800 hover:bg-ocean-50 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollContainer('right')}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-200 text-ocean-800 hover:bg-ocean-50 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile dates container */}
          <div className="flex overflow-x-auto pb-6 snap-x scrollbar-none space-x-6" id="dates-container">
            {retreatDates.map((date, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] snap-center fade-in-section"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`ocean-card h-full flex flex-col p-6 transform transition-all duration-300 hover:scale-[1.03] rounded-xl overflow-hidden ${date.color}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-ocean-700 font-medium">{date.season}</div>
                    <div className="text-ocean-700">{date.icon}</div>
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">{date.period}</h3>
                  <div className="mt-auto">
                    <div className="text-sm text-gray-500 mb-5 font-medium border-t border-gray-200 pt-4">{date.availability}</div>
                    <a
                      href="#pricing"
                      className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-md transition-all duration-300 transform hover:translate-y-[-2px] shadow-sm hover:shadow-md"
                    >
                      Забронювати
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid view */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {retreatDates.map((date, index) => (
            <div
              key={index}
              className="fade-in-section"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`ocean-card h-full flex flex-col p-6 transform transition-all duration-300 hover:scale-[1.03] rounded-xl overflow-hidden ${date.color}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-ocean-700 font-medium">{date.season}</div>
                  <div className="text-ocean-700">{date.icon}</div>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">{date.period}</h3>
                <div className="mt-auto">
                  <div className="text-sm text-gray-500 mb-5 font-medium border-t border-gray-200 pt-4">{date.availability}</div>
                  <a
                    href="#pricing"
                    className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-md transition-all duration-300 transform hover:translate-y-[-2px] shadow-sm hover:shadow-md"
                  >
                    Забронювати
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
