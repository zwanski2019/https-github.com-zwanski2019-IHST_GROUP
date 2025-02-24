import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Building2, Rocket, Shield, Award } from "lucide-react";
import WaitlistForm from "@/components/waitlist-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#92220F]/10 to-[#995A4E]/10 opacity-50" />
        <div className="absolute top-0 -left-4 w-96 h-96 bg-[#92220F]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-[#995A4E]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <header className="border-b border-white/10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#92220F] to-[#995A4E]" />
              <span className="font-aquawax text-xl">Ishtgroup</span>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-aquawax text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Transform Your Learning Journey
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Join Ishtgroup's comprehensive tutoring platform. We offer personalized learning
              experiences, expert instructors, and cutting-edge online education tools.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/programs">
                <Button className="bg-gradient-to-r from-[#92220F] to-[#995A4E] text-white hover:opacity-90 px-8 py-6 text-lg">
                  Explore Programs →
                </Button>
              </Link>
              <Link href="/tutoring">
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-6 text-lg">
                  Start Tutoring
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Expert Tutors",
                description: "Learn from certified professionals with proven track records",
              },
              {
                icon: Rocket,
                title: "Flexible Learning",
                description: "Study at your own pace with 24/7 online access",
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Guaranteed satisfaction with our tutoring services",
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "Track record of student success and improvement",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#92220F] to-[#995A4E] flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-aquawax text-xl mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <h2 className="font-aquawax text-3xl mb-8">Join Our Waitlist</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
              Be among the first to experience our revolutionary online tutoring platform.
              Sign up now for exclusive early access and special offers.
            </p>
            <WaitlistForm />
          </div>
        </main>

        <footer className="border-t border-white/10 py-8">
          <div className="container mx-auto px-4">
            <div className="text-center text-white/60 text-sm">
              © 2024 Ishtgroup. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}