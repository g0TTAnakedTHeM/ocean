import React from 'react';
import { Heart } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-apple-gray-50 border-t border-apple-gray-100 py-16 relative overflow-hidden">
      {/* Optional subtle background pattern - Apple style tends to be very minimal */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg 
          className="w-full h-full" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
        >
          <path 
            fill="#000000" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      <div className="apple-container relative z-10">
        {/* Final CTA */}
        <div className="text-center mb-20 max-w-3xl mx-auto fade-in-section">
          <h2 className="apple-headline text-3xl md:text-4xl text-white mb-6 bg-[#a0ccdb] p-6 rounded-xl">
            {t('footer.firstSentence')}
          </h2>
          <p className="apple-text text-apple-gray-700 text-xl mt-6 mb-8">
            {t('footer.secondSentence')}
          </p>
          <a
            href="#pricing"
            className="inline-block bg-[#a0ccdb] hover:bg-[#8ebfcf] text-white px-8 py-4 text-lg font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]"
          >
            {t('common.iWantToBook')}
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <span className="text-apple-gray-800 font-display text-2xl font-semibold tracking-tight">
                OCEANTHERAPY
              </span>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-base font-medium text-apple-gray-800 mb-5">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="text-apple-gray-500">
                {t('footer.whatsapp')}
              </li>
              <li className="text-apple-gray-500">
                {t('footer.telegram')}
              </li>
              <li>
                <a href="#contact" className="text-apple-gray-500 hover:text-apple-blue transition-colors">
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
            
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-apple-gray-200 flex items-center justify-center text-apple-gray-800 hover:bg-apple-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-apple-gray-200 flex items-center justify-center text-apple-gray-800 hover:bg-apple-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 mt-6 border-t border-apple-gray-200 text-center text-apple-gray-400 text-sm">
          <p>
            {t('footer.copyright')}
          </p>
          <p className="mt-2 flex items-center justify-center">
            {t('footer.credits').split('♡')[0]}
            <Heart className="h-4 w-4 mx-1 text-apple-accent" />
            {t('footer.credits').split('♡')[1]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
