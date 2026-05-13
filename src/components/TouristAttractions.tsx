import React, { useState } from "react";
import { MapPin, Navigation, ArrowRight } from "lucide-react";

const attractions = [
  {
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    description:
      "An iconic ivory-white marble mausoleum, universally admired as a masterpiece of world heritage and an enduring symbol of love.",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
    mapUrl: "https://goo.gl/maps/Taj+Mahal",
    colSpan: "md:col-span-2",
  },
  {
    name: "Red Fort",
    location: "New Delhi",
    description:
      "A historic 17th-century fort that served as the main residence of the Mughal emperors, known for its massive red sandstone walls.",
    image:
      "https://images.unsplash.com/photo-1705861144413-f02e38354648?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapUrl: "https://goo.gl/maps/Red+Fort",
    colSpan: "md:col-span-1",
  },
  {
    name: "Qutub Minar",
    location: "New Delhi",
    description:
      "A soaring 73-meter tall minaret and UNESCO World Heritage Site, featuring exquisite early Afghan architecture and intricate carvings.",
    image:
      "https://images.unsplash.com/photo-1632426237957-5ea14aae7100?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapUrl: "https://goo.gl/maps/Qutub+Minar",
    colSpan: "md:col-span-1",
  },
  {
    name: "India Gate",
    location: "New Delhi",
    description:
      "A majestic war memorial astride the Rajpath, standing as a solemn tribute to Indian soldiers, beautifully illuminated at night.",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
    mapUrl: "https://goo.gl/maps/India+Gate",
    colSpan: "md:col-span-1",
  },
  {
    name: "Haridwar",
    location: "Uttarakhand",
    description:
      "One of Hinduism's holiest cities, famous for the mesmerizing evening Ganga Aarti at the sacred Har Ki Pauri ghat.",
    image: "/places/haridwar.jpg",
    mapUrl: "https://goo.gl/maps/Haridwar",
    colSpan: "md:col-span-1",
  },
  {
    name: "Rishikesh",
    location: "Uttarakhand",
    description:
      "The 'Yoga Capital of the World', nestled in the serene foothills of the Himalayas along the holy Ganges River.",
    image: "/places/rishi.jpg",
    mapUrl: "https://goo.gl/maps/Rishikesh",
    colSpan: "md:col-span-2",
  },
];

const TouristAttractions = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (mapUrl: string) => {
    window.open(mapUrl, "_blank");
  };

  return (
    <section className="relative py-24 bg-[#FAFAFA] overflow-hidden">
      {/* Subtle background grain texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/5 border border-blue-900/10 text-blue-900 text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              <span>Explore NCR & Beyond</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-gray-900 tracking-tight leading-tight mb-6">
              Heritage <span className="italic text-gray-500 font-light">&</span> Horizons
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Discover the profound history, spiritual sanctuaries, and architectural marvels that surround the region. A curated journey for our conference attendees.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {attractions.map((place, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-700 ease-out flex flex-col ${place.colSpan} ${index === 0 || index === 5 ? 'row-span-2' : 'row-span-1'}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Layer */}
              <div className="absolute inset-0 bg-gray-200 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className={`w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                    hoveredIndex === index ? "scale-110 blur-sm" : "scale-100"
                  }`}
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent transition-opacity duration-500 ${hoveredIndex === index ? "opacity-60" : "opacity-100"}`} />
              </div>

              {/* Map Layer (Revealed on Hover) */}
              <div
                className={`absolute inset-0 bg-white transition-opacity duration-700 ease-in-out ${
                  hoveredIndex === index ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
              >
                {hoveredIndex === index && (
                  <iframe
                    title={`${place.name} Location`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(place.name)}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="opacity-0 animate-[fadeIn_0.5s_ease-out_0.2s_forwards]"
                  />
                )}
                {/* Overlay gradient over map to make text readable */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
              </div>

              {/* Number Overlay */}
              <div className={`absolute top-6 left-6 z-20 overflow-hidden transition-opacity duration-500 ${hoveredIndex === index ? "opacity-0" : "opacity-100"}`}>
                <span className="text-5xl font-serif font-bold text-white/30 drop-shadow-lg select-none leading-none mix-blend-overlay">
                  0{index + 1}
                </span>
              </div>

              {/* Content Overlay */}
              <div className={`absolute inset-0 p-8 flex flex-col justify-end transition-transform duration-500 pointer-events-none`}>
                <div className={`transform transition-all duration-500 ${hoveredIndex === index ? "translate-y-0" : "translate-y-4"}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Navigation className={`h-4 w-4 transition-colors duration-300 ${hoveredIndex === index ? "text-blue-600" : "text-gray-300"}`} />
                    <span className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${hoveredIndex === index ? "text-blue-600" : "text-gray-300"}`}>
                      {place.location}
                    </span>
                  </div>
                  <h3 className={`text-3xl font-serif mb-3 transition-colors duration-300 ${hoveredIndex === index ? "text-gray-900" : "text-white"}`}>
                    {place.name}
                  </h3>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${hoveredIndex === index || index === 0 || index === 5 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className={`line-clamp-3 mb-6 transition-colors duration-300 ${hoveredIndex === index ? "text-gray-600" : "text-gray-200"}`}>
                      {place.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleClick(place.mapUrl)}
                    className={`pointer-events-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-300 backdrop-blur-md ${
                      hoveredIndex === index
                        ? "bg-blue-900 text-white hover:bg-blue-800 shadow-lg"
                        : "bg-white/20 text-white hover:bg-white/30 border border-white/30"
                    }`}
                  >
                    Open Map
                    <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${hoveredIndex === index ? "translate-x-1" : ""}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default TouristAttractions;
