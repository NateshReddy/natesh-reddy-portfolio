import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["Python", "C++", "SQL", "Shell"]
    },
    {
      icon: Settings,
      title: "ML/DL",
      skills: [
        "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "MLFlow", "ONNX",
        "XGBoost", "OpenCV", "SpaCy", "LangChain", "HuggingFace", "RAG",
        "vLLM", "FastAI"
      ]
    },
    {
      icon: Cloud,
      title: "Infrastructure",
      skills: ["PySpark", "AWS", "Kubernetes", "Docker", "FastAPI", "CircleCI"]
    },
    {
      icon: Database,
      title: "Tools",
      skills: [
        "Git", "Bitbucket", "MongoDB", "Streamlit", "Linux", "W&B", "FAISS",
        "Jira", "Pandas", "Flask"
      ]
    }
  ];


  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the AI development stack
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card-hover transition-all duration-300 animate-scale-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-skill-bg rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-skill-bg border-border/50"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;