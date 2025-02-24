import { Link, useLocation } from "wouter";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navigation = [
    { name: "Programs", href: "/programs" },
    { name: "Tutoring", href: "/tutoring" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
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
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#92220F] to-[#995A4E]" />
                <span className="font-aquawax text-xl">Ishtgroup</span>
              </Link>
              <div className="flex items-center space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm ${
                      location === item.href ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/waitlist">
                  <button className="bg-gradient-to-r from-[#92220F] to-[#995A4E] text-white px-4 py-2 rounded-md hover:opacity-90">
                    Join Waitlist
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-white/10 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/60 text-sm">© 2024 Ishtgroup. All rights reserved.</div>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-sm text-white/60 hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-white/60 hover:text-white">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
