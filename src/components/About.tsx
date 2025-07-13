import { Card, CardContent } from "@/components/ui/card";
import { Brain, Eye, Cog } from "lucide-react";

const About = () => {
  const expertise = [
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "Specialized in building and fine-tuning transformer models for adversarial text generation, sentiment analysis, multilingual NLU, and relation extraction with a strong foundation in applied NLP research."
    },
    {
      icon: Eye,
      title: "Applied Computer Vision",
      description: "Proficient in object detection, image classification, and segmentation for retail automation and defect analysis. Skilled in developing scalable CV systems using PyTorch and ONNX for deployment on cloud infrastructure."
    },
    {
      icon: Cog,
      title: "AI & GenAI Development",
      description: "Advanced skills in ML system design, CI/CD integration, and scalable deployment using Docker, FastAPI, and AWS EKS. Capable of building RAG pipelines and agentic systems for production-grade GenAI applications."
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Core Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging cutting-edge research with practical AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card-hover transition-all duration-300 animate-scale-in border-border/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-skill-bg rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;