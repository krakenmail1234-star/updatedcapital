import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'Competence', href: '#competence' },
  { name: 'Technology', href: '#technology' },
  { name: 'Products', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = window.location.pathname === '/';
  const resolveHref = (href: string) => {
    if (href === '#') return isHomePage ? '#' : '/';
    return isHomePage ? href : `/${href}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between gap-4 px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-5 md:py-6">
        <div className="flex lg:flex-1 min-w-0">
            <a href={resolveHref('#')} className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="h-9 w-9 sm:h-10 sm:w-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-lg sm:text-xl font-bold text-primary-foreground">T</span>
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight truncate">TRADEFYY</span>
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={resolveHref(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <LanguageSwitcher />
          <Button variant="outline" size="sm" asChild>
            <a href={resolveHref('#contact')}>Schedule a Consultation</a>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="space-y-1 px-6 py-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={resolveHref(item.href)}
                className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <LanguageSwitcher />
              <Button variant="outline" className="w-full" asChild>
                <a href={resolveHref('#contact')}>Schedule a Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
