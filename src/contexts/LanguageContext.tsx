import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'uk' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to Ukrainian
  const [language, setLanguage] = useState<Language>('uk');

  useEffect(() => {
    // Get language from localStorage or default to Ukrainian
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'uk', 'ru'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // If no valid language in localStorage, try to get browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en' || browserLang === 'ru') {
        setLanguage(browserLang as Language);
      }
      // If not English or Russian, keep Ukrainian as default
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 