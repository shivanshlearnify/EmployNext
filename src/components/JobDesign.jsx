import React from "react";
import { MdVerified } from "react-icons/md";
import { IoBookmark } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";

const JobDesign = ({ icon, jobTitle, company, type, location ,salary, top,right,color}) => {
  return (
    <div className="border p-4 rounded-3xl mt-2 max-w-[300px]  bg-white absolute sm:hidden md:hidden" style={{top:top,right:right}}>
      <div className="flex justify-between items-center">
        <div className="border p-2 rounded-full text-2xl" style={{color:color}}>{icon}</div>
        <div className="mx-3">
          <h1 className="font-bold text-sm">{jobTitle}</h1>
          <h1 className="flex items-center gap-1 text-xs text-gray-600">
            {company}
            <MdVerified className="text-blue-500"/>
          </h1>
        </div>
        {location && <div className="border p-2 rounded-full text-lg" style={{color:color}}>
          <IoBookmark />
        </div>}
      </div>
      {type && <div className="border w-fit py-1 px-4 rounded-2xl text-xs text-gray-500 my-2">{type}</div>}
      {location && <div className="flex items-center text-gray-500 justify-between">
        <div className="flex items-center text-xs">
          <LuMapPin />
          {location}
        </div>
        <div className="text-black font-bold">{salary}/month</div>
      </div>}
    </div>
  );
};

export default JobDesign;
