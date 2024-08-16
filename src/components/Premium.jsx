import circleCard from "../assets/circleCard.png";

const Premium = () => {
  return (
    <div className="border py-4 px-8 rounded-2xl shadow-md flex gap-48 items-center relative">
      <div className="flex items-center gap-10">
        <div className="circle">
          <img className="w-56" src={circleCard} alt="circleCard" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">
            Accelerate your job search with premium services
          </h1>
          <h1 className="text-gray-500 font-medium">
            Services to help you get hired, faster: from preparing your CV,
            getting recruiter attention, finding the right jobs, and more!
          </h1>
          <div className="flex gap-2 mt-2">
            <button className="flex gap-2 border rounded-3xl px-3 py-1 text-pink-500 text-sm font-medium">
              Resume Writing <span>&gt;</span>
            </button>
            <button className="flex gap-2 border rounded-3xl px-3 py-1 text-pink-500 text-sm font-medium">
              Priority applicant <span>&gt;</span>
            </button>
            <button className="flex gap-2 border rounded-3xl px-3 py-1 text-pink-500 text-sm font-medium">
              Resume Display <span>&gt;</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <button className="bg-pink-400 text-white py-2 px-4 rounded-3xl min-w-[140px] ">
          Learn more
        </button>
        <h1 className="text-xs text-gray-500 font-medium">
          Includes paid services
        </h1>
      </div>
      <div className="rounded-s-3xl absolute bg-pink-300 px-2 py-1 text-white top-0 right-0 text-xs cursor-pointer">
        <h1>by EmployNext Fastforward</h1>
      </div>
    </div>
  );
};

export default Premium;
