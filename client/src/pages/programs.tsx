import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GraduationCap, BookOpen, Code, Calculator } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "Academic Excellence",
      icon: GraduationCap,
      description: "Comprehensive academic support across all subjects",
      details: [
        "One-on-one tutoring sessions",
        "Homework assistance",
        "Test preparation",
        "Study skills development"
      ]
    },
    {
      title: "Language Learning",
      icon: BookOpen,
      description: "Master new languages with expert instructors",
      details: [
        "English as a Second Language",
        "Spanish, French, and more",
        "Conversation practice",
        "Writing workshops"
      ]
    },
    {
      title: "Programming & Technology",
      icon: Code,
      description: "Learn coding and modern tech skills",
      details: [
        "Web development basics",
        "Python programming",
        "Mobile app development",
        "Data science introduction"
      ]
    },
    {
      title: "Mathematics",
      icon: Calculator,
      description: "Expert math tutoring at all levels",
      details: [
        "Elementary to advanced math",
        "Calculus and statistics",
        "SAT/ACT math prep",
        "Problem-solving strategies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#92220F]/10 to-[#995A4E]/10 opacity-50" />
        <div className="absolute top-0 -left-4 w-96 h-96 bg-[#92220F]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-[#995A4E]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <main className="container mx-auto px-4 py-16">
          <h1 className="font-aquawax text-4xl sm:text-5xl md:text-6xl text-center mb-12 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Our Programs
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#92220F] to-[#995A4E] flex items-center justify-center">
                      <program.icon className="w-6 h-6" />
                    </div>
                    <h2 className="font-aquawax text-2xl">{program.title}</h2>
                  </div>
                  
                  <p className="text-white/60 mb-6">{program.description}</p>
                  
                  <Accordion type="single" collapsible>
                    <AccordionItem value="details">
                      <AccordionTrigger>Program Details</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {program.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#92220F] to-[#995A4E]" />
                              <span className="text-white/80">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Button className="w-full mt-6 bg-gradient-to-r from-[#92220F] to-[#995A4E] text-white hover:opacity-90">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
