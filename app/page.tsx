import AboutUs from "./components/AboutUs";
import InsightsFromStudio from "./components/BlogsOverview";
import DesignPower from "./components/DesignPower";
import DesignAccordion from "./components/DesignStepAccordion";
import FloatingNav from "./components/FloatingNav";
import Footer from "./components/footer";
import HeroSection from "./components/Hero";
import ProjectsOverview from "./components/ProjectsOverview";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center   w-full">
      <FloatingNav />
      <HeroSection />
      <VideoSection />
      <AboutUs />
      <ProjectsOverview />
      <DesignAccordion />
      <DesignPower />
      <InsightsFromStudio />
      <Footer />
    </main>
  );
}
