import { BarChart3, CandlestickChart, GraduationCap, Users } from 'lucide-react';

const competencies = [
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

const framework = [
  {
    number: '01',
    title: 'Market Research',
    description: 'We study traditional and digital markets to identify promising opportunities with strong potential and manageable risk.',
  },
  {
    number: '02',
    title: 'Strategic Selection',
    description: 'Our team matches ideas to client objectives, combining short-term market awareness with long-term portfolio thinking.',
  },
  {
    number: '03',
    title: 'Technology-Led Execution',
    description: 'Innovative tools, analytics, and Web3 awareness help us act with speed, structure, and discipline.',
  },
  {
    number: '04',
    title: 'Ongoing Optimization',
    description: 'We continually review market conditions and portfolio positioning to support informed adjustments over time.',
  },
];

export function Approach() {
  return (
    <section id="competence" className="relative section-padding bg-card/20">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-px w-8 bg-primary" />
              <span className="tracking-wider uppercase">Competence</span>
            </div>
          </div>

          <h2 className="mb-6 text-foreground text-balance">
            Competence & Market Approach
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            TRADEFYY supports investors across stocks, commodities, and the crypto market with practical education, market-driven strategies, and professional consultations. We combine hands-on competence with a structured market approach to help you act with greater clarity and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {competencies.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="glass-card p-8 rounded-sm group hover:bg-card/60 transition-all">
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-primary/10 border border-primary/20 rounded-sm mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>

                <ul className="space-y-3">
                  {item.features.map((feature, i) => (
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

        <div className="max-w-3xl mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">How We Work</h3>
          <p className="text-muted-foreground leading-relaxed">
            Our methodology blends research, technology, and practical execution to help investors navigate opportunities in changing markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {framework.map((item, index) => (
            <div key={index} className="glass-card p-6 rounded-sm flex gap-6">
              <div className="text-5xl font-bold text-primary/20 shrink-0">{item.number}</div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
