import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    
    toast({
      title: 'Consultation Request Received',
      description: 'Our team will review your inquiry and respond within 48 hours.',
    });

    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <div>
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-px w-8 bg-primary" />
                <span className="tracking-wider uppercase">Contact</span>
              </div>
            </div>

            <h2 className="mb-6 text-foreground">
              Request a Consultation
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Connect with our team to discuss opportunities in stocks, commodities, cryptocurrencies, and Web3. Every inquiry is handled with professionalism, care, and confidentiality.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-sm shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground mb-1">Email</div>
                  <div className="text-sm text-muted-foreground">info@tradefyy.net</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-sm shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground mb-1">Phone</div>
                  <div className="text-sm text-muted-foreground">By appointment only</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-sm shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground mb-1">Office</div>
                  <div className="text-sm text-muted-foreground">Tallinn, Estonia</div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 glass-card rounded-sm">
              <p className="text-xs text-muted-foreground leading-relaxed">
                TRADEFYY provides market education, strategic insights, and technology-focused support. This website is for informational purposes only and does not guarantee returns.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="glass-card p-6 sm:p-8 lg:p-12 rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john.smith@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="text-sm font-medium text-foreground block mb-2">
                  Company / Institution
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                  Inquiry Details *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your goals in stocks, commodities, crypto, or Web3..."
                  className="min-h-[150px]"
                />
              </div>

              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full">
                  Submit Consultation Request
                </Button>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  We typically respond within 48 business hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
