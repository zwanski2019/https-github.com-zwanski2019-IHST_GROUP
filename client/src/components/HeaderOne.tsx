import Link from "next/link";
import { useSection } from "../context/SectionContext";

export default function HeaderOne() {
  const { setSection } = useSection();

  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/tutoring" className="text-xl font-bold">
          Online Tutoring
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/tutoring/programs" className="hover:text-blue-200">
            Programs
          </Link>
          <Link href="/tutoring/learn" className="hover:text-blue-200">
            Learn
          </Link>
          <Link href="/tutoring/about" className="hover:text-blue-200">
            About
          </Link>
          <Link href="/tutoring/contact" className="hover:text-blue-200">
            Contact
          </Link>
          <button
            onClick={() => setSection("ishtgroup")}
            className="ml-4 px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-100 transition-colors"
          >
            Switch to IHST Group
          </button>
        </div>
      </nav>
    </header>
  );
}
