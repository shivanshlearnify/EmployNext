import React from "react";
import { useParams } from "react-router-dom";
import { jobData } from "../data/constant";
import JobCard from "../components/JobCard";
import Subscribe from "../components/Subscribe";

const JobPage = () => {
  const { id } = useParams();
  const jobPageData = jobData.filter((job) => job.jobId === id);

  if (jobPageData.length === 0) {
    return <div>Job not found</div>;
  }
  console.log(jobPageData);

  return (
    <div>
      <div className="mt-28 border py-10 px-4 rounded-2xl shadow-lg max-w-5xl capitalize mb-[4.5rem]">
        <div className="">
          <h1 className="text-2xl font-bold">{jobPageData[0].title}</h1>
          <h1 className="text-gray-500 font-medium mb-4">
            {jobPageData[0].companyName}
          </h1>
          <div className="flex gap-4 my-4 flex-wrap">
            {jobPageData[0].tagsAndSkills.split(",").map((data, index) => (
              <h1 key={index} className="cursor-pointer border px-6 py-2 rounded-2xl hover:bg-black hover:text-white">
                {data}
              </h1>
            ))}
          </div>
          <div className="flex gap-8">
            <h1 className="text-gray-500 text-sm">
              Posted - {jobPageData[0].footerPlaceholderLabel}
            </h1>
            <h1 className="text-gray-500 text-sm">
              Job Id - {jobPageData[0].jobId}
            </h1>
          </div>
          <h1 className="text-xl font-medium mt-4">Job Description</h1>
          <div
            className="text-sm font-medium text-gray-600 mb-4"
            dangerouslySetInnerHTML={{ __html: jobPageData[0].jobDescription }}
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
      <h1 className="text-3xl font-bold mt-6">More Jobs To Apply</h1>
      <JobCard jobData={jobData} itemToShow={6} mt={"20px"} />
      <Subscribe />
    </div>
  );
};

export default JobPage;
