import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between max-w-7xl mx-auto my-0 items-center fixed w-[1247px] top-0 glassEffect z-40">
      <div className="text-3xl font-bold cursor-pointer" onClick={()=>navigate("/")}>EmployNext</div>
      <div className="flex gap-4 text-xl">
        <span className="cursor-pointer">Find a Job</span>
        <span className="cursor-pointer">Companies</span>
        <span className="cursor-pointer">How Its work</span>
        <span className="cursor-pointer">Blog</span>
        <span className="cursor-pointer">Contact</span>
      </div>
      <div className="flex gap-2">
        <button className="border px-5 py-2 rounded-3xl cursor-pointer items-center ">
          Login
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-3xl cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
