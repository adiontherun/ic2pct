import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ForAuthors = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Conference Guidelines</h1>
          <p className="text-xl">Author's Guidelines for IC2PCT-2026</p>
        </div>
      </div>

      <div className="p-4">
        <div className="max-w-[90%] mx-auto p-6 text-center">
          <h3 className="text-blue-900 text-lg md:text-xl font-semibold tracking-wide">Conference Guidelines</h3>
          <h1 className="text-2xl md:text-3xl font-bold mt-2 tracking-tight">Author's Guidelines</h1>
          <hr className="w-40 md:w-56 border-t-2 border-blue-900 mx-auto my-2" />
          <p className="text-gray-700 mt-4 text-base md:text-lg leading-relaxed">
            Authors are invited to submit original, high-quality, and previously unpublished research articles. Submissions must not be under review by any other publication or conference. All manuscripts should be submitted electronically via <a href="https://cmt3.research.microsoft.com/ICCPCT2026/Submission/Manage" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Microsoft CMT</a> in strict adherence to the IEEE standard two-column conference template, which can be accessed through the provided link. Each manuscript is limited to a maximum of six (6) pages, including figures, tables, and references. Additional pages may be accommodated with a nominal fee.
          </p>
        </div>

        <div className="max-w-[90%] mx-auto my-6 flex flex-col md:flex-row gap-6">
          {/* Paper Formatting Guidelines */}
          <div className="bg-gradient-to-b from-blue-900 to-blue-800 text-white p-6 md:p-8 flex-1 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-bold flex items-center tracking-tight">
              ● Paper Formatting Guidelines
              <ChevronDown className="ml-auto h-5 w-5 cursor-pointer hover:scale-105 transition-transform" />
            </h2>
            <ul className="list-decimal pl-5 text-sm md:text-base font-medium mt-4 space-y-2 leading-snug">
              <li>Paper Size: US Letter (8.5" × 11").</li>
              <li>Paper Length: Maximum of 6 pages, including figures, tables, and references. Two additional pages are permitted with a charge of ₹1000 per page (Indian authors) or $50 per page (International authors).</li>
              <li>Formatting: Double-column layout, single-spaced, using 10pt Times New Roman font.</li>
              <li>Margins: Top: 1" (25 mm) on the title page; 0.75" (19 mm) elsewhere. Left, Right, and Bottom margins: 0.75" (19 mm).</li>
              <li>File Format: PDF, with a maximum size of 5MB. All fonts must be embedded.</li>
              <li>No page numbering should be included in the manuscript.</li>
              <li>Use the IEEE MS Word template provided via the link above for proper formatting.</li>
            </ul>
            {/* Download Button with Link */}
            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6"
            >
              <Button className="bg-white text-blue-900 hover:bg-gray-100 px-4 py-2 ml-8 rounded-lg text-base font-medium flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download Template
              </Button>
            </a>
          </div>

          {/* General Instructions */}
          <div className="bg-gray-100 p-6 md:p-8 rounded-lg flex-1 shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 flex items-center tracking-tight">
              ● General Instructions
            </h2>
            <ul className="list-decimal pl-5 text-sm md:text-base mt-4 text-gray-700 space-y-2 leading-snug">
              <li>Papers violating formatting guidelines may be rejected.</li>
              <li>Submissions must be original, unpublished work not under review elsewhere.</li>
              <li>Simultaneous submissions to other conferences or journals are prohibited.</li>
              <li>All manuscripts must be written in English and prepared as a PDF document.</li>
              <li>Papers should strictly adhere to the IEEE two-column format with 10pt font size.</li>
              <li>The page limit is six (6) pages. An additional two pages are allowed with extra charges as specified.</li>
              <li>All figures, tables, and references must fit within the page limit.</li>
              <li>Papers will be reviewed based on originality, significance, technical quality, and clarity.</li>
              <li>The decision to accept or reject a paper rests with the Technical Program Committee.</li>
              <li>Accepted papers must address reviewers' comments and meet final submission requirements.</li>
              <li>The Conference Chair reserves the right to exclude papers not presented or meeting guidelines from the proceedings.</li>
              <li>All submissions should be made via <a href="https://cmt3.research.microsoft.com/ICCPCT2026/Submission/Manage" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Microsoft CMT</a>.</li>
            </ul>
          </div>
        </div>

        {/* IEEE Similarity and Plagiarism Policies Section */}
        <div className="max-w-[90%] mx-auto my-8 flex flex-col md:flex-row items-center bg-gray-200 p-4 rounded-lg shadow-md">
          {/* Logo */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img
              src="/logos/IC2PCT LOGO.png"
              alt="IC2PCT Logo"
              className="size-16 md:size-20 rounded-lg object-contain"
            />
          </div>
          {/* Text Content */}
          <div className="ml-4 flex-1 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight">IEEE Similarity and Plagiarism Policies</h2>
            <p className="text-base md:text-lg text-blue-900">Guidelines for Maintaining Academic Integrity</p>
          </div>
          {/* View Button */}
          <a
            href="https://www.ieee.org/publications/rights/plagiarism/plagiarism.html"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0"
          >
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <span className="mr-2">→</span>
              Redirect to Link
            </Button>
          </a>
        </div>

        {/* IEEE E-Copyright Process */}
        <div className="max-w-[90%] mx-auto my-8 flex flex-col md:flex-row items-center bg-gray-200 p-4 rounded-lg shadow-md">
          {/* Logo */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img
              src="/logos/IC2PCT LOGO.png"
              alt="IC2PCT Logo"
              className="size-16 md:size-20 rounded-lg object-contain"
            />
          </div>
          {/* Text Content */}
          <div className="ml-4 flex-1 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight">IEEE E-Copyright Process Document</h2>
            <p className="text-base md:text-lg text-blue-900">Final Submission with IEEE Xplore®-Compatible PDFs</p>
          </div>
          {/* Download Button */}
          <a
            href="https://www.ieee.org/publications/rights/copyright-policy.html"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0"
          >
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <span className="mr-2">→</span>
              Redirect to Link
            </Button>
          </a>
        </div>

        <div className="max-w-[90%] mx-auto bg-gradient-to-t from-blue-900 to-blue-800 my-6 p-6 text-white shadow-md rounded-lg">
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base leading-snug">
            <li>Papers of acceptable quality presented at the conference will be submitted to IEEE Xplore for potential inclusion.</li>
            <li>Accepted papers must be presented by at least one author. Authors must complete paid registration to upload the final IEEE-compliant version of their paper.</li>
            <li>Failure to register or present the paper will result in removal from the conference program and proceedings.</li>
            <li>No refunds will be provided for cancellations, but substitutions are allowed before the event.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ForAuthors;
