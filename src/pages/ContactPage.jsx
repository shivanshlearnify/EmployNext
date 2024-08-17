import React, { useRef } from "react";

import toast from "react-hot-toast";
import Reviwes from "../components/Reviwes";
import Premium from "../components/Premium";
import Subscribe from "../components/Subscribe";

const ContactPage = () => {
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
        "We have successfully received your concern, and we are eager to enhance it further."
      );

      fullNameRef.current.value = "";
      emailRef.current.value = "";
      concernRef.current.value = "";
    }
  };
  return (
    <div className="mt-28 md:mt-44 sm:mt-48">
      <div className="flex max-w-7xl justify-between m-auto p-3 my-10 sm:flex-col sm:gap-4">
        <div className="left w-1/3 flex flex-col gap-3 md:w-full sm:w-full">
          <h2 className="text-4xl font-extrabold sm:text-center">
            Need additional information?
          </h2>
          <p className="font-medium text-gray-500 sm:text-center">
            An accomplished professional adept in various domains of research,
            development, and educational expertise, boasting over 15 years of
            extensive experience.
          </p>
          <p className="text-gray-500">
            <span className="font-bold">Phone:-</span>7845978412
          </p>
          <p className="text-gray-500">
            <span className="font-bold">Email:-</span>EmployNext@gmail.com
          </p>
          <p className="text-gray-500">
            <span className="font-bold">Location:-</span>Pune, In
          </p>
        </div>
        <div className="right w-[600px] flex flex-col gap-3 md:mx-auto sm:w-full">
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
            Share your concern
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
            Send Message
          </button>
        </div>
      </div>
      <Premium />
      <Subscribe />
    </div>
  );
};

export default ContactPage;
