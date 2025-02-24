"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Services() {
  const router = useRouter()

  const services = [
    {
      title: "Educational Support for Schools",
      description:
        "Our tailored solutions provide comprehensive support to both international and state schools. We deliver customized resources, innovative training programs, and expert guidance in curriculum development and advanced teaching strategies. Our mission is to empower educational institutions to excel in today's dynamic academic environment.",
      slug: "educational-support-for-schools",
    },
    {
      title: "Tutoring Programs for Students",
      description:
        "Our tutoring services cover a wide array of subjects including Languages and Literature, Mathematics, Sciences, and Technology. Using personalized instruction and interactive learning techniques, we help students build strong academic foundations and achieve excellence at every educational level.",
      slug: "tutoring-programs-for-students",
    },
    {
      title: "Professional Training for Teachers",
      description:
        "We offer specialized training programs designed to equip educators with the latest tools and methodologies. Learn how to seamlessly integrate new technologies into the classroom, manage multilingual and multicultural settings, and continually improve teaching practices for lasting impact.",
      slug: "professional-training-for-teachers",
    },
    {
      title: "Parent Dashboard & Progress Tracking",
      description:
        "Stay closely connected to your child's educational journey with our intuitive parent dashboard. Monitor academic performance, track attendance, and review detailed progress reports in real time. Our platform delivers timely updates and actionable insights, ensuring that parents can support their child's continuous growth and success.",
      slug: "parent-dashboard-progress-tracking",
    },
    {
      title: "Interactive Learning & Engagement",
      description:
        "Enhance the learning experience with our state-of-the-art interactive tools. From dynamic quizzes and engaging videos to vibrant discussion forums, our platform fosters a collaborative environment that encourages active participation and makes learning both enjoyable and effective.",
      slug: "interactive-learning-engagement",
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button onClick={() => router.push(`/services/${service.slug}`)}>Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

