import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ConsultationForm } from "./ConsultationForm";
import { ChevronDown, CheckCircle, Users, Heart, TrendingUp, Shield, Award, ArrowRight } from "lucide-react";

const OncologyLandingPage = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('consultation-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const valuePropositions = [
    {
      icon: Heart,
      title: "Patient Education Mastery",
      description: "Reduce patient anxiety by 40% with our proven pre-infusion education programs",
      highlight: "40% anxiety reduction"
    },
    {
      icon: Users,
      title: "Care Coordination Excellence", 
      description: "Streamline interdisciplinary communication and eliminate care gaps",
      highlight: "Eliminate care gaps"
    },
    {
      icon: TrendingUp,
      title: "Staff Retention Solutions",
      description: "Create supportive work environments that reduce turnover and improve team satisfaction",
      highlight: "Reduced turnover"
    },
    {
      icon: Shield,
      title: "Distress Screening Optimization",
      description: "Implement evidence-based screening that actually improves patient outcomes",
      highlight: "Evidence-based screening"
    },
    {
      icon: Award,
      title: "Quality Improvement Systems",
      description: "Develop measurable protocols that enhance both clinical excellence and patient experience",
      highlight: "Measurable protocols"
    },
    {
      icon: CheckCircle,
      title: "Trauma-Informed & Inclusive Care",
      description: "Build LGBTQI+ affirming practices and trauma-informed care protocols",
      highlight: "Inclusive care protocols"
    }
  ];

  const socialProofItems = [
    "22 years oncology nursing experience at academic medical center",
    "OCN-certified with transformative leadership training", 
    "Proven pre-infusion education program reducing patient anxiety",
    "EHR super-user with process improvement expertise",
    "Behavioral neuroscience approach to patient care",
    "Published presenter on distress management and relational neuroscience"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              Althea Miller Consulting - Transforming Cancer Care
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transform Your Oncology Care Through{" "}
              <span className="text-primary">Evidence-Based Excellence</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              22 years of proven expertise helping cancer centers improve patient satisfaction, 
              reduce staff turnover, and deliver compassionate care that makes a measurable difference
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="cta"
                onClick={scrollToForm}
                className="px-8 py-6 text-lg font-semibold"
              >
                Schedule Your Oncology Excellence Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToForm}
                className="px-8 py-6 text-lg"
              >
                Learn More
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Measurable Results That Transform Cancer Care
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Evidence-based solutions that improve patient outcomes and staff satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePropositions.map((prop, index) => {
              const Icon = prop.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-card/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs font-medium">
                        {prop.highlight}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {prop.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {prop.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About/Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-card/60 backdrop-blur-sm">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4 px-4 py-2">
                  Clinical Excellence & Leadership
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  22 Years of Transformative Oncology Experience
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                As an OCN-certified nurse with 22 years at University of Iowa Health Care's academic medical center, 
                I've seen firsthand how the right systems transform both patient outcomes and staff satisfaction. 
                My unique combination of clinical expertise, behavioral neuroscience background, and process improvement 
                training helps oncology teams create sustainable change.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From developing pre-infusion education programs that measurably reduce patient anxiety to implementing 
                EHR optimizations that improve workflow efficiency, I partner with cancer centers to build excellence that lasts.
              </p>
              
              <div className="text-center">
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={scrollToForm}
                  className="px-8 py-4"
                >
                  Start Your Transformation Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Proven Track Record of Excellence
            </h2>
            <p className="text-xl text-muted-foreground">
              Credentials and achievements that speak to measurable impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialProofItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section id="consultation-form" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Schedule Your Oncology Excellence Assessment
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can transform your cancer care delivery together
            </p>
          </div>
          
          <ConsultationForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/10 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Althea Miller Consulting
            </h3>
            <p className="text-muted-foreground mb-6">
              Transforming Cancer Care Through Evidence-Based Excellence
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">LinkedIn Profile</a>
              <a href="#" className="hover:text-primary transition-colors">Professional Speaking</a>
              <a href="#" className="hover:text-primary transition-colors">Continuing Education Resources</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OncologyLandingPage;