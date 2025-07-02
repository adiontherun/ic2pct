import { Mail, Phone, MapPin, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">IC2PCT-2026</h3>
            <p className="text-blue-100 mb-4">
              2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">15-17 May, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Galgotias University, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="/call-for-papers" className="hover:text-white transition-colors">Call for Papers</a></li>
              <li><a href="/registration" className="hover:text-white transition-colors">Registration</a></li>
              <li><a href="/program" className="hover:text-white transition-colors">Program</a></li>
              <li><a href="/speakers" className="hover:text-white transition-colors">Speakers</a></li>
            </ul>
          </div>

          {/* Important Dates */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Important Dates</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>Paper Submission: Will update</li>
              <li>Review Results: Will update</li>
              <li>Final Submission: Will update</li>
              <li>Registration: Will update</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">ic2pct@galgotiasuniversity.edu.in</span>
              </div>
              
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; 2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies (IC2PCT-2026). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
