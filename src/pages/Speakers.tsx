import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const speakers = [
  {
    name: "Dr. Praveena Nair Sivasankaran",
    position: "Clean Technology Impact Lab Director",
    organization: "Taylor's University, Malaysia",
    imgSrc: "/ImportantPersons/praveen sivasankaran.jpeg"
  },
  {
    name: "Fred Schindler",
    position: "Member",
    organization: "IEEE Board of Directors",
    imgSrc: "/ImportantPersons/fred.jpeg"
  },
  {
    name: "Dr. Carol Lo",
    position: "",
    organization: "University of the West of England, United Kingdom",
    imgSrc: "/ImportantPersons/carlo.jpeg"
  },
  {
    name: "Dr. Dac Nhuong Le",
    position: "Associate Professor",
    organization: "Faculty of Information Technology, Haiphong University, Vietnam",
    imgSrc: "/ImportantPersons/dac nhuong le.jpeg"
  },
  {
    name: "Dr. Sudeendra Koushik",
    position: "President",
    organization: "IEEE Technology and Engineering Management Society (TEMS)",
    imgSrc: "/ImportantPersons/sudeendra.jpeg"
  },
  {
    name: "Prof. Sri Niwas Singh",
    position: "Director",
    organization: "ABV-Indian Institute of Information Technology and Management, Gwalior, India",
    imgSrc: "/ImportantPersons/snsingh.png"
  },
  {
    name: "Prof. Yogesh S. Chauhan",
    position: "Professor, IIT Kanpur, India",
    organization: "Chair, IEEE UP Section",
    imgSrc: "/ImportantPersons/yogesh.png"
  },
  {
    name: "Prof. Rajeev Kumar Singh",
    position: "Professor, IIT (BHU), Varanasi, India",
    organization: "Secretary, IEEE UP Section",
    imgSrc: "/ImportantPersons/rajeev singh.jpeg"
  },
  {
    name: "Dr. Mrutyunjay Mohapatra",
    position: "Director General of Meteorology",
    organization: "India Meteorological Department, Government of India",
    imgSrc: "/ImportantPersons/mrutyunjay mohapatra.jpeg"
  },
  {
    name: "Prof. Mohd Rihan",
    position: "Director General, NISE, India",
    organization: "Chair Elect, IEEE UP Section",
    imgSrc: "/ImportantPersons/mohammadrihan.jpg"
  },
  {
    name: "Prof. Raghvendra Kumar Chaudhary",
    position: "Indian Institute of Technology (IIT) Kanpur, India",
    organization: "Treasurer, IEEE UP Section",
    imgSrc: "/ImportantPersons/prof raghvendra chaudhary.jpeg"
  },
  {
    name: "Prof. Asheesh Kumar Singh",
    position: "Professor",
    organization: "Motilal Nehru National Institute of Technology, Prayagraj, India",
    imgSrc: "/ImportantPersons/asheeshsingh.jpg"
  },
  {
    name: "Dr. Harivardhagini Subhadra",
    position: "Chair — Women Education & Empowerment",
    organization: "IEEE Systems Council Education Subcommittee",
    imgSrc: "/ImportantPersons/harivardhagini.jpeg"
  },
  {
    name: "Dr. Abhishek Appaji",
    position: "Treasurer",
    organization: "IEEE Education Society",
    imgSrc: "/ImportantPersons/abhishek.jpg"
  },
  {
    name: "Dr. Varun Kakar",
    position: "Bipin Tripathi Kumaon Institute of Technology, India",
    organization: "Joint Secretary, IEEE UP Section",
    imgSrc: "/ImportantPersons/varunkakar.jpg"
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
