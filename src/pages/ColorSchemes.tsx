import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ColorSchemeSelector from "@/components/ColorSchemeSelector";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ColorSchemes = () => {
  const navigate = useNavigate();
  const [selectedScheme, setSelectedScheme] = useState("lavender-sage");

  const handleSchemeChange = (scheme: any) => {
    setSelectedScheme(scheme.id);
    
    // Apply the color scheme to the document root
    const root = document.documentElement;
    const variables = scheme.cssVariables
      .split('\n')
      .filter((line: string) => line.trim() && line.includes(':'))
      .forEach((line: string) => {
        const [property, value] = line.split(':').map((s: string) => s.trim());
        if (property && value && property.startsWith('--')) {
          root.style.setProperty(property, value.replace(';', ''));
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center space-x-4 mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-skill-bg rounded-3xl mb-6">
              <Palette className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Color Scheme Options
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              Choose from 5 professionally designed pastel color schemes optimized for text visibility, 
              accessibility, and networking appeal in the AI/ML industry.
            </p>
          </div>

          <ColorSchemeSelector 
            currentScheme={selectedScheme}
            onSchemeChange={handleSchemeChange}
          />

          {/* Implementation Guide */}
          <section className="mt-20 pt-20 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Implementation Guidelines
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Typography</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Body text: 16-18px minimum</li>
                  <li>• Line height: 1.6-1.8 for readability</li>
                  <li>• Font weights: 400 (regular), 600 (semibold), 700 (bold)</li>
                  <li>• Sans-serif fonts: Inter, Open Sans, Lato</li>
                  <li>• Letter spacing: 0.025em for headings</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Spacing & Layout</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Section padding: 80-120px vertical</li>
                  <li>• Content max-width: 1200px</li>
                  <li>• Paragraph margins: 24px bottom</li>
                  <li>• Button padding: 12px 24px minimum</li>
                  <li>• Grid gaps: 24-32px for cards</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Accessibility</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Contrast ratio: 4.5:1 minimum</li>
                  <li>• Touch targets: 44px minimum</li>
                  <li>• Focus indicators: 2px outline</li>
                  <li>• Alt text for all images</li>
                  <li>• Semantic HTML structure</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-20 pt-20 border-t border-border text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Apply Your Choice?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Each color scheme has been tested for professional networking, accessibility, 
              and visual appeal in technical environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground"
                onClick={() => navigate('/')}
              >
                View Portfolio
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10"
                onClick={() => navigate('/connect')}
              >
                Let's Connect
              </Button>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ColorSchemes;