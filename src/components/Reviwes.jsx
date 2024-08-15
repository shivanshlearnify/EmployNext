import React from "react";
import { reviews } from "../data/constant";

const Reviwes = () => {
  return (
    <div className="flex flex-col items-center mt-10 mb-14 ">
      <h1 className="text-pink-500 font-bold">Sucess Experience</h1>
      <h1 className="text-6xl font-bold my-2">Insights from Connect Users</h1>
      <div className="flex gap-4 my-4">
        {reviews.map((data, index) => (
          <div
            key={index}
            className="border p-4 rounded-xl shadow-md text-gray-600 hover:bg-pink-50 cursor-pointer"
          >
            <h1>&quot;{data.detailedExperience}&quot;</h1>
            <h1 className="text-lg mt-2 font-bold">{data.name}</h1>
            <h1 className="text-sm">{data.destination}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviwes;
