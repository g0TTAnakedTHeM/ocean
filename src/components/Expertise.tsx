import React from 'react';
import { Award, Droplets, Users } from 'lucide-react';
import Divider from './ui/Divider';

const Expertise = () => {
  const achievements = [
    {
      icon: <Award className="w-10 h-10 stroke-1 text-ocean-700" />,
      text: '3 місце у світі по океанотерапії від премії Aloha Award',
    },
    {
      icon: <Droplets className="w-10 h-10 stroke-1 text-ocean-700" />,
      text: '5 років досвіду з проектом GOOD DAYS family surf camp',
    },
    {
      icon: <Users className="w-10 h-10 stroke-1 text-ocean-700" />,
      text: 'Понад 1000 гостей отримали досвід океанотерапії з нами',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-ocean-50/70 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="ocean-title">Чому нам довіряють?</h2>
          <Divider />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-section">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-ocean-50 p-4 rounded-full mb-4">
                {achievement.icon}
              </div>
              <p className="text-gray-700">{achievement.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
