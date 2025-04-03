import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Головна', href: '/' },
    { name: 'Про нас', href: '#about' },
    { name: 'Розташування', href: '#location' },
    { name: 'Дати', href: '#dates' },
    { name: 'Розклад', href: '#schedule' },
    { name: 'Вартість', href: '#pricing' },
    { name: 'Контакти', href: '#contact' },
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
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src={isScrolled ? "/assets/logo/oceantherapy-logo-options.pdf.png" : "/assets/logo/oceantherapy-logo-option-white.png"} 
                alt="OCEANTHERAPY Logo"
                className="h-8 md:h-9 transition-all duration-300"
              />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
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
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
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
              <span className="sr-only">Відкрити головне меню</span>
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
              href={link.href}
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
