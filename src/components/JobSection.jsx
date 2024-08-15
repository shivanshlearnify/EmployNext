import React from "react";
import { jobData } from "../data/constant";
import { CiBookmark } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import JobCard from "./JobCard";

const JobSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <JobCard jobData={jobData} itemToShow={6}/>
      <button className="border px-5 py-2 w-40 rounded-2xl text-xl font-medium mt-4 text-gray-500 hover:bg-pink-100" onClick={()=>navigate("/AllJobs")}>
        Show More
      </button>
    </div>
  );
};

export default JobSection;
