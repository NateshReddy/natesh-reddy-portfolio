import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface ColorScheme {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    accent: string;
    background: string;
    secondary: string;
    foreground: string;
    mutedForeground: string;
  };
  cssVariables: string;
}

const colorSchemes: ColorScheme[] = [
  {
    id: "lavender-sage",
    name: "Soft Lavender & Sage",
    description: "Gentle purple and green tones with excellent readability",
    colors: {
      primary: "hsl(270, 35%, 75%)",
      accent: "hsl(120, 30%, 75%)",
      background: "hsl(270, 25%, 95%)",
      secondary: "hsl(120, 20%, 90%)",
      foreground: "hsl(220, 15%, 25%)",
      mutedForeground: "hsl(220, 10%, 45%)"
    },
    cssVariables: `
      --primary: 270 35% 75%;
      --primary-foreground: 220 15% 25%;
      --primary-glow: 270 45% 80%;
      --accent: 120 30% 75%;
      --accent-foreground: 220 15% 25%;
      --accent-glow: 120 40% 80%;
      --background: 270 25% 95%;
      --foreground: 220 15% 25%;
      --secondary: 120 20% 90%;
      --secondary-foreground: 220 15% 35%;
      --muted-foreground: 220 10% 45%;
    `
  },
  {
    id: "dusty-rose-cream",
    name: "Dusty Rose & Cream",
    description: "Warm and sophisticated with premium feel",
    colors: {
      primary: "hsl(350, 35%, 75%)",
      accent: "hsl(15, 30%, 70%)",
      background: "hsl(40, 15%, 96%)",
      secondary: "hsl(350, 25%, 88%)",
      foreground: "hsl(25, 20%, 20%)",
      mutedForeground: "hsl(25, 8%, 40%)"
    },
    cssVariables: `
      --primary: 350 35% 75%;
      --primary-foreground: 25 20% 20%;
      --primary-glow: 350 45% 80%;
      --accent: 15 30% 70%;
      --accent-foreground: 25 20% 20%;
      --accent-glow: 15 40% 75%;
      --background: 40 15% 96%;
      --foreground: 25 20% 20%;
      --secondary: 350 25% 88%;
      --secondary-foreground: 25 20% 35%;
      --muted-foreground: 25 8% 40%;
    `
  },
  {
    id: "powder-blue-mint",
    name: "Powder Blue & Mint",
    description: "Clean and professional with tech industry appeal",
    colors: {
      primary: "hsl(200, 35%, 75%)",
      accent: "hsl(160, 30%, 75%)",
      background: "hsl(210, 10%, 98%)",
      secondary: "hsl(200, 25%, 92%)",
      foreground: "hsl(220, 40%, 25%)",
      mutedForeground: "hsl(220, 20%, 45%)"
    },
    cssVariables: `
      --primary: 200 35% 75%;
      --primary-foreground: 220 40% 25%;
      --primary-glow: 200 45% 80%;
      --accent: 160 30% 75%;
      --accent-foreground: 220 40% 25%;
      --accent-glow: 160 40% 80%;
      --background: 210 10% 98%;
      --foreground: 220 40% 25%;
      --secondary: 200 25% 92%;
      --secondary-foreground: 220 40% 35%;
      --muted-foreground: 220 20% 45%;
    `
  },
  {
    id: "peach-ivory",
    name: "Peach & Ivory",
    description: "Warm and inviting with excellent contrast",
    colors: {
      primary: "hsl(25, 35%, 75%)",
      accent: "hsl(35, 35%, 75%)",
      background: "hsl(45, 20%, 97%)",
      secondary: "hsl(25, 30%, 90%)",
      foreground: "hsl(30, 25%, 15%)",
      mutedForeground: "hsl(30, 12%, 35%)"
    },
    cssVariables: `
      --primary: 25 35% 75%;
      --primary-foreground: 30 25% 15%;
      --primary-glow: 25 45% 80%;
      --accent: 35 35% 75%;
      --accent-foreground: 30 25% 15%;
      --accent-glow: 35 45% 80%;
      --background: 45 20% 97%;
      --foreground: 30 25% 15%;
      --secondary: 25 30% 90%;
      --secondary-foreground: 30 25% 35%;
      --muted-foreground: 30 12% 35%;
    `
  },
  {
    id: "lilac-pearl",
    name: "Lilac & Pearl",
    description: "Elegant and minimalist with sophisticated appeal",
    colors: {
      primary: "hsl(280, 30%, 70%)",
      accent: "hsl(280, 30%, 70%)",
      background: "hsl(240, 8%, 96%)",
      secondary: "hsl(280, 20%, 88%)",
      foreground: "hsl(240, 20%, 20%)",
      mutedForeground: "hsl(240, 10%, 40%)"
    },
    cssVariables: `
      --primary: 280 30% 70%;
      --primary-foreground: 240 20% 20%;
      --primary-glow: 280 40% 75%;
      --accent: 280 30% 70%;
      --accent-foreground: 240 20% 20%;
      --accent-glow: 280 40% 75%;
      --background: 240 8% 96%;
      --foreground: 240 20% 20%;
      --secondary: 280 20% 88%;
      --secondary-foreground: 240 20% 35%;
      --muted-foreground: 240 10% 40%;
    `
  }
];

