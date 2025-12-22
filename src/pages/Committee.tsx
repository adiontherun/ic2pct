import { cards } from "@/utils/slideArray";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TeamPage() {
  const roles = {
    "Chief Patron": [
      "Shri Suneel Galgotia"
    ],
    "Patron": [
      "Dr. Dhruv Galgotia",
      "Ms. Aradhana Galgotia",
      "Dr. Ankush Mittal",
      "Prof. (Dr.) S.N.Singh"
    ],
    "Conference General Chair": [
      "Prof. (Dr.) Avadhesh Kumar",
      "Prof. (Dr.) Yogesh S. Chauhan",
      "Dr. Arnold Pears"
    ],
    "Conference Chair": [
      "Prof. (Dr.) Aanjey M. Tripathi",
      "Prof. (Dr.) Kuldeep S. Kaswan"
    ],
    "Conference Organizing Chair": [
      "Prof. (Dr.) Harish Kumar GR",
      "Prof. (Dr.) Abdul Aleem",
      "Prof. (Dr.) Gaurav Agarwal",
      "Prof. Manish Kumar",
      "Prof. Arpesh Singh"
    ],
    "Conference Co-Organizing Chair": [
      "Prof. (Dr.) Sunil Bharti"
    ],
    "Technical Program Committee Chair": [
      "Prof. (Dr.) Vineeta Khemchandani",
      "Prof. (Dr.) Sudhir Kr. Singh",
      "Prof. (Dr.) Deepak Soni",
      "Prof. (Dr.) Sonia Setia"
    ],
    "Publication Chair": [
      "Prof. (Dr.) Shrddha Sagar"
    ],
    "Publicity Chair": [
      "Prof. (Dr.) Meenakshi Sharma",
      "Prof. (Dr.) Ravi Sharma"
    ],
    "Conference Secretary": [
      "Prof. (Dr.) Manish Raj",
      "Prof. (Dr.) Ajeet Singh",
      "Prof. (Dr.) Saurabh Singh",
      "Prof. (Dr.) K. K. Agrawal",
      "Prof. (Dr.) Shachi Mall",
      "Prof. Arunendra Mani Tripathi"
    ],
    "Event Organising Chair": [
      "Prof. (Dr.) Pooja Singh",
      "Prof. Pragya Tewari"
    ],
    "Conference Technical Co-Chair": [
      "Prof. (Dr.) Anupam Baliyan",
      "Prof. (Dr.) Trapti Shrivastava",
      "Prof. (Dr.) Shipra Shukla",
      "Prof. Jitendra"
    ],
    "Publication Co-Chair": [
      "Prof. (Dr.) Shashi Bhusan",
      "Prof. (Dr.) Vipin Rai"
    ],
    "International Advisory Chair": [
      "Prof. (Dr.) Sanjeev K. Singh",
      "Prof. (Dr.) Jagjit Singh Dhatterwal"
    ],
    "National Advisory Chair": [
      "Prof. (Dr.) Geeta Sikka",
      "Prof. (Dr.) Abhishek Appaji",
      "Prof. (Dr.) Harivardhagini Subhadra"
    ],
    "Sponsorship & Industry Chair": [
      "Prof. (Dr.) Avneesh Kumar"
    ],
    "Finance Chair": [
      "Prof. (Dr.) Ashok K. Yadav"
    ],
    "Transport Chair": [
      "Prof. (Dr.) Ganesh Kumar",
      "Prof. (Dr.) Dinesh Kumar"
    ],
    "Website & Graphics Chair": [
      "Mr. Pankaj Lamba",
      "Mr. Gaurang Pant"
    ],
    "Media Chair": [
      "Prof. (Dr.) Neha Jindal"
    ],
    "Hospitality Chair": [
      "Prof. (Dr.) Shankar Kumar"
    ],
    "International Advisory Committee": [
      "Dr. Liudong Xing",
      "Dr. LING Tok Wang",
      "Dr. Norjihan Abdul Ghani",
      "Dr. Norbik Bashah Bin Idris",
      "Dr. Maizatul Akmar Ismail",
      "Dr. Suzan Jabbar Obaiys",
      "Dr. Mufti Mahmud",
      "Dr. Deepak K Jain",
      "Dr. Kishore Bingi",
      "Dr. Noor Zaman Jhanjhi",
      "Dr. CHAMAN VERMA",
      "Dr. Manoj Kumar",
      "Dr. Sachidanand Mohanty",
      "Dr. S.B.Goyal",
      "Dr. Nagender Aneja",
      "Dr. Pradeep Kumar",
      "Dr. Mukesh Prasad",
      "Dr. Gavendra Singh",
      "Dr. Hoang Pham",
      "Dr. Nitin Kumar Saxena",
      "Prof. Utkal Mehta",
      "Dr. Shafiq Ul Rehman",
      "Prof. Mohammad Rashid Hussain",
      "Prof. Deepak L. Waikar",
      "Chin Kuan Ho",
      "Dr. Sivaneasan Bala Krishnan",
      "Prof. Ts. Dr. Murali Raman",
      "Dr. Ahmed A. Elngar",
      "Dr. Hironori Washizaki",
      "Dr. Supavadee Aramvith"
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
      "Prof. (Dr.) Vimal Kumar",
      "Prof. Vandana Niranjan",
      "Prof. SRN Reddy",
      "Prof. Bhawna Narwal",
      "Dr. Vimal Kumar Singh Yadav",
      "Prof. Karuna Kadian",
      "Dr. Satish Chandra",
      "Prof. Anil Kumar Sagar",
      "Professor T. G. Sitharam",
      "Dr. Sri Niwas Singh",
      "Dr. J. Ramkumar",
      "Dr. Rajeev Kumar Singh",
      "Dr. Varun Kakar",
      "Dr. Mohammad Rihan",
      "Dr Bijaya Ketan Panigrahi",
      "Dr. Brij B. Gupta",
      "Dr. Vinay Kumar",
      "Dr. Savita Yadav",
      "Prof. Anurag Diwedi",
      "Prof. Deependra Rastogi",
      "Prof. N.Gayathri",
      "Prof. S.Rakesh Kumar",
      "Prof. Anoop Kumar Patel",
      "Prof. R.P. Yadav",
      "Prof. (Dr.) S Srinivasan",
      "Dr. V.D.S. Baghela",
      "Dr. P.S. Yadav",
      "Dr. Shailesh Kumar",
      "Dr. Swapnita Srivastava",
      "Dr. Vipul Narayan",
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
      "Dr. Rajeev Srivastava",
      "Prof. Asheesh Kumar Singh",
      "Dr. Anil Kumar Tripathi",
      "Dr. Prabhakar Tiwari",
      "Dr. Rakesh Kumar",
      "Prof. (Dr.) Meenakshi Awasthi"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="py-10 px-4">
        <h1 className="text-center text-gray-900 text-4xl font-bold mb-8">Our Team</h1>
        {Object.entries(roles).map(([role, names]) => (
          <div key={role} className="mb-8">
            <h2 className="text-2xl text-gray-800 font-bold text-center mb-4">{role}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {names.map((name) => {
                const chair = cards.find((chair) => chair.name === name);
                return (
                  chair && (
                    <div
                      key={name}
                      className="bg-blue-900 border border-blue-800 shadow-xl rounded-xl p-4 w-72 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
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
                      <h2 className="text-xl font-bold mt-4 text-white">{name}</h2>
                      {chair.position && <p className="font-bold text-gray-200">{chair.position}</p>}
                      {chair.organization && (
                        <p className="text-sm text-gray-300 mt-1">
                          {chair.organization.replace(new RegExp(`^${chair.position}[,\\s-]*`, 'i'), '')}
                        </p>
                      )}
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
