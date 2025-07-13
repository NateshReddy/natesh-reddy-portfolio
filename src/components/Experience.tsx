import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Graduate Student Researcher",
      company: "San José State University",
      location: "San José, CA",
      period: "Aug 2024 - Dec 2024",
      type: "Research",
      achievements: [
        "Designing robust NLP pipelines for Named Entity Recognition and Relation Extraction",
        "Implemented a seq2seq adversarial text generation pipeline by fine-tuning T5 and LLaMA, benchmarking multiple LLM variants to improve robustness of classifiers by 20%",
        "Conducted systematic evaluations of style-transfer techniques using prompt engineering and reproducible experiment tracking with Weights & Biases (W&B) to guide model tuning"
      ]
    },
    {
      title: "AI Engineer Intern",
      company: "Fetch.ai",
      location: "Remote",
      period: "May 2024 - Aug 2024",
      type: "Industry",
      achievements: [
        "Prototyped an agentic system of Slack, Jira, and GitHub agents using LangChain and RAG pipelines to autonomously orchestrate multi-step corporate workflows on post meeting summaries, reducing manual effort by 50+ hours/month across cross-functional teams",
        "Designed plugin-style tools and memory modules with FAISS vector database for context-aware interactions",
        "Used FastAPI to synchronize agents and deploy them as API endpoints"
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "ParallelDots",
      location: "Gurgaon, India",
      period: "Jun 2021 - Jul 2023",
      type: "Industry",
      achievements: [
        "Developed ML models using PyTorch for ShelfWatch, an automated shelf monitoring system, achieving 98% accuracy, which contributed a potential revenue impact of $20M over 2 years",
        "Optimized and deployed ONNX-packaged models on Elastic Kubernetes Service (EKS) with CI/CD-driven pipelines, enabling scalable inference on 5M+ retail images per month",
        "Led the full ML lifecycle for Saarthi, an AI-powered user accessible fine-tuning service, reducing manual effort by 70% and accelerating critical workflows through end-to-end automation",
        "Collaborated with cross-functional teams, boosting adoption by 30% across 200k+ retail outlets globally"
      ]
    },
    {
      title: "NLP Intern",
      company: "ParallelDots",
      location: "Gurgaon, India",
      period: "Aug 2020 - May 2021",
      type: "Internship",
      achievements: [
        "Devised an Aspect-Based Sentiment Analysis (ABSA) model using BERT embeddings and a custom self-attention-based interaction layer, achieving 3× faster inference and improved sentiment accuracy",
        "Applied Noisy Student Training to strengthen the generalization of the TorchMoji model, boosting cross-domain sentiment classification performance by 20%"
      ]
    },
    {
      title: "Deep Learning Intern",
      company: "Bennett University",
      location: "Greater Noida, India",
      period: "Dec 2019",
      type: "Internship",
      achievements: [
        "Worked on an Action Recognition problem using a CNN+RNN feature extractor and an LSTM model to classify a video in a help or non-help class, deployed in real-time search and rescue by drone surveillance",
        "The work was part of an ongoing project to develop an application that would later be deployed on a drone"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Research": return "bg-accent/10 text-accent border-accent/20";
      case "Industry": return "bg-primary/10 text-primary border-primary/20";
      case "Internship": return "bg-secondary text-secondary-foreground border-border";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From research breakthroughs to production deployments
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-hover transition-all duration-300 animate-slide-up border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge className={getTypeColor(exp.type)}>
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li 
                      key={achievementIndex}
                      className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;