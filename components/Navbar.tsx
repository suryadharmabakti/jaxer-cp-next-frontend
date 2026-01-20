"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="img/Logo - Jaxer.png"
              alt="Jaxer Grup Indonesia"
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Portfolio
            </a>
            <a
              href="#team"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Contact
            </a>
            <a
              href="/"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Main Site
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            <i className="fas fa-bars text-gray-700"></i>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <a href="#home" className="block py-2 text-gray-700">
              Home
            </a>
            <a href="#about" className="block py-2 text-gray-700">
              About
            </a>
            <a href="#services" className="block py-2 text-gray-700">
              Services
            </a>
            <a href="#portfolio" className="block py-2 text-gray-700">
              Portfolio
            </a>
            <a href="#team" className="block py-2 text-gray-700">
              Team
            </a>
            <a href="#contact" className="block py-2 text-gray-700">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
