
import { MapPin } from "lucide-react";

const UniversityMap = () => {
  return (
    <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.8654321!2d77.5322!3d28.4718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea6b49f5a2e9%3A0x4b3b3e7e8a7e8b1a!2sGalgotias%20University!5e0!3m2!1sen!2sin!4v1635123456789!5m2!1sen!2sin"
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
