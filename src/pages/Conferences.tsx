import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const previousConferences = [
  { year: "2024", url: "#" },
  { year: "2021", url: "#" },
  { year: "2020", url: "#" },
  { year: "2019", url: "#" },
  { year: "2018", url: "#" },
];

const Conferences = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-600 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">Previous Conferences</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {previousConferences.map((conf, idx) => (
            <div
              key={conf.year}
              className="bg-blue-100 rounded-lg flex items-center justify-center h-56 shadow-md mx-auto w-full max-w-md"
              style={{ gridColumn: idx < 3 ? undefined : "span 1 / span 1" }}
            >
              <a
                href={conf.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block px-12 py-4 rounded-full text-white text-xl font-semibold transition-all duration-200 ${conf.year === "2024" ? "bg-blue-900" : "bg-blue-600 hover:bg-blue-700"}`}
              >
                {conf.year}
              </a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Conferences;
