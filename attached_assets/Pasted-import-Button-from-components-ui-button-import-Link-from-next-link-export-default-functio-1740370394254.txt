import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TutoringPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Online Tutoring Services</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Our Online Tutoring</h2>
        <p className="mb-4">
          Welcome to our comprehensive online tutoring platform. We offer personalized learning experiences designed to
          help students of all ages and levels achieve their academic goals. Our expert tutors use cutting-edge
          technology to deliver engaging, interactive lessons in a wide range of subjects.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Tutoring Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Subject Tutoring",
              description: "One-on-one tutoring in Math, Science, Languages, and more.",
            },
            {
              title: "Test Preparation",
              description: "Specialized coaching for standardized tests like SAT, ACT, GRE, and GMAT.",
            },
            {
              title: "Language Learning",
              description: "Immersive language courses for beginners to advanced learners.",
            },
            {
              title: "Homework Help",
              description: "On-demand assistance with assignments and projects.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Our Online Tutoring?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Experienced and qualified tutors</li>
          <li>Flexible scheduling to fit your lifestyle</li>
          <li>Personalized learning plans tailored to individual needs</li>
          <li>Interactive online learning environment</li>
          <li>Progress tracking and regular feedback</li>
          <li>Affordable pricing with various package options</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Sign up for an account</li>
          <li>Choose your subject and preferred tutor</li>
          <li>Schedule your first session</li>
          <li>Connect with your tutor via our secure online platform</li>
          <li>Enjoy interactive lessons and start improving your skills</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="mb-4">
          Take the first step towards academic success. Sign up now to explore our tutoring options and find the perfect
          tutor for your needs.
        </p>
        <Button asChild>
          <Link href="/signup">Sign Up for Tutoring</Link>
        </Button>
      </section>
    </div>
  )
}

