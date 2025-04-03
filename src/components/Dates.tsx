import React from 'react';
import { Sun, Leaf, Wind, Calendar } from 'lucide-react';

const Dates = () => {
  const retreatDates = [
    {
      season: 'Весна',
      title: '01 – 08 ТРАВНЯ',
      icon: <Sun className="w-6 h-6 stroke-1" />,
      availableSpots: 4,
      color: 'bg-coral-500/10'
    },
    {
      season: 'Літо',
      title: '30 ТРАВНЯ – 06 ЧЕРВНЯ',
      icon: <Sun className="w-6 h-6 stroke-1" />,
      availableSpots: 3,
      color: 'bg-coral-500/20'
    },
    {
      season: 'Осінь',
      title: '03 – 10 ЖОВТНЯ',
      icon: <Leaf className="w-6 h-6 stroke-1" />,
      availableSpots: 5,
      color: 'bg-sky-300/20'
    },
    {
      season: 'Осінь',
      title: '07 – 14 ЛИСТОПАДА',
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
            <Calendar className="w-10 h-10 text-blue-600 mr-3 stroke-1" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800">Коли?</h2>
          </div>
          <p className="apple-subtitle">
            Оберіть зручну для вас дату та зарезервуйте місце на нашому ретріті.
            Кожен сезон має свій особливий шарм і унікальні можливості для серфінгу.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
                <h3 className="text-xl font-medium text-gray-800 mb-4">{date.title}</h3>
                <div className="mt-auto">
                  <div className="text-sm text-gray-500 mb-5 font-medium border-t border-gray-200 pt-4">
                    Доступно місць: {date.availableSpots}
                  </div>
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
