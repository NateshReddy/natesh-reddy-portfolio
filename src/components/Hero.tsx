import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      <div className="absolute inset-0 bg-background/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Natesh Reddy
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-primary-foreground/90">
            AI & ML Engineer
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-primary-foreground/80">
            Machine Learning Engineer with experience delivering scalable AI solutions and conducting applied research. 
            Skilled in end-to-end development, automation, and cross-functional collaboration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent-glow text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => scrollToSection("contact")}>
              Get In Touch
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm" 
            onClick={() => window.open("https://drive.google.com/uc?export=download&id=1His-NqbfK3e5Z1WF_Z27OEy12qhrTnx", "_blank")}
            >  
              Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

      </div>
    </section>;
};
export default Hero;