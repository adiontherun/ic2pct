import { cards } from "@/utils/slideArray";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Helper function to format title - uses existing title if present, otherwise defaults to "Professor"
const formatTitle = (position: string | undefined, organization: string | undefined, name: string): string => {
  const meaningfulTitles = [
    "associate dean", "assistant dean", "dean",
    "associate director", "assistant director", "director",
    "hod", "head of department",
    "pro-vice chancellor", "vice chancellor", "chancellor",
    "ceo", "president", "vice chair", "chair",
    "fellow", "scientist", "researcher", "research specialist",
    "secretary", "joint secretary"
  ];

  // Check if position has a meaningful title
  if (position && position.trim() !== "") {
    const positionLower = position.toLowerCase();

    // If position already contains a meaningful title, use it
    for (const title of meaningfulTitles) {
      if (positionLower.includes(title)) {
        return position;
      }
    }

    // Check for "professor" separately (it's a valid title on its own)
    if (positionLower.includes("professor")) {
      return position;
    }
  }

  // Check if organization contains a meaningful title (like "Associate Dean, DCSE...")
  if (organization && organization.trim() !== "") {
    const orgLower = organization.toLowerCase();

    for (const title of meaningfulTitles) {
      if (orgLower.includes(title)) {
        // Extract the title part from organization
        const orgParts = organization.split(',');
        for (const part of orgParts) {
          const partLower = part.toLowerCase().trim();
          for (const t of meaningfulTitles) {
            if (partLower.includes(t)) {
              return part.trim();
            }
          }
        }
      }
    }
  }

  // Don't add Professor for people with Mr./Ms. prefix - they are not professors
  const nameLower = name.toLowerCase();
  if (nameLower.startsWith("mr.") || nameLower.startsWith("ms.") ||
    nameLower.startsWith("shri") || nameLower.startsWith("smt.")) {
    return "";
  }

  // Default to Professor if no meaningful title found
  return "Professor";
};

// Helper function to format affiliation - removes redundancy with title
const formatAffiliation = (organization: string | undefined, position: string | undefined, displayedTitle: string): string => {
  if (!organization) return "";

  let cleaned = organization;

  // Remove position prefix if it appears at the start of organization
  if (position && position.trim() !== "") {
    const escapedPosition = position.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    cleaned = cleaned.replace(new RegExp(`^${escapedPosition}[,\\s-]*`, 'i'), '');
  }

  // Remove common title prefixes that might be at the start
  cleaned = cleaned.replace(/^Professor[,\s-]*/i, '');
  cleaned = cleaned.replace(/^Prof\.[,\s-]*/i, '');
  cleaned = cleaned.replace(/^Associate Professor[,\s-]*/i, '');
  cleaned = cleaned.replace(/^Assoc\. Professor[,\s-]*/i, '');
  cleaned = cleaned.replace(/^Associate Dean[,\s-]*/i, '');
  cleaned = cleaned.replace(/^Assoc\. Dean[,\s-]*/i, '');
  cleaned = cleaned.replace(/^Assistant Dean[,\s-]*/i, '');
  cleaned = cleaned.replace(/^Dean[,\s-]*/i, '');
  cleaned = cleaned.replace(/^Director[,\s-]*/i, '');
  cleaned = cleaned.replace(/^Associate Director[,\s-]*/i, '');
  cleaned = cleaned.replace(/^HoD[,\s-]*/i, '');
  cleaned = cleaned.replace(/^Head of Department[,\s-]*/i, '');

  // Remove any organization parts that already appear in the displayed title
  if (displayedTitle && displayedTitle.trim() !== "") {
    // Extract significant words/phrases from the title (ignore common words)
    const titleParts = displayedTitle.split(/[,\s-]+/).filter(part =>
      part.length > 2 && !['and', 'the', 'of', 'for', 'professor', 'prof', 'dr'].includes(part.toLowerCase())
    );

    // Check if title contains organization names like "IIT Kanpur", "GSCALE", etc.
    const orgPatterns = [
      /IIT\s+\w+/i,
      /NIT\s+\w+/i,
      /MNNIT/i,
      /MMMUT/i,
      /GSCALE/i,
      /SCSE/i,
      /SCAT/i,
      /DCSE/i,
      /DAIML/i,
      /DAIDS/i,
      /DCYS/i,
      /SAI/i,
      /SOHT/i,
      /SMCS/i,
      /DOME/i,
      /DOCE/i,
      /DEECE/i
    ];

    for (const pattern of orgPatterns) {
      const match = displayedTitle.match(pattern);
      if (match) {
        // Remove this pattern from the organization if it appears at the start
        const escapedMatch = match[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        cleaned = cleaned.replace(new RegExp(`^${escapedMatch}[,\\s-]*`, 'i'), '');
      }
    }
  }

  return cleaned.trim();
};

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
                      {(() => {
                        const title = formatTitle(chair.position, chair.organization, name);
                        const affiliation = formatAffiliation(chair.organization, chair.position, title);
                        return (
                          <>
                            {title && (
                              <p className="text-base font-extrabold text-gray-100 mt-2">
                                {title}
                              </p>
                            )}
                            {affiliation && (
                              <p className="text-sm font-normal text-gray-300 mt-1">
                                {affiliation}
                              </p>
                            )}
                          </>
                        );
                      })()}
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
