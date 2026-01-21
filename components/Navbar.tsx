"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="img/Logo - Jaxer.png"
              alt="Jaxer Grup Indonesia"
              className={`h-12 w-auto transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Portfolio", href: "#portfolio" },
              { name: "Team", href: "#team" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
            <Link
              href="/"
              className={`px-6 py-2 rounded-full transition duration-300 ${
                isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-blue-600 hover:bg-gray-100"
              }`}
            >
              Main Site
            </Link>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            {[
              "Home",
              "About",
              "Services",
              "Portfolio",
              "Team",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
