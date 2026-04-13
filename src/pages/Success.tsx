import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Success() {
  useEffect(() => {
    // You can verify the session_id from URL params here
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');
    
    if (sessionId) {
      console.log('Payment successful! Session ID:', sessionId);
      // Optional: Call your backend to verify the payment
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary mb-6">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Thank you for your purchase. You will receive a confirmation email shortly with details about your order and next steps.
        </p>
        
        <div className="space-y-3">
          <Button className="w-full" asChild>
            <a href="/">Return to Home</a>
          </Button>
          
          <Button variant="outline" className="w-full" asChild>
            <a href="#contact">Contact Support</a>
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground mt-8">
          Questions? Contact us at <a href="mailto:info@tradefyy.net" className="text-primary hover:underline">info@tradefyy.net</a>
        </p>
      </div>
    </div>
  );
}
