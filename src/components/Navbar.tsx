import { HashLink } from "react-router-hash-link";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";
import MIlogo from "../public/MIlogo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "PROJECTS", href: "/#projects" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <HashLink to="/" className="flex items-center">
              {/* <Building2 className="h-8 w-8 text-blue-600" /> */}
              {/* add logo image */}
              <img src={MIlogo} alt="logo" className="w-20" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Maruti Group
              </span>
            </HashLink>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <HashLink
                key={item.name}
                to={item.href}
                smooth
                className="text-gray-600 hover:text-blue-600 transition-colors font-semibold"
              >
                {item.name}
              </HashLink>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <HashLink
                key={item.name}
                to={item.href}
                smooth
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </HashLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
