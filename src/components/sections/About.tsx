import { Shield, TrendingUp, Database } from 'lucide-react';

const principles = [
  {
    icon: Shield,
    title: 'Market Expertise',
    description: 'We analyze stocks, commodities, and cryptocurrencies with a disciplined, opportunity-focused mindset.',
  },
  {
    icon: TrendingUp,
    title: 'Web3 Innovation',
    description: 'Our crypto-friendly approach embraces innovative technologies and decentralized finance opportunities.',
  },
  {
    icon: Database,
    title: 'Transparent Guidance',
    description: 'Clear communication and strategic insights help investors make confident, informed decisions.',
  },
];

export function About() {
  return (
    <section id="about" className="relative pt-4 pb-12 md:pt-6 md:pb-16 bg-card/20">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-14 items-start">
          {/* Left Column */}
          <div>
<h2 className="mb-6 text-foreground text-balance">
              TRADEFYY
              <span className="block bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">Firm Overview.</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                TRADEFYY is a vibrant social platform that makes smart trading and investing feel simple, exciting, and accessible to everyone.
              </p>
              
              <p>
                Whether you're into stocks, commodities, or cryptocurrencies, we bring together powerful tools, real-time market insights, and a community of like-minded investors — all in one place. No more overwhelming complexity or confusing decisions.
              </p>

              <p>
                Our mission is to empower you to make better investment choices with confidence. We combine intelligent financing solutions, smart portfolio guidance, and the collective wisdom of a thriving community to help you discover exciting opportunities and grow your wealth — even in fast-changing markets.
              </p>
            </div>
          </div>

          {/* Right Column - Principles */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Core Principles</h3>
            </div>

            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div key={index} className="glass-card p-8 rounded-sm group hover:bg-card/60 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 border border-primary/20 rounded-sm shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">{principle.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
