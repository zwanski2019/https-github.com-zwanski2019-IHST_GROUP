"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const [hoveredSide, setHoveredSide] = useState<"ishtgroup" | "tutoring" | null>(null)

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Ishtgroup Section */}
      <div
        className={`flex-1 flex items-center justify-center p-12 relative overflow-hidden transition-all duration-500 ease-in-out ${
          hoveredSide === "ishtgroup" ? "md:flex-[0.6]" : "md:flex-[0.5]"
        }`}
        onMouseEnter={() => setHoveredSide("ishtgroup")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-50 transition-all duration-500 ease-in-out"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
            transform: hoveredSide === "ishtgroup" ? "scale(1)" : "scale(1.1)",
          }}
        />
        <div className="relative z-10 text-white text-center max-w-lg p-8 rounded-lg bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm">
          <h2 className="text-5xl font-extrabold mb-6">Ishtgroup</h2>
          <p className="mb-8 text-lg">Empowering businesses with innovative solutions and strategies for growth.</p>
          <Button asChild>
            <Link href="/ishtgroup">Visit Ishtgroup</Link>
          </Button>
          <div className="grid grid-cols-2 gap-6 mt-12">
            {["Corporate Solutions", "Business Operations", "Growth Strategies", "Team Management"].map(
              (service, index) => (
                <div key={index} className="flex items-center bg-white bg-opacity-10 p-4 rounded-xl shadow-lg">
                  <i className={`fas fa-${["building", "cogs", "chart-line", "users"][index]} mr-4 text-xl`} />
                  <span className="text-lg">{service}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Online Tutoring Section */}
      <div
        className={`flex-1 flex items-center justify-center p-12 relative overflow-hidden transition-all duration-500 ease-in-out ${
          hoveredSide === "tutoring" ? "md:flex-[0.6]" : "md:flex-[0.5]"
        }`}
        onMouseEnter={() => setHoveredSide("tutoring")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-50 transition-all duration-500 ease-in-out"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
            transform: hoveredSide === "tutoring" ? "scale(1)" : "scale(1.1)",
          }}
        />
        <div className="relative z-10 text-white text-center max-w-lg p-8 rounded-lg bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm">
          <h2 className="text-5xl font-extrabold mb-6">Online Tutoring</h2>
          <p className="mb-8 text-lg">
            Personalized learning experiences to help students achieve their academic goals.
          </p>
          <Button asChild>
            <Link href="/tutoring">Visit Online Tutoring</Link>
          </Button>
          <div className="grid grid-cols-2 gap-6 mt-12">
            {["Subject Tutoring", "Online Classes", "One-on-One Sessions", "Test Preparation"].map((service, index) => (
              <div key={index} className="flex items-center bg-white bg-opacity-10 p-4 rounded-xl shadow-lg">
                <i
                  className={`fas fa-${["book", "laptop", "chalkboard-teacher", "graduation-cap"][index]} mr-4 text-xl`}
                />
                <span className="text-lg">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

