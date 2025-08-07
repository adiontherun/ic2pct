import { cards } from "@/utils/slideArray";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define types
interface Chair {
  name: string;
  imgSrc?: string;
  position: string;
  organization: string;
}

interface Roles {
  [key: string]: string[];
}

export default function TeamPage(): JSX.Element {
  const roles: Roles = {
    "Chief Patron": ["Shri Suneel Galgotia"],
    "Patrons": [
      "Dr. Dhruv Galgotia",
      "Dr. S.N.Singh",
      "Prof.(Dr.) K.M. Babu",
      "Ms. Aradhana Galgotia",

    ],
    "Conference General Chair": [
      "Prof.(Dr.) Avadhesh Kumar",
      "Dr. Yogesh S. Chauhan",
      "Dr. Arnold Pears"
    ],
    "Conference Chair": [
      "Dr. Aanjey M. Tripathi",
      // "Prof. Prashant Johri",
      "Dr. Kuldeep S. Kaswan"
      // "Prof. Asheesh Kumar Singh"
    ],
    "Conference Organizing Chair": [
      "Dr. Vimal Kumar",
      "Dr. Gaurav Agarwal",
      "Dr. Abdul Aleem",
      "Prof. Manish Kumar",
      "Dr. Arpesh Singh"
    ],
    "Conference Co-Organizing Chairs": [
      // "Prof. Meenakshi Awasthi",
      // "Prof. Deepak Soni",
      "Prof. Sunil Bharti"
    ],
    "Conference Technical Chair": [
      "Dr. Saurabh Singh",
      "Dr. Sonia Setia",
      "Ms. Trapti Shrivastava",
      // "Dr. Kuldeep S. Kaswan"
      "Dr. Vineeta Khemchandani"
      // "Prof. Manish Kumar"
    ],
    "Publication Chairs": [
      "Prof. Shraddha Sagar"


    ],
    "Publicity Chairs": [
      "Dr. Ravi Sharma"
    ],
    "Conference Secretaries": [
      "Dr. K. K. Agrawal",
      "Dr. Ajeet Singh",

      "Prof. Arunendra Mani Tripathi",
      // "Prof. Avneesh Kumar",
      "Dr. Shachi Mall"
    ],
    "Event Organising Chair": [

      // "Dr. Pragya Tewari",
      "Dr. Ambika Gupta",
      "Dr. Pooja Singh"
    ]

    // "Conference Technical Co-Chairs": [
    //   // "Prof. Ravi Sharma",
    //   // "Dr. Manish Kumar",
    //   // "Dr. Sonu Jha",
    //   "Dr. Smita"
    ,
    "Publication Co-Chairs": [
      // "Dr. Shachi Mall",
      "Dr. Vipin Rai",
      "Prof. Avneesh Kumar",
      // "Prof. E. Rajesh"
    ],


    "International Advisory Chairs": [
      "Dr. Hironori Washizaki",
      "Dr. Dipti Srinivasan",
      "Prof.(Dr.) Akshay Rathore",
      "Dr. Liudong Xing",
      "Ayman EL-Refaie",
      "Dr. Diane Rover",
      "Dr. Diana Andone",
    ],

    "Sponsorship & Industry Chairs": [
      "Prof. Avneesh Kumar",
      // "Dr. V.D.S. Baghela"
    ],

    "Finance Chairs": [
      "Prof. Ashok K. Yadav"
    ],
    "Transport Chairs": [
      "Prof. T. Ganesh Kumar"
    ],
    "Website & Graphics Chairs": [
      "Mr. Pankaj Lamba",
      "Manas Saxena",
      // "Ayush Raj",
      // "Hemendra Harsh",
      // "Shivam Kumar"
    ],
    "Media Chairs": [
      "Prof. AR Pandey"
    ],
    "Hospitality Chairs": [
      "Prof. (Dr.) Rajiv Mishra",
      // "Dr. Vandana Beniwal"
    ],
    "International Advisory Committee": [
      // "Dr. Liudong Xing",
      // "Dr. LING Tok Wang",
      // "Dr. Norjihan Abdul Ghani",
      // "Dr. Norbik Bashah Bin Idris",
      // "Dr. Maizatul Akmar Ismail",
      // "Dr. Suzan Jabbar Obaiys",
      // "Dr. Mufti Mahmud",
      // "Dr. Deepak K Jain",
      // "Dr. Kishore Bingi",
      // "Dr. Noor Zaman Jhanjhi",
      // "Dr. CHAMAN VERMA",
      // "Dr. Manoj Kumar",
      // "Dr. Sachidanand Mohanty",
      // "Dr. S.B.Goyal",
      // "Dr. Nagender Aneja",
      // "Dr. Pradeep Kumar",
      // "Dr. Mukesh Prasad",
      // "Dr. Gavendra Singh",
      // "Dr. Hoang Pham",
      // "Dr. Nitin Kumar Saxena",
      // "Prof. Utkal Mehta",
      // "Dr. Shafiq Ul Rehman",
      // "Prof. Mohammad Rashid Hussain",
      // "Prof. Deepak L. Waikar",
      // // "Prof. E. Rajesh",
      // "Prof.(Dr.) Akshay Rathore"
      "Prof. Sanjeev K. Singh",
      "Prof. Jagjit Singh Dhatterwal"
    ],
    "National Advisory Committee": [
      "Prof. Adarsh Anand",
      "Prof. (Dr.) Chandra Prakash",
      "Prof. (Dr.) Sahil",
      "Prof. T. Poongodi",
      "Prof. Mayank Pandey",
      "Prof. Y. K. Prajapati",
      "Prof. Ela Kumar",
      "Prof. R.K. Nagaria",
      "Prof. Arvind Pandey",
      "Prof. Shashank Srivastava",
      "Dr. Dushyant Kumar Singh",
      "Prof. Nidhi Goel",
      "Prof. S. K. Srivastava",
      "Prof. Vandana Niranjan",
      "Prof. SRN Reddy",
      "Prof. Bhawna Narwal",
      "Dr. Vimal Kumar Singh Yadav",
      "Prof. Karuna Kadian",
      "Dr. Satish Chandra",
      "Dr. Savita Yadav",
      "Prof. Anurag Diwedi",
      "Prof. N. Gayathri",
      "Prof. S. Rakesh Kumar",
      "Prof. Anoop Kumar Patel",
      "Dr. P.S. Yadav"
    ],
    "Technical Program Committee": [
      "Dr. Arvind Kumar",
      "Prof. V. Krishna Rao Kandanvli",
      "Prof. P. Karuppanan",
      "Dr. Dharmendra Dixit",
      "Dr. Deepak Punetha",
      "Dr. Arun Kumar Saurabh",
      "Prof. Navdeep Singh",
      "Dr. Nirmal Ch Roy",
      "Prof. Priya Matta",
      "Prof. Alok Katiyar",
      "Prof. Dilip Yadav",
      "Prof. SPS Chauhan",
      "Prof. Vandana Sharma",
      "Dr. Shailesh Kumar",
      "Dr. Swapnita Srivastava",
      "Dr. Vipul Narayan"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="py-10 px-4">
        <h1 className="text-center text-gray-900 text-4xl font-bold mb-8">Our Team</h1>
        {Object.entries(roles).map(([role, names]: [string, string[]]) => (
          <div key={role} className="mb-8">
            <h2 className="text-2xl text-gray-800 font-bold text-center mb-4">{role}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {names.map((name: string) => {
                const chair: Chair | undefined = cards.find((chair: Chair) => chair.name === name);
                return (
                  chair && (
                    <div
                      key={name}
                      className="bg-blue-900 text-white shadow-lg rounded-xl p-4 w-72 text-center transform transition duration-300 hover:scale-105"
                    >
                      {chair.imgSrc ? (
                        <img
                          src={chair.imgSrc}
                          alt={name}
                          className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-md object-cover"
                        />
                      ) : (
                        <img
                          src='/reshot-icon-user-ZXFJAEQURK.svg'
                          alt={name}
                          className="w-32 h-32 p-5 mx-auto rounded-full border-4 border-white shadow-md invert"
                        />
                      )}
                      <h2 className="text-xl font-bold mt-4">{name}</h2>
                      {chair.position && <p className="font-medium">{chair.position}</p>}
                      {chair.organization && <p className="text-sm">{chair.organization}</p>}
                    </div>
                  )
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
