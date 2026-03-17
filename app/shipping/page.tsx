'use client';

import { useLocale } from '@/components/LocaleContext';

export default function ShippingPage() {
  const { locale } = useLocale();

  const content = {
    en: {
      title: 'Shipping & Payment',
      shippingTitle: 'Shipping Information',
      deliveryTime: 'Delivery Time',
      deliveryTimeText: 'Standard shipping: 5-7 business days within Europe. International: 10-15 business days.',
      shippingCost: 'Shipping Cost',
      shippingCostText: 'Free shipping on orders over CHF 100. Standard rate: CHF 9.90.',
      tracking: 'Package Tracking',
      trackingText: 'All orders include tracking information sent to your email.',
      paymentTitle: 'Payment Methods',
      paymentText: 'We accept the following payment methods:',
      cards: 'Credit & Debit Cards',
      cardsText: 'Visa, Mastercard, American Express',
      twint: 'TWINT',
      twintText: 'Swiss mobile payment app',
      bank: 'Bank Transfer',
      bankText: 'Direct bank transfer (Switzerland)',
      security: 'Payment Security',
      securityText: 'All transactions are encrypted and secured with SSL technology. We do not store your payment information.',
    },
    de: {
      title: 'Versand & Zahlung',
      shippingTitle: 'Versandinformationen',
      deliveryTime: 'Lieferzeit',
      deliveryTimeText: 'Standardversand: 5-7 Werktage innerhalb Europas. International: 10-15 Werktage.',
      shippingCost: 'Versandkosten',
      shippingCostText: 'Kostenloser Versand bei Bestellungen über CHF 100. Standardtarif: CHF 9.90.',
      tracking: 'Sendungsverfolgung',
      trackingText: 'Alle Bestellungen enthalten Tracking-Informationen, die an Ihre E-Mail gesendet werden.',
      paymentTitle: 'Zahlungsmethoden',
      paymentText: 'Wir akzeptieren folgende Zahlungsmethoden:',
      cards: 'Kredit- & Debitkarten',
      cardsText: 'Visa, Mastercard, American Express',
      twint: 'TWINT',
      twintText: 'Schweizer Mobile-Payment-App',
      bank: 'Banküberweisung',
      bankText: 'Direkte Banküberweisung (Schweiz)',
      security: 'Zahlungssicherheit',
      securityText: 'Alle Transaktionen sind verschlüsselt und mit SSL-Technologie gesichert. Wir speichern Ihre Zahlungsinformationen nicht.',
    },
    fr: {
      title: 'Livraison & Paiement',
      shippingTitle: 'Informations de livraison',
      deliveryTime: 'Délai de livraison',
      deliveryTimeText: 'Livraison standard: 5-7 jours ouvrables en Europe. International: 10-15 jours ouvrables.',
      shippingCost: 'Frais de livraison',
      shippingCostText: 'Livraison gratuite pour les commandes supérieures à CHF 100. Tarif standard: CHF 9.90.',
      tracking: 'Suivi de colis',
      trackingText: 'Toutes les commandes incluent des informations de suivi envoyées à votre email.',
      paymentTitle: 'Méthodes de paiement',
      paymentText: 'Nous acceptons les méthodes de paiement suivantes:',
      cards: 'Cartes de crédit & débit',
      cardsText: 'Visa, Mastercard, American Express',
      twint: 'TWINT',
      twintText: 'Application de paiement mobile suisse',
      bank: 'Virement bancaire',
      bankText: 'Virement bancaire direct (Suisse)',
      security: 'Sécurité des paiements',
      securityText: 'Toutes les transactions sont cryptées et sécurisées avec la technologie SSL. Nous ne stockons pas vos informations de paiement.',
    },
    it: {
      title: 'Spedizione & Pagamento',
      shippingTitle: 'Informazioni sulla spedizione',
      deliveryTime: 'Tempi di consegna',
      deliveryTimeText: 'Spedizione standard: 5-7 giorni lavorativi in Europa. Internazionale: 10-15 giorni lavorativi.',
      shippingCost: 'Costi di spedizione',
      shippingCostText: 'Spedizione gratuita per ordini superiori a CHF 100. Tariffa standard: CHF 9.90.',
      tracking: 'Tracciamento pacchi',
      trackingText: 'Tutti gli ordini includono informazioni di tracciamento inviate alla tua email.',
      paymentTitle: 'Metodi di pagamento',
      paymentText: 'Accettiamo i seguenti metodi di pagamento:',
      cards: 'Carte di credito & debito',
      cardsText: 'Visa, Mastercard, American Express',
      twint: 'TWINT',
      twintText: 'App di pagamento mobile svizzera',
      bank: 'Bonifico bancario',
      bankText: 'Bonifico bancario diretto (Svizzera)',
      security: 'Sicurezza dei pagamenti',
      securityText: 'Tutte le transazioni sono crittografate e protette con tecnologia SSL. Non memorizziamo le tue informazioni di pagamento.',
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
          {/* Shipping */}
          <div>
            <h2 className="text-4xl font-bold mb-12 text-gray-900">{c.shippingTitle}</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🚚</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{c.deliveryTime}</h3>
                    <p className="text-gray-600 text-lg">{c.deliveryTimeText}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💰</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{c.shippingCost}</h3>
                    <p className="text-gray-600 text-lg">{c.shippingCostText}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📦</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{c.tracking}</h3>
                    <p className="text-gray-600 text-lg">{c.trackingText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">{c.paymentTitle}</h2>
            <p className="text-lg text-gray-600 mb-8">{c.paymentText}</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{c.cards}</h3>
                <p className="text-gray-600">{c.cardsText}</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{c.twint}</h3>
                <p className="text-gray-600">{c.twintText}</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{c.bank}</h3>
                <p className="text-gray-600">{c.bankText}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg border-2 border-purple-100">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🔒</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{c.security}</h3>
                  <p className="text-gray-600 text-lg">{c.securityText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
