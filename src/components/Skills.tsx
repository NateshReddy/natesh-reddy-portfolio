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

  const publications = [
    {
      title: "Transforming Chatbot Text: A Sequence-to-Sequence Approach",
      date: "Jun 2025",
      status: "Paper"
    },
    {
      title: "Robust pipeline for Detection of Adversarial Attacks",
      date: "Feb 2022",
      status: "Paper"
    },
    {
      title: "Using Pseudolabels for Training Sentiment Classifiers Makes the Model Generalize Better Across Datasets",
      date: "Oct 2021",
      status: "Paper"
    },
    {
      title: "Does BERT Understand Sentiment? Leveraging Comparisons Between Contextual and Non-Contextual Embeddings to Improve Aspect-Based Sentiment Models",
      date: "Nov 2020",
      status: "Paper"
    }
  ];

  const education = [
    {
      degree: "Master's in Computer Science",
      school: "San José State University",
      gpa: "3.9",
      coursework: ["Machine Learning", "AI", "Cloud Computing", "Reinforcement Learning"]
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Indian Institute of Information Technology Nagpur",
      period: "2017-2021",
      coursework: ["Data Structures", "Algorithms", "Computer Vision", "NLP"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical Skills & Qualifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the AI development stack
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

        {/* Education & Publications */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-2">{edu.school}</p>
                    {edu.gpa && (
                      <p className="text-sm text-muted-foreground mb-2">GPA: {edu.gpa}</p>
                    )}
                    {edu.period && (
                      <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                    )}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.coursework.map((course, courseIndex) => (
                        <Badge 
                          key={courseIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-foreground mb-8">Publications</h3>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card key={index} className="border-border/50 hover:shadow-card transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-medium text-foreground leading-tight flex-1">
                        {pub.title}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {pub.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{pub.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;