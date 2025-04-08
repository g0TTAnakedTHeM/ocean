import React from 'react';
import { Award, Droplets, Users } from 'lucide-react';

const Expertise = () => {
  const expertise = [
    {
      title: "3 місце в світі по океанутерапії",
      description: "Визнання від Aloha Award за унікальну методику та підхід до терапії через океан.",
      icon: <Award className="w-10 h-10 stroke-1 text-ocean-700" />,
    },
    {
      title: "5 років проекту",
      description: "Good day's Family Surf Camp успішно проводить ретріти та допомагає людям трансформуватися.",
      icon: <Droplets className="w-10 h-10 stroke-1 text-ocean-700" />,
    },
    {
      title: "Понад 1000 гостей",
      description: "Більше тисячі людей вже отримали цінний досвід та терапевтичний ефект разом з нами.",
      icon: <Users className="w-10 h-10 stroke-1 text-ocean-700" />,
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-ocean-50/70 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="ocean-title text-center text-ocean-800 mb-12 text-4xl md:text-5xl lg:text-6xl font-semibold">
          Чому нам довіряють?
        </h2>
        
        <div className="flex justify-center my-10">
          <img 
            src="/assets/logo/oceanlogotherapy.svg" 
            alt="Ocean Therapy Logo" 
            className="h-16 w-auto"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {expertise.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-ocean-50 p-4 rounded-full mb-4">
                <div className="flex justify-center">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-apple-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
