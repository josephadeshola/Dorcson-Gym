import { useState } from "react";
import { Menu, X, Activity,  User  } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Membership", href: "/membership" },
    { name: "Programs", href: "/programs" },
    { name: "Trainers", href: "/trainers" },
    { name: "Equipment", href: "/equipment" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-red-500" />
            <span className="text-xl font-bold text-white">DorcsonGym</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/auth/login">
              <Button variant="ghost" className="text-gray-300 cursor-pointer hover:text-white hover:bg-gray-800">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/auth/register">
              <Button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white">
                Join Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Link to="/auth/login">
              <Button variant="ghost" className="text-gray-300 cursor-pointer hover:text-white hover:bg-gray-800">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
           <Link to="/auth/register">
            <Button className="w-full mt-4 bg-red-600 cursor-pointer hover:bg-red-700 text-white">
              Join Now
            </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
