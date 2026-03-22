'use client';

import { useState } from 'react';
import { Download, Mail, Phone, MapPin } from 'lucide-react';

export default function B2BPage() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark as submitted
    setSubmitted(true);
    
    // Trigger PDF download
    const link = document.createElement('a');
    link.href = '/b2b-presentation.pdf';
    link.download = 'Be4Name-B2B-Presentation.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    alert('Спасибо! Презентация скачивается. Мы свяжемся с вами в ближайшее время.');
    
    // Reset form after a delay
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
          <h1 className="text-5xl font-bold mb-6">B2B Партнерство</h1>
          <p className="text-xl text-gray-300">
            Специальные условия для оптовых клиентов и партнеров
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Преимущества сотрудничества
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3">Оптовые цены</h3>
              <p className="text-gray-600">
                Специальные скидки для постоянных партнеров и крупных заказов
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-3">Прямая поставка</h3>
              <p className="text-gray-600">
                Доставка напрямую из Швейцарии с минимальными сроками
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Личный менеджер</h3>
              <p className="text-gray-600">
                Индивидуальный подход и поддержка на всех этапах сотрудничества
              </p>
            </div>
          </div>

          {/* Presentation Download - Form Protected */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Презентация для партнеров</h3>
            <p className="text-gray-600 mb-6">
              Заполните форму ниже, чтобы получить доступ к презентации
            </p>
            <p className="text-sm text-gray-500 mb-6">
              (Скачивание доступно после заполнения формы в разделе &quot;Связаться с нами&quot; ниже)
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Связаться с нами
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:be4name@gmail.com" className="text-black hover:underline">
                      be4name@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <a href="tel:+41796608159" className="text-black hover:underline">
                      +41 79 660 81 59
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Условия</div>
                    <p className="text-gray-600">
                      • Бесплатная доставка от 299 CHF<br />
                      • Возврат 14 дней
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-gray-600 mb-4">
                Заполните форму, чтобы получить B2B презентацию
              </p>
              
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Имя *
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
                  Email *
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
                  Компания *
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
                  <>Скачивание...</>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Получить презентацию
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