interface ColorSchemeSelectorProps {
  currentScheme?: string;
  onSchemeChange: (scheme: ColorScheme) => void;
}

const ColorSchemeSelector = ({ currentScheme, onSchemeChange }: ColorSchemeSelectorProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Choose Your Professional Pastel Theme
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Select from 5 carefully curated color schemes designed for maximum text visibility and professional appeal
        </p>
      </div>

      <div className="grid gap-6">
        {colorSchemes.map((scheme) => (
          <Card 
            key={scheme.id} 
            className={`group cursor-pointer transition-all duration-300 hover:shadow-card-hover ${
              currentScheme === scheme.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => onSchemeChange(scheme)}
          >
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {scheme.name}
                    </h3>
                    {currentScheme === scheme.id && (
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {scheme.description}
                  </p>
                </div>
              </div>

              {/* Color Palette Preview */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
                <div className="space-y-2">
                  <div 
                    className="w-full h-12 rounded-lg border-2 border-white shadow-sm"
                    style={{ backgroundColor: scheme.colors.primary }}
                  ></div>
                  <p className="text-xs text-muted-foreground text-center">Primary</p>
                </div>
                <div className="space-y-2">
                  <div 
                    className="w-full h-12 rounded-lg border-2 border-white shadow-sm"
                    style={{ backgroundColor: scheme.colors.accent }}
                  ></div>
                  <p className="text-xs text-muted-foreground text-center">Accent</p>
                </div>
                <div className="space-y-2">
                  <div 
                    className="w-full h-12 rounded-lg border-2 border-white shadow-sm"
                    style={{ backgroundColor: scheme.colors.background }}
                  ></div>
                  <p className="text-xs text-muted-foreground text-center">Background</p>
                </div>
                <div className="space-y-2">
                  <div 
                    className="w-full h-12 rounded-lg border-2 border-white shadow-sm"
                    style={{ backgroundColor: scheme.colors.secondary }}
                  ></div>
                  <p className="text-xs text-muted-foreground text-center">Secondary</p>
                </div>
                <div className="space-y-2">
                  <div 
                    className="w-full h-12 rounded-lg border-2 border-white shadow-sm"
                    style={{ backgroundColor: scheme.colors.foreground }}
                  ></div>
                  <p className="text-xs text-muted-foreground text-center">Text</p>
                </div>
                <div className="space-y-2">
                  <div 
                    className="w-full h-12 rounded-lg border-2 border-white shadow-sm"
                    style={{ backgroundColor: scheme.colors.mutedForeground }}
                  ></div>
                  <p className="text-xs text-muted-foreground text-center">Muted</p>
                </div>
              </div>

              {/* Text Visibility Demo */}
              <div 
                className="p-6 rounded-xl border"
                style={{ 
                  backgroundColor: scheme.colors.background,
                  borderColor: scheme.colors.secondary 
                }}
              >
                <h4 
                  className="text-lg font-semibold mb-2"
                  style={{ color: scheme.colors.foreground }}
                >
                  Text Visibility Preview
                </h4>
                <p 
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: scheme.colors.mutedForeground }}
                >
                  This is how your content will look with this color scheme. Notice the excellent contrast ratio and readability.
                </p>
                <Button 
                  className="mr-3"
                  style={{ 
                    backgroundColor: scheme.colors.primary,
                    color: scheme.colors.foreground
                  }}
                >
                  Primary Button
                </Button>
                <Button 
                  variant="outline"
                  style={{ 
                    borderColor: scheme.colors.accent,
                    color: scheme.colors.accent
                  }}
                >
                  Secondary Button
                </Button>
              </div>

              {/* Technical Details */}
              <div className="mt-6 pt-6 border-t border-border">
                <h5 className="text-sm font-medium text-foreground mb-2">Design Features:</h5>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• WCAG 2.1 AA compliant contrast ratios (4.5:1+)</li>
                  <li>• Optimized for both light and dark mode compatibility</li>
                  <li>• Professional gradient combinations</li>
                  <li>• Enhanced white space utilization</li>
                  <li>• Perfect for technical content and networking</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ColorSchemeSelector;