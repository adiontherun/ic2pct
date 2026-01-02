import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isCommitteeDropdownOpen, setIsCommitteeDropdownOpen] = useState(false); // Removed unused state
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Registration", path: "/registration" },
    { name: "Committee", path: "/committee" },
    {
      name: "Keynote Sessions",
      disabled: true,
      dropdown: [
        { name: "Message from Chairman AICTE", path: "/message-aicte" },
        { name: "Speakers", path: "/speakers" }
      ]
    },
    {
      name: "Previous Conferences",
      dropdown: [
        { name: "2021", path: "https://ieeexplore.ieee.org/xpl/conhome/9601831/proceeding", external: true },
        { name: "2020", path: "https://ieeexplore.ieee.org/xpl/conhome/9313012/proceeding", external: true },
        { name: "2018", path: "https://ieeexplore.ieee.org/xpl/conhome/8776840/proceeding", external: true },
        { name: "2017", path: "https://ieeexplore.ieee.org/xpl/conhome/8229712/proceeding", external: true },
        { name: "2016", path: "https://ieeexplore.ieee.org/xpl/conhome/7830026/proceeding", external: true },
        { name: "2015", path: "https://www.iccca.co.in/previous-conferences/2015/", external: true },
      ]
    },
    {
      name: "Schedule",
      disabled: true,
      dropdown: [
        { name: "Presentation Schedule", path: "/schedule/presentation" },
        { name: "Keynote Schedule", path: "/schedule/keynote" }
      ]
    },
    { name: "Guidelines", path: "/guidelines" },
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
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative group" // Changed to group for CSS hover
                  >
                    <button
                      disabled={item.disabled}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${location.pathname.startsWith(item.navPathPrefix || item.name.toLowerCase().replace(' ', '-'))
                        ? "bg-white text-blue-900"
                        : "text-white hover:bg-blue-800"
                        } ${item.disabled ? "opacity-50 cursor-not-allowed hover:bg-transparent" : ""}`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {!item.disabled && (
                      <div className="absolute top-full left-0 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50 hidden group-hover:block">
                        {item.dropdown.map((dropdownItem) => (
                          dropdownItem.external ? (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors first:rounded-t-md last:rounded-b-md"
                            >
                              {dropdownItem.name}
                            </a>
                          ) : (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className={`block px-4 py-2 text-sm transition-colors first:rounded-t-md last:rounded-b-md ${isActive(dropdownItem.path)
                                ? "bg-blue-900 text-white"
                                : "text-gray-700 hover:bg-gray-100"
                                }`}
                            >
                              {dropdownItem.name}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.path)
                    ? "bg-white text-blue-900"
                    : "text-white hover:bg-blue-800"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <a
              href="https://cmt3.research.microsoft.com/ICCPCT2026/Submission/Manage"
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
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.name} className="space-y-1">
                      <div className="px-3 py-2 text-sm font-medium text-white border-b border-blue-800">
                        {item.name}
                      </div>
                      {item.dropdown.map((dropdownItem) => (
                        dropdownItem.external ? (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-6 py-2 rounded-md text-sm font-medium text-white hover:text-blue-900 hover:bg-blue-50 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </a>
                        ) : (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className={`block px-6 py-2 rounded-md text-sm font-medium transition-colors ${isActive(dropdownItem.path)
                              ? "bg-white text-blue-900"
                              : "text-white hover:text-blue-900 hover:bg-blue-50"
                              }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        )
                      ))}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.path)
                      ? "bg-white text-blue-900"
                      : "text-white hover:text-blue-900 hover:bg-blue-50"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
