import React, { useEffect, useState } from "react";
import { jobData } from "../data/constant";
import { CiBookmark } from "react-icons/ci";
import JobCard from "../components/JobCard";
import {useNavigate } from "react-router-dom";

const AllJobs = () => {
  const [itemToShow, setItemToShow] = useState(8);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setItemToShow((prevItems) => prevItems + 6);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex gap-3 md:mt-32 sm:mt-32 ">
      <div className="companies mt-28 sm:hidden">
        <h1 className="text-xl text-gray-800">Companies Hiring</h1>
        <div className="border px-2 py-4 rounded-2xl">
          {jobData
            .reduce((acc, current) => {
              if (!acc.some((job) => job.companyName === current.companyName)) {
                acc.push(current);
              }
              return acc;
            }, [])
            .map((job) => (
              <div key={job.jobId}>
                <div className="cursor-pointer" onClick={() => navigate(`/Job/${job.jobId}`)}>
                  {job.companyName}
                </div>
                <hr className="my-1" />
              </div>
            ))}
        </div>
      </div>

      <div>
        <JobCard jobData={jobData} itemToShow={itemToShow} />
        {loading && (
          <p className="w-[360px] mx-auto my-10 text-4xl sm:text-2xl">
            Loading more items...
          </p>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
