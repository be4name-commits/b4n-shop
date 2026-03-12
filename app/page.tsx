import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            B4N
          </h1>
          <p className="text-xl md:text-3xl text-purple-200 mb-4 font-light">
            Be4Name
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Премиальные товары швейцарского качества
          </p>
          <Link 
            href="/products"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            Смотреть каталог
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🇨🇭</div>
            <h3 className="text-xl font-bold mb-2">Швейцарское качество</h3>
            <p className="text-gray-600">Премиальные товары с доставкой из Швейцарии</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-bold mb-2">Безопасная оплата</h3>
            <p className="text-gray-600">Stripe — оплата в CHF картой</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-xl font-bold mb-2">B2B партнерство</h3>
            <p className="text-gray-600">Специальные условия для оптовых клиентов</p>
          </div>
        </div>
      </section>

      {/* CTA B2B */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Интересует сотрудничество?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Узнайте больше о наших B2B предложениях
          </p>
          <Link 
            href="/b2b"
            className="inline-block bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
          >
            B2B партнерство
          </Link>
        </div>
      </section>
    </main>
  );
}
