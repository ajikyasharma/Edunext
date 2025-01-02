import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="bg-blue-500 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3">
            <PhoneIcon />
            <div>
              <p>Sales Enquiry</p>
              <p className="font-bold">
                +91 7065965900, +91 78400 00168
              </p>
            </div>
          </div>
          <button className="bg-white text-blue-500 font-bold py-2 px-6 rounded-md shadow-md mt-4 md:mt-0">
            SCHEDULE DEMO
          </button>
        </div>
      </div>

      <div className="bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row">
          <div className="md:w-[30%]">
            <img
              src={logo}
              alt="Edunext Logo"
              className="w-32 mb-4"
            />
            <p>
              Edunext ERP is India's most advanced school management software
              with mobile apps for students, parents, teachers and management.
            </p>
          </div>

          {/* Middle Column */}
          <div>
            <h4 className="font-semibold mb-4">SERVICES</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                "E-Learning Software",
                "Online Classes",
                "Payment Gateway",
                "School Mobile App",
                "Finance Management",
                "Fee Management",
                "Visitor Management",
                "Student Information",
                "Admission Management",
                "Exam Proctoring",
                "Transport App",
                "HR Management",
                "Biometric Integration",
                "GPS & Bus Tracking",
                "Library Management",
                "Staff Payroll",
                "Digital Content",
                "RFID System",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((service, index) => (
                <p key={index}>{service}</p>
              ))}
            </div>
          </div>

        </div>
      </div>

    
      <div className=" max-w-7xl mx-auto  pb-4 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className=" text-gray-600 text-center py-3">
        © 2024 Edunext Technologies Pvt. Ltd. | All Rights Reserved.
      </div>
      <div className="flex flex-col text-center">
            <div className="mt-auto">
              <p className="font-semibold mb-2">Follow Us</p>
              <div className="flex justify-center space-x-4 text-blue-500">
                <FacebookIcon />
                <InstagramIcon />
                <LinkedInIcon />
                <YouTubeIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>
          </div>

      {/* Floating Icons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-4">
        <button className="bg-blue-500 text-white p-2 rounded-full shadow-md">
          <PhoneIcon />
        </button>
        <button className="bg-green-500 text-white p-2 rounded-full shadow-md">
          <WhatsAppIcon />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
