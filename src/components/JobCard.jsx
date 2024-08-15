import React from "react";
import { CiBookmark } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const JobCard = ({jobData, itemToShow, mt="133px"}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-16 gap-y-6 capitalize" style={{marginTop: mt}}>
        {jobData.slice(0, itemToShow).map((job) => {
          return (
            <div
            onClick={()=>navigate(`/job/${job.jobId}`)}
              key={job.jobId}
              className="border p-2 rounded-2xl bg-gray-100 hover:bg-pink-100 cursor-pointer"
            >
              <div className="border p-6 rounded-2xl bg-white min-h-[300px] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between">
                    <h1 className="text-xl">{job.companyName}</h1>
                    <div className="border rounded-full w-10 h-10 flex justify-center items-center">
                      <CiBookmark className="text-xl" />
                    </div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="flex justify-start text-2xl font-semibold">
                    {job.title.slice(0, 28)}.
                  </h1>
                  <div className="flex gap-2">
                    <h1 className="font-medium text-xl">
                      {job?.placeholders[0]?.type} -{" "}
                    </h1>
                    <h1 className="text-lg">{job?.placeholders[0]?.label}</h1>
                  </div>
                  <div className="flex gap-2">
                    <h1 className="font-medium text-xl">
                      {job?.placeholders[1]?.type} -{" "}
                    </h1>
                    <h1 className="text-lg">{job?.placeholders[1]?.label}</h1>
                  </div>

                  <div className="flex gap-2">
                    <h1 className="font-medium text-xl">
                      {job?.placeholders[2]?.type} -{" "}
                    </h1>
                    <h1 className="text-lg">
                      {job?.placeholders[2]?.label
                        .split(",")
                        .slice(0, 1)
                        .join(",")}
                    </h1>
                  </div>
                </div>
                <button className="bg-black text-white w-full py-2 rounded-3xl text-xl mt-3">
                  Apply
                </button>
              </div>
              <h1 className="my-2 text-xl max-w-[7.25rem] mx-auto text-gray-500 font-medium">
                {job.footerPlaceholderLabel}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobCard;
