import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sections = [
  {
    title: 'Nature of Services: Non-Advisory and Educational',
    body:
      'The services provided by TRADEFYY.net (hereinafter "the Company") are strictly limited to the provision of general market consultations, macroeconomic analysis, and educational information. The Company does not provide, and its services shall not be construed as, "Investment Advice" as defined under the Markets in Financial Instruments Directive (MiFID II) or any applicable local member state regulations.',
  },
  {
    title: 'Exclusion of Personal Recommendations',
    body:
      'Any information, market expectations, or consultations provided by the Company are generic in nature and are not tailored to the individual circumstances, financial position, risk appetite, or investment objectives of any specific user. The Company does not conduct "suitability" or "appropriateness" assessments. Consequently, no information provided by the Company constitutes a Personal Recommendation to enter into any transaction involving a specific financial instrument, including but not limited to equities, forex, commodities, or derivatives.',
  },
  {
    title: 'Informational and Analytical Scope',
    body:
      'The Company’s consultations focus on market mechanics, historical data analysis, and forward-looking market expectations based on publicly available data. These insights are intended to facilitate the user’s independent understanding of market trends. The Company does not act as a fiduciary, agent, or financial advisor to the user. All investment decisions are made solely at the discretion and risk of the user.',
  },
  {
    title: 'Accuracy and Forward-Looking Statements',
    body:
      'While the Company endeavors to provide accurate and timely educational content, all information is provided on an "as-is" and "as-available" basis. Market expectations and projections are inherently speculative and subject to rapid change due to economic, political, or market volatility. The Company makes no warranty, express or implied, regarding the accuracy, completeness, or reliability of its market analysis.',
  },
  {
    title: 'Risk Acknowledgment and Limitation of Liability',
    body:
      'The user acknowledges that trading in financial markets involves a high degree of risk and may result in the loss of all invested capital. Past performance is not an indicator of future results. To the maximum extent permitted by law, TRADEFYY.net, its directors, and employees shall not be held liable for any direct, indirect, or consequential loss or damage arising from the user’s reliance on any information or consultation provided by the Company.',
  },
  {
    title: 'Third-Party Professional Advice',
    body:
      'The Company strongly recommends that users consult with a legally authorized and licensed financial advisor, tax professional, or legal counsel before making any investment decisions. The Company’s services are not a substitute for professional financial planning.',
  },
];

export function LegalDisclaimer() {
  return (
    <section className="relative section-padding bg-background min-h-screen pt-28 sm:pt-32">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" size="sm" className="mb-6" asChild>
            <a href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to TRADEFYY
            </a>
          </Button>

          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-px w-8 bg-primary" />
              <span className="tracking-wider uppercase">Legal Disclaimer</span>
            </div>
          </div>

          <h1 className="mb-6 text-foreground text-balance">
            Legal Disclaimer &
            <span className="block bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
              Disclosure of Services
            </span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            The following information explains the scope of TRADEFYY’s educational and market-consultation services, the limitations of liability, and the importance of obtaining licensed professional advice before making financial decisions.
          </p>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={section.title} className="glass-card p-6 sm:p-8 rounded-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary font-semibold">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-foreground">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{section.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-sm bg-card/40 border border-border/50">
            <p className="text-sm text-muted-foreground">
              AI responses may include mistakes. For legal advice, consult a qualified professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
