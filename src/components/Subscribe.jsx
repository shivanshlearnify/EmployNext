import React, { useRef } from "react";
import subscibe from "../assets/subscibe.avif";
import JobDesign from "./JobDesign";
import { FaPinterest } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import toast from "react-hot-toast";


const Subscribe = () => {
  const emailRef = useRef();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmail = ()=>{
    if (
      emailRef.current.value === "" 
    ) {
      toast.error("All Feilds Are Required");
    } else if (!emailRegex.test(emailRef.current.value)) {
      toast.error("Enter a Valid Email");
    } else {
      toast.success(
        `You have successfully Subscribed with ${emailRef.current.value}.`
      );

      emailRef.current.value = "";
    }
  }
  return (
    <div
      className="mt-12 h-[40vh] rounded-2xl flex flex-col items-start justify-center pl-10 relative sm:px-2 sm:items-center sm:h-auto sm:py-6"
      style={{ background: `url(${subscibe})` }}
    >
      <h1 className="text-4xl font-bold sm:text-center">Transforming the Way</h1>
      <h1 className="text-4xl font-bold">You Find Jobs</h1>
      <p className="mt-2 sm:text-center">
        Stop searching, start discovering. Let the ideal job
      </p>
      <p className="mb-3">come to you.</p>
      <div className="flex gap-2 sm:flex-col">
        <input
          type="text"
          ref={emailRef}
          placeholder="Enter your email"
          className="px-6 py-2 rounded-3xl w-80 outline-none"
        />
        <button className="bg-black text-white px-6 py-2 rounded-3xl cursor-pointer" onClick={handleEmail}>
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
