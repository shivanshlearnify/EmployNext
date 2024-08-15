import React from "react";
import subscibe from "../assets/subscibe.avif";
import JobDesign from "./JobDesign";
import { FaPinterest } from "react-icons/fa";
import { SiCanva } from "react-icons/si";


const Subscribe = () => {
  return (
    <div
      className="mt-8 h-[40vh] rounded-2xl flex flex-col items-start justify-center pl-10 relative"
      style={{ background: `url(${subscibe})` }}
    >
      <h1 className="text-4xl font-bold">Transforming the Way</h1>
      <h1 className="text-4xl font-bold">You Find Jobs</h1>
      <p className="mt-2 ">
        Stop searching, start discovering. Let the ideal job
      </p>
      <p className="mb-3">come to you.</p>
      <div className="flex gap-2">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your email"
          className="px-6 py-2 rounded-3xl w-80 outline-none"
        />
        <button className="bg-black text-white px-6 py-2 rounded-3xl cursor-pointer">
          Subscribe
        </button>
      </div>
      <JobDesign
        color={"#f77bc1"}
        top={-40}
        right={50}
        icon={<FaPinterest />}
        jobTitle={"Staff Product Manager"}
        company={"Pinterest"}
        type={"Remote"}
        location={"San Fransisco,california"}
        salary={"$215"}
      />
      <JobDesign
        color={"#f77bc1"}
        top={115}
        right={350}
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

export default Subscribe;
