import React from "react";
import SearchInput from "./SearchInput";
import { jobProfile } from "../data/constant";

const DetailedSearch = () => {
  return (
    <div className="mt-20  flex flex-col items-center">
      <div className="max-w-[35rem] mx-auto flex flex-col items-center">
        <p className="text-pink-500 font-semibold">
          Realize Your Career Dreams
        </p>
        <h1 className="text-6xl font-medium mt-4">Search and Discover</h1>
        <h1 className="text-6xl font-medium mb-4"> Your Jobs Here</h1>
      </div>
      <div className="my-4">
        <SearchInput border={true} />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-6">
        {jobProfile.map((job) => {
          return (
            <div key={job.id}>
              <button className="border px-8 py-4 rounded-3xl text-gray-500 font-medium hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white">
                {job.profile}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailedSearch;
