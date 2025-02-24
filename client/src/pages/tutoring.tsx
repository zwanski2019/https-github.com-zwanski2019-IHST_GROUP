import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Video, Calendar } from "lucide-react";

export default function Tutoring() {
  const features = [
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book sessions at your convenience, 24/7 availability"
    },
    {
      icon: Users,
      title: "Expert Tutors",
      description: "Learn from certified professionals with proven track records"
    },
    {
      icon: Video,
      title: "Online Sessions",
      description: "High-quality video conferencing for seamless learning"
    },
    {
      icon: Calendar,
      title: "Regular Progress",
      description: "Track your improvement with detailed progress reports"
    }
  ];

  const subjects = [
    "Mathematics", "Physics", "Chemistry", "Biology",
    "English", "History", "Computer Science", "Languages"
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
          <h1 className="font-aquawax text-4xl sm:text-5xl md:text-6xl text-center mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Online Tutoring
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl text-center max-w-2xl mx-auto mb-16">
            Experience personalized learning with our expert tutors. We offer one-on-one sessions
            tailored to your specific needs and learning style.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#92220F] to-[#995A4E] flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-aquawax text-xl mb-2">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-16">
            <h2 className="font-aquawax text-3xl mb-6 text-center">Available Subjects</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="p-4 text-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  {subject}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-[#92220F] to-[#995A4E] text-white hover:opacity-90 px-8 py-6 text-lg">
              Schedule Your First Session
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
