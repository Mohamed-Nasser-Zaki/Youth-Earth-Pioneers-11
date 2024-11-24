import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sprout className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Youth Earth Pioneers</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</Link>
            <Link to="/projects" className="text-gray-700 hover:text-emerald-600 transition-colors">Projects</Link>
            <Link to="/mentorship" className="text-gray-700 hover:text-emerald-600 transition-colors">Mentorship</Link>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors">
              Join Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">About</Link>
            <Link to="/projects" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Projects</Link>
            <Link to="/mentorship" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Mentorship</Link>
            <button className="w-full text-left px-3 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;