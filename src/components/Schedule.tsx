import React, { useState } from 'react';
import { Calendar, Sun, Coffee, Waves, Utensils, Activity, Music, Bike, Camera, Heart, MapPin, Leaf } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Schedule = () => {
  const { t } = useTranslation();
  const [activeDay, setActiveDay] = useState(1);

  const days = [
    {
      day: 1,
      title: t('schedule.day1.title'),
      activities: [
        {
          time: '14:00',
          title: t('schedule.day1.arrival'),
          description: '',
          icon: <Calendar className="w-5 h-5 stroke-1" />,
        },
        {
          time: '18:00',
          title: t('schedule.day1.tour'),
          description: '',
          icon: <MapPin className="w-5 h-5 stroke-1" />,
        },
        {
          time: '20:00',
          title: t('schedule.day1.dinner'),
          description: '',
          icon: <Utensils className="w-5 h-5 stroke-1" />,
        },
      ],
    },
    {
      day: 2,
      title: t('schedule.days2to7.title'),
      activities: [
        {
          time: '06:30',
          title: t('schedule.days2to7.oceanTherapy'),
          description: '',
          icon: <Sun className="w-5 h-5 stroke-1" />,
        },
        {
          time: '09:00',
          title: t('schedule.days2to7.breakfast'),
          description: '',
          icon: <Coffee className="w-5 h-5 stroke-1" />,
        },
        {
          time: '11:00',
          title: t('schedule.days2to7.surfing'),
          description: '',
          icon: <Waves className="w-5 h-5 stroke-1" />,
        },
        {
          time: '14:00',
          title: t('schedule.days2to7.lunch'),
          description: '',
          icon: <Utensils className="w-5 h-5 stroke-1" />,
        },
        {
          time: '15:00 - 20:00',
          title: t('schedule.days2to7.practices'),
          description: t('schedule.days2to7.practicesDetails'),
          icon: <Activity className="w-5 h-5 stroke-1" />,
        },
      ],
      extraActivities: [
        { name: 'Massage & Therapy', icon: <Leaf className="w-5 h-5 stroke-1" /> },
        { name: 'Sound Healing', icon: <Music className="w-5 h-5 stroke-1" /> },
        { name: 'Photo Session', icon: <Camera className="w-5 h-5 stroke-1" /> },
        { name: 'Bike Tours', icon: <Bike className="w-5 h-5 stroke-1" /> },
      ],
    },
    {
      day: 8,
      title: t('schedule.day8.title'),
      activities: [
        {
          time: '8:00',
          title: t('schedule.day8.breakfast'),
          description: '',
          icon: <Coffee className="w-5 h-5 stroke-1" />,
        },
        {
          time: '10:00',
          title: t('schedule.day8.wishes'),
          description: '',
          icon: <Heart className="w-5 h-5 stroke-1" />,
        },
        {
          time: '12:00',
          title: t('schedule.day8.checkout'),
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
            {t('schedule.title')}
          </h2>
          <div className="flex justify-center my-10">
            <img 
              src="/assets/logo/oceanlogotherapy.svg" 
              alt="Ocean Therapy Logo" 
              className="h-16 w-auto"
            />
          </div>
          <p className="apple-text text-ocean-800">
            {t('schedule.description')}
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
            {t('schedule.day1.title').split('–')[0].trim()}
          </button>
          <button
            className={`px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeDay === 2
                ? 'bg-ocean-800 text-white shadow-md'
                : 'bg-white text-ocean-800 hover:bg-ocean-50'
            }`}
            onClick={() => setActiveDay(2)}
          >
            {t('schedule.days2to7.title')}
          </button>
          <button
            className={`px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeDay === 8
                ? 'bg-ocean-800 text-white shadow-md'
                : 'bg-white text-ocean-800 hover:bg-ocean-50'
            }`}
            onClick={() => setActiveDay(8)}
          >
            {t('schedule.day8.title')}
          </button>
        </div>
        
        {/* Day content */}
        <div className="apple-card p-8 md:p-10 fade-in-section">
          {days
            .filter((day) => day.day === activeDay)
            .map((day) => (
              <div key={day.day} className="space-y-10">
                <h3 className="apple-headline">{day.title}</h3>
                
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
                    "{t('schedule.quote')}"
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div className="bg-[#a0ccdb] p-8 rounded-xl text-center my-12">
          <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">
            {t('schedule.closingMessage')}
          </h3>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-ocean-800 rounded-xl font-medium hover:bg-white/90 transition-all duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg"
          >
            {t('common.iWantToBook')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
