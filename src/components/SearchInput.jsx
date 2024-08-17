import React, { useEffect, useRef, useState } from "react";
import { jobData } from "../data/constant";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ border }) => {
  const [filterData, setFilterData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setFilterData(
      jobData.filter((data) => {
        if (inputValue) {
          return (
            data.title.toLowerCase().includes(inputValue.toLowerCase()) ||
            data.companyName.toLowerCase().includes(inputValue.toLowerCase())
          );
        }
      })
    );
  }, [inputValue]);

  return (
    <div className="relative">
      <div className=" flex gap-3 sm:flex-col sm:px-1">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search for job...."
          className="px-6 py-2 rounded-3xl w-80 outline-none sm:w-auto"
          style={{ borderWidth: border ? "1px" : 0 }}
        />
        <button className="bg-black text-white px-6 py-2 rounded-3xl cursor-pointer sm:w-auto">
          Search
        </button>
      </div>
      <div className="absolute bg-white rounded-lg p-2 shadow-2xl sm:top-12" style={{display: filterData.length ? "" : "none"}}>
        {filterData?.slice(0, 5).map((data) => (
          <div key={data.jobId} className="flex flex-col">
            <div className="" onClick={()=>navigate(`/Job/${data.jobId}`)}>
              <span className="text-gray-500 font-medium hover:text-pink-500 cursor-pointer">{data.title} - </span>
              <span className="font-bold cursor-pointer">{data.companyName}</span>
            </div>
            <hr className="my-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchInput;
