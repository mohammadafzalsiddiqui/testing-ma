import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logoImage from "@/assets/ma-enterprises-logo.png";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background gradient - ADDED z-0 */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50 z-0" />
        
        {/* Main content - ADDED relative and z-10 */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img 
                src={logoImage} 
                alt="M.A. Enterprises Logo" 
                className="h-32 w-32 sm:h-40 sm:w-40 object-contain drop-shadow-lg"
              />
            </div>
            
            {/* Company Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              M.A. <span className="text-primary">ENTERPRISES</span>
            </h1>
            
            {/* Tagline */}
            <div className="h-1 w-24 bg-primary mx-auto mb-8 rounded-full" />
            
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              We don't just Advertise, <br />
              <span className="text-primary">We build your Presence.</span>
            </p>
            
            {/* Launch App Button */}
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate('/register')}
              className="mb-16"
            >
              Contact Us Now
            </Button>
          </div>
        </div>
        
        {/* Decorative elements - ADDED z-0 to both */}
        <div className="absolute top-1/4 left-4 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-1/4 right-4 w-64 h-64 bg-accent/5 rounded-full blur-3xl z-0" />
      </div>
      
      {/* Services Preview Section */}
      <div className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your printing and digital marketing needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Printing Services */}
            <div className="text-center p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Printing Services</h3>
              <p className="text-muted-foreground mb-4">
                Professional printing solutions for all your business needs
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Flex & Hoarding</li>
                <li>• Banners & Pamphlets</li>
                <li>• Visiting Cards</li>
                <li>• Hand Bills & More</li>
              </ul>
            </div>
            
            {/* Digital Marketing */}
            <div className="text-center p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Digital Marketing</h3>
              <p className="text-muted-foreground mb-4">
                Complete digital solutions to boost your online presence
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Website Design & Development</li>
                <li>• Social Media Marketing</li>
                <li>• Brand Strategy</li>
                <li>• Digital Advertising</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;