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
      {/* Hero Section with Logo Space */}
      <section className="relative pt-12 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Logo Space */}
          <div className="text-center mb-16">
            <div className="h-24 sm:h-28 lg:h-32 flex items-center justify-center mb-8">
              <img 
                src="/lovable-uploads/81ddb678-5578-49f8-9a50-fdcf9eaf9bbf.png" 
                alt="CulturaSync Logo - Transforming Oncology Care Through Culture Excellence"
                className="h-full w-auto max-w-xs sm:max-w-sm lg:max-w-md object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-primary block mb-2">Better Systems.</span>
              <span className="text-accent block mb-2">Braver Culture.</span>
              <span className="text-secondary block">Human-Centered Care.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
              Helping oncology teams reduce burnout, improve communication, and deliver care that truly connects.
            </p>
            
            <div className="flex justify-center mb-8">
              <Button size="lg" variant="cta" onClick={scrollToForm} className="px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                Schedule Your Workplace Culture Assessment
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <ChevronDown className="h-8 w-8 text-muted-foreground mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      

      {/* Executive ROI Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 bg-card/60 backdrop-blur-sm">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Why Hospital Executives Choose CulturaSync
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
        <div className="max-w-5xl mx-auto">
          <Card className="border-0 bg-card/60 backdrop-blur-sm">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  From Bedside to Systems: A Journey of Impact
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  I'm an Oncology Certified Nurse with 22 years of experience and a deep commitment to care that creates real, lasting change.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    I've walked with patients through uncertainty, with staff through burnout, and with systems through change.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Early in my career, I focused on what I could do directly: one patient at a time through clear education, emotional presence, and fierce advocacy.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Over time, I saw how shifting the system could elevate care for every patient, not just those I could personally reach.
                  </p>
                </div>
                
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    That's why I founded CulturaSync: to help healthcare leaders build better systems and braver cultures where people thrive, communication flows, and human-centered care becomes the standard.
                  </p>
                  
                  <div className="bg-primary/10 rounded-lg p-6">
                    <p className="text-lg text-foreground leading-relaxed font-medium">
                      For clinic leaders, this means fewer breakdowns, stronger patient engagement, and a culture where staff feel seen, safe, and supported.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-foreground text-center mb-8">My work focuses on:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Patient Education & Communication</h4>
                      <p className="text-muted-foreground">That reduce confusion and improve follow-through</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Health Equity & Identity-Affirming Practices</h4>
                      <p className="text-muted-foreground">That build trust and deepen access</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Trauma-Informed, Neurodivergent-Aware Approaches</h4>
                      <p className="text-muted-foreground">That support staff and patients</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Cross-Functional Collaboration & Systems Design</h4>
                      <p className="text-muted-foreground">That improve care flow and reduce burnout</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center bg-secondary/10 rounded-lg p-8 mb-8">
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  I bring deep oncology experience, a passion for process improvement, and a belief that when we build for humans first, everything improves: satisfaction, outcomes, and the ability to stay in the work we love.
                </p>
              </div>
              
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
      <section id="consultation-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/10 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Schedule Your Oncology Excellence Assessment
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can transform your cancer care delivery together
            </p>
          </div>
          
          <div className="w-full">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/10 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              CulturaSync
            </h3>
            <p className="text-muted-foreground mb-6">
              Transforming Cancer Care Through Evidence-Based Excellence
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="https://www.linkedin.com/in/althea-miller/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn Profile</a>
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