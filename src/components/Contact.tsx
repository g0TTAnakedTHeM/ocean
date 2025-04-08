import React, { useState } from 'react';
import { Mail, Phone, User, Calendar } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    const formData = new FormData(e.currentTarget);
    
    // Validate required fields
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const dates = formData.get('dates') as string;
    
    if (!name || !phone || !dates) {
      setSubmitStatus('error');
      alert('Будь ласка, заповніть всі обов\'язкові поля (ім\'я, телефон, дати).');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Prepare the data as URL-encoded format (which is what Google Apps Script expects by default)
      const formDataObj = {
        name: name,
        email: formData.get('email') || '',
        phone: phone,
        dates: dates,
        message: formData.get('message') || ''
      };
      
      // Create URL encoded form data
      const urlEncodedData = new URLSearchParams();
      Object.entries(formDataObj).forEach(([key, value]) => {
        urlEncodedData.append(key, value as string);
      });
      
      // Send the form data
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwlClieKK2iH7azewrZotEBL5I_pjn4PHEUuwR8pnjrHwIQ2vjIml-UpEuiyIsegswh/exec', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: urlEncodedData.toString(),
          mode: 'no-cors' // This is important for Google Apps Script
        }
      );
      
      // Since no-cors mode doesn't give us response details, we assume success
      setSubmitStatus('success');
      if (e.currentTarget) {
        e.currentTarget.reset();
      }
      alert('Дякуємо! Ми зв\'яжемося з вами найближчим часом.');
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      alert('Помилка при відправці форми. Будь ласка, спробуйте ще раз або зв\'яжіться з нами через месенджер.');
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
        <div className="text-center mb-16 fade-in-section">
          <h2 className="apple-title text-ocean-800">
            Зв'язатися з нами
          </h2>
          <div className="flex justify-center my-10">
            <img 
              src="/assets/logo/oceantherapy-logo-options.pdf.png" 
              alt="OCEANTHERAPY Logo" 
              className="h-8 w-auto"
            />
          </div>
        </div>

        <div className="apple-card p-8 fade-in-section">
          <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ocean-800 mb-2">
                  Ім'я та прізвище
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-ocean-800/50" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="block w-full pl-10 pr-4 py-3 border border-ocean-100 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
                    placeholder="Введіть ваше ім'я"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ocean-800 mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-ocean-800/50" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="block w-full pl-10 pr-4 py-3 border border-ocean-100 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ocean-800 mb-2">
                  Контактний номер
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-ocean-800/50" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    pattern="[+]?[0-9]{8,15}"
                    className="block w-full pl-10 pr-4 py-3 border border-ocean-100 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
                    placeholder="+380 або будь-який інший формат"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="dates" className="block text-sm font-medium text-ocean-800 mb-2">
                  Обрані дати ретриту
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-ocean-800/50" />
                  </div>
                  <select
                    id="dates"
                    name="dates"
                    required
                    className="block w-full pl-12 pr-4 py-3 border border-ocean-100 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em_1.5em] bg-[right_0.5rem_center] bg-no-repeat"
                  >
                    <option value="">Оберіть дати</option>
                    <option value="01-08 ТРАВНЯ">01-08 ТРАВНЯ</option>
                    <option value="30 ТРАВНЯ - 06 ЧЕРВНЯ">30 ТРАВНЯ - 06 ЧЕРВНЯ</option>
                    <option value="03-10 ЖОВТНЯ">03-10 ЖОВТНЯ</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ocean-800 mb-2">
                  Коментар
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full px-4 py-3 border border-ocean-100 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
                  placeholder="Додаткова інформація або побажання..."
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-ocean-800 hover:bg-ocean-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
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
