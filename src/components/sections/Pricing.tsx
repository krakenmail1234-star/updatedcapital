import { Check, TrendingUp, Shield, Zap, MessageSquare, Loader2, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useToast } from '@/hooks/use-toast';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase config missing: VITE_SUPABASE_URL and/or VITE_SUPABASE_ANON_KEY');
}

const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : undefined;

// Stripe Price IDs - Actual Stripe Price IDs from your account
const STRIPE_PRICES = {
  tradingBot: 'price_1Ss4Ll9rV1fvFyapl27PmGU3', // 100 EUR - Trading Bot Software
  investmentConsult: 'price_1Ss4M19rV1fvFyapAc95D5iC', // 100 EUR - Investment Consultation
  longTermInvestment: 'custom_amount', // Custom amount for long-term investment
  softwareConsult: 'price_software_consult', // To be created
  aiTrading: 'price_ai_trading', // To be created
};

const pricingPlans = [
  {
    name: 'Professional Mentorship',
    icon: GraduationCap,
    description: 'Personalized 1-on-1 mentorship with guidance focused on market approach, trading strategies, and practical skill-building.',
    priceId: STRIPE_PRICES.tradingBot,
    paypalPlanId: 'plan_trading_bot',
    features: [
      'Individual coaching sessions',
      'Market approach insights',
      'Step-by-step trading guidance',
    ],
    cta: 'Book now',
    highlight: false,
  },
  {
    name: 'Proper Market Approach',
    icon: TrendingUp,
    description: 'Strategic capital allocation and market positioning to optimize growth and manage risk over time.',
    priceId: STRIPE_PRICES.longTermInvestment,
    paypalPlanId: 'plan_long_term',
    features: [
      'Diversified portfolio strategies',
      'Balanced asset allocation',
      'Performance reviews',
    ],
    cta: 'Book now',
    highlight: false,
  },
  {
    name: 'Market Consultation',
    icon: MessageSquare,
    description: 'Strategic guidance for informed investment decisions. Not financial advice.',
    priceId: STRIPE_PRICES.investmentConsult,
    paypalPlanId: 'plan_investment_consult',
    features: [
      'Portfolio analysis & review',
      'Market opportunity insights',
      'Risk assessment strategies',
    ],
    cta: 'Book now',
    highlight: true,
    disclaimer: '* This is not financial advice. All decisions remain with the client.',
  },
  {
    name: 'Software Consultation',
    icon: Shield,
    description: 'Expert advice on selecting and implementing trading technology tailored to your needs.',
    priceId: STRIPE_PRICES.softwareConsult,
    paypalPlanId: 'plan_software_consult',
    features: [
      'Custom software evaluation',
      'Integration planning',
      'Security & compliance overview',
    ],
    cta: 'Book now',
    highlight: false,
  },
  {
    name: 'Automated AI Trading',
    icon: Zap,
    description: 'Next-generation AI-powered trading with machine learning and predictive analytics.',
    priceId: STRIPE_PRICES.aiTrading,
    paypalPlanId: 'plan_ai_trading',
    features: [
      'Predictive market analysis',
      'Dynamic strategy optimization',
      'Real-time performance tracking',
    ],
    cta: 'Book now',
    highlight: false,
  },
];

