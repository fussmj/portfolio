import React from "react";
import Image from "next/image";
import HireAndResumeButtons from "./HireAndResumeButtons";

const HeroSection = () => {
  return (
    <section className="md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-violet-400 to-cyan-400 hover:bg-slate-200">
              {"Hello, I'm"}
            </span>{" "}
            <br />
            Matthew
          </h1>
          <p className="text-[#adb7be] text-lg lg:text-xl">
            Engineer and full-stack developer.
          </p>
          <HireAndResumeButtons />
        </div>
        <div className="col-span-5 place-self-center pt-3">
          <div className="grid bg-violet-400 rounded-full w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              className="place-self-center"
              priority
              src="/memoji.png"
              alt="hero image"
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
