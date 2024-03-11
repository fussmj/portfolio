import React from "react";

const HireAndResumeButtons = () => {
  return (
    <div className="mt-2">
      <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-orange-500 via-violet-400 to-cyan-400 hover:bg-slate-800 text-white">
        Hire Me!
      </button>
      <button className="px-1 py-1 rounded-full w-full sm:w-fit mt-2 bg-transparent bg-gradient-to-br from-orange-500 via-violet-400 to-cyan-400 hover:bg-slate-800 text-white ">
        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
          Download Resume
        </span>
      </button>
    </div>
  );
};

export default HireAndResumeButtons;
