import SectionHeader from "../components/SectionHeader";
import ProjectsOverview from "../components/ProjectsOverview";
import DesignPower from "../components/DesignPower";
import { workBanner } from "../assets/images";

const page = () => {
  return (
    <section className="flex flex-col items-center  min-h-screen w-full">
      <SectionHeader
        text={`Designing for
   \n Health, Care, and Impact`}
        src={workBanner}
      />
      <ProjectsOverview />
      <DesignPower />
    </section>
  );
};

export default page;
