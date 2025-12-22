import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Contact Us</h1>
                <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Contact details will be available here.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
