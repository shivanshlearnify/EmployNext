import React from "react";
import Heroimg from "../assets/HeroSectionImg.avif";
import SearchInput from "./SearchInput";

const HeroSection = () => {
  return (
    <div
      className="h-[80vh] mt-24 rounded-3xl flex flex-col justify-center align-middle"
      style={{ backgroundImage: `url(${Heroimg})` }}
    >
      <h1 className="text-7xl max-w-2xl mx-auto">Modernizing the Job Search Experience</h1>
      <p className="mt-3 font-semibold text-gray-700 max-w-2xl mx-auto">Search and find your dream job now easier than ever, you can</p>
      <p className="mb-3 font-semibold text-gray-700 max-w-2xl mx-auto">simply browse and find a job if you need it</p>
      <div className="max-w-2xl mx-auto">
        <SearchInput/>
      </div>
    </div>
  );
};

export default HeroSection;
 