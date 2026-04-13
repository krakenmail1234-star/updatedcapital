import { Server, Lock, Zap, Activity } from 'lucide-react';

const capabilities = [
  {
    icon: Server,
    title: 'Advanced Market Analytics',
    description: 'Data-driven tools and research workflows help us evaluate opportunities across stocks, commodities, and crypto markets.',
    specs: ['Market trend analysis', 'Real-time data feeds', 'Portfolio insights', 'Risk review tools'],
  },
  {
    icon: Zap,
    title: 'Responsive Execution',
    description: 'Modern systems support fast responses to short-term opportunities and changing market conditions.',
    specs: ['Fast trade workflows', 'Multi-market visibility', 'Automated monitoring', 'Execution support'],
  },
  {
    icon: Activity,
    title: 'Web3 & DeFi Insight',
    description: 'Our platform approach includes awareness of decentralized finance, digital asset trends, and evolving Web3 infrastructure.',
    specs: ['DeFi research', 'On-chain awareness', 'Token market tracking', 'Emerging ecosystem reviews'],
  },
  {
    icon: Lock,
    title: 'Secure Infrastructure',
    description: 'Security-focused systems help protect client data, communication, and operational workflows.',
    specs: ['Data encryption', 'Secure access', 'Operational controls', 'Regular reviews'],
  },
];

export function Technology() {
  return (
    <section id="technology" className="relative section-padding">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-px w-8 bg-primary" />
              <span className="tracking-wider uppercase">Technology</span>
            </div>
          </div>

          <h2 className="mb-6 text-foreground">
            Technology for Smarter Decisions
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            TRADEFYY uses innovative technology, analytical tools, and Web3 awareness to support smarter investing across traditional markets and digital assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div key={index} className="glass-card p-8 rounded-sm group hover:bg-card/60 transition-all">
                <div className="inline-flex p-4 bg-primary/10 border border-primary/20 rounded-sm mb-6">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">{capability.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{capability.description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {capability.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1 w-1 bg-primary rounded-full" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
