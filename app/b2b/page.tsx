'use client';

import { useState } from 'react';
import { Download, Mail, Phone, MapPin } from 'lucide-react';
import { useLocale } from '@/components/LocaleContext';
import { getTranslation } from '@/lib/i18n';

export default function B2BPage() {
  const { locale } = useLocale();
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(locale, key);
  
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    alert(locale === 'de' ? 'Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.' :
          locale === 'fr' ? 'Merci pour votre demande! Nous vous contacterons sous peu.' :
          locale === 'it' ? 'Grazie per la tua richiesta! Ti contatteremo a breve.' :
          'Thank you for your inquiry! We will contact you shortly.');
    setFormData({ company: '', name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-24 px-4 overflow-hidden">
        {/* Premium background effect */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 tracking-tight">
            {t('b2bPartnership')}
          </h1>
          <p className="text-xl text-purple-200 leading-relaxed">
            {t('b2bPartnershipSubtitle')}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            {t('benefits')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-5xl mb-6">💼</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('wholesalePrices')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('wholesalePricesDesc')}
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-5xl mb-6">🚚</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('directDelivery')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('directDeliveryDesc')}
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('personalManager')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('personalManagerDesc')}
              </p>
            </div>
          </div>

          {/* Presentation Download */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl p-12 text-center border-2 border-purple-100">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">{t('partnerPresentation')}</h3>
            <p className="text-gray-600 mb-8 text-lg">
              {locale === 'de' ? 'Laden Sie die detaillierte Präsentation mit Kooperationsbedingungen herunter' :
               locale === 'fr' ? 'Téléchargez la présentation détaillée avec les conditions de coopération' :
               locale === 'it' ? 'Scarica la presentazione dettagliata con le condizioni di cooperazione' :
               'Download the detailed presentation with cooperation terms'}
            </p>
            <a
              href="/b2b-presentation.pdf"
              download="B4N_B2B_Presentation.pdf"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-10 py-5 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Download className="w-6 h-6" />
              {t('downloadPDF')}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            {t('contactUs')}
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">{t('contactInfo')}</h3>
              
              <div className="flex items-start gap-5">
                <div className="bg-purple-100 p-4 rounded-xl">
                  <Mail className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-gray-900 mb-1">Email</div>
                  <a href="mailto:b2b@be4name.ch" className="text-purple-600 hover:text-purple-700 text-lg transition-colors">
                    b2b@be4name.ch
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-purple-100 p-4 rounded-xl">
                  <Phone className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-gray-900 mb-1">{t('phone')}</div>
                  <a href="tel:+41123456789" className="text-purple-600 hover:text-purple-700 text-lg transition-colors">
                    +41 12 345 67 89
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-purple-100 p-4 rounded-xl">
                  <MapPin className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-gray-900 mb-1">
                    {locale === 'de' ? 'Adresse' :
                     locale === 'fr' ? 'Adresse' :
                     locale === 'it' ? 'Indirizzo' : 'Address'}
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {locale === 'de' ? 'Schweiz\n(Adresse wird angegeben)' :
                     locale === 'fr' ? 'Suisse\n(adresse à préciser)' :
                     locale === 'it' ? 'Svizzera\n(indirizzo da specificare)' :
                     'Switzerland\n(address to be specified)'}
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-900">
                  {t('company')} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-gray-900"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-900">
                  {t('yourName')} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-gray-900"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-900">
                  {t('email')} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-gray-900"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-900">
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-gray-900"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-900">
                  {t('message')}
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all resize-none text-gray-900"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-5 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {t('sendRequest')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
