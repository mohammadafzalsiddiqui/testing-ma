import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Thank You Card */}
        <Card className="p-8 sm:p-12 shadow-xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Thank You!
          </h1>
          
          <div className="space-y-4 text-lg text-muted-foreground mb-8">
            <p>
              Your request has been submitted successfully. We appreciate your interest in 
              <span className="text-primary font-semibold"> M.A. Enterprises</span>.
            </p>
            
            <div className="bg-secondary/50 rounded-lg p-6 my-6">
              <p className="text-foreground font-semibold mb-2">
                🚧 Site Under Development
              </p>
              <p className="text-sm">
                Our website is currently under development. Our team will contact you soon 
                to discuss your requirements and provide you with the best solutions for your business needs.
              </p>
            </div>
            
            <p>
              Someone from our team will contact you within <span className="text-primary font-semibold">24-48 hours</span> 
              to discuss your requirements in detail.
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-card border rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Contact Information</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>📧 Email: joinwithmaenterprises@gmail.com</p>
              <p>🕒 Response Time: 24-48 hours</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/register')}
            >
              Submit Another Request
            </Button>
          </div>
        </Card>

        {/* Footer Message */}
        <p className="text-sm text-muted-foreground mt-8">
          Thank you for choosing M.A. Enterprises for your business needs.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;