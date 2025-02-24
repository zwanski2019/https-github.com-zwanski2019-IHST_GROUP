import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <section className="bg-[#183041] text-white py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-5xl font-extrabold mb-6">
            Helping Students Achieve Academic Excellence with Personalized Guidance
          </h1>
          <p className="text-lg mb-8">
            Our comprehensive educational solutions are designed to support students in reaching their full potential
            through tailored tutoring, expert-led sessions, and a wide variety of resources.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Book Your Session Now</Link>
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-extrabold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {["Sophisticated Learning Methods", "Expert Teachers", "Multilingual Support", "Personalized Guidance"].map(
              (feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4">{feature}</h3>
                  <p className="text-gray-700 text-lg">
                    Our team of experts uses cutting-edge techniques to ensure that every student is equipped with the
                    necessary skills to excel. We take pride in offering tailored support for each individual's needs.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-extrabold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {["Subject Tutoring", "Test Preparation", "Language Learning"].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Our services are designed to provide exceptional learning experiences for students of all levels.
                  Whether you're looking for subject-specific help or comprehensive test prep, we have you covered.
                </p>
                <Button asChild variant="outline">
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

