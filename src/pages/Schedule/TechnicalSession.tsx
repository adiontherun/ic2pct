import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Download } from "lucide-react";

const days = [
  {
    label: "Day 1 — May 15",
    title: "Session Schedule — Day 1, May 15",
    pdfUrl: "/Technical Session Schedule - IC2PCT2026 - 15_May.pdf",
  },
  {
    label: "Day 2 — May 16",
    title: "Session Schedule — Day 2, May 16",
    pdfUrl: "/Technical Session Schedule - IC2PCT2026 - 16_May.pdf",
  },
  {
    label: "Day 3 — May 17",
    title: "Session Schedule — Day 3, May 17",
    pdfUrl: "/Technical Session Schedule - IC2PCT2026 - 17_May.pdf",
  },
];

const TechnicalSessionSchedule = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = days[activeTab];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Technical Session Schedule</h1>
          <p className="text-lg text-blue-200">
            IC2PCT-2026 — Detailed Technical Session Plan
          </p>
        </div>
      </div>

      {/* PDF Viewer Section */}
      <main className="flex-1 flex flex-col items-center py-10 px-4 w-full">
        <div className="w-full max-w-6xl mx-auto">
          {/* Day Tabs */}
          <div className="flex rounded-xl overflow-hidden border border-blue-200 mb-6 shadow-sm">
            {days.map((day, idx) => (
              <button
                key={day.label}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 py-3 text-sm sm:text-base font-semibold transition-colors ${activeTab === idx
                    ? "bg-blue-900 text-white"
                    : "bg-blue-50 text-blue-900 hover:bg-blue-100"
                  }`}
              >
                {day.label}
              </button>
            ))}
          </div>

          {/* Download Bar */}
          <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl px-6 py-4 mb-6 shadow-sm">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-blue-700" />
              <span className="text-blue-900 font-semibold text-lg">
                {current.title}
              </span>
            </div>
            <a
              href={current.pdfUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-900 text-white rounded-lg font-medium shadow hover:bg-blue-800 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </div>

          {/* Embedded PDF */}
          <div className="w-full rounded-xl overflow-hidden border-2 border-blue-200 shadow-lg" style={{ height: "80vh" }}>
            <iframe
              key={current.pdfUrl}
              src={current.pdfUrl}
              title={current.title}
              className="w-full h-full"
              style={{ border: "none" }}
            />
          </div>

          {/* Fallback message */}
          <p className="text-center text-gray-500 text-sm mt-4">
            If the PDF does not load,{" "}
            <a
              href={current.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline hover:text-blue-900 transition-colors"
            >
              click here to open it in a new tab
            </a>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TechnicalSessionSchedule;
