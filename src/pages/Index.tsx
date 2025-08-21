import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import UniversityMap from "@/components/UniversityMap";
import CountdownTimer from "@/components/CountdownTimer";
import LogoCarousel from '@/components/LogoCarousel';
import Acknowledgement from '@/components/Acknowledgement';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Image Slider */}
      <ImageSlider />

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">IC2PCT-2026</h1>
          <h2 className="text-2xl mb-6">2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us for the premier conference bringing together researchers, academicians, and industry professionals
            to share cutting-edge research in computing and communication technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>15-17 May, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Galgotias University, Greater Noida</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>500+ Participants Expected</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Link to="/registration">Register Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-blue-900 hover:bg-white hover:text-blue-900">
              <Link to="/call-for-papers">Submit Paper</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Information Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Conference Highlights</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-blue-900 flex items-center justify-center gap-3">
                  <Calendar className="h-6 w-6" />
                  Important Dates
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Mark your calendar for these key conference milestones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-900">
                    <h4 className="font-semibold text-blue-900 mb-2">Abstract Submission Deadline</h4>
                    <p className="text-gray-700 text-lg">02 January 2026</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-700 mb-2">Full Paper Submission Deadline</h4>
                    <p className="text-gray-700 text-lg">31 March 2026</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-700 mb-2">Acceptance Notification</h4>
                    <p className="text-gray-700 text-lg">15 April 2026</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <h4 className="font-semibold text-purple-700 mb-2">Final Paper Submission</h4>
                    <p className="text-gray-700 text-lg">30 April 2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Conference */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">About IC2PCT-2026</h2>
            <p className="text-lg text-gray-600 mb-6">
              The 2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies (IC2PCT-2026)
              is a premier forum for researchers, academicians, and industry professionals to present and
              discuss the most recent innovations, trends, and concerns in the field of computing, power, and
              communication technologies.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              This conference provides an excellent opportunity for participants to learn about state-of-the-art
              research results and to discuss emerging areas of research. It also creates a platform for
              researchers to meet and discuss their ideas that will result in collaborative research in different areas.
            </p>
            <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800">
              <Link to="/call-for-papers">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Conference Tracks */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Conference Tracks</h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            We welcome submissions in the following areas.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Track 1: Computing */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-blue-900">Track 1: Computing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Big Data, Cloud Computing, and Quantum Computing</li>
                  <li>• AI, AIoT, IIoT, Deep Learning, and Machine Learning</li>
                  <li>• Cyber Security and Humanitarian Technologies</li>
                  <li>• Blockchain Applications</li>
                  <li>• AR, VR, and Metaverse</li>
                  <li>• Human-Computer Interface (HCI)</li>
                  <li>• Robotics, UAV, and Unmanned Vehicle Technologies</li>
                  <li>• Smart Manufacturing and Industry 5.0</li>
                  <li>• Healthcare Applications</li>
                  <li>• Cyber Physical Systems</li>
                  <li>• Software Engineering and Agile Development</li>
                  <li>• Multimedia and Web Services Agents</li>
                  <li>• Knowledge-based Systems</li>
                  <li>• Pervasive Computing and Ambient Intelligence</li>
                  <li>• Bioinformatics</li>
                  <li>• Heuristic and AI Planning Strategies and Tools</li>
                  <li>• Computational Theories of Learning</li>
                  <li>• Recent Trends and Developments</li>
                </ul>
              </CardContent>
            </Card>

            {/* Track 2: Power */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-blue-900">Track 2: Power</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Renewable Energy Technologies Including Hydrogen</li>
                  <li>• Renewable Energy Technologies (e.g., Solar, Wind, Hydro, Biomass)</li>
                  <li>• Integration of Renewable Energy Sources into the Grid</li>
                  <li>• Energy Storage Systems (e.g., Batteries, Supercapacitors, Flywheels)</li>
                  <li>• Energy Efficiency and Conservation Strategies</li>
                  <li>• Demand Response and Load Management</li>
                  <li>• Modern Power Electronics, Drives and Control, Electric Vehicles</li>
                  <li>• Electric Vehicles and Charging Infrastructure</li>
                  <li>• Power Semiconductor Devices and Applications</li>
                  <li>• Smart Grid Technologies and Power System Management</li>
                  <li>• Power System Modeling and Simulation</li>
                  <li>• Electric Power Generation and Distribution</li>
                  <li>• Power System Optimization and Smart Metering</li>
                  <li>• Distributed Generation and Microgrids</li>
                  <li>• High Voltage Engineering and Insulation Systems</li>
                  <li>• Power Quality and Reliability</li>
                  <li>• Advanced Power System Protection and Control</li>
                  <li>• Power System Management Technologies</li>
                  <li>• Power System Cybersecurity</li>
                  <li>• Artificial Intelligence for Power Systems and Smart Grid</li>
                  <li>• Smart Cities & Technologies for Sustainable Development</li>
                </ul>
              </CardContent>
            </Card>

            {/* Track 3: Communication */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-blue-900">Track 3: Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Antennas and Propagation</li>
                  <li>• Radio Frequency and Microwave Engineering</li>
                  <li>• Optical Communication and Fiber Optics</li>
                  <li>• Satellite Communication Systems</li>
                  <li>• Wireless/Radio Access Technologies</li>
                  <li>• 5G Applications, Emerging 6G Technologies</li>
                  <li>• Mobile Communication and Network Architecture</li>
                  <li>• Communication Networks and Protocols</li>
                  <li>• Ad Hoc and Sensor Networks</li>
                  <li>• Wireless Sensor Networks</li>
                  <li>• Machine-to-Machine (M2M) Communication</li>
                  <li>• Multi-Access Edge Computing (MEC) and Cloud RAN</li>
                  <li>• Signal Processing for Communications</li>
                  <li>• Data Transmission and Coding Techniques</li>
                  <li>• Internet of Things (IoT)</li>
                  <li>• IoT Hardware Security</li>
                  <li>• Healthcare and Wireless Sensor Networks</li>
                  <li>• Network Security and Privacy</li>
                  <li>• Communication System Design and Optimization</li>
                  <li>• Communication in Smart Cities and Smart Grids</li>
                  <li>• Ubiquitous Computing and Communication</li>
                  <li>• Interference Management and Spectrum Sharing</li>
                  <li>• Communication for Autonomous Systems and Vehicles</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative py-16 overflow-hidden">
        {/* Background image layer with reduced opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('https://www.galgotiasuniversity.edu.in/public/uploads/media/ZE6Pp0UjcqM3YePbTNhicYhR1rGh2DpcnSgKbFMH.webp')", opacity: 0.3 }}
        />

        {/* Foreground content stays fully visible */}
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center justify-between">
              {/* Text content on left */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">About Galgotias University</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Galgotias University is a leading private university in India, established in 2011 and located in
                  Greater Noida, Uttar Pradesh. Known for its state-of-the-art infrastructure and commitment to
                  academic excellence, the university offers world-class education across various disciplines.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  With over 20,000+ students from 50+ countries, Galgotias University has established itself as a
                  global education hub. The university is equipped with modern laboratories, research facilities,
                  and industry partnerships that provide students with hands-on experience and exposure to cutting-edge technologies.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  The university's School of Computing Science & Engineering is particularly renowned for its
                  research contributions in areas such as Artificial Intelligence, Machine Learning, IoT,
                  Cybersecurity, and Data Science - making it the perfect venue for the 2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies (IC2PCT-2026).
                </p>
                <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800">
                  <a
                    href="https://www.galgotiasuniversity.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit University Website
                  </a>
                </Button>
              </div>

              {/* Campus image on right */}
              <div className="order-first lg:order-last">
                <img
                  src="https://www.galgotiasuniversity.edu.in/public/uploads/media/ZE6Pp0UjcqM3YePbTNhicYhR1rGh2DpcnSgKbFMH.webp"
                  alt="Galgotias University Campus"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <div>
        <LogoCarousel />
      </div>

      {/* Acknowledgement Section */}
      <Acknowledgement />

      {/* University Location Map */}
      <section className="py-16">
        <div className="container mx-100 px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Conference Venue</h2>
          <p className="text-center text-lg text-gray-600 mb-8">
            Galgotias University, Plot No. 2, Sector 17-A, Yamuna Expressway, Greater Noida, Uttar Pradesh 203201, India
          </p>
          <UniversityMap />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
