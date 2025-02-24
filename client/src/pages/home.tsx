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
              Join the Future of Business Excellence
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
              Be among the first to experience our revolutionary business solutions platform. 
              Sign up now for exclusive early access and updates.
            </p>
          </div>

          <WaitlistForm />

          <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Enterprise Ready",
                description: "Built for businesses of all sizes with enterprise-grade security",
              },
              {
                icon: Rocket,
                title: "Fast Implementation",
                description: "Get started quickly with our streamlined onboarding process",
              },
              {
                icon: Shield,
                title: "Secure Platform",
                description: "Industry-leading security measures to protect your data",
              },
              {
                icon: Award,
                title: "Expert Support",
                description: "24/7 dedicated support from our team of experts",
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
