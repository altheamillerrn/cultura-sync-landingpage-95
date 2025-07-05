import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ConsultationForm } from "./ConsultationForm";
import { ChevronDown, CheckCircle, Users, Heart, TrendingUp, Shield, Award, ArrowRight } from "lucide-react";
const OncologyLandingPage = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('consultation-form');
    formElement?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const valuePropositions = [{
    icon: TrendingUp,
    title: "High-Volume Operations Excellence",
    description: "22 years managing complex cancer care operations with proven capacity optimization",
    metrics: "140 patients daily • 58-chair suite • 20+ staff",
    highlight: "Operational efficiency that impacts your bottom line",
    executiveBenefit: "Proven ability to optimize capacity, streamline workflows, and maintain quality at scale"
  }, {
    icon: Heart,
    title: "Evidence-Based Patient Education Systems",
    description: "Comprehensive pre-infusion education program transforming patient experience",
    metrics: "45-minute appointments • Measurable satisfaction increases",
    highlight: "From deep anxiety to confidence transformation",
    executiveBenefit: "Higher HCAHPS ratings = increased reimbursements"
  }, {
    icon: Shield,
    title: "Regulatory Compliance & Quality Assurance",
    description: "Meeting critical accreditation standards with systematic distress screening",
    metrics: "80% distress identification • Mandatory compliance since 2015",
    highlight: "Evidence-based screening protocols",
    executiveBenefit: "Maintain accreditation, avoid penalties, demonstrate quality metrics"
  }, {
    icon: Users,
    title: "Staff Retention & Workplace Innovation",
    description: "Evidence-based wellness solutions reducing turnover through workplace innovation",
    metrics: "Zen Zone implementation • Measurable stress reduction",
    highlight: "Improved workplace satisfaction",
    executiveBenefit: "Reduced recruitment costs, lower turnover rates, improved engagement"
  }, {
    icon: CheckCircle,
    title: "Patient Safety & Emergency Protocols",
    description: "Proactive communication systems preventing complications and improving outcomes",
    metrics: "Neutropenic Fever Alert system • Enhanced ER protocols",
    highlight: "Improved safety metrics",
    executiveBenefit: "Reduced liability, fewer complications, improved patient safety"
  }, {
    icon: Award,
    title: "Strategic Partnership & Resource Development",
    description: "Community partnerships enhancing patient care through comprehensive support programs",
    metrics: "Port Shirts program • Food insecurity screening",
    highlight: "Differentiated care offerings",
    executiveBenefit: "Enhanced reputation, patient loyalty, community relations"
  }];
  const socialProofItems = ["22 years oncology nursing experience at academic medical center", "OCN-certified with transformative leadership training", "Proven pre-infusion education program reducing patient anxiety", "EHR super-user with process improvement expertise", "Behavioral neuroscience approach to patient care", "Published presenter on distress management and relational neuroscience"];
  return <div className="min-h-screen bg-background">
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
              <Button size="lg" variant="cta" onClick={scrollToForm} className="px-8 py-6 text-lg font-semibold">
                Schedule Your Oncology Excellence Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" onClick={scrollToForm} className="px-8 py-6 text-lg">
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
              Proven Results That Drive Hospital Performance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Evidence-based solutions with measurable impact on your key performance indicators
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePropositions.map((prop, index) => {
            const Icon = prop.icon;
            return <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-card/60 backdrop-blur-sm">
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
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {prop.description}
                    </p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-primary mb-2">Key Metrics:</p>
                      <p className="text-sm text-muted-foreground">{prop.metrics}</p>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-medium text-foreground">Executive Benefit:</p>
                      <p className="text-sm text-muted-foreground mt-1">{prop.executiveBenefit}</p>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Executive ROI Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 bg-card/60 backdrop-blur-sm">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Why Hospital Executives Choose Althea Miller Consulting
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Immediate Impact Areas */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">Immediate Impact Areas:</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span><strong className="text-foreground">Patient Satisfaction Scores</strong> → Direct HCAHPS improvement</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span><strong className="text-foreground">Staff Retention Rates</strong> → Reduced recruitment and training costs</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span><strong className="text-foreground">Regulatory Compliance</strong> → Maintained accreditation status</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span><strong className="text-foreground">Operational Efficiency</strong> → Optimized patient throughput</span>
                    </li>
                  </ul>
                </div>

                {/* Proven Implementation Approach */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">Proven Implementation:</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span><strong className="text-foreground">22 years frontline experience</strong> at academic medical center</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span><strong className="text-foreground">OCN certification</strong> with specialized oncology expertise</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span><strong className="text-foreground">Process improvement training</strong> with measurable outcomes</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span><strong className="text-foreground">Behavioral neuroscience background</strong> for evidence-based solutions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Button variant="cta" size="lg" onClick={scrollToForm} className="px-8 py-4">
                  Schedule Your Strategic Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
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
                <Button variant="cta" size="lg" onClick={scrollToForm} className="px-8 py-4">
                  Start Your Transformation Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      

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
    </div>;
};
export default OncologyLandingPage;