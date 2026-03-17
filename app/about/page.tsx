'use client';

import { useLocale } from '@/components/LocaleContext';

export default function AboutPage() {
  const { locale } = useLocale();

  const content = {
    en: {
      title: 'About Us',
      subtitle: 'Premium Swiss Quality Since 2024',
      story: 'Your Story Here',
      storyText: 'B4N (Be4Name) is a Swiss company dedicated to providing premium quality leather goods and accessories. Our products combine traditional craftsmanship with modern design.',
      mission: 'Our Mission',
      missionText: 'To deliver exceptional quality products that stand the test of time, while maintaining sustainable and ethical business practices.',
      values: 'Our Values',
      quality: 'Quality',
      qualityText: 'Premium materials and meticulous craftsmanship',
      sustainability: 'Sustainability',
      sustainabilityText: 'Environmentally responsible sourcing and production',
      integrity: 'Integrity',
      integrityText: 'Transparent and ethical business practices',
    },
    de: {
      title: 'Über uns',
      subtitle: 'Premium-Schweizer-Qualität seit 2024',
      story: 'Ihre Geschichte hier',
      storyText: 'B4N (Be4Name) ist ein Schweizer Unternehmen, das sich der Bereitstellung hochwertiger Lederwaren und Accessoires widmet. Unsere Produkte verbinden traditionelle Handwerkskunst mit modernem Design.',
      mission: 'Unsere Mission',
      missionText: 'Außergewöhnliche Qualitätsprodukte zu liefern, die den Test der Zeit bestehen, und gleichzeitig nachhaltige und ethische Geschäftspraktiken aufrechtzuerhalten.',
      values: 'Unsere Werte',
      quality: 'Qualität',
      qualityText: 'Hochwertige Materialien und sorgfältige Handwerkskunst',
      sustainability: 'Nachhaltigkeit',
      sustainabilityText: 'Umweltbewusste Beschaffung und Produktion',
      integrity: 'Integrität',
      integrityText: 'Transparente und ethische Geschäftspraktiken',
    },
    fr: {
      title: 'À propos',
      subtitle: 'Qualité suisse premium depuis 2024',
      story: 'Votre histoire ici',
      storyText: 'B4N (Be4Name) est une entreprise suisse dédiée à fournir des articles en cuir et accessoires de qualité supérieure. Nos produits allient artisanat traditionnel et design moderne.',
      mission: 'Notre mission',
      missionText: 'Fournir des produits de qualité exceptionnelle qui résistent à l\'épreuve du temps, tout en maintenant des pratiques commerciales durables et éthiques.',
      values: 'Nos valeurs',
      quality: 'Qualité',
      qualityText: 'Matériaux premium et artisanat méticuleux',
      sustainability: 'Durabilité',
      sustainabilityText: 'Approvisionnement et production respectueux de l\'environnement',
      integrity: 'Intégrité',
      integrityText: 'Pratiques commerciales transparentes et éthiques',
    },
    it: {
      title: 'Chi siamo',
      subtitle: 'Qualità svizzera premium dal 2024',
      story: 'La tua storia qui',
      storyText: 'B4N (Be4Name) è un\'azienda svizzera dedicata a fornire articoli in pelle e accessori di qualità premium. I nostri prodotti combinano artigianato tradizionale con design moderno.',
      mission: 'La nostra missione',
      missionText: 'Fornire prodotti di qualità eccezionale che resistono alla prova del tempo, mantenendo pratiche commerciali sostenibili ed etiche.',
      values: 'I nostri valori',
      quality: 'Qualità',
      qualityText: 'Materiali premium e artigianato meticoloso',
      sustainability: 'Sostenibilità',
      sustainabilityText: 'Approvvigionamento e produzione responsabili dal punto di vista ambientale',
      integrity: 'Integrità',
      integrityText: 'Pratiche commerciali trasparenti ed etiche',
    },
  };

  const c = content[locale];

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
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Story */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">{c.story}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{c.storyText}</p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">{c.mission}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{c.missionText}</p>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-4xl font-bold mb-12 text-gray-900">{c.values}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{c.quality}</h3>
                <p className="text-gray-600">{c.qualityText}</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{c.sustainability}</h3>
                <p className="text-gray-600">{c.sustainabilityText}</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{c.integrity}</h3>
                <p className="text-gray-600">{c.integrityText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
