import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutMeSection from "./components/AboutMeSection";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  //bg-[#28103b]

  {
    /* <main className="flex min-h-screen flex-col bg-scroll bg-my_bg_img mx-auto px-12 py-4"> */
  }
  return (
    <main className="flex min-h-screen flex-col  mx-auto px-12 py-4 bg-scroll bg-no-repeat bg-my_bg_img bg-cover">
      <NavBar />
      <div className="container mt-24 mx-auto space-y-5">
        <HeroSection />
        <AboutMeSection />
      </div>
    </main>
  );
}
