'use client';

import { useState } from 'react';
import { Download, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export default function B2BPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setSubmitted(true);
    
    const link = document.createElement('a');
    link.href = '/b2b-presentation.pdf';
    link.download = 'Be4Name-B2B-Presentation.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert(t('thankYou'));
    
    setTimeout(() => {
      setFormData({ company: '', name: '', email: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">{t('b2bPartnership')}</h1>
          <p className="text-xl text-gray-300">
            {t('b2bSpecialConditions')}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('cooperationAdvantages')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3">{t('wholesalePrices')}</h3>
              <p className="text-gray-600">
                {t('wholesalePricesDesc')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-3">{t('directDelivery')}</h3>
              <p className="text-gray-600">
                {t('directDeliveryDesc')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">{t('personalManager')}</h3>
              <p className="text-gray-600">
                {t('personalManagerDesc')}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">{t('partnerPresentation')}</h3>
            <p className="text-gray-600 mb-6">
              {t('partnerPresentationDesc')}
            </p>
            <p className="text-sm text-gray-500 mb-6">
              {t('downloadHint')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('contactUs')}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">{t('contactInfo')}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">{t('email')}</div>
                    <a href="mailto:be4name@gmail.com" className="text-black hover:underline">
                      be4name@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">{t('phone')}</div>
                    <a href="tel:+41796608159" className="text-black hover:underline">
                      +41 79 660 81 59
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">{t('terms')}</div>
                    <p className="text-gray-600">
                      • {t('freeShipping')}<br />
                      • {t('returns')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-gray-600 mb-4">
                {t('formHint')}
              </p>
              
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {t('name')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  disabled={submitted}
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  disabled={submitted}
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {t('company')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  disabled={submitted}
                />
              </div>
              
              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-lg font-semibold transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>{t('downloading')}</>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    {t('getPresentation')}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