export function Pricing() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [showCustomAmountModal, setShowCustomAmountModal] = useState(false);
  const { toast } = useToast();

  const handleStripeCheckout = async (priceId: string, productName: string, amount?: number) => {
    if (!supabase) {
      console.error('Supabase is not initialized. Checkout cannot proceed.');
      toast({
        title: 'Configuration Error',
        description: 'Supabase config is missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.',
        variant: 'destructive',
      });
      return;
    }

    setLoadingPlan(productName);
    
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { priceId, productName, customAmount: amount },
      });

      if (error) {
        let errorMessage = error.message;
        if (error.context) {
          try {
            const textContent = await error.context.text();
            errorMessage = textContent || error.message;
          } catch {
            errorMessage = error.message;
          }
        }
        throw new Error(errorMessage);
      }

      if (data?.url) {
        // Open Stripe Checkout in new tab
        window.open(data.url, '_blank');
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (err: unknown) {
      console.error('Payment error:', err);
      const message = err instanceof Error ? err.message : String(err ?? 'Unknown error');
      toast({
        title: 'Payment Error',
        description: message || 'Failed to initiate payment. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoadingPlan(null);
    }
  };

  const handleCustomAmountSubmit = (productName: string) => {
    const amount = parseFloat(customAmount);
    if (isNaN(amount) || amount < 1) {
      toast({
        title: 'Invalid Amount',
        description: 'Please enter a valid amount (minimum 1 EUR)',
        variant: 'destructive',
      });
      return;
    }
    setShowCustomAmountModal(false);
    handleStripeCheckout('custom_amount', productName, Math.round(amount * 100));
    setCustomAmount('');
  };
  return (
    <>
    <section id="pricing" className="relative section-padding bg-background">
      <div className="absolute inset-0 institutional-grid opacity-10" />
      
      <div className="relative container-max">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-px w-8 bg-primary" />
              <span className="tracking-widest uppercase">Products</span>
            </div>
          </div>
          
          <h2 className="mb-6 text-foreground">
            Professional Trading & Investment
            <span className="block mt-2 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Institutional-grade services designed for serious traders and investors seeking technological excellence and strategic advantage in modern markets.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`glass-card rounded-lg p-8 transition-all duration-300 hover:scale-[1.02] ${
                  plan.highlight
                    ? 'border-2 border-primary/50 bg-primary/5 shadow-lg shadow-primary/10'
                    : 'border border-border/50'
                }`}
              >
                {/* Plan Header */}
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {plan.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Disclaimer */}
                {plan.disclaimer && (
                  <p className="text-xs text-muted-foreground/70 italic mb-6 border-t border-border/50 pt-4">
                    {plan.disclaimer}
                  </p>
                )}

                <div className="space-y-3">
                  <Button
                    className={`w-full ${
                      plan.highlight
                        ? 'bg-primary hover:bg-primary/90'
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                    onClick={() => {
                      if (plan.priceId === 'custom_amount') {
                        setShowCustomAmountModal(true);
                      } else {
                        handleStripeCheckout(plan.priceId, plan.name);
                      }
                    }}
                    disabled={loadingPlan === plan.name}
                  >
                    {loadingPlan === plan.name ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Book now'
                    )}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Disclaimer */}
        <div className="glass-card rounded-lg p-6 max-w-4xl mx-auto border border-border/50">
          <p className="text-xs text-center text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Important Disclosure:</strong> TRADEFYY provides trading software, 
            technology consultation, and investment insights. We do not provide financial advice. All investment 
            decisions are made solely by clients. Past performance of trading systems and strategies does not 
            guarantee future results. Trading and investment involve substantial risk of loss. Please consult 
            with qualified financial advisors before making investment decisions.
          </p>
        </div>
      </div>
    </section>

    {/* Custom Amount Modal */}
    {showCustomAmountModal && (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="glass-card border border-border/50 rounded-lg p-8 max-w-md w-full">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Enter Booking Amount
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Please enter the amount you want to use for this booking (in EUR). Minimum amount is 1 EUR.
          </p>
          <div className="space-y-4">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-foreground mb-2">
                Amount (EUR)
              </label>
              <input
                id="amount"
                type="number"
                min="1"
                step="0.01"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full px-4 py-2 bg-secondary border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="e.g., 5000"
              />
            </div>
            <div className="flex gap-3">
              <Button
                className="flex-1 bg-primary hover:bg-primary/90"
                onClick={() => handleCustomAmountSubmit('Proper Market Approach')}
              >
                Continue to Payment
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setShowCustomAmountModal(false);
                  setCustomAmount('');
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
