import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const ApplyPage = ({active,setActive}) => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const concernRef = useRef(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  

  const handleSubmit = () => {
    if (
      fullNameRef.current.value === "" ||
      emailRef.current.value === "" ||
      concernRef.current.value === ""
    ) {
      toast.error("All Feilds Are Required");
    } else if (!emailRegex.test(emailRef.current.value)) {
      toast.error("Enter a Valid Email");
    } else {
      toast.success(
        "We have successfully received your Request, and we are eager to connect with you."
      );

      fullNameRef.current.value = "";
      emailRef.current.value = "";
      concernRef.current.value = "";
    }
  };

  return (
    <div className="flex justify-center items-center z-50 absolute top-0 h-full w-[100vw] glassEffect2" style={{display: active ? "flex" : "none"}}>
      <div className="p-10 border rounded-3xl shadow-2xl bg-pink-100 w-6/12">
        <div className="right flex flex-col gap-3 ">
          <label className="text-2xl font-semibold" htmlFor="">
            Full Name
          </label>
          <input
            ref={fullNameRef}
            className="border py-2 px-3"
            type="text"
            placeholder="Enter here"
          />
          <label className="text-2xl font-semibold" htmlFor="">
            Email Address
          </label>
          <input
            ref={emailRef}
            className="border py-2 px-3"
            type="text"
            placeholder="Enter here"
          />
          <label className="text-2xl font-semibold" htmlFor="">
            Tell us About Yourself
          </label>
          <textarea
            ref={concernRef}
            className="border py-2 px-3"
            type="text"
            placeholder="Enter here"
            rows={6}
          />
          <button
            onClick={handleSubmit}
            className="w-full cursor-pointer px-4 py-2 bg-pink-500 rounded-md text-white"
          >
            Apply
          </button>
        </div>
      </div>
      <button className="text-6xl font-bold relative top-[-200px] right-[-50px]" onClick={()=>setActive(false)}>x</button>
    </div>
  );
};

export default ApplyPage;
