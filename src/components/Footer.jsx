import React from "react";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between mt-16 mb-16">
      <div className="max-w-[25%]">
        <h1 className="flex flex-col items-start text-3xl font-bold text-pink-500 cursor-pointer mb-4" onClick={()=>navigate("/")}>EmployNext</h1>
        <p className="flex flex-col items-start pb-2 text-gray-500 font-medium">
          EmployNext connect you with career opportunities tailored to you
          skills, relevance, and personal preferences
        </p>
        <div className="flex gap-2 text-2xl ">
          <FaFacebook className="hover:text-pink-500 cursor-pointer" /> <PiInstagramLogoFill className="hover:text-pink-500 cursor-pointer"  />
        </div>
      </div>
      <div className="grid grid-cols-3 max-w-[70%] min-w-[60%]">
        <div className="technology ">
          <h1 className="flex flex-col items-start text-3xl font-semibold mb-4">Technology</h1>
          <ul className="flex flex-col items-start text-gray-500 gap-1 text-lg">
            <li className="cursor-pointer hover:text-gray-700">Search for Jobs</li>
            <li className="cursor-pointer hover:text-gray-700">Browse Jobs</li>
            <li className="cursor-pointer hover:text-gray-700">Browse Companies</li>
            <li className="cursor-pointer hover:text-gray-700">Carrer Advice</li>
          </ul>
        </div>
        <div className="Employers">
          <h1 className="flex flex-col items-start text-3xl font-semibold mb-4">Employers</h1>
          <ul className="flex flex-col items-start text-gray-500 gap-1 text-lg">
            <li className="cursor-pointer hover:text-gray-700">Post Jobs</li>
            <li className="cursor-pointer hover:text-gray-700">Source Talent</li>
            <li className="cursor-pointer hover:text-gray-700">Employer & Advertising</li>
            <li className="cursor-pointer hover:text-gray-700">Hiring Events</li>
          </ul>
        </div>
        <div className="Company">
          <h1 className="flex flex-col items-start text-3xl font-semibold mb-4">Company</h1>
          <ul className="flex flex-col items-start text-gray-500 gap-1 text-lg">
            <li className="cursor-pointer hover:text-gray-700">About Us</li>
            <li className="cursor-pointer hover:text-gray-700">Media</li>
            <li className="cursor-pointer hover:text-gray-700">Work at EmployNext</li>
            <li className="cursor-pointer hover:text-gray-700">Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
