import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, hsl(45 95% 68% / 0.1) 0%, transparent 50%)' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="inline-block mb-8">
            <div className="w-32 h-32 rounded-full bg-glass-bg backdrop-blur-luxury border border-primary/30 mx-auto flex items-center justify-center shadow-luxury-glow">
              <div className="text-4xl font-bold text-primary">NR</div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Natesh Reddy
          </h1>
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-foreground/90 tracking-wide">
            Senior AI & ML Engineer
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
            Distinguished Machine Learning Engineer specializing in scalable AI solutions and cutting-edge research. 
            Expert in end-to-end development, automation, and enterprise-level collaboration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-luxury-glow hover:shadow-card-hover transition-all duration-500 px-8 py-4 text-lg font-medium"
              onClick={() => scrollToSection("contact")}
            >
              Connect & Collaborate
              <ExternalLink className="ml-3 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 backdrop-blur-luxury bg-glass-bg px-8 py-4 text-lg font-medium"
            >
              Executive Resume
              <Download className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="p-3 rounded-full bg-glass-bg backdrop-blur-luxury border border-primary/30 hover:border-primary/50 transition-all duration-300 shadow-card"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;