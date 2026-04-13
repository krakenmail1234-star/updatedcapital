
import { Code2, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const roles = [
  {
    icon: TrendingUp,
    title: 'Investment Analyst',
    description: 'Conduct market research, financial modeling, and support investment decision-making processes.',
    requirements: ['Finance or Economics degree', 'Strong analytical skills', 'Knowledge of financial markets'],
  },
  {
    icon: Code2,
    title: 'Trading Specialist',
    description: 'Execute trading strategies, monitor market conditions, and optimize trading performance.',
    requirements: ['Experience in trading', 'Technical analysis skills', 'Quick decision-making ability'],
  },
  {
    icon: Users,
    title: 'Client Relations',
    description: 'Build and maintain client relationships, provide investment guidance, and ensure client satisfaction.',
    requirements: ['Excellent communication skills', 'Financial industry knowledge', 'Client-focused mindset'],
  },
];

export function Careers() {
  return (
    <section id="careers" className="relative section-padding bg-card/20">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-px w-8 bg-primary" />
              <span className="tracking-wider uppercase">Careers</span>
            </div>
          </div>

          <h2 className="mb-6 text-foreground">
            Join a Culture of Excellence
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            At TRADEFYY, we seek high-caliber professionals who are passionate about finance and driven 
            by excellence. Our culture emphasizes accountability, continuous learning, and collaborative success.
          </p>

          <div className="glass-card p-6 rounded-lg border-l-2 border-primary">
            <p className="text-sm text-muted-foreground leading-relaxed">
              We believe in nurturing talent and providing opportunities for professional growth. 
              If you are committed to delivering exceptional results and thrive in a dynamic environment, 
              we want to hear from you.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div key={index} className="glass-card p-8 rounded-sm group hover:bg-card/60 transition-all">
                <div className="inline-flex p-4 bg-primary/10 border border-primary/20 rounded-sm mb-6">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">{role.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{role.description}</p>

                <div className="space-y-2">
                  {role.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Submit Your Background</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
