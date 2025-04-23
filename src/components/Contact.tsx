import React, { useState } from 'react';
import { Mail, Phone, User, Calendar } from 'lucide-react';
import { trackLead } from './FacebookPixel';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [requiredFields, setRequiredFields] = useState<string[]>([]);

  const validateForm = () => {
    const requiredFieldsList: string[] = [];
    
    if (!formState.name.trim()) requiredFieldsList.push('name');
    if (!formState.email.trim()) requiredFieldsList.push('email');
    if (!formState.phone.trim()) requiredFieldsList.push('phone');
    
    setRequiredFields(requiredFieldsList);
    return requiredFieldsList.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) {
      setError(t('common.errorMessage'));
      return;
    }
    
    setLoading(true);
    
    // Create a hidden form and submit it
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://script.google.com/macros/s/AKfycbwlClieKK2iH7azewrZotEBL5I_pjn4PHEUuwR8pnjrHwIQ2vjIml-UpEuiyIsegswh/exec';
    form.target = '_blank'; // Open response in new tab
    
    // Create the JSON data
    const jsonData = {
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      dates: formState.dates,
      message: formState.message
    };
    
    // Add a hidden input for the JSON data
    const hiddenField = document.createElement('input');
    hiddenField.type = 'hidden';
    hiddenField.name = 'json';
    hiddenField.value = JSON.stringify(jsonData);
    form.appendChild(hiddenField);
    
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    
    console.log('Form data:', jsonData);
    
    setFormSubmitted(true);
    setLoading(false);
    
    // Reset form
    setFormState({
      name: '',
      email: '',
      phone: '',
      dates: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Remove field from required list if it has a value
    if (value.trim() && requiredFields.includes(name)) {
      setRequiredFields(prev => prev.filter(field => field !== name));
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
            {t('contact.title')}
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
          {formSubmitted ? (
            <div className="text-center py-10">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-2">{t('common.successMessage')}</h4>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ocean-800 mb-2">
                    {t('common.name')} *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-ocean-800/50" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className={`block w-full pl-10 pr-4 py-3 border ${
                        requiredFields.includes('name') ? 'border-red-300' : 'border-ocean-100'
                      } rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200`}
                      placeholder={t('common.namePlaceholder')}
                    />
                  </div>
                  {requiredFields.includes('name') && (
                    <p className="mt-1 text-sm text-red-600">{t('common.required')}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ocean-800 mb-2">
                    {t('common.email')} *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-ocean-800/50" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder={t('common.emailPlaceholder')}
                      className={`block w-full pl-10 pr-4 py-3 border ${
                        requiredFields.includes('email') ? 'border-red-300' : 'border-ocean-100'
                      } rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200`}
                    />
                  </div>
                  {requiredFields.includes('email') && (
                    <p className="mt-1 text-sm text-red-600">{t('common.required')}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ocean-800 mb-2">
                    {t('common.phone')} *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-ocean-800/50" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      pattern="[+]?[0-9]{8,15}"
                      className={`block w-full pl-10 pr-4 py-3 border ${
                        requiredFields.includes('phone') ? 'border-red-300' : 'border-ocean-100'
                      } rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200`}
                      placeholder={t('common.phonePlaceholder')}
                    />
                  </div>
                  {requiredFields.includes('phone') && (
                    <p className="mt-1 text-sm text-red-600">{t('common.required')}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="dates" className="block text-sm font-medium text-ocean-800 mb-2">
                    {t('common.selectDate')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-ocean-800/50" />
                    </div>
                    <select
                      id="dates"
                      name="dates"
                      value={formState.dates}
                      onChange={handleChange}
                      required
                      className="block w-full pl-12 pr-4 py-3 border border-ocean-100 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em_1.5em] bg-[right_0.5rem_center] bg-no-repeat"
                    >
                      <option value="">-- {t('common.selectDate')} --</option>
                      {language === 'ru' ? (
                        <>
                          <option value="01-08 МАЯ">01-08 МАЯ</option>
                          <option value="30 МАЯ - 06 ИЮНЯ">30 МАЯ - 06 ИЮНЯ</option>
                          <option value="03-10 ОКТЯБРЯ">03-10 ОКТЯБРЯ</option>
                          <option value="07-14 НОЯБРЯ">07-14 НОЯБРЯ</option>
                        </>
                      ) : language === 'en' ? (
                        <>
                          <option value="MAY 01-08">MAY 01-08</option>
                          <option value="MAY 30 - JUNE 06">MAY 30 - JUNE 06</option>
                          <option value="OCTOBER 03-10">OCTOBER 03-10</option>
                          <option value="NOVEMBER 07-14">NOVEMBER 07-14</option>
                        </>
                      ) : (
                        <>
                          <option value="01-08 ТРАВНЯ">01-08 ТРАВНЯ</option>
                          <option value="30 ТРАВНЯ - 06 ЧЕРВНЯ">30 ТРАВНЯ - 06 ЧЕРВНЯ</option>
                          <option value="03-10 ЖОВТНЯ">03-10 ЖОВТНЯ</option>
                          <option value="07-14 ЛИСТОПАДА">07-14 ЛИСТОПАДА</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ocean-800 mb-2">
                    {t('common.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-ocean-100 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
                    placeholder={t('common.messagePlaceholder')}
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-ocean-800 hover:bg-ocean-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('common.send')}...
                    </>
                  ) : (
                    t('common.send')
                  )}
                </button>
              </div>
              
              <div className="text-sm mt-4 text-ocean-800/70 text-center">
                <p>{t('common.processingConsent')}</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
