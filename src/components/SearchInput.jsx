import React from "react";

const SearchInput = ({border}) => {
  return (
    <div className=" flex gap-3">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search for job...."
        className="px-6 py-2 rounded-3xl w-80 outline-none"
        style={{borderWidth: border ? "1px" : 0}}
      />
      <button className="bg-black text-white px-6 py-2 rounded-3xl cursor-pointer">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
