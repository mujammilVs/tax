import React, { useState } from "react";
// import { Building2, Menu, X } from 'lucide-react';
import logo from "../assets/tax-logo.webp";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <div className="flex items-center">
              {/* <Building2 className="w-8 h-8 text-white" /> */}

              <img src={logo} alt="" className="w-8 h-8 text-" />
              <span className="ml-2 text-3xl  text-white font-light">
                Simplicon Tax Advisors
              </span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-white hover:text-primary transition-colors ${
                location.pathname === "/" ? "text-last underline" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-white hover:text-primary transition-colors ${
                location.pathname === "/services" ? "text-last underline" : ""
              }`}
            >
              Services
            </Link>
            <Link
              to="/auth"
              className="bg-secondary text-last px-4 py-2 rounded-lg  "
            >
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-last">
              {isMenuOpen ? (
                <X className="w-6 h-6 text-last" />
              ) : (
                <Menu className="w-6 h-6 text-last" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-last hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-last hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                to="/auth"
                onClick={() => setIsMenuOpen(false)}
                className="bg-primary text-last px-4 py-2 rounded-lg hover:text-primary transition-colors hover:bg-background"
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
