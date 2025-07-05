import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  primaryChallenge: string;
}

export const ConsultationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    primaryChallenge: ""
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.organization.trim()) newErrors.organization = "Organization name is required";
    if (!formData.role.trim()) newErrors.role = "Role/title is required";
    if (!formData.primaryChallenge) newErrors.primaryChallenge = "Please select your primary challenge";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const generateSessionId = (): string => {
    return 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please correct the errors",
        description: "Some required fields are missing or invalid.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const sessionId = generateSessionId();
      const webhookData = {
        ...formData,
        sessionId,
        timestamp: new Date().toISOString(),
        source: "CuraSync Oncology Consulting Landing Page"
      };

      // Replace with actual webhook URL from GoHighLevel
      const webhookUrl = "https://services.leadconnectorhq.com/hooks/your-webhook-id";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Request submitted successfully!",
          description: "We'll contact you within 24 hours to schedule your assessment.",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly at info@curasync.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="border-0 bg-card/60 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Thank You for Your Interest!
            </h3>
            <p className="text-muted-foreground text-lg">
              Your oncology excellence assessment request has been submitted.
            </p>
          </div>
          <div className="bg-accent/20 rounded-lg p-6">
            <p className="text-foreground font-medium mb-2">
              What happens next?
            </p>
            <ul className="text-left text-muted-foreground space-y-2">
              <li>• We'll review your information within 24 hours</li>
              <li>• Schedule a 30-minute discovery call at your convenience</li>
              <li>• Discuss your specific challenges and goals</li>
              <li>• Provide customized recommendations for your organization</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 bg-card/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-center text-foreground">
          Get Your Personalized Assessment
        </CardTitle>
        <p className="text-center text-muted-foreground">
          Share your information to schedule a consultation with our CuraSync team
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className={errors.firstName ? "border-destructive" : ""}
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">{errors.firstName}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className={errors.lastName ? "border-destructive" : ""}
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-sm text-destructive">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={errors.email ? "border-destructive" : ""}
              placeholder="Enter your professional email"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className={errors.phone ? "border-destructive" : ""}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organization/Facility Name *</Label>
            <Input
              id="organization"
              type="text"
              value={formData.organization}
              onChange={(e) => handleInputChange("organization", e.target.value)}
              className={errors.organization ? "border-destructive" : ""}
              placeholder="Enter your healthcare organization name"
            />
            {errors.organization && (
              <p className="text-sm text-destructive">{errors.organization}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Role/Title *</Label>
            <Input
              id="role"
              type="text"
              value={formData.role}
              onChange={(e) => handleInputChange("role", e.target.value)}
              className={errors.role ? "border-destructive" : ""}
              placeholder="e.g., Medical Director, Nursing Manager, Administrator"
            />
            {errors.role && (
              <p className="text-sm text-destructive">{errors.role}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="primaryChallenge">Primary Challenge *</Label>
            <Select 
              value={formData.primaryChallenge} 
              onValueChange={(value) => handleInputChange("primaryChallenge", value)}
            >
              <SelectTrigger className={errors.primaryChallenge ? "border-destructive" : ""}>
                <SelectValue placeholder="Select your primary challenge" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="patient-satisfaction">Patient Satisfaction</SelectItem>
                <SelectItem value="staff-retention">Staff Retention</SelectItem>
                <SelectItem value="care-coordination">Care Coordination</SelectItem>
                <SelectItem value="quality-metrics">Quality Metrics</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.primaryChallenge && (
              <p className="text-sm text-destructive">{errors.primaryChallenge}</p>
            )}
          </div>

          <Button
            type="submit"
            variant="cta"
            size="lg"
            disabled={isSubmitting}
            className="w-full py-6 text-lg font-semibold"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2" />
                Scheduling Assessment...
              </>
            ) : (
              <>
                Schedule My Assessment
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you consent to being contacted about our oncology consulting services. 
            We respect your privacy and will never share your information with third parties.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};