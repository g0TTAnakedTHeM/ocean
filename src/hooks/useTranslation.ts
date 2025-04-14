import { useLanguage } from '../contexts/LanguageContext';

type NestedKeyOf<ObjectType extends object> = 
  {[Key in keyof ObjectType & (string | number)]: 
    ObjectType[Key] extends object 
      ? `${Key}.${NestedKeyOf<ObjectType[Key]>}` 
      : `${Key}`
  }[keyof ObjectType & (string | number)];

type TranslationKey = NestedKeyOf<typeof import('../translations/en.json')>;

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string) => {
    try {
      const translations = require(`../translations/${language}.json`);
      const keys = key.split('.');
      let result = translations;
      
      for (const k of keys) {
        if (result[k] === undefined) {
          console.error(`Translation not found for key: ${key}`);
          return key;
        }
        result = result[k];
      }
      
      return result;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return key;
    }
  };

  return { t };
}; 