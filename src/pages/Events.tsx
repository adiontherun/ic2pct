import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const events = [
  {
    name: "AI Nexus",
    poster: "/ai nexus.jpeg",
    description:
      "Explore the cutting-edge intersection of Artificial Intelligence and real-world applications. AI Nexus brings together researchers, students, and industry experts to showcase innovations in machine learning, deep learning, and intelligent systems.",
  },
  {
    name: "Eco Vision",
    poster: "/eco vision.png",
    description:
      "A platform dedicated to sustainable technologies and green computing. Eco Vision highlights research and ideas that drive environmental responsibility through technology, energy-efficient solutions, and smart sustainability practices.",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Events</h1>
          <p className="text-lg text-blue-200">
            IC2PCT-2026 — Conference Events & Activities
          </p>
        </div>
      </div>

      {/* Events Section */}
      <main className="flex-1 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {events.map((event) => (
              <div
                key={event.name}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              >
                {/* Poster */}
                <div className="w-full overflow-hidden bg-gray-50">
                  <img
                    src={event.poster}
                    alt={`${event.name} Poster`}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-2xl font-bold text-blue-900 mb-3">
                    {event.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
