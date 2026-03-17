import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

function getStripeInstance() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  
  if (!secretKey || secretKey === 'НУЖЕН_СЕКРЕТНЫЙ_КЛЮЧ') {
    throw new Error('STRIPE_SECRET_KEY не настроен! Получите ключ на dashboard.stripe.com');
  }
  
  return new Stripe(secretKey, {
    apiVersion: '2026-02-25.clover',
  });
}

interface Product {
  name: string;
  description: string;
  price: number;
  images: string[];
}

interface CartItem {
  product: Product;
  quantity: number;
}

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripeInstance();
    const { items } = await request.json();

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'Корзина пуста' },
        { status: 400 }
      );
    }

    // Create line items for Stripe
    const lineItems = items.map((item: CartItem) => ({
      price_data: {
        currency: 'chf',
        product_data: {
          name: item.product.name,
          description: item.product.description,
          images: item.product.images.filter((img: string) => img.startsWith('http')),
        },
        unit_amount: Math.round(item.product.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    // Create Checkout Session with TWINT support (critical for Switzerland)
    const session = await stripe.checkout.sessions.create({
      // TWINT is critical for Swiss market - always include it
      payment_method_types: ['card', 'twint'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
      // Auto-detect locale for proper TWINT display
      locale: 'auto',
      // Additional settings for Swiss market
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['CH', 'DE', 'AT', 'FR', 'IT', 'LI'],
      },
      // Metadata for order tracking
      metadata: {
        orderDate: new Date().toISOString(),
        cartItemsCount: items.length.toString(),
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Ошибка создания сессии оплаты';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
