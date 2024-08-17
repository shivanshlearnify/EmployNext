import React from "react";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between my-10">
      <div className="max-w-[25%] sm:max-w-full">
        <h1 className="flex flex-col items-start text-3xl font-bold text-pink-500 cursor-pointer mb-4" onClick={()=>navigate("/")}>EmployNext</h1>
        <p className="flex flex-col items-start pb-2 text-gray-500 font-medium">
          EmployNext connect you with career opportunities tailored to you
          skills, relevance, and personal preferences
        </p>
        <div className="flex gap-2 text-2xl ">
          <FaFacebook className="hover:text-pink-500 cursor-pointer" /> <PiInstagramLogoFill className="hover:text-pink-500 cursor-pointer"  />
        </div>
      </div>
      <div className="grid grid-cols-3 max-w-[70%] min-w-[60%] sm:hidden">
        <div className="technology ">
          <h1 className="flex flex-col items-start text-3xl font-semibold mb-4">Technology</h1>
          <ul className="flex flex-col items-start text-gray-500 gap-1 text-lg">
            <li className="cursor-pointer hover:text-gray-700" onClick={() => navigate("/Search")}>Search for Jobs</li>
            <li className="cursor-pointer hover:text-gray-700" onClick={() => navigate("/Alljobs")}>Browse Jobs</li>
            <li className="cursor-pointer hover:text-gray-700" onClick={() => navigate("/Alljobs")}>Browse Companies</li>
          </ul>
        </div>
        <div className="Company">
          <h1 className="flex flex-col items-start text-3xl font-semibold mb-4">Company</h1>
          <ul className="flex flex-col items-start text-gray-500 gap-1 text-lg">
            <li className="cursor-pointer hover:text-gray-700"  onClick={() => navigate("/Contact")}>Work at EmployNext</li>
            <li className="cursor-pointer hover:text-gray-700" onClick={() => navigate("/Contact")}>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
