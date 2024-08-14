import React from "react";

const AcheivementPercent = () => {
  return (
    <div className="flex justify-evenly mt-8">
      <div className="max-w-64 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">91%</h1>
        <h1 className="text-xl font-medium">Skill Aligned</h1>
        <p className="text-gray-500 font-medium">
          Many job seekers match their skills to the right jobs.
        </p>
      </div>
      <hr className="bg-gray-300 w-[1px] h-[130px]" />
      <div className="max-w-64 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">90%</h1>
        <h1 className="text-xl font-medium">Fast And Efficient</h1>
        <p className="text-gray-500 font-medium">
          Company data filtering is quick and efficient.
        </p>
      </div>
      <hr className="bg-gray-300 w-[1px] h-[130px]" />
      <div className="max-w-64 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">89%</h1>
        <h1 className="text-xl font-medium">Wide Range</h1>
        <p className="text-gray-500 font-medium">
          Top employers interacting with many job seekers.
        </p>
      </div>
    </div>
  );
};

export default AcheivementPercent;
