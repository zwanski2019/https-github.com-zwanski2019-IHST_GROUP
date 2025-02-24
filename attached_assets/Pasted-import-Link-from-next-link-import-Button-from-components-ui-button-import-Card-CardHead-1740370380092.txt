import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const programs = [
  {
    title: "Curricular Programs",
    description:
      "International & National Curricula including Cambridge System, Système Français, and American System.",
    icon: "🏫",
    link: "/programs/curricular",
  },
  {
    title: "Subject-Specific Courses",
    description: "Courses in Languages, Mathematics, Sciences, and Technology & Informatics.",
    icon: "📚",
    link: "/programs/subjects",
  },
  {
    title: "Professional Development",
    description: "Training and support for teachers and students.",
    icon: "👨‍🏫",
    link: "/programs/professional-development",
  },
  {
    title: "Digital Learning",
    description: "Modern e-Learning solutions including Google Classroom integration.",
    icon: "💻",
    link: "/programs/digital-learning",
  },
  {
    title: "Language Tutoring",
    description: "Comprehensive language tutoring in English, French, Arabic, and more.",
    icon: "🗣️",
    link: "/programs/language-tutoring",
  },
  {
    title: "STEM Programs",
    description: "Hands-on science, technology, engineering, and mathematics programs.",
    icon: "🧪",
    link: "/programs/stem",
  },
]

export default function ProgramsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Our Programs</h1>
      <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
        Discover our wide range of educational programs designed to empower students and educators alike.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <span className="text-4xl mr-4">{program.icon}</span>
                {program.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">{program.description}</CardDescription>
              <Button asChild>
                <Link href={program.link}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

