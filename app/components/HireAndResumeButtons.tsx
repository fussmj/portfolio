"use client";

import React from "react";

const HireAndResumeButtons = () => {
  async function handleClick() {}

  return (
    <div className="mt-2">
      <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-orange-500 via-violet-400 to-cyan-400 hover:bg-slate-800 text-white">
        <a href="#contact">Hire Me!</a>
      </button>
      <button
        onClick={handleClick}
        className="px-1 py-1 rounded-full w-full sm:w-fit mt-2 bg-transparent bg-gradient-to-br from-orange-500 via-violet-400 to-cyan-400 hover:bg-slate-800 text-white "
      >
        <a href="https://q8ljv3t1j70hctar.public.blob.vercel-storage.com/porfolio/matthew-fuss-resume-G3w1XdmxNv8WruFfvmcl3DE5bWCjaZ.pdf?download=1">
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
            Download Resume
          </span>
        </a>
      </button>
    </div>
  );
};

export default HireAndResumeButtons;
