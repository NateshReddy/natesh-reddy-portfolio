import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const publications = [
    {
      title: "Transforming Chatbot Text: A Sequence-to-Sequence Approach",
      date: "Jun 2025",
      status: "Paper",
      link: "https://arxiv.org/abs/2506.12843"
    },
    {
      title: "Robust pipeline for Detection of Adversarial Attacks",
      date: "Feb 2022",
      status: "Paper",
      link: "https://link.springer.com/chapter/10.1007/978-981-99-0085-5_32"
    },
    {
      title: "Using Pseudolabels for Training Sentiment Classifiers Makes the Model Generalize Better Across Datasets",
      date: "Oct 2021",
      status: "Paper",
      link: "https://arxiv.org/abs/2110.02200"
    },
    {
      title: "Does BERT Understand Sentiment? Leveraging Comparisons Between Contextual and Non-Contextual Embeddings to Improve Aspect-Based Sentiment Models",
      date: "Nov 2020",
      status: "Paper",
      link: "https://arxiv.org/abs/2011.11673"
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
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Education & Publications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic background and research contributions
          </p>
        </div>

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
                <Card key={index} className="border-border/50 hover:shadow-card transition-shadow duration-200 cursor-pointer" onClick={() => window.open(pub.link, '_blank')}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-medium text-foreground leading-tight flex-1 hover:text-primary transition-colors">
                        {pub.title}
                      </h4>
                      <Badge 
                        variant="outline" 
                        className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(pub.link, '_blank');
                        }}
                      >
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

export default Education;