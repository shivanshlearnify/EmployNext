import React from "react";
import { useParams } from "react-router-dom";
import { jobData } from "../data/constant";
import JobCard from "../components/JobCard";
import Subscribe from "../components/Subscribe";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import b4 from "../assets/b4.jpg";
import b5 from "../assets/b5.jpg";
import b6 from "../assets/b6.jpg";

const JobPage = () => {
  const { id } = useParams();
  const jobPageData = jobData.filter((job) => job.jobId === id);

  if (jobPageData.length === 0) {
    return <div>Job not found</div>;
  }
  console.log(jobPageData);

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <div className="mt-28 border py-10 px-4 rounded-2xl shadow-lg max-w-4xl capitalize mb-8">
            <div className="">
              <h1 className="text-2xl font-bold">{jobPageData[0].title}</h1>
              <h1 className="text-gray-500 font-medium mb-4">
                {jobPageData[0].companyName}
              </h1>
              <div className="flex gap-8">
                <h1 className="text-gray-500 text-sm">
                  Posted - {jobPageData[0].footerPlaceholderLabel}
                </h1>
                <h1 className="text-gray-500 text-sm">
                  Job Id - {jobPageData[0].jobId}
                </h1>
              </div>
              <h1 className="font-semibold mt-4">Key Skills</h1>
              <div className="flex gap-4 my-4 flex-wrap">
                {jobPageData[0].tagsAndSkills.split(",").map((data, index) => (
                  <h1
                    key={index}
                    className="cursor-pointer border px-6 py-2 rounded-2xl hover:bg-black hover:text-white"
                  >
                    {data}
                  </h1>
                ))}
              </div>
              <h1 className="text-xl font-medium mt-4">Job Description</h1>
              <div
                className="text-sm font-medium text-gray-600 mb-4"
                dangerouslySetInnerHTML={{
                  __html: jobPageData[0].jobDescription,
                }}
              />
              <h1>
                {jobPageData[0].placeholders.map((data) => (
                  <div key={data.type} className="flex gap-2">
                    <h1 className="text-lg font-medium">{data.type} - </h1>
                    <h1 className="text-lg font-medium text-gray-500">
                      {data.label}
                    </h1>
                  </div>
                ))}
              </h1>
              <button className="bg-black text-white px-4 py-2 text-2xl rounded-2xl cursor-pointer mt-4">
                Apply Here
              </button>
            </div>
          </div>
          <div className="AboutCompany border py-6 px-4 rounded-2xl shadow-md max-w-4xl capitalize">
            <h1 className="text-xl font-semibold">About Company</h1>
            <h1 className="text-gray-600">
              Please visit our web site http://{jobPageData[0].companyName}.com
              for more details
            </h1>
            <div className="flex gap-2 mt-2">
              <h1 className="font-semibold">Address:</h1>
              <h1 className="text-gray-500">
                12-C,SECOND FLOOR,POCKET-C,ASHOK VIHAR PH-3,DEEP E, NCLAVE, NEW
                DELHI, Delhi, India
              </h1>
            </div>
          </div>
          <div className=" border py-6 px-4 rounded-2xl shadow-lg max-w-4xl capitalize mt-8">
            <h1 className="text-xl font-bold mb-2">Beware of imposters!</h1>
            <h1 className="text-gray-500">
              EmployNext does not promise a job or an interview in exchange of
              money. Fraudsters may ask you to pay in the pretext of
              registration fee, Refundable Fee
            </h1>
          </div>
        </div>
        <div>
          <div className="border p-4 mt-28 rounded-2xl w-[330px]">
            <h1 className="text-xl font-bold">Benefits & Perks</h1>
            <h1 className="text-gray-500 text-sm">
              1 Users reported these benefits
            </h1>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="text-gray-500 text-sm">
                <img src={b1} alt="Work From Home" className="w-[50px] mb-2" />
                Work From Home
              </div>

              <div className="text-gray-500 text-sm">
                <img src={b2} alt="Soft Skill Training" className="w-[50px] mb-2" />
                Soft Skill Training
              </div>

              <div className="text-gray-500 text-sm">
                <img src={b3} alt="Education Assistance" className="w-[50px] mb-2" />
                Education Assistance
              </div>

              <div className="text-gray-500 text-sm">
                <img src={b4} alt="Job Traning" className="w-[50px] mb-2" />
                Job Traning
              </div>

              <div className="text-gray-500 text-sm">
                <img src={b5} alt="Team outing" className="w-[50px] mb-2" />
                Team outing
              </div>

              <div className="text-gray-500 text-sm">
                <img src={b6} alt="Free Food" className="w-[50px] mb-2" />
                Free Food
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold mt-6">More Jobs To Apply</h1>
      <JobCard jobData={jobData} itemToShow={6} mt={"20px"} />
      <Subscribe />
    </div>
  );
};

export default JobPage;
