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
          <h1 className="text-5xl font-bold mb-4">IC2PCT 2026</h1>
          <h2 className="text-2xl mb-6">International Conference on Innovative Computing and Communication Technologies</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us for the premier conference bringing together researchers, academicians, and industry professionals
            to share cutting-edge research in computing and communication technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>February 7-8, 2026</span>
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
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-900">Important Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Paper Submission:</strong> Will update</p>
                  <p><strong>Review Results:</strong> Will update</p>
                  <p><strong>Final Submission:</strong> Will update</p>
                  <p><strong>Registration Deadline:</strong> Will update</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-900">Conference Tracks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>• Computing</p>
                  <p>• Communication</p>
                  
                  <p>• Power</p>
                 
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-900">Publication</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>Selected papers will be published in:</p>
                  <p><strong>IEEE Digital Library</strong></p>
                  <p><strong>Scopus Indexed</strong></p>
                  <p><strong>Conference Proceedings</strong></p>
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
            <h2 className="text-3xl font-bold mb-8 text-gray-800">About IC2PCT 2026</h2>
            <p className="text-lg text-gray-600 mb-6">
              The International Conference on Innovative Computing and Communication Technologies (IC2PCT)
              is a premier forum for researchers, academicians, and industry professionals to present and
              discuss the most recent innovations, trends, and concerns in the field of computing and
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
            Cybersecurity, and Data Science - making it the perfect venue for IC2PCT 2026.
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
