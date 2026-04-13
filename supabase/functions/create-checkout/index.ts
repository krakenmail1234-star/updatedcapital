import { corsHeaders } from '../_shared/cors.ts';

const STRIPE_SECRET_KEY = Deno.env.get('STRIPE_SECRET_KEY')!;

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { priceId, productName, customAmount } = await req.json();

    if (!priceId) {
      return new Response(
        JSON.stringify({ error: 'Price ID is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Prepare checkout session parameters
    const params: Record<string, string> = {
      'mode': 'payment',
      'success_url': `${req.headers.get('origin') || 'https://your-domain.com'}/success?session_id={CHECKOUT_SESSION_ID}`,
      'cancel_url': `${req.headers.get('origin') || 'https://your-domain.com'}/#pricing`,
      'client_reference_id': productName || 'TRADEFYY Product',
    };

    // Handle custom amount or fixed price
    if (priceId === 'custom_amount' && customAmount) {
      // Custom amount for investments
      params['line_items[0][price_data][currency]'] = 'eur';
      params['line_items[0][price_data][product_data][name]'] = productName || 'Long-Term Investment';
      params['line_items[0][price_data][product_data][description]'] = 'Strategic capital allocation for sustainable wealth accumulation';
      params['line_items[0][price_data][unit_amount]'] = customAmount.toString();
      params['line_items[0][quantity]'] = '1';
    } else {
      // Fixed price for other products
      params['line_items[0][price]'] = priceId;
      params['line_items[0][quantity]'] = '1';
    }

    // Create Stripe Checkout Session
    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(params),
    });

    const session = await response.json();

    if (!response.ok) {
      console.error('Stripe Error:', session);
      return new Response(
        JSON.stringify({ error: `Stripe: ${session.error?.message || 'Failed to create checkout session'}` }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ url: session.url }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
