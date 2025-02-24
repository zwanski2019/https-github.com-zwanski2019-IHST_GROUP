import { Card, CardContent } from "@/components/ui/card";
import { Users2, Target, Heart, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Users2,
      title: "Student-Centered",
      description: "We put our students first, focusing on their individual needs and goals."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from teaching to service."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our team is passionate about education and helping students succeed."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We believe in continuous improvement and lifelong learning."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Academic Director",
      bio: "20+ years of experience in education and curriculum development."
    },
    {
      name: "Prof. Michael Chen",
      role: "Head of STEM",
      bio: "Former university professor with expertise in mathematics and sciences."
    },
    {
      name: "Ms. Emily Rodriguez",
      role: "Language Program Coordinator",
      bio: "Multilingual educator specializing in language acquisition."
    },
    {
      name: "Mr. David Park",
      role: "Technology Lead",
      bio: "Expert in educational technology and online learning platforms."
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
          <h1 className="font-aquawax text-4xl sm:text-5xl md:text-6xl text-center mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            About Ishtgroup
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl text-center max-w-2xl mx-auto mb-16">
            We are dedicated to transforming education through innovative teaching methods and
            personalized learning experiences. Our mission is to empower students to achieve
            their full potential.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#92220F] to-[#995A4E] flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-aquawax text-xl mb-2">{value.title}</h3>
                  <p className="text-white/60">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="font-aquawax text-3xl text-center mb-8">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <h3 className="font-aquawax text-xl mb-2">{member.name}</h3>
                  <p className="text-[#92220F] mb-2">{member.role}</p>
                  <p className="text-white/60">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
