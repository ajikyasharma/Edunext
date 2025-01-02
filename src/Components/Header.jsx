import React, { useState } from "react";
import { Menu, Close, Phone, Email } from "@mui/icons-material";
import logo from '../assets/logo.svg'
import { Facebook, LinkedIn, YouTube, Instagram, Twitter } from "@mui/icons-material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full shadow-md bg-white">
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto  max-w-7xl flex justify-between items-center px-4 text-sm text-gray-700">
          <div className=" hidden sm:flex items-center space-x-4">
            <a href="tel:+917065965900" className="flex items-center space-x-1 text-blue-600">
              <Phone className="text-blue-600" />
              <span>+91 70659 65900</span>
            </a>
            <a href="mailto:sales@edunexttechnologies.com" className="flex items-center space-x-1 text-blue-600">
              <Email className="text-blue-600" />
              <span>sales@edunexttechnologies.com</span>
            </a>
          </div>
          <div className=" hidden sm:flex space-x-2">
            <Facebook className="text-blue-600 cursor-pointer" />
            <LinkedIn className="text-blue-600 cursor-pointer" />
            <YouTube className="text-blue-600 cursor-pointer" />
            <Instagram className="text-blue-600 cursor-pointer" />
            <Twitter className="text-blue-600 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl flex justify-between items-center px-4 py-4">
        <img src={logo} alt="Logo" className="h-10" />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6">
          <button className="text-blue-900 font-medium">School ERP</button>

          <div className="relative group">
            <button className="text-blue-900 font-medium">Services<span>< ArrowDropDownIcon /></span></button>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md">
              <li className="px-4 py-2 hover:bg-gray-100">School Management Software</li>
              <li className="px-4 py-2 hover:bg-gray-100">School Mobile App</li>
              <li className="px-4 py-2 hover:bg-gray-100">E-learning Software</li>
              <li className="px-4 py-2 hover:bg-gray-100">Website Designing</li>
              <li className="px-4 py-2 hover:bg-gray-100">Digital Marketing</li>
              <li className="px-4 py-2 hover:bg-gray-100">RFID System</li>
              <li className="px-4 py-2 hover:bg-gray-100">Advance Vehicle Tracking</li>
              <li className="px-4 py-2 hover:bg-gray-100">Talking School ERP</li>
              <li className="px-4 py-2 hover:bg-gray-100">CBSE Result ANalysis</li>
            </ul>
          </div>

          <div className="relative group">
            <button className="text-blue-900 font-medium">Know Us<span>< ArrowDropDownIcon /></span></button>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md">
              <li className="px-4 py-2 hover:bg-gray-100">About Edunext</li>
              <li className="px-4 py-2 hover:bg-gray-100">Life @ Edunext</li>
              <li className="px-4 py-2 hover:bg-gray-100">Implementation Strength</li>
              <li className="px-4 py-2 hover:bg-gray-100">Technical Strength</li>
            </ul>
          </div>

          <button className="text-blue-900 font-medium">Clientele</button>

          <div className="relative group">
            <button className="text-blue-900 font-medium">Let's Connect<span>< ArrowDropDownIcon /></span></button>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md">
              <li className="px-4 py-2 hover:bg-gray-100">Careers</li>
              <li className="px-4 py-2 hover:bg-gray-100">Reach Us</li>
            </ul>
          </div>

          <div className="relative group">
            <button className="text-blue-900 font-medium">Blogs<span>< ArrowDropDownIcon /></span></button>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md">
              <li className="px-4 py-2 hover:bg-gray-100">Edunext Blogs</li>
              <li className="px-4 py-2 hover:bg-gray-100">Top 10 School ERP Software</li>
              <li className="px-4 py-2 hover:bg-gray-100">Top 10 School Management Software</li>
              <li className="px-4 py-2 hover:bg-gray-100">Top 10 School Mobile Apps</li>
              <li className="px-4 py-2 hover:bg-gray-100">Top 10 E-learning Software</li>
            </ul>
          </div>

        </nav>
        <button className="text-blue-900 font-medium">Contact Us</button>
        {/* Hamburger Menu */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {menuOpen ? <Close className="text-blue-900" /> : <Menu className="text-blue-900" />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col space-y-4 p-4">
            <a href="tel:+917065965900" className="flex items-center space-x-2 text-blue-900">
              <Phone />
              <span>Call Us</span>
            </a>
            <a href="mailto:sales@edunexttechnologies.com" className="flex items-center space-x-2 text-blue-900">
              <Email />
              <span>Email Us</span>
            </a>
            <button className="text-blue-900">Products</button>
            <button className="text-blue-900">Solutions</button>
            <button className="text-blue-900">Contact Us</button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
