import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Call for Papers", path: "/call-for-papers" },
    { name: "Committee", path: "/committee" },
    { name: "Program", path: "/program" },
    { name: "For Authors", path: "/for-authors" },
    { name: "Registration", path: "/registration" },
    { name: "Speakers", path: "/speakers" },
    { name: "Conferences", path: "/conferences" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-blue-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 flex-wrap">
          {/* Logos */}
          <div className="flex items-center space-x-2 flex-wrap max-w-full">
            <img
              src="/images/gu.jpg"
              alt="Logo 3"
              className="h-8 w-auto rounded-full max-w-[130px] sm:max-w-[130px] object-cover"
            />
            <img
              src="/images/ic2pct.jpg"
              alt="Logo 4"
              className="h-8 w-auto max-w-[70px] sm:max-w-[100px] object-contain"
            />
            <img
              src="/images/ieeelogo.webp"
              alt="Logo 4"
              className="h-8 w-auto max-w-[70px] sm:max-w-[100px] object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-white text-blue-900"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://cmt3.research.microsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 rounded-full bg-white text-blue-900 font-semibold shadow hover:bg-blue-100 transition-colors border border-white"
            >
              Submit Paper
            </a>
          </div>

          {/* Mobile menu button (always white icon) */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white" // make icon white
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 rounded-full text-white" /> // white X icon
            ) : (
              <Menu className="h-6 w-6 text-white" /> // white Menu icon
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-blue-900 text-white"
                      : "text-white hover:text-blue-900 hover:bg-blue-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
