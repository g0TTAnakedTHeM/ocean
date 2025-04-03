import React, { useState } from 'react';
import { Mail, Phone, User } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      messengerPhone: formData.get('messengerPhone'),
      messenger: formData.get('messenger'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', data.name as string);
      formDataToSend.append('messengerPhone', data.messengerPhone as string);
      formDataToSend.append('messenger', data.messenger as string);
      formDataToSend.append('email', (data.email as string) || '');
      formDataToSend.append('message', (data.message as string) || '');

      const response = await fetch('https://script.google.com/macros/s/AKfycbwAhJjHEjBM6i48k0BDH7gGaf7fktEzFrfHW296sUd2s-O5npfwxgJ965Za6yvqnzvA/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.status === 'success') {
        setSubmitStatus('success');
        if (e.currentTarget) {
          e.currentTarget.reset();
        }
        alert('Дякуємо! Ми зв\'яжемося з вами найближчим часом.');
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      alert('Помилка при відправці форми. Будь ласка, спробуйте ще раз або зв\'яжіться з нами через месенджер. Помилка: ' + (error instanceof Error ? error.message : 'Невідома помилка'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMessengerClick = (messenger: string) => {
    const form = document.getElementById('contact-form') as HTMLFormElement;
    if (!form) return;
    
    const formData = new FormData(form);
    const phoneNumber = (formData.get('messengerPhone') as string)?.replace(/\D/g, '') || '';
    let url = '';
    
    switch (messenger) {
      case 'whatsapp':
        url = `https://wa.me/${phoneNumber}`;
        break;
      case 'telegram':
        // Check if it's a username (starts with @) or phone number
        if (phoneNumber.startsWith('@')) {
          url = `https://t.me/${phoneNumber.substring(1)}`;
        } else {
          url = `https://t.me/${phoneNumber}`;
        }
        break;
      case 'viber':
        url = `viber://chat?number=${phoneNumber}`;
        break;
    }
    
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="contact" className="apple-section bg-white">
      <div className="apple-container max-w-3xl">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="apple-title">Заповни форму та я з тобою зв'яжусь</h2>
          <p className="apple-subtitle">
            Залишай заявку на попереднє бронювання, щоб не втратити своє місце!
          </p>
          
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://t.me/kshisya13"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0088cc] hover:bg-[#0077b3] text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.89.03-.24.37-.49 1.02-.75 4.02-1.75 6.69-2.9 8.03-3.46 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.14-.02.3-.03.42z"/>
              </svg>
              Telegram
            </a>
            <a
              href="https://wa.me/380679339332"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#22c55e] text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.287.129.332.202.045.073.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 19.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="apple-card p-8 fade-in-section">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input 
              type="hidden" 
              name="access_key" 
              value="YOUR-ACCESS-KEY-HERE"
            />
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-apple-gray-800 mb-2">
                  Ім'я та прізвище
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-apple-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="block w-full pl-10 pr-4 py-3 border border-apple-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Введіть ваше ім'я"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-apple-gray-800 mb-2">
                  Email (необов'язково)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-apple-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    className="block w-full pl-10 pr-4 py-3 border border-apple-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="messenger" className="block text-sm font-medium text-apple-gray-800 mb-2">
                  В якому месенджері з вами зв'язатись?
                </label>
                <select
                  id="messenger"
                  name="messenger"
                  required
                  className="block w-full pl-4 pr-10 py-3 border border-apple-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                >
                  <option value="">Оберіть месенджер</option>
                  <option value="telegram">Telegram</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>

              <div>
                <label htmlFor="messengerPhone" className="block text-sm font-medium text-apple-gray-800 mb-2">
                  На якому номері телефону ваш месенджер?
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-apple-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="messengerPhone"
                    name="messengerPhone"
                    required
                    pattern="[+]?[0-9]{10,15}"
                    className="block w-full pl-10 pr-4 py-3 border border-apple-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="+380 або +1234567890"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Введіть номер у міжнародному форматі: +380XXXXXXXXX або +1234567890
                </p>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-apple-gray-800 mb-2">
                  Коментар (необов'язково)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full px-4 py-3 border border-apple-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Додаткова інформація або побажання..."
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Відправляємо...' : 'Відправити'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
