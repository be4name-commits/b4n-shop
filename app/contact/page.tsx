'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLocale } from '@/components/LocaleContext';
import { getTranslation } from '@/lib/i18n';

export default function ContactPage() {
  const { locale } = useLocale();
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(locale, key);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our team',
      formTitle: 'Send us a message',
      generalInquiries: 'General Inquiries',
      b2bPartnerships: 'B2B Partnerships',
      returns: 'Returns & Support',
      location: 'Location',
      locationText: 'Switzerland',
    },
    de: {
      title: 'Kontakt',
      subtitle: 'Nehmen Sie Kontakt mit unserem Team auf',
      formTitle: 'Senden Sie uns eine Nachricht',
      generalInquiries: 'Allgemeine Anfragen',
      b2bPartnerships: 'B2B-Partnerschaften',
      returns: 'Rückgaben & Support',
      location: 'Standort',
      locationText: 'Schweiz',
    },
    fr: {
      title: 'Contactez-nous',
      subtitle: 'Entrez en contact avec notre équipe',
      formTitle: 'Envoyez-nous un message',
      generalInquiries: 'Demandes générales',
      b2bPartnerships: 'Partenariats B2B',
      returns: 'Retours & Support',
      location: 'Emplacement',
      locationText: 'Suisse',
    },
    it: {
      title: 'Contattaci',
      subtitle: 'Mettiti in contatto con il nostro team',
      formTitle: 'Inviaci un messaggio',
      generalInquiries: 'Richieste generali',
      b2bPartnerships: 'Partnership B2B',
      returns: 'Resi & Supporto',
      location: 'Posizione',
      locationText: 'Svizzera',
    },
  };

  const c = content[locale];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'general' }),
      });

      if (response.ok) {
        alert(t('requestSent'));
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">{c.title}</h1>
          <p className="text-xl text-purple-200">{c.subtitle}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-10">
              <h2 className="text-4xl font-bold text-gray-900">{t('contactInfo')}</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-purple-100 p-4 rounded-xl">
                    <Mail className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-gray-900 mb-2">{c.generalInquiries}</div>
                    <a
                      href="mailto:info@be4name.ch"
                      className="text-purple-600 hover:text-purple-700 text-lg transition-colors"
                    >
                      info@be4name.ch
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-purple-100 p-4 rounded-xl">
                    <Mail className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-gray-900 mb-2">{c.b2bPartnerships}</div>
                    <a
                      href="mailto:b2b@be4name.ch"
                      className="text-purple-600 hover:text-purple-700 text-lg transition-colors"
                    >
                      b2b@be4name.ch
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-purple-100 p-4 rounded-xl">
                    <Mail className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-gray-900 mb-2">{c.returns}</div>
                    <a
                      href="mailto:returns@be4name.ch"
                      className="text-purple-600 hover:text-purple-700 text-lg transition-colors"
                    >
                      returns@be4name.ch
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-purple-100 p-4 rounded-xl">
                    <Phone className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-gray-900 mb-2">{t('phone')}</div>
                    <a
                      href="tel:+41123456789"
                      className="text-purple-600 hover:text-purple-700 text-lg transition-colors"
                    >
                      +41 12 345 67 89
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-purple-100 p-4 rounded-xl">
                    <MapPin className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-gray-900 mb-2">{c.location}</div>
                    <p className="text-gray-600 text-lg">{c.locationText}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">{c.formTitle}</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    {t('message')} *
                  </label>
                  <textarea
                    rows={6}
                    required
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
        </div>
      </section>
    </div>
  );
}
