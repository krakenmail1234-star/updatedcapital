import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const isHomePage = window.location.pathname === '/';
  const resolveHref = (href: string) => {
    if (href === '#') return isHomePage ? '#' : '/';
    return isHomePage ? href : `/${href}`;
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/tradefyy', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/tradefyy', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/tradefyy', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/tradefyy', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/@tradefyy', label: 'YouTube' },
  ];

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 mb-3">
              <img 
                src="https://cdn-ai.onspace.ai/onspace/files/3XDsdAoccJgSu93eb4JifQ/tradefyy-icon.svg" 
                alt="TRADEFYY" 
                className="h-10 w-10"
              />
              <span className="text-xl font-bold tracking-tight">TRADEFYY</span>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-card/60 border border-border rounded-sm hover:bg-primary/10 hover:border-primary/50 transition-all group"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href={resolveHref('#contact')} className="hover:text-foreground transition-colors">Book a Consultation</a></li>
              <li><a href="mailto:info@tradefyy.net" className="hover:text-foreground transition-colors">info@tradefyy.net</a></li>
              <li><a href="/legal-disclaimer" className="hover:text-foreground transition-colors">Legal Disclaimer</a></li>
              <li><span>Tallinn, Estonia</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-5 border-t border-border">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl text-center">
              © {currentYear} TRADEFYY. All rights reserved. Registered in Estonia. Past performance is not indicative of future results. 
              Investments involve risk including possible loss of principal. This website does not constitute an offer or solicitation of securities.
            </p>
            <div className="flex gap-4 sm:gap-6 justify-center text-xs text-muted-foreground flex-wrap">
              <a href={resolveHref('#')} className="hover:text-foreground transition-colors">Home</a>
              <a href={resolveHref('#about')} className="hover:text-foreground transition-colors">Firm Overview</a>
              <a href={resolveHref('#competence')} className="hover:text-foreground transition-colors">Competence</a>
              <a href={resolveHref('#pricing')} className="hover:text-foreground transition-colors">Products</a>
              <a href={resolveHref('#contact')} className="hover:text-foreground transition-colors">Contact</a>
              <a href="/legal-disclaimer" className="hover:text-foreground transition-colors">Legal Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
