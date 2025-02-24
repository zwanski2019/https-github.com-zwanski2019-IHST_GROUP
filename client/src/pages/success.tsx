import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Success() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#92220F]/10 to-[#995A4E]/10 opacity-50" />
        <div className="absolute top-0 -left-4 w-96 h-96 bg-[#92220F]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-[#995A4E]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative text-center px-4">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="w-16 h-16 text-green-500" />
        </div>
        <h1 className="font-aquawax text-4xl mb-4">Thank You!</h1>
        <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
          You've successfully joined our waitlist. We'll keep you updated on our progress and notify you when we launch.
        </p>
        <Link href="/">
          <Button className="bg-gradient-to-r from-[#92220F] to-[#995A4E] text-white hover:opacity-90">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
