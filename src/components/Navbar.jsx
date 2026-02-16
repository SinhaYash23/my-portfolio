import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex shrink-0">
            <span className="text-2xl font-bold text-purple-900">
              YashSinha
            </span>
          </div>
          <div className="md:flex space-x-8 font-medium font-bold text-gray-900">
            <a href="#" className="hover:text-blue-700">
              Home
            </a>
            <a href="#" className="hover:text-blue-700">
              About
            </a>
            <a href="#" className="hover:text-blue-700">
              Services
            </a>
            <a href="#" className="hover:text-blue-700">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
