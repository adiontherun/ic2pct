
import { MapPin } from "lucide-react";

const UniversityMap = () => {
  return (
    <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://maps.google.com/maps?q=28.3669,77.5413&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Galgotias University Location"
        className="w-full h-full"
      />
    </div>
  );
};

export default UniversityMap;
