import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutMeSection from "./components/AboutMeSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#28103b] mx-auto px-12 py-4">
      <NavBar />
      <div className="container mt-24 mx-auto space-y-10">
        <HeroSection />
        <AboutMeSection />
      </div>
    </main>
  );
}
