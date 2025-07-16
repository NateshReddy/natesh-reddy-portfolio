import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Calendar, MessageSquare } from "lucide-react";

const Connect = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "natesh.reddy@email.com",
      action: "mailto:natesh.reddy@email.com",
      description: "Best for detailed discussions and project inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      description: "Available for quick calls during business hours"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect Professionally",
      action: "https://linkedin.com/in/nateshreddy",
      description: "Let's expand our professional network"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "View My Code",
      action: "https://github.com/nateshreddy",
      description: "Explore my repositories and contributions"
    }
  ];

  const availability = [
    {
      icon: Calendar,
      title: "Schedule a Meeting",
      description: "Book a 30-minute consultation to discuss your AI/ML projects and how we can collaborate.",
      action: "Schedule Now"
    },
    {
      icon: MessageSquare,
      title: "Quick Chat",
      description: "Have a question or want to discuss opportunities? Send me a message and I'll respond within 24 hours.",
      action: "Start Conversation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Ready to discuss AI/ML opportunities, research collaborations, or just want to chat about the latest in machine learning? I'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            How to Reach Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-card-hover transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-skill-bg rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {method.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {method.description}
                        </p>
                        <Button 
                          variant="outline" 
                          className="border-primary/30 text-primary hover:bg-primary/10"
                          onClick={() => window.open(method.action, '_blank')}
                        >
                          {method.value}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Availability Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {availability.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-card-hover transition-all duration-300 border-border/50 bg-primary/5"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-skill-bg rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <Button 
                      size="lg"
                      className="bg-accent hover:bg-accent-glow text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {item.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-section-gradient">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start a Conversation?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Whether you're looking to discuss new grad opportunities, research collaborations, or just want to connect with a fellow AI enthusiast, I'm here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Meeting
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Connect;