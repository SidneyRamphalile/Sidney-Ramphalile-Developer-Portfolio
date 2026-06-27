import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from './components/Navbar';
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";
import Experience from "./components/Experience";
import DigitalBadges from "./components/DigitalBadges";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <HeroSection />
      <div className="container mx-auto mt-6 px-6 py-4 sm:mt-10 sm:px-12">
        <AchievementSection/>
        <AboutSection/>
        <DigitalBadges/>
        <Experience/>
        <ProjectsSection/>
        <EmailSection/>
        <Footer/>
      </div>
    </main>
  );
}
