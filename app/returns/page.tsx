'use client';

import { useLocale } from '@/components/LocaleContext';

export default function ReturnsPage() {
  const { locale } = useLocale();

  const content = {
    en: {
      title: 'Returns & Refunds',
      policyTitle: 'Return Policy',
      policyText: 'We want you to be completely satisfied with your purchase. If you are not happy with your order, you can return it within 30 days of delivery.',
      conditionsTitle: 'Return Conditions',
      condition1: 'Unused & Unworn',
      condition1Text: 'Items must be in original condition with all tags attached',
      condition2: 'Original Packaging',
      condition2Text: 'Products should be returned in their original packaging',
      condition3: 'Proof of Purchase',
      condition3Text: 'Include your order confirmation or receipt',
      processTitle: 'Return Process',
      step1: 'Contact Us',
      step1Text: 'Email us at returns@be4name.ch with your order number',
      step2: 'Ship Back',
      step2Text: 'Send the item to the address provided in our response',
      step3: 'Refund',
      step3Text: 'Refund will be processed within 5-7 business days after we receive your return',
      exceptionsTitle: 'Exceptions',
      exceptionsText: 'The following items cannot be returned:',
      exception1: 'Personalized or custom-made items',
      exception2: 'Items marked as final sale',
      exception3: 'Products damaged due to misuse',
      contactTitle: 'Questions?',
      contactText: 'If you have any questions about returns, please contact our customer service:',
      email: 'returns@be4name.ch',
    },
    de: {
      title: 'Rückgabe & Rückerstattung',
      policyTitle: 'Rückgaberichtlinie',
      policyText: 'Wir möchten, dass Sie mit Ihrem Kauf vollständig zufrieden sind. Wenn Sie mit Ihrer Bestellung nicht zufrieden sind, können Sie diese innerhalb von 30 Tagen nach Lieferung zurückgeben.',
      conditionsTitle: 'Rückgabebedingungen',
      condition1: 'Unbenutzt & Ungetragen',
      condition1Text: 'Artikel müssen im Originalzustand mit allen Etiketten sein',
      condition2: 'Originalverpackung',
      condition2Text: 'Produkte sollten in ihrer Originalverpackung zurückgesendet werden',
      condition3: 'Kaufnachweis',
      condition3Text: 'Legen Sie Ihre Bestellbestätigung oder Quittung bei',
      processTitle: 'Rückgabeprozess',
      step1: 'Kontaktieren Sie uns',
      step1Text: 'Senden Sie uns eine E-Mail an returns@be4name.ch mit Ihrer Bestellnummer',
      step2: 'Zurücksenden',
      step2Text: 'Senden Sie den Artikel an die in unserer Antwort angegebene Adresse',
      step3: 'Rückerstattung',
      step3Text: 'Die Rückerstattung wird innerhalb von 5-7 Werktagen nach Erhalt Ihrer Rücksendung bearbeitet',
      exceptionsTitle: 'Ausnahmen',
      exceptionsText: 'Folgende Artikel können nicht zurückgegeben werden:',
      exception1: 'Personalisierte oder maßgefertigte Artikel',
      exception2: 'Artikel, die als Endverkauf gekennzeichnet sind',
      exception3: 'Produkte, die durch Missbrauch beschädigt wurden',
      contactTitle: 'Fragen?',
      contactText: 'Wenn Sie Fragen zu Rücksendungen haben, kontaktieren Sie bitte unseren Kundenservice:',
      email: 'returns@be4name.ch',
    },
    fr: {
      title: 'Retours & Remboursements',
      policyTitle: 'Politique de retour',
      policyText: 'Nous voulons que vous soyez entièrement satisfait de votre achat. Si vous n\'êtes pas satisfait de votre commande, vous pouvez la retourner dans les 30 jours suivant la livraison.',
      conditionsTitle: 'Conditions de retour',
      condition1: 'Non utilisé & Non porté',
      condition1Text: 'Les articles doivent être dans leur état d\'origine avec toutes les étiquettes',
      condition2: 'Emballage d\'origine',
      condition2Text: 'Les produits doivent être retournés dans leur emballage d\'origine',
      condition3: 'Preuve d\'achat',
      condition3Text: 'Incluez votre confirmation de commande ou reçu',
      processTitle: 'Processus de retour',
      step1: 'Contactez-nous',
      step1Text: 'Envoyez-nous un email à returns@be4name.ch avec votre numéro de commande',
      step2: 'Renvoi',
      step2Text: 'Envoyez l\'article à l\'adresse fournie dans notre réponse',
      step3: 'Remboursement',
      step3Text: 'Le remboursement sera traité dans les 5-7 jours ouvrables après réception de votre retour',
      exceptionsTitle: 'Exceptions',
      exceptionsText: 'Les articles suivants ne peuvent pas être retournés:',
      exception1: 'Articles personnalisés ou sur mesure',
      exception2: 'Articles marqués comme vente finale',
      exception3: 'Produits endommagés par mauvaise utilisation',
      contactTitle: 'Questions?',
      contactText: 'Si vous avez des questions sur les retours, veuillez contacter notre service client:',
      email: 'returns@be4name.ch',
    },
    it: {
      title: 'Resi & Rimborsi',
      policyTitle: 'Politica di reso',
      policyText: 'Vogliamo che tu sia completamente soddisfatto del tuo acquisto. Se non sei soddisfatto del tuo ordine, puoi restituirlo entro 30 giorni dalla consegna.',
      conditionsTitle: 'Condizioni di reso',
      condition1: 'Non utilizzato & Non indossato',
      condition1Text: 'Gli articoli devono essere nelle condizioni originali con tutte le etichette',
      condition2: 'Confezione originale',
      condition2Text: 'I prodotti devono essere restituiti nella loro confezione originale',
      condition3: 'Prova d\'acquisto',
      condition3Text: 'Includi la conferma dell\'ordine o la ricevuta',
      processTitle: 'Processo di reso',
      step1: 'Contattaci',
      step1Text: 'Inviaci un\'email a returns@be4name.ch con il tuo numero d\'ordine',
      step2: 'Spedisci indietro',
      step2Text: 'Invia l\'articolo all\'indirizzo fornito nella nostra risposta',
      step3: 'Rimborso',
      step3Text: 'Il rimborso verrà elaborato entro 5-7 giorni lavorativi dopo aver ricevuto il tuo reso',
      exceptionsTitle: 'Eccezioni',
      exceptionsText: 'I seguenti articoli non possono essere restituiti:',
      exception1: 'Articoli personalizzati o su misura',
      exception2: 'Articoli contrassegnati come vendita finale',
      exception3: 'Prodotti danneggiati a causa di uso improprio',
      contactTitle: 'Domande?',
      contactText: 'Se hai domande sui resi, contatta il nostro servizio clienti:',
      email: 'returns@be4name.ch',
    },
  };

  const c = content[locale];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">{c.title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Policy */}
          <div className="bg-gradient-to-br from-purple-50 to-white p-10 rounded-2xl shadow-lg border-2 border-purple-100">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">{c.policyTitle}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{c.policyText}</p>
          </div>

          {/* Conditions */}
          <div>
            <h2 className="text-4xl font-bold mb-12 text-gray-900">{c.conditionsTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{c.condition1}</h3>
                <p className="text-gray-600">{c.condition1Text}</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{c.condition2}</h3>
                <p className="text-gray-600">{c.condition2Text}</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🧾</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{c.condition3}</h3>
                <p className="text-gray-600">{c.condition3Text}</p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-4xl font-bold mb-12 text-gray-900">{c.processTitle}</h2>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg flex items-start gap-6">
                <div className="text-3xl font-bold text-purple-600 bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{c.step1}</h3>
                  <p className="text-gray-600 text-lg">{c.step1Text}</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg flex items-start gap-6">
                <div className="text-3xl font-bold text-purple-600 bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{c.step2}</h3>
                  <p className="text-gray-600 text-lg">{c.step2Text}</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg flex items-start gap-6">
                <div className="text-3xl font-bold text-purple-600 bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{c.step3}</h3>
                  <p className="text-gray-600 text-lg">{c.step3Text}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exceptions */}
          <div className="bg-red-50 p-10 rounded-2xl shadow-lg border-2 border-red-100">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">{c.exceptionsTitle}</h2>
            <p className="text-lg text-gray-700 mb-6">{c.exceptionsText}</p>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>{c.exception1}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>{c.exception2}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>{c.exception3}</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{c.contactTitle}</h2>
            <p className="text-lg text-gray-600 mb-6">{c.contactText}</p>
            <a
              href="mailto:returns@be4name.ch"
              className="inline-block text-2xl font-semibold text-purple-600 hover:text-purple-700 transition-colors"
            >
              {c.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
