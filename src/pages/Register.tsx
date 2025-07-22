import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
    printingServices: [] as string[],
    digitalServices: [] as string[],
    customMessage: ""
  });

  const printingOptions = [
    "Flex",
    "Hoarding", 
    "Banners",
    "Pamphlets",
    "Visiting Card",
    "Hand bill",
    "Other (please specify)"
  ];

  const digitalOptions = [
    "Website Design & Development",
    "Social Media Marketing"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.role || !formData.name || !formData.email) {
      toast({
        title: "Please fill all required fields",
        description: "Role, name, and email are required.",
        variant: "destructive"
      });
      return;
    }

    // Create mailto content
    const subject = `Service Inquiry from ${formData.name}`;
    const body = `
Role: ${formData.role}
Name: ${formData.name}
Email: ${formData.email}

Printing Services Interested In:
${formData.printingServices.join(", ") || "None selected"}

Digital Marketing Services Interested In:
${formData.digitalServices.join(", ") || "None selected"}

Additional Message:
${formData.customMessage || "No additional message"}
    `;

    const mailtoLink = `mailto:joinwithmaenterprises@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Navigate to thank you page
    setTimeout(() => {
      navigate('/thank-you');
    }, 1000);
  };

  const handlePrintingServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      printingServices: checked 
        ? [...prev.printingServices, service]
        : prev.printingServices.filter(s => s !== service)
    }));
  };

  const handleDigitalServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      digitalServices: checked 
        ? [...prev.digitalServices, service]
        : prev.digitalServices.filter(s => s !== service)
    }));
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Join <span className="text-primary">M.A. Enterprises</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Tell us about your requirements and we'll get back to you soon
          </p>
        </div>

        {/* Registration Form */}
        <Card className="p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div>
              <Label className="text-base font-semibold mb-3 block">Select Your Role *</Label>
              <div className="grid grid-cols-2 gap-4">
                {["User", "Influencer"].map((role) => (
                  <label
                    key={role}
                    className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.role === role
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      checked={formData.role === role}
                      onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                      className="sr-only"
                    />
                    <span className="font-medium">{role}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-base font-semibold">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="mt-2"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-base font-semibold">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="mt-2"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            {/* Printing Services */}
            <div>
              <Label className="text-base font-semibold mb-3 block">Printing Services</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {printingOptions.map((service) => (
                  <label
                    key={service}
                    className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={formData.printingServices.includes(service)}
                      onChange={(e) => handlePrintingServiceChange(service, e.target.checked)}
                      className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                    />
                    <span className="text-sm">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Digital Marketing Services */}
            <div>
              <Label className="text-base font-semibold mb-3 block">Digital Marketing Services</Label>
              <div className="grid gap-3">
                {digitalOptions.map((service) => (
                  <label
                    key={service}
                    className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={formData.digitalServices.includes(service)}
                      onChange={(e) => handleDigitalServiceChange(service, e.target.checked)}
                      className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                    />
                    <span className="text-sm">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Custom Message */}
            <div>
              <Label htmlFor="message" className="text-base font-semibold">Additional Requirements</Label>
              <Textarea
                id="message"
                value={formData.customMessage}
                onChange={(e) => setFormData(prev => ({ ...prev, customMessage: e.target.value }))}
                className="mt-2"
                placeholder="Tell us more about your specific requirements..."
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <Button type="submit" variant="hero" size="lg">
                Submit Request
              </Button>
            </div>
          </form>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-primary hover:text-primary/80"
          >
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;