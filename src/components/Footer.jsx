import { Activity } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold">PowerGym</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-lg">
              Transform your body and mind with our state-of-the-art facilities, 
              expert trainers, and supportive community. Your fitness journey starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Twitter
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#membership" className="text-gray-400 hover:text-red-500 transition-colors">Membership</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-red-500 transition-colors">Programs</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-red-500 transition-colors">Trainers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Fitness Street</li>
              <li>Downtown, NY 10001</li>
              <li>(555) 123-4567</li>
              <li>info@powergym.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 PowerGym. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;