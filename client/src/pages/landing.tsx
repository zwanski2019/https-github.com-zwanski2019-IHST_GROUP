import { useState } from "react";
import { useLocation } from "wouter";
import { Building2, GraduationCap } from "lucide-react";

export default function Landing() {
  const [hoveredSide, setHoveredSide] = useState<"ishtgroup" | "tutoring" | null>(null);
  const [, navigate] = useLocation();

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Ishtgroup Section */}
      <div
        className={`flex-1 flex items-center justify-center p-12 relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${
          hoveredSide === "ishtgroup" ? "md:flex-[0.6]" : "md:flex-[0.5]"
        }`}
        onMouseEnter={() => setHoveredSide("ishtgroup")}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => navigate("/ishtgroup")}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] to-[#1F2937] opacity-90" />
        <div className="relative z-10 text-white text-center max-w-lg">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#92220F] to-[#995A4E] flex items-center justify-center">
            <Building2 className="w-10 h-10" />
          </div>
          <h2 className="font-aquawax text-4xl mb-4">Ishtgroup</h2>
          <p className="text-lg text-white/60 mb-8">
            Professional business solutions and consulting services to help your organization thrive.
          </p>
          <div className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#92220F] to-[#995A4E] text-white hover:opacity-90 transition-opacity">
            Enter Ishtgroup
          </div>
        </div>
      </div>

      {/* Online Tutoring Section */}
      <div
        className={`flex-1 flex items-center justify-center p-12 relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${
          hoveredSide === "tutoring" ? "md:flex-[0.6]" : "md:flex-[0.5]"
        }`}
        onMouseEnter={() => setHoveredSide("tutoring")}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => navigate("/")}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] to-[#1F2937] opacity-90" />
        <div className="relative z-10 text-white text-center max-w-lg">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#92220F] to-[#995A4E] flex items-center justify-center">
            <GraduationCap className="w-10 h-10" />
          </div>
          <h2 className="font-aquawax text-4xl mb-4">Online Tutoring</h2>
          <p className="text-lg text-white/60 mb-8">
            Personalized learning experiences with expert tutors to help you achieve academic excellence.
          </p>
          <div className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#92220F] to-[#995A4E] text-white hover:opacity-90 transition-opacity">
            Start Learning
          </div>
        </div>
      </div>
    </div>
  );
}
