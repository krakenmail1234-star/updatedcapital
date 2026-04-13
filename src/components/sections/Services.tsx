import { CandlestickChart, BarChart3, Users, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: CandlestickChart,
    title: 'Stocks & Commodities Trading',
    description: 'Active market strategies across established asset classes with disciplined analysis and execution.',
    features: [
      'Short-term trading setups',
      'Trend and macro analysis',
      'Risk-managed execution',
      'Diversification insights',
    ],
  },
  {
    icon: BarChart3,
    title: 'Crypto Market',
    description: 'Crypto-focused trading and investment support designed for fast-moving digital asset markets.',
    features: [
      'Major crypto and altcoin market coverage',
      'Volatility-aware positioning and risk control',
      'Market structure + trend tracking',
      'Execution support and portfolio allocation ideas',
    ],
  },
  {
    icon: Users,
    title: 'Market Approach & Consultations',
    description: 'Professional market analysis and expert opinions tailored to your preferred market and investment goals.',
    features: [
      'One-on-one consultations',
      'Customized market outlooks',
      'Opportunity identification',
      'Strategy refinement support',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Personal Trading School',
    description: 'Learn directly from market professionals through practical lessons and step-by-step guidance.',
    features: [
      'Beginner-to-advanced lessons',
      'Platform and chart walkthroughs',
      'Trading discipline fundamentals',
      'Hands-on market education',
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative section-padding">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-px w-8 bg-primary" />
              <span className="tracking-wider uppercase">Capabilities</span>
            </div>
          </div>

          <h2 className="mb-6 text-foreground">
            Trading, Investing & Consultation Services
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our core services across market education, strategic insight, and practical support for stocks, commodities, and crypto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-sm group hover:bg-card/60 transition-all"
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-primary/10 border border-primary/20 rounded-sm mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
