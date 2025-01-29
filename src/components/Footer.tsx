import React from "react";
// import { Building2 } from 'lucide-react';
import logo from "../assets/tax-logo.webp";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            {/* <Building2 className="w-8 h-8 mr-2" /> */}
            <img src={logo} alt="" className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold">Simplicon Tax Advisors</span>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Simplicon Tax Advisors. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
