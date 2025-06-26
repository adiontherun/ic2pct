import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, CheckCircle, Download } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CallForPapers = () => {
  const conferenceTracks = [
    {
      title: "Track 1: Computing",
      scopes: [
        "Big Data, Cloud Computing, and Quantum Computing",
        "AI, AIoT, IIoT, Deep Learning, and Machine Learning",
        "Cyber Security and Humanitarian Technologies",
        "Blockchain Applications",
        "AR, VR, and Metaverse",
        "Human-Computer Interface (HCI)",
        "Robotics, UAV, and Unmanned Vehicle Technologies",
        "Smart Manufacturing and Industry 5.0",
        "Healthcare Applications",
        "Cyber Physical Systems",
        "Software Engineering and Agile Development",
        "Multimedia and Web Services Agents",
        "Cloud Computing",
        "Knowledge-based Systems",
        "Pervasive Computing and Ambient Intelligence",
        "Bioinformatics",
        "Heuristic and AI Planning Strategies and Tools",
        "Computational Theories of Learning",
        "Recent Trends and Developments",
      ],
    },
    {
      title: "Track 2: Power",
      scopes: [
        "Renewable Energy Technologies Including Hydrogen",
        "Renewable Energy Technologies (e.g., Solar, Wind, Hydro, Biomass)",
        "Integration of Renewable Energy Sources into the Grid",
        "Energy Storage Systems (e.g., Batteries, Supercapacitors, Flywheels)",
        "Energy Efficiency and Conservation Strategies",
        "Demand Response and Load Management",
        "Modern Power Electronics, Drives and Control, Electric Vehicles",
        "Modern Power Electronics and Drives",
        "Electric Vehicles and Charging Infrastructure",
        "Power Semiconductor Devices and Applications",
        "Smart Grid Technologies and Power System Management",
        "Power System Modeling and Simulation",
        "Electric Power Generation and Distribution",
        "Power System Optimization and Smart Metering",
        "Distributed Generation and Microgrids",
        "High Voltage Engineering and Insulation Systems",
        "Power Quality and Reliability",
        "Advanced Power System Protection and Control",
        "Power System Management Technologies",
        "Power System Cybersecurity",
        "Artificial Intelligence for Power Systems and Smart Grid",
        "Smart Cities & Technologies for Sustainable Development",
      ],
    },
    {
      title: "Track 3: Communication",
      scopes: [
        "Antennas and Propagation",
        "Radio Frequency and Microwave Engineering",
        "Optical Communication and Fiber Optics",
        "Satellite Communication Systems",
        "Wireless/Radio Access Technologies",
        "5G Applications, Emerging 6G Technologies",
        "Mobile Communication and Network Architecture",
        "Communication Networks and Protocols",
        "Ad Hoc and Sensor Networks",
        "Wireless Sensor Networks",
        "Machine-to-Machine (M2M) Communication",
        "Multi-Access Edge Computing (MEC) and Cloud RAN",
        "Signal Processing for Communications",
        "Data Transmission and Coding Techniques",
        "Internet of Things (IoT)",
        "IoT Hardware Security",
        "Healthcare and Wireless Sensor Networks",
        "Network Security and Privacy",
        "Communication System Design and Optimization",
        "Communication in Smart Cities and Smart Grids",
        "Ubiquitous Computing and Communication",
        "Interference Management and Spectrum Sharing",
        "Communication for Autonomous Systems and Vehicles",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Call for Papers</h1>
          <p className="text-xl">Submit your research to IC2PCT 2025</p>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=400&fit=crop"
            alt="Paper Template"
            className="w-full max-w-2xl mx-auto h-64 object-cover rounded-lg shadow-lg mb-8"
          />
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Download Paper Template</h2>
          <p className="text-gray-600 mb-6">
            Download the official IEEE paper template for IC2PCT 2025. Please ensure your submission
            follows the template format and guidelines.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
              <Download className="h-5 w-5 mr-2" />
              Download LaTeX Template
            </Button>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="container mx-auto px-4 space-y-8">

          {/* Important Dates */}
          <Card className="w-full bg-blue-900 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-white" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Paper Submission Deadline:</p>
                  <p className="text-red-300">Will update</p>
                </div>
                <div>
                  <p className="font-semibold">Notification of Acceptance:</p>
                  <p>Will update</p>
                </div>
                <div>
                  <p className="font-semibold">Camera Ready Submission:</p>
                  <p>Will update</p>
                </div>
                <div>
                  <p className="font-semibold">Registration Deadline:</p>
                  <p>Will update</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conference Tracks */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Conference Tracks</CardTitle>
              <CardDescription>
                We welcome submissions in the following areas. Click on each track to see the scopes of interest.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {conferenceTracks.map((track, index) => (
                  <AccordionItem value={`item-${index + 1}`} key={track.title}>
                    <AccordionTrigger className="text-blue-900 font-semibold">{track.title}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-gray-600 list-disc list-inside pl-4">
                        {track.scopes.map((scope) => (
                          <li key={scope}>{scope}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Submission Guidelines */}
          <Card className="w-full bg-blue-900 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-white" />
                Submission Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Paper Format:</h4>
                  <ul className="space-y-1 text-gray-200">
                    <li>• English only</li>
                    <li>• 6 pages max for full, 4 for short</li>
                    <li>• IEEE format required</li>
                    <li>• Single column, 12pt Times New Roman</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Submission Process:</h4>
                  <ul className="space-y-1 text-gray-200">
                    <li>• Submit via EasyChair</li>
                    <li>• Must be original work</li>
                    <li>• Double-blind peer review</li>
                    <li>• One author must register</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Publication & Indexing */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Publication & Indexing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">
                Accepted papers will be published and submitted to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>IEEE Digital Library</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Scopus</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Web of Science (under review)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Google Scholar</span>
                </li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CallForPapers;
