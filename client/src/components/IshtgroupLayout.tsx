import { Link, useLocation } from "wouter";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

interface IshtgroupLayoutProps {
  children: React.ReactNode;
}

export default function IshtgroupLayout({ children }: IshtgroupLayoutProps) {
  const [location] = useLocation();

  const navigation = [
    { name: "Solutions", href: "/ishtgroup/solutions" },
    { name: "About Us", href: "/ishtgroup/about" },
    { name: "Contact", href: "/ishtgroup/contact" },
  ];

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
            <nav className="flex items-center justify-between">
              <Link href="/ishtgroup" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#92220F] to-[#995A4E]" />
                <span className="font-aquawax text-xl">Ishtgroup</span>
              </Link>
              <div className="flex items-center space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                      location === item.href 
                        ? "bg-white/10 text-white" 
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/tutoring">
                  <button className="bg-gradient-to-r from-[#92220F] to-[#995A4E] text-white px-4 py-2 rounded-md hover:opacity-90 transition-all duration-200 hover:scale-105">
                    Switch to Tutoring
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-white/10 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-aquawax text-lg mb-4">Contact Info</h3>
                <div className="space-y-2 text-white/60">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Rue du Lac Turkana, Tunis 1053
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +216 24 225 975
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    abbes@ihstgroup.com
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-aquawax text-lg mb-4">Hours</h3>
                <p className="text-white/60">Open 7 Days a Week<br />10 AM - 8 PM</p>
              </div>

              <div>
                <h3 className="font-aquawax text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2 text-white/60">
                  <li><Link href="/privacy">Privacy Policy</Link></li>
                  <li><Link href="/terms">Terms of Service</Link></li>
                  <li><Link href="/careers">Careers</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-aquawax text-lg mb-4">Social Media</h3>
                <div className="flex gap-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">
                    Facebook
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
              <p>© 2025 International House of Sciences. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
