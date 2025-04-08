import React from 'react';
import { Anchor, Moon, Leaf } from 'lucide-react';

const Concept = () => {
  const concepts = [
    {
      icon: (
        <svg fill="#00425a" viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M15,21H9a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Zm3-4H6a1,1,0,0,1,0-2H18a1,1,0,0,1,0,2Z" />
          <path d="M21,13a.84.84,0,0,1-.27,0c-2.25-.63-2.51-2.44-2.74-4l-.08-.55A4.39,4.39,0,0,0,15.32,5.1,2.68,2.68,0,0,0,13,5.55,4,4,0,0,1,11,13H3a1,1,0,0,1,0-2h8a2,2,0,0,0,0-4,1,1,0,0,1-.74-1.68c2.29-2.49,4.33-2.53,5.64-2.14a6.33,6.33,0,0,1,4,4.88l.08.58c.25,1.72.4,2.14,1.3,2.4A1,1,0,0,1,21,13Z" />
        </svg>
      ),
      title: "Океанотерапія",
      description: "ОКЕАН - природна терапія для відновлення нервової системи. Контакт із водою знижує рівень стресу, активізує роботу мозку та сприяє емоційному розслабленню."
    },
    {
      icon: (
        <svg fill="#00425a" viewBox="-1.68 -1.68 27.36 27.36" className="w-12 h-12">
          <path d="M20,.01c-3.812,0-8.125,2.038-11.539,5.451A38.467,38.467,0,0,0,.323,17.312a3.984,3.984,0,0,0,.851,4.409L2.28,22.826a3.981,3.981,0,0,0,4.4.852,38.333,38.333,0,0,0,11.854-8.139C21.952,12.126,23.99,7.813,23.99,4A3.632,3.632,0,0,0,20,.01ZM17.125,14.125A36.348,36.348,0,0,1,5.9,21.84a2.006,2.006,0,0,1-2.026-.3L16.707,8.707a1,1,0,1,0-1.414-1.414L2.457,20.129a2.007,2.007,0,0,1-.3-2.028A36.44,36.44,0,0,1,9.875,6.875C13.463,3.288,17.458,2.01,20,2.01c1.451,0,1.99.539,1.99,1.99C21.99,6.543,20.712,10.538,17.125,14.125Z" />
        </svg>
      ),
      title: "Серфінг",
      description: "СИЛА - серфінг вчить довіряти собі та моменту, зміцнює емоційну стійкість і пробуджує внутрішню силу та гармонію."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path stroke="#00425a" strokeWidth="1.91px" fill="none" d="M5.48,10.08A16.9,16.9,0,0,0,8.81,15.7" />
          <path stroke="#00425a" strokeWidth="1.91px" fill="none" d="M1.69,4.52a0,0,0,0,1,0,0,2.4,2.4,0,0,0-.18.89v4.65c0,3.82,2.86,12.41,5.73,12.41,5.5,0,9.5-4.94,11.33-7.71A4.77,4.77,0,1,0,13,10.09,14.12,14.12,0,0,0,10.09,12a4.9,4.9,0,0,0-1.28,3.7,8.07,8.07,0,0,0,.33,2" />
          <circle stroke="#00425a" strokeWidth="1.91px" fill="none" cx="5.8" cy="5.8" r="4.3" />
          <circle stroke="#00425a" strokeWidth="1.91px" fill="none" cx="5.8" cy="5.8" r="0.48" />
        </svg>
      ),
      title: "СПОКІЙ",
      description: "Тут і зараз – можливість вимкнути шум міста й соцмереж. Природа навколо допомагає зупинитися, відчути момент і наповнитися гармонією."
    },
    {
      icon: (
        <svg fill="#00425a" viewBox="0 0 300.3 300.3" className="w-12 h-12">
          <path d="M295.047,60.329c-31.864-18.033-70.007-21.645-104.653-9.911c-2.428,0.822-4.816,1.719-7.173,2.673 c0.457-5.465,1.688-10.856,3.692-15.999c1.44-3.695,0.642-7.889-2.055-10.796c-2.699-2.907-6.821-4.02-10.613-2.859 c-30.415,9.293-55.5,31.167-68.823,60.014c-5.2,11.262-8.446,23.056-9.708,35.187l-5.896-5.875 C78.41,101.393,63.257,95.132,47.15,95.132C21.152,95.132,0,116.284,0,142.282c0,5.717,4.633,10.35,10.35,10.35h16.604 c3.375,0,6.515,1.516,8.62,4.169l0.335,0.421c1.281,1.613,2.092,3.644,2.345,5.878c4.958,43.737,31.434,81.466,70.827,100.924 c17.801,8.793,37.398,13.293,57.062,13.293c9.386,0,18.79-1.026,28.02-3.099c28.142-6.322,53.599-22.066,71.684-44.335 c2.922-3.598,3.095-8.7,0.424-12.488c-2.67-3.788-7.535-5.338-11.905-3.796c-22.362,7.895-40.416,7.084-53.312,2.423 c14.795-5.862,27.769-15.74,37.375-28.636c8.815-11.835,13.388-27.099,12.879-42.977c-0.023-0.706-0.033-1.415-0.033-2.126 c0-27.929,16.716-52.8,42.588-63.363c3.671-1.5,6.164-4.966,6.416-8.924C300.532,66.038,298.5,62.283,295.047,60.329z M124.217,92.131c8.147-17.64,21.694-32.079,38.424-41.387c-0.394,4.303-0.427,8.642-0.104,12.971 c-18.995,12.042-34.486,28.902-45.057,49.332C118.867,105.888,121.096,98.891,124.217,92.131z M230.575,142.282 c0,0.93,0.016,1.858,0.045,2.785c0.36,11.221-2.762,21.858-8.792,29.953c-9.399,12.618-23.046,21.435-38.427,24.825 c-2.701,0.596-5.458,1.012-8.43,1.275c-3.866,0.342-7.217,2.819-8.678,6.416c-1.461,3.596-0.785,7.708,1.749,10.649 c10.173,11.808,29.4,22.223,55.53,21.986c-31.04,19.659-70.673,22.407-105.325,5.29c-33.051-16.325-55.267-47.988-59.427-84.694 c-0.689-6.089-3.006-11.768-6.709-16.43l-0.333-0.42c-6.049-7.618-15.097-11.986-24.825-11.986h-4.145 c4.036-9.455,13.427-16.1,24.341-16.1c10.591,0,20.555,4.117,28.057,11.593l7.458,7.432c8.137,8.109,20.092,11.239,31.195,8.174 c8.872-2.448,16.352-8.83,20.518-17.508c12.681-26.398,34.934-46.108,62.658-55.499c22.862-7.744,47.538-7.522,70.042,0.286 C244.403,86.825,230.575,113.287,230.575,142.282z" />
        </svg>
      ),
      title: "ПРОБУДЖЕННЯ",
      description: "Перезавантаження – дихальні практики, цигун, медитація, саундхілінг, пілатес, масажі, практики садху відновлюють внутрішній баланс та ясність розуму. Справжне піклування про ментальне здоров'я."
    },
    {
      icon: (
        <svg fill="#00425a" viewBox="-32 0 512 512" className="w-12 h-12">
          <path d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z" />
        </svg>
      ),
      title: "РАДІСТЬ",
      description: "Ти - найголовніше що в тебе є і твій внутрішній стан. Ти найцінніше що в тебе є. Дозволь внутрішній дитині відчувати справжню радість, а душі – гармонію."
    },
    {
      icon: (
        <svg stroke="#00425a" fill="none" viewBox="0 0 400 400" className="w-12 h-12">
          <path d="M185.793 83.6281C202.028 142.48 284.017 125.351 267.901 67.116C258.248 32.2317 232.371 34.9374 210.405 48.661" stroke="#00425a" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M248.633 148.408C248.633 238.198 197.936 257.369 197.936 373.877" stroke="#00425a" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M194.758 159.471C194.76 207.293 162.036 320.933 111.201 207.293" stroke="#00425a" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M248.632 148.409C257.996 121.726 303.085 37.8772 299.078 23" stroke="#00425a" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M193.933 156.414C193.933 127.294 140.316 50.7892 107.214 28.3369" stroke="#00425a" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M110.717 206.767C105.382 203.022 99.1933 204.867 93.3745 204.14" stroke="#00425a" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M209.942 377.88C206.038 376.546 202.134 375.212 198.23 373.877" stroke="#00425a" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M121.89 40.2624C116.342 39.3411 111.348 38.1389 106.649 35.0068" stroke="#00425a" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M299.694 37.7547C302.455 33.6116 304.926 30.4963 306 25.668" stroke="#00425a" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Радість",
      description: "ОКЕАН - природна терапія для відновлення нервової системи. Контакт із водою знижує рівень стресу, активізує роботу мозку та сприяє емоційному розслабленню."
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
          <div className="flex justify-center mb-10">
            <img 
              src="/assets/logo/oceantherapy-logo-options.pdf.png" 
              alt="OCEANTHERAPY Logo" 
              className="h-16 w-auto"
            />
          </div>
          <h2 className="font-cormorant text-ocean-800 mb-6">
            <span className="block text-xl md:text-2xl lg:text-3xl font-normal text-ocean-800 max-w-3xl mx-auto leading-relaxed">
              унікальна програма яка поєднує серфінг та терапії для покращення ментального здоров'я та внутрішнього балансу
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {concepts.map((concept, index) => (
            <div 
              key={index} 
              className="fade-in-section bg-[#a0ccdb] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border border-ocean-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 bg-white/20 p-4 rounded-full">
                  {concept.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{concept.title}</h3>
                <p className="text-white text-sm">{concept.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concept;
