import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Elite Partnership
          </h2>
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Seeking distinguished opportunities in AI leadership and innovation. 
            Ready to drive transformational AI initiatives at the highest levels.
          </p>
          
          <Card className="bg-glass-bg backdrop-blur-luxury border-primary/30 mb-12 shadow-luxury-glow">
            <CardContent className="p-10">
              <p className="text-foreground/90 text-xl leading-relaxed font-light">
                Connect for executive-level discussions on strategic AI implementations, 
                cutting-edge research collaborations, and transformational technology leadership.
              </p>
            </CardContent>
          </Card>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-luxury-glow hover:shadow-card-hover transition-all duration-500 py-6 text-lg font-medium"
              asChild
            >
              <a href="mailto:natesh@example.com" className="flex items-center justify-center">
                <Mail className="mr-3 h-6 w-6" />
                Executive Contact
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 backdrop-blur-luxury bg-glass-bg py-6 text-lg font-medium"
              asChild
            >
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Linkedin className="mr-3 h-6 w-6" />
                LinkedIn Network
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 backdrop-blur-luxury bg-glass-bg py-6 text-lg font-medium"
              asChild
            >
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Github className="mr-3 h-6 w-6" />
                GitHub Portfolio
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 backdrop-blur-luxury bg-glass-bg py-6 text-lg font-medium"
            >
              <FileText className="mr-3 h-6 w-6" />
              Executive CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;