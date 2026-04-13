import { TrendingUp, Users, Target, Award } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: 'Pro',
    label: 'Market Approach',
    description: 'Thoughtful analysis backed by structured decision-making',
    highlight: true,
  },
  {
    icon: Users,
    value: 'Trust',
    label: 'Credibility',
    description: 'Built through competence, professionalism, and market experience',
  },
  {
    icon: Target,
    value: 'Clear',
    label: 'Transparency',
    description: 'We value our clients and support them with honest guidance',
  },
  {
    icon: Award,
    value: 'Ready',
    label: 'Professionalism',
    description: 'We analyze every aspect before we react',
  },
];

const advantages = [
  {
    title: 'Professional Market Approach',
    description: 'A structured and disciplined approach helps clients understand markets better and act with greater confidence.',
  },
  {
    title: 'Credibility',
    description: 'Our credibility is built through proven trading competence, professionalism, and a serious approach to market understanding.',
  },
  {
    title: 'Transparency',
    description: 'We value our clients, communicate clearly, and aim to support every step with practical guidance.',
  },
  {
    title: 'Prepared Professionalism',
    description: 'We analyze every aspect before reacting, helping ensure decisions are measured, informed, and responsible.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative section-padding bg-background">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
              <div className="h-px w-8 bg-primary" />
              <span className="tracking-wider uppercase">Why Choose Us</span>
              <div className="h-px w-8 bg-primary" />
            </div>
          </div>

          <h2 className="mb-6 text-foreground">
            Why Investors
            <span className="block bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              Choose TRADEFYY.
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            TRADEFYY combines professional market thinking, credibility, transparency, and disciplined preparation to help clients make more confident decisions.
          </p>
        </div>

        {/* Performance Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`glass-card p-8 rounded-sm text-center group hover:bg-card/60 transition-all ${
                  stat.highlight ? 'border-2 border-primary/50 bg-primary/5' : ''
                }`}
              >
                <div className="inline-flex p-4 bg-primary/10 border border-primary/20 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">{(index + 1).toString().padStart(2, '0')}</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 glass-card p-6 rounded-sm">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            All market information and educational content are provided for informational purposes only. Trading and investing involve risk, and final decisions remain with the client.
          </p>
        </div>
      </div>
    </section>
  );
}
