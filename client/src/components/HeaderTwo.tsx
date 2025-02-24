import Link from "next/link";
import { useSection } from "../context/SectionContext";

export default function HeaderTwo() {
  const { setSection } = useSection();

  return (
    <header className="bg-green-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/ishtgroup" className="text-xl font-bold">
          IHST Group
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/ishtgroup/about" className="hover:text-green-200">
            About
          </Link>
          <Link href="/ishtgroup/services" className="hover:text-green-200">
            Services
          </Link>
          <Link href="/ishtgroup/contact" className="hover:text-green-200">
            Contact
          </Link>
          <button
            onClick={() => setSection("tutoring")}
            className="ml-4 px-4 py-2 bg-white text-green-600 rounded hover:bg-green-100 transition-colors"
          >
            Switch to Online Tutoring
          </button>
        </div>
      </nav>
    </header>
  );
}
