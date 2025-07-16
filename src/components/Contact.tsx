import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Looking for 2025 New Grad opportunities in AI, Machine Learning, and NLP. 
            I bring a strong research background and industry experience in developing cutting-edge AI solutions.
          </p>
          
          <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 mb-12">
            <CardContent className="p-8">
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                Reach out to discuss how my skills in NLP, computer vision, and deep learning 
                can benefit your organization. I'm passionate about translating research into 
                impactful real-world applications.
              </p>
            </CardContent>
          </Card>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-glow text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="mailto:natesh1199@gmail.com" className="flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/nateshreddy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
              asChild
            >
              <a 
                href="https://github.com/NateshReddy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/1His-NqbfK3e5Z1WF_Z27OEy12qhrTnxa/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <FileText className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;