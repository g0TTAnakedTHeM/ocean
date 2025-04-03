import React, { useState } from 'react';
import { MessageSquare, Send, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import Divider from './ui/Divider';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="ocean-title">Є запитання?</h2>
          <Divider />
          <p className="ocean-text max-w-3xl mx-auto">
            Зв'яжіться з нами, щоб дізнатися більше про ретріт, забронювати місце або задати будь-які питання.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact information */}
          <div className="fade-in-section">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-medium text-ocean-700 mb-6">Контактна інформація</h3>
              
              <div className="space-y-6">
                <div className="flex items-center hover:translate-x-1 transition-all duration-300">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ocean-50 flex items-center justify-center text-ocean-600 mr-4">
                    <Phone className="h-5 w-5 stroke-1" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Telegram / WhatsApp</p>
                    <p className="text-lg font-medium text-gray-800">+38 067 933 9332</p>
                  </div>
                </div>
                
                <div className="flex items-center hover:translate-x-1 transition-all duration-300">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ocean-50 flex items-center justify-center text-ocean-600 mr-4">
                    <MessageSquare className="h-5 w-5 stroke-1" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Telegram</p>
                    <p className="text-lg font-medium text-gray-800">@kshisya13</p>
                  </div>
                </div>
                
                <div className="flex items-center hover:translate-x-1 transition-all duration-300">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ocean-50 flex items-center justify-center text-ocean-600 mr-4">
                    <Mail className="h-5 w-5 stroke-1" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="text-lg font-medium text-gray-800">info@oceantherapy.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-medium text-gray-800 mb-4">Ми в соціальних мережах</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center text-white hover:shadow-md transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:shadow-md transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="fade-in-section">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-medium text-ocean-700 mb-6">Надіслати повідомлення</h3>
              
              {formSubmitted ? (
                <div className="bg-green-50 p-8 rounded-lg text-center animate-scale-in">
                  <div className="h-16 w-16 mx-auto text-green-500 mb-4 flex items-center justify-center bg-green-100 rounded-full">
                    <Check className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-medium text-green-800 mb-2">Дякуємо за повідомлення!</h4>
                  <p className="text-green-700">Ми зв'яжемося з вами якнайшвидше.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Ім'я
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-ocean-600 focus:border-ocean-600 transition-colors shadow-sm"
                      placeholder="Ваше ім'я"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-ocean-600 focus:border-ocean-600 transition-colors shadow-sm"
                      placeholder="ваш@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Повідомлення
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-ocean-600 focus:border-ocean-600 transition-colors shadow-sm"
                      placeholder="Ваше повідомлення..."
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center px-6 py-3 rounded-md text-white bg-ocean-700 hover:bg-ocean-800 focus:outline-none focus:ring-2 focus:ring-ocean-600 focus:ring-offset-2 transition-all duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg ${
                        isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Надсилання...
                        </>
                      ) : (
                        <>
                          Написати нам
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Missing import for Check
import { Check } from 'lucide-react';

export default Contact;
