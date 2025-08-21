import React from 'react';

const Acknowledgement = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-900 pb-3 mb-6">
              CMT ACKNOWLEDGMENT
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acknowledgement;