import React, { useState } from 'react';
import { Calendar, Sun, Coffee, Waves, Utensils, Activity, Music, Bike, Camera, Heart, MapPin, Leaf } from 'lucide-react';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  const days = [
    {
      day: 1,
      title: 'День 1',
      activities: [
        {
          time: '14:00',
          title: 'Зустріч в аеропорті Лісабона, подорож до Балеалу. Заселення в готелі.',
          description: '',
          icon: <Calendar className="w-5 h-5 stroke-1" />,
        },
        {
          time: '18:00',
          title: 'Ексурсія по місту сили Балеал та знайомство з групою та командою.',
          description: '',
          icon: <MapPin className="w-5 h-5 stroke-1" />,
        },
        {
          time: '20:00',
          title: 'Захід сонця та звана вечеря з традиційними португальськими стравами',
          description: '',
          icon: <Utensils className="w-5 h-5 stroke-1" />,
        },
      ],
    },
    {
      day: 2,
      title: 'День 2-7',
      activities: [
        {
          time: '06:30',
          title: 'Океанотерапія',
          description: '',
          icon: <Sun className="w-5 h-5 stroke-1" />,
        },
        {
          time: '09:00',
          title: 'Сніданок',
          description: '',
          icon: <Coffee className="w-5 h-5 stroke-1" />,
        },
        {
          time: '11:00',
          title: 'Серфінг',
          description: '',
          icon: <Waves className="w-5 h-5 stroke-1" />,
        },
        {
          time: '14:00',
          title: 'Ланч та відпочинок',
          description: '',
          icon: <Utensils className="w-5 h-5 stroke-1" />,
        },
        {
          time: '15:00 - 20:00',
          title: 'Практики',
          description: 'Пілатес/ саунд хілінг, садху терапія/ массаж/ какао церемонія / Спа/ велопрогулянка/ екскурсії/ душевні заходи сонця/ приватна фотосессія',
          icon: <Activity className="w-5 h-5 stroke-1" />,
        },
      ],
      extraActivities: [
        { name: 'Масаж та терапія', icon: <Leaf className="w-5 h-5 stroke-1" /> },
        { name: 'Звукова терапія', icon: <Music className="w-5 h-5 stroke-1" /> },
        { name: 'Фотосесія', icon: <Camera className="w-5 h-5 stroke-1" /> },
        { name: 'Велопрогулянка', icon: <Bike className="w-5 h-5 stroke-1" /> },
      ],
    },
    {
      day: 8,
      title: 'День 8',
      activities: [
        {
          time: '8:00',
          title: 'Спільний сніданок',
          description: '',
          icon: <Coffee className="w-5 h-5 stroke-1" />,
        },
        {
          time: '10:00',
          title: 'Обійми та обмін побажаннями',
          description: '',
          icon: <Heart className="w-5 h-5 stroke-1" />,
        },
        {
          time: '12:00',
          title: 'Виселення та трансфер в аеропорт Лісабону',
          description: '',
          icon: <Calendar className="w-5 h-5 stroke-1" />,
        },
      ],
    },
  ];

  return (
    <section id="schedule" className="apple-section bg-apple-gray-50">
      <div className="apple-container">
        <div className="text-center mb-20 fade-in-section">
          <h2 className="apple-title text-ocean-800">
            Программа
          </h2>
          <div className="flex justify-center my-10">
            <img 
              src="/assets/logo/oceanlogotherapy.svg" 
              alt="Ocean Therapy Logo" 
              className="h-16 w-auto"
            />
          </div>
          <p className="apple-text text-ocean-800">
            Кожен день програми The Oceantherapy це незабутня пригода з собою та для себе. Це нові враження, новий досвід та нові відкриття себе
          </p>
        </div>
        
        {/* Day tabs */}
        <div className="flex justify-center space-x-3 mb-12 pb-2 fade-in-section bg-gray-100/80 py-3 px-6 rounded-full w-fit mx-auto shadow-sm">
          <button
            className={`px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeDay === 1
                ? 'bg-ocean-800 text-white shadow-md'
                : 'bg-white text-ocean-800 hover:bg-ocean-50'
            }`}
            onClick={() => setActiveDay(1)}
          >
            День 1
          </button>
          <button
            className={`px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeDay === 2
                ? 'bg-ocean-800 text-white shadow-md'
                : 'bg-white text-ocean-800 hover:bg-ocean-50'
            }`}
            onClick={() => setActiveDay(2)}
          >
            День 2-7
          </button>
          <button
            className={`px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeDay === 8
                ? 'bg-ocean-800 text-white shadow-md'
                : 'bg-white text-ocean-800 hover:bg-ocean-50'
            }`}
            onClick={() => setActiveDay(8)}
          >
            День 8
          </button>
        </div>
        
        {/* Day content */}
        <div className="apple-card p-8 md:p-10 fade-in-section">
          {days
            .filter((day) => day.day === activeDay)
            .map((day) => (
              <div key={day.day} className="space-y-10">
                <h3 className="apple-headline">Програма {day.title}</h3>
                
                {/* Timeline */}
                <div className="space-y-6">
                  {day.activities.map((activity, index) => (
                    <div key={index} className="group apple-timeline-item">
                      <div className="flex">
                        <div className="pt-1.5">
                          <div className="apple-timeline-time">{activity.time}</div>
                          <h4 className="apple-timeline-title group-hover:text-apple-blue">{activity.title}</h4>
                          <p className="apple-timeline-description">{activity.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Quote for each day */}
                <div className="bg-ocean-800 p-8 rounded-xl shadow-lg my-12">
                  <p className="text-xl md:text-2xl text-white text-center italic">
                    "The oceantherapy - шлях до усвідомленності та гармонії духу, тіла та розуму"
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div className="bg-[#a0ccdb] p-8 rounded-xl text-center my-12">
          <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">
            Дозволь собі провести найкращий час з собою і подаруй собі справжню радість та нові відчуття.
          </h3>
          <p className="text-white/90 mb-8">
            Приєднуйтесь до унікального ретріту, який назавжди змінить ваше сприйняття себе та світу.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-ocean-800 rounded-xl font-medium hover:bg-white/90 transition-all duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg"
          >
            ХОЧУ І БРОНУЮ
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
