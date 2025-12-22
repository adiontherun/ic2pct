import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Page: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center py-10 px-4 w-full">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Registration Rates</h1>

        {/* Unified Registration Table */}
        <div className="w-full max-w-6xl bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full border border-blue-900 text-center">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-3 border border-blue-900">Presentation Mode</th>
                  <th className="p-3 border border-blue-900">Registration Type</th>
                  <th className="p-3 border border-blue-900">Country</th>
                  <th className="p-3 border border-blue-900">IEEE Member</th>
                  <th className="p-3 border border-blue-900">Non-IEEE Member</th>
                </tr>
              </thead>
              <tbody className="text-blue-900">
                {/* Online Registration Section */}
                {/* Online Registration Section
                <tr className="bg-blue-100">
                  <td className="p-3 border border-blue-900 font-bold text-blue-800" rowSpan={3}>ONLINE</td>
                  <td className="p-3 border border-blue-900">Regular/Industry</td>
                  <td className="p-3 border border-blue-900">Indian / Foreigner</td>
                  <td className="p-3 border border-blue-900">₹9,500 / 350 USD</td>
                  <td className="p-3 border border-blue-900">₹10,620 / 400 USD</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="p-3 border border-blue-900">Student Author</td>
                  <td className="p-3 border border-blue-900">Indian / Foreigner</td>
                  <td className="p-3 border border-blue-900">₹7,080 / 200 USD</td>
                  <td className="p-3 border border-blue-900">₹8,260 / 300 USD</td>
                </tr>
                <tr className="bg-blue-100">
                  <td className="p-3 border border-blue-900">Attendee</td>
                  <td className="p-3 border border-blue-900">Indian / Foreigner</td>
                  <td className="p-3 border border-blue-900">2,500 INR / 100 USD</td>
                  <td className="p-3 border border-blue-900">3,500 INR / 150 USD</td>
                </tr>
                */}

                {/* Offline Registration Section */}
                <tr className="bg-green-100">
                  <td className="p-3 border border-blue-900 font-bold text-green-700" rowSpan={3}>OFFLINE</td>
                  <td className="p-3 border border-blue-900">Regular/Industry</td>
                  <td className="p-3 border border-blue-900">Indian / Foreigner</td>
                  <td className="p-3 border border-blue-900">₹7,080 / 200 USD</td>
                  <td className="p-3 border border-blue-900">₹8,260 / 250 USD</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-3 border border-blue-900">Student Author</td>
                  <td className="p-3 border border-blue-900">Indian / Foreigner</td>
                  <td className="p-3 border border-blue-900">₹5,500 / 150 USD</td>
                  <td className="p-3 border border-blue-900">₹6,500 / 175 USD</td>
                </tr>
                <tr className="bg-green-100">
                  <td className="p-3 border border-blue-900">Attendee</td>
                  <td className="p-3 border border-blue-900">Indian / Foreigner</td>
                  <td className="p-3 border border-blue-900">₹1000 / 100 USD</td>
                  <td className="p-3 border border-blue-900">₹1500 / 125 USD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-3">
            <p className="text-red-600 text-sm text-center mb-2">
              * All rates are inclusive of GST 18%
            </p>
            <p className="text-blue-900 font-medium text-center">
              One full author registration can register up to 2 papers
            </p>
            <p className="text-red-600 text-sm text-center mt-2">
              * Extra page charge of ₹ 1000/- INR per page Indian author and $ 15 per page International author will be chargeable to the author's during registration process.
            </p>
          </div>
        </div>

        {/* Account details section with responsive adjustments */}
        <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <h2 className="text-lg font-semibold text-blue-900 p-4 bg-blue-50">Account Details</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="text-blue-900">
                <tr className="border-b border-blue-900">
                  <td className="p-3 font-bold border-r border-blue-900">Name of Account</td>
                  <td className="p-3">GU Conferences</td>
                </tr>
                <tr className="border-b border-blue-900 bg-blue-50">
                  <td className="p-3 font-bold border-r border-blue-900">Account Number</td>
                  <td className="p-3">6717000100025845</td>
                </tr>
                <tr className="border-b border-blue-900">
                  <td className="p-3 font-bold border-r border-blue-900">IFSC Code</td>
                  <td className="p-3">PUNB0671700</td>
                </tr>
                <tr className="border-b border-blue-900 bg-blue-50">
                  <td className="p-3 font-bold border-r border-blue-900">Bank Name</td>
                  <td className="p-3">Punjab National Bank, Noida</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold border-r border-blue-900">SWIFT Code</td>
                  <td className="p-3">PUNBINBBMSN</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Added scroll indicator for mobile users */}
        <div className="md:hidden w-full max-w-6xl mt-4 text-center text-gray-500 text-sm flex items-center justify-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
          </svg>
          <span>Swipe horizontally to view full table</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
