import React from "react";
import { cards } from "@/utils/slideArray";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define the type for speaker card details
interface SpeakerCard {
  name: string;
  imgSrc?: string;
  position?: string;
  organization?: string;
}

const speakers: string[] = [
  "Dr. S.N.Singh",
  "Prof.(Dr.) Akshay Rathore",
  "Dr. Yogesh S. Chauhan",
  "Prof. J. Ramkumar",
  "Dr. B. Panigrahi",
  "Prof. Vinod Khadkikar",
  "Dr. K. Rajashekara",
  "Dr. Atif Iqbal",
  "Dr. Ahmed A. Elngar",
  "Dr. Haitham Abu-Rub",
  "Dr. Liudong Xing",
  "Dr. Rajeev Srivastava",
  
  // "Chin Kuan Ho",
  // "Dr. Hironori Washizaki",
  // "Dr. Harivardhagini Subhadra",
  // "Dr. Rajeev Srivastava",
  // "Dr. S.N.Singh",
  // "Dr.Akshay Kumar Rathore",
  // "Dr. Sivaneasan Bala Krishnan",
  // "Dr. Anil Kumar Tripathi",
  // "Prof. Asheesh Kumar",
  // "Dr. Mohammad Rihan",
  // "Dr. Rajeev Kumar Singh",
  // "Dr. Prabhakar Tiwari",
  // "Dr. Rakesh Kumar",
  // "Dr. Varun Kakar"
];

export default function KeynoteSpeakers(): JSX.Element {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center py-10 px-4 w-full">
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-2">Keynote Speakers</h2>
        <p className="text-center text-blue-900 mb-8">
          2025 7th International Conference on Computing, Communication and Automation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {speakers.map((speakerName: string, index: number) => {
            const speakerDetails: SpeakerCard | undefined = cards.find((card: SpeakerCard) => card.name === speakerName);
            if (!speakerDetails) return null;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-blue-900"
              >
                <img
                  className="w-32 h-32 mx-auto rounded-full border-4 border-blue-900 bg-blue-50 object-cover"
                  src={speakerDetails.imgSrc || "/reshot-icon-user-ZXFJAEQURK.svg"}
                  alt={speakerDetails.name}
                />
                <h3 className="text-xl font-semibold text-blue-900 mt-4">
                  {speakerDetails.name}
                </h3>
                {speakerDetails.position && (
                  <p className="text-blue-900 mt-2 font-medium">{speakerDetails.position}</p>
                )}
                {speakerDetails.organization && (
                  <p className="text-gray-500 text-sm">{speakerDetails.organization}</p>
                )}
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}