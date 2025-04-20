import { useLanguage } from '../contexts/LanguageContext';
import enTranslations from '../translations/en.json';
import ukTranslations from '../translations/uk.json';
import ruTranslations from '../translations/ru.json';

const translations = {
  en: enTranslations,
  uk: ukTranslations,
  ru: ruTranslations
};

const isDevMode = process.env.NODE_ENV === 'development';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    try {
      // Validate language
      if (!language) {
        console.error('Language is undefined, defaulting to English');
        return getTranslationFromObject(enTranslations, key) || key;
      }

      // Get translations for current language
      const currentTranslations = translations[language];
      if (!currentTranslations) {
        console.error(`No translations found for language: ${language}, defaulting to English`);
        return getTranslationFromObject(enTranslations, key) || key;
      }

      // Try to get translation from current language
      const translation = getTranslationFromObject(currentTranslations, key);
      if (translation) {
        return translation;
      }

      // If no translation found in current language, try English
      if (language !== 'en') {
        const enTranslation = getTranslationFromObject(enTranslations, key);
        if (enTranslation) {
          console.warn(`Missing "${key}" in ${language} translations, falling back to English`);
          return enTranslation;
        }
      }

      // If in development mode, return the key in a format that makes it obvious it's missing
      if (isDevMode) {
        console.error(`No translation found for key: ${key}`);
        return `[MISSING: ${key}]`;
      }
      
      // In production, just return the key
      return key;
    } catch (error) {
      console.error(`Error getting translation for key: ${key}`, error);
      return isDevMode ? `[ERROR: ${key}]` : key;
    }
  };

  // Helper function to get a translation from a nested object
  const getTranslationFromObject = (obj: any, key: string): string | null => {
    const parts = key.split('.');
    let result = obj;

    for (const part of parts) {
      if (result == null || typeof result !== 'object') {
        return null;
      }
      result = result[part];
    }

    return typeof result === 'string' ? result : null;
  };

  return { t };
}; 