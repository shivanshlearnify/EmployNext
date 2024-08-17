import React from "react";
import Heroimg from "../assets/HeroSectionImg.avif";
import SearchInput from "./SearchInput";
import JobDesign from "./JobDesign";
import { FaPinterest } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


const HeroSection = () => {
  return (
    <div
      className="h-[80vh] mt-24 rounded-3xl flex flex-col justify-center text-center items-center relative md:mt-48 sm:mt-52 md:h-[60vh] sm:h-[50vh]"
      style={{ backgroundImage: `url(${Heroimg})` }}
    >
      <h1 className="text-6xl max-w-[34rem] mx-auto sm:text-3xl sm:font-extrabold sm:text-center sm:px-2">Modernizing the Job Search Experience</h1>
      <p className="mt-3 font-semibold text-gray-700 max-w-2xl mx-auto sm:text-center sm:px-2">Search and find your dream job now easier than ever, you can</p>
      <p className="mb-3 font-semibold text-gray-700 max-w-2xl mx-auto sm:text-center sm:px-2">simply browse and find a job if you need it</p>
      <div className="max-w-2xl mx-auto">
        <SearchInput/>
      </div>
      <JobDesign
        color={"#f58383"}
        top={185}
        right={910}
        icon={<FaFacebook />}
        jobTitle={"Design Engineer"}
        company={"FaFacebook"}
      />
      <JobDesign
        color={"#f58383"}
        top={470}
        right={165}
        icon={<FaSquareInstagram />}
        jobTitle={"Senior Engineer"}
        company={"Instagram"}
      />
      <JobDesign
        color={"#f58383"}
        top={325}
        right={945}
        icon={<FaPinterest />}
        jobTitle={"Staff Product Manager"}
        company={"Pinterest"}
        type={"Remote"}
        location={"San Fransisco,california"}
        salary={"$215"}
      />
      <JobDesign
        color={"#f58383"}
        top={255}
        right={40}
        icon={<SiCanva />}
        jobTitle={"Senior Art Director"}
        company={"Canva"}
        type={"Full Time"}
        location={"Sydeny, Austarlia"}
        salary={"$194"}
      />
    </div>
  );
};

export default HeroSection;
 