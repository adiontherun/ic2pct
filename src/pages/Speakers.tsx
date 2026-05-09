import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const speakers = [
  {
    name: "Dr. Sudeendra Koushik",
    position: "President, IEEE TEMS",
    organization: "",
    imgSrc: "/ImportantPersons/sudeendra.jpeg"
  },
  {
    name: "Fred Schindler",
    position: "Member",
    organization: "IEEE Board of Directors",
    imgSrc: "/ImportantPersons/fred.jpeg"
  },
  {
    name: "Dr. Dac Nhuong Le",
    position: "Associate Professor",
    organization: "Haiphong University, Vietnam",
    imgSrc: "/ImportantPersons/dac nhuong le.jpeg"
  },
  {
    name: "Prof. (Dr.) S.N. Singh",
    position: "Director",
    organization: "ABV-IIITM, Gwalior, India",
    imgSrc: "/ImportantPersons/snsingh.png"
  },
  {
    name: "Dr. Mrutyunjay Mohapatra",
    position: "Director General of Meteorology, India",
    organization: "",
    imgSrc: "/ImportantPersons/mrutyunjay mohapatra.jpeg"
  },
  {
    name: "Prof. (Dr.) Yogesh S. Chauhan",
    position: "Professor, IIT Kanpur",
    organization: "Chair, IEEE UP Section",
    imgSrc: "/ImportantPersons/yogesh.png"
  },
  {
    name: "Dr. Mohammad Rihan",
    position: "Chair Elect",
    organization: "IEEE UP Section",
    imgSrc: "/ImportantPersons/mohammadrihan.jpg"
  },
  {
    name: "Prof. Asheesh K. Singh",
    position: "Professor",
    organization: "MNNIT Allahabad",
    imgSrc: "/ImportantPersons/asheeshsingh.jpg"
  },
  {
    name: "Dr. Rajeev Kr. Singh",
    position: "Professor, IIT BHU",
    organization: "Secretary, IEEE UP Section",
    imgSrc: "/ImportantPersons/rajeev singh.jpeg"
  },
  {
    name: "Dr. Varun Kakkar",
    position: "Jt. Secretary",
    organization: "IEEE UP Section",
    imgSrc: "/ImportantPersons/varunkakar.jpg"
  },
  {
    name: "Prof. (Dr.) Harivardhagini Subhadra",
    position: "Professor, CVR College of Engineering",
    organization: "IEEE WIE Committee Member",
    imgSrc: "/ImportantPersons/harivardhagini.jpeg"
  },
  {
    name: "Dr. Praveena Nair Sivasankaran",
    position: "Senior Lecturer",
    organization: "Taylor's University",
    imgSrc: "/ImportantPersons/praveen sivasankaran.jpeg"
  },
  {
    name: "Dr. Carol Lo",
    position: "",
    organization: "University of the West of England, United Kingdom",
    imgSrc: "/ImportantPersons/carlo.jpeg"
  },
  {
    name: "Prof. Raghvendra Kumar Chaudhary",
    position: "Indian Institute of Technology (IIT) Kanpur, India",
    organization: "Treasurer, IEEE UP Section",
    imgSrc: "/ImportantPersons/prof raghvendra chaudhary.jpeg"
  },
  {
    name: "Dr. Abhishek Appaji",
    position: "Treasurer",
    organization: "IEEE Education Society",
    imgSrc: "/ImportantPersons/abhishek.jpg"
  },
  {
    name: "Dr. D. S. Singh",
    position: "Professor & Head",
    organization: "Department of Information Technology & Computer Application, MMMUT, Gorakhpur, India",
    imgSrc: "/ImportantPersons/dr s singh.jpeg"
  },
  {
    name: "Dr. Thomas TY Win",
    position: "Associate Head of School in Computer Science",
    organization: "University of Sunderland, United Kingdom",
    imgSrc: "/ImportantPersons/dr thomas ty win.jpeg"
  },
  {
    name: "Prof. Dharmendra Singh",
    position: "Director",
    organization: "IIIT Vadodara, India",
    imgSrc: "/ImportantPersons/prof dharmendra singh.jpeg"
  },
  {
    name: "Dr. Arun Sharma",
    position: "",
    organization: "Indira Gandhi Delhi Technical University For Women, India",
    imgSrc: "/ImportantPersons/dr arun sharma.jpeg"
  },
  {
    name: "Dr. Zeinab Rezaeifar",
    position: "",
    organization: "University of the West of England, Bristol, United Kingdom",
    imgSrc: "/ImportantPersons/dr zeinaab.jpeg"
  }
];

export default function KeynoteSpeakers(): JSX.Element {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center py-10 px-4 w-full">
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-2">Keynote Speakers</h2>
        <p className="text-center text-gray-600 mb-8">
          IEEE 6th International Conference on Computing, Power, and Communication Technologies
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
          {speakers.map((speaker, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-red-500 hover:shadow-xl transition-all duration-300 flex flex-col items-center"
              >
                <img
                  className="w-32 h-32 mx-auto rounded-full border-4 border-orange-400 object-cover"
                  src={speaker.imgSrc || "/reshot-icon-user-ZXFJAEQURK.svg"}
                  alt={speaker.name}
                  onError={(e) => { (e.target as HTMLImageElement).src = "/reshot-icon-user-ZXFJAEQURK.svg" }}
                />
                <h3 className="text-xl font-semibold text-red-600 mt-4">
                  {speaker.name}
                </h3>
                {speaker.position && (
                  <p className="text-gray-700 mt-2 font-medium">{speaker.position}</p>
                )}
                {speaker.organization && (
                  <p className="text-gray-500 text-sm mt-1">{speaker.organization}</p>
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
