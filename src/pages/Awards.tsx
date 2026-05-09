import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy } from "lucide-react";

const Awards = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Awards</h1>
          <p className="text-lg text-blue-200">
            IC2PCT-2026 — Recognising Excellence in Research
          </p>
        </div>
      </div>

      {/* Coming Soon */}
      <main className="flex-1 flex items-center justify-center py-24 px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-28 h-28 mx-auto mb-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center shadow-xl">
            <Trophy className="h-14 w-14 text-white" />
          </div>
          <h2 className="text-6xl sm:text-7xl font-extrabold text-blue-900 tracking-tight mb-6">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed">
            Award winners will be announced after the conference concludes. Stay tuned!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Awards;
