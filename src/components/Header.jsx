import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between max-w-7xl mx-auto my-0 items-center fixed w-[1247px] top-0 py-7 glassEffect z-40 md:flex-col md:w-full md:gap-2 sm:flex-col sm:w-full sm:gap-2">
      <div
        className="text-3xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        EmployNext
      </div>
      <div className="flex gap-4 text-xl sm:flex-wrap sm:px-2 sm:justify-center sm:gap-y-1">
        <span className="cursor-pointer" onClick={() => navigate("/Search")}>
          Find a Job
        </span>
        <span className="cursor-pointer" onClick={() => navigate("/Alljobs")}>
          Companies
        </span>
        <span className="cursor-pointer" onClick={() => navigate("/ui")}>
          How Its work
        </span>
        <span className="cursor-pointer" onClick={() => navigate("/ui")}>
          Blog
        </span>
        <span className="cursor-pointer" onClick={() => navigate("/Contact")}>
          Contact
        </span>
      </div>
      <div className="flex gap-2">
        <button
          className="border px-5 py-2 rounded-3xl cursor-pointer items-center"
          onClick={() => navigate("/ui")}
        >
          Login
        </button>
        <button
          className="bg-black text-white px-4 py-2 rounded-3xl cursor-pointer"
          onClick={() => navigate("/ui")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
