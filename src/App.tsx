import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { About } from '@/components/sections/About';
import { Approach } from '@/components/sections/Approach';
import { Technology } from '@/components/sections/Technology';
import { Contact } from '@/components/sections/Contact';
import { Pricing } from '@/components/sections/Pricing';
import { Success } from '@/pages/Success';
import { LegalDisclaimer } from '@/pages/LegalDisclaimer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  // Simple routing based on pathname
  const pathname = window.location.pathname;
  const isSuccessPage = pathname === '/success';
  const isLegalDisclaimerPage = pathname === '/legal-disclaimer' || pathname === '/legal-disclaimer/';

  if (isSuccessPage) {
    return (
      <>
        <Success />
        <Toaster />
      </>
    );
  }

  if (isLegalDisclaimerPage) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <LegalDisclaimer />
        </main>
        <Footer />
        <Toaster />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Approach />
        <Technology />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
