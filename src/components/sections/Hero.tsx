
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 institutional-grid opacity-20" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Blue Gradient Circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary via-blue-600 to-transparent rounded-full blur-3xl opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-tr from-blue-600 to-transparent rounded-full blur-3xl opacity-20 animate-pulse-slow" />

      <div className="relative container-max w-full pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-14 flex justify-center">
        <div className="max-w-5xl w-full relative text-center">
          {/* Main Headline */}
          <h1 className="mb-8 text-foreground animate-slide-up text-balance">
            Your Trusted Partner in
            <span className="block mt-2 bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
              Financial Growth.
            </span>
          </h1>

          {/* Value Proposition */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
            TRADEFYY is a platform designed to empower individuals who are serious about securing their financial future. By combining innovative technology with deep market insights, we provide users with the tools, guidance, and support needed to confidently explore and capitalize on opportunities in stocks and commodities. Our mission is to make sophisticated trading and investing accessible, helping you take control of your wealth with clarity and confidence.
          </p>

          {/* Key Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-12 animate-slide-up animate-delay-400 text-left">
            {[
              { title: 'Stocks & Commodities', desc: 'Market-focused strategies across traditional asset classes' },
              { title: 'Crypto Market Overview', desc: 'Clear visibility into digital asset trends and positioning' },
              { title: 'Strategic Insights', desc: 'Smart guidance to identify and optimize opportunities' },
              { title: 'Professional Mentorship', desc: 'Professional mentorship with guidance for confident decisions' },
            ].map((pillar, i) => (
              <div key={i} className="glass-card h-full p-5 sm:p-6 rounded-lg group hover:bg-card/60 transition-all border-l-2 border-primary/50">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-600 justify-center">
            <Button size="lg" className="group w-full sm:w-auto" asChild>
              <a href="#contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <a href="#competence">Our Competence</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
    </section>
  );
}
