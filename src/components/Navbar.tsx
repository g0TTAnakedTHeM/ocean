import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle language change and navigation
  const handleLanguageChange = (lang: 'en' | 'uk' | 'ru') => {
    setLanguage(lang);
    navigate(`/${lang}${window.location.hash}`);
  };

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.location'), href: '#location' },
    { name: t('nav.dates'), href: '#dates' },
    { name: t('nav.schedule'), href: '#schedule' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-apple-sm py-3 border-b border-apple-gray-100/50' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to={`/${language}`} className="flex items-center">
              <img 
                src={isScrolled ? "/assets/logo/oceantherapy-logo-options.pdf.png" : "/assets/logo/oceantherapy-logo-option-white.png"}
                alt="OCEANTHERAPY Logo"
                className="transition-all duration-300 h-auto w-auto max-h-6"
              />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href === '/' ? `/${language}` : link.href}
                className={`text-sm font-medium relative group transition-colors duration-300 ${
                  isScrolled ? 'text-apple-gray-800 hover:text-apple-blue' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-apple-blue' : 'bg-white'
                }`}></span>
              </a>
            ))}
            
            {/* Desktop Language Switcher */}
            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`flex items-center space-x-1 px-3 py-1 rounded-full border ${
                      isScrolled 
                        ? 'text-apple-gray-800 hover:text-apple-blue border-apple-gray-200' 
                        : 'text-white hover:text-white border-white/30'
                    }`}
                  >
                    <Globe className="h-3.5 w-3.5 mr-1" />
                    <span className="text-sm font-medium uppercase">{language}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="min-w-[120px]">
                  <DropdownMenuItem 
                    className={`flex justify-between items-center ${language === 'en' ? 'font-medium text-apple-blue' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    <span>{t('nav.english')}</span>
                    {language === 'en' && <div className="h-1.5 w-1.5 rounded-full bg-apple-blue"></div>}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className={`flex justify-between items-center ${language === 'uk' ? 'font-medium text-apple-blue' : ''}`}
                    onClick={() => handleLanguageChange('uk')}
                  >
                    <span>{t('nav.ukrainian')}</span>
                    {language === 'uk' && <div className="h-1.5 w-1.5 rounded-full bg-apple-blue"></div>}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className={`flex justify-between items-center ${language === 'ru' ? 'font-medium text-apple-blue' : ''}`}
                    onClick={() => handleLanguageChange('ru')}
                  >
                    <span>{t('nav.russian')}</span>
                    {language === 'ru' && <div className="h-1.5 w-1.5 rounded-full bg-apple-blue"></div>}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {/* Mobile menu button and language selector */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Mobile Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`flex items-center space-x-1 py-1 px-2 rounded-full border ${
                    isScrolled 
                      ? 'text-apple-gray-800 border-apple-gray-200' 
                      : 'text-white border-white/30'
                  }`}
                >
                  <Globe className="h-3 w-3" />
                  <span className="text-xs font-medium uppercase">{language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[100px]">
                <DropdownMenuItem 
                  className={language === 'en' ? 'font-medium text-apple-blue' : ''}
                  onClick={() => handleLanguageChange('en')}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={language === 'uk' ? 'font-medium text-apple-blue' : ''}
                  onClick={() => handleLanguageChange('uk')}
                >
                  Українська
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={language === 'ru' ? 'font-medium text-apple-blue' : ''}
                  onClick={() => handleLanguageChange('ru')}
                >
                  Русский
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-full focus:outline-none transition-colors duration-300 ${
                isScrolled 
                  ? 'text-apple-gray-800 hover:bg-apple-gray-100' 
                  : 'text-white hover:text-white/80'
              }`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">{t('nav.openMenu')}</span>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <div className="px-6 pt-2 pb-4 space-y-1 sm:px-8 bg-white/90 backdrop-blur-xl border-b border-apple-gray-100/50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href === '/' ? `/${language}` : link.href}
              className="block px-3 py-3 rounded-lg text-sm font-medium text-apple-gray-800 hover:text-apple-blue hover:bg-apple-gray-50 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
