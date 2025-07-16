import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Scalable Real-Time News Summarization Engine",
      description: "Developed a news summarization platform using the Google T5 model. Automated workflows with AWS Lambda and DynamoDB, optimizing performance for real-time summarization and reducing latency at scale",
      tags: ["T5", "AWS Lambda", "DynamoDB", "Real-time Processing"],
      category: "NLP"
    },
    {
      title: "Efficient Scholarly Title Generation with Quantization",
      description: "Fine-tuned Flan-T5 LLMs on the LaMP dataset, achieving an 80% improvement in ROUGE scores. Applied quantization techniques, including QAT and BitsandBytes, to enhance performance and minimize memory usage",
      tags: ["Flan-T5", "Quantization", "QAT", "BitsandBytes", "LaMP"],
      category: "NLP"
    },
    {
      title: "Leveraging LLMs for Biomedical Named Entity and Relation Extraction",
      description: "Formulated robust pipelines for Named Entity Recognition (NER) and Relation Extraction (RE) employing state-of-the-art transformer-based models, including BERT, BioBERT, and BioGPT, to extract chemical-protein interactions from biomedical texts",
      tags: ["BERT", "BioBERT", "BioGPT", "NER", "Relation Extraction"],
      category: "Research"
    },
    {
      title: "PPO-Based HEX Game Agent with Self-Play and Reward Adaptive Strategy",
      description: "Built competitive HEX game agents using PPO and DQN, featuring custom Actor-Critic networks, dynamic reward adaptation, and multi-stage self-play training. Tuned hyperparameters with RayTune and achieved top-4 performance in tournament",
      tags: ["PPO", "DQN", "Actor-Critic", "RayTune", "RL"],
      category: "Reinforcement Learning"
    },
    {
      title: "StudySuite: Multi-Agent LLM System for Interactive Lecture-Based Learning",
      description: "Designed and deployed an end-to-end multi-agent system using Fetch.ai's uAgents framework to convert recorded lectures into transcripts, generate interactive quizzes, auto-grade responses, and deliver personalized learning feedback powered by LLMs",
      tags: ["uAgents", "Multi-Agent", "LLMs", "Fetch.ai", "Education"],
      category: "AI System"
    },
    {
      title: "Automated PCB Defect Detection and Classification using Deep Learning",
      description: "Engineered a full PCB Failure Analyser automating the task of detecting and classifying defects in PCB to reduce human error percentage, significantly reducing the cost of manual inspection. The system is able to detect, extract and predict the type of defect in PCB with 95% accuracy",
      tags: ["Computer Vision", "PyTorch", "Object Detection", "Manufacturing"],
      category: "Computer Vision"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "NLP": return "bg-primary/10 text-primary border-primary/20";
      case "Computer Vision": return "bg-accent/10 text-accent border-accent/20";
      case "Research": return "bg-secondary text-secondary-foreground border-border";
      case "AI System": return "bg-muted text-muted-foreground border-border";
      case "Reinforcement Learning": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section id="projects" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions spanning NLP, Computer Vision, and AI Systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-hover transition-all duration-300 animate-scale-in border-border/50 h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="text-xs bg-background/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    {project.title === "Leveraging LLMs for Biomedical Named Entity and Relation Extraction" ? (
                      <Button variant="outline" size="sm" className="flex-1" disabled>
                        <Github className="h-4 w-4 mr-2" />
                        Research Paper
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;