import { slugBanner } from "@/app/assets/images";
import SectionHeader from "@/app/components/SectionHeader";
import MoreProjectsSection from "./components/MoreProjectSection";
import ProjectInfo from "./components/ProjectInfo";
import AboutProject from "./components/AboutProject";
import GalleryGrid from "./components/GalleryGrid";

const projects = [
  {
    id: 1,
    image:
      "https://i.guim.co.uk/img/media/03a7df822cc59417396ab5061cd7eab659d6695d/1575_142_2234_1341/master/2234.jpg?width=1200&quality=85&auto=format&fit=max&s=5a19289d30fd15c358070c57bf277a16",
    title: "Telehealth Platform UX Redesign",
    subtitle: "Branding · Product Research · Product Redesign",
    year: 2024,
  },
  {
    id: 2,
    image:
      "https://cdn8.openculture.com/wp-content/uploads/2014/04/Van-Gogh-Self-Portrait.jpg",
    title: "E-commerce App Redesign",
    subtitle: "UI System · Product Strategy · App Experience",
    year: 2023,
  },
];

function decodeSlug(slug: string) {
  const decoded = decodeURIComponent(slug);
  const spaced = decoded.replace(/-/g, " ");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1); // capitalize first letter
}

const WorkDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const title = decodeSlug(slug);

  return (
    <main className="flex flex-col items-center  min-h-screen w-full">
      <SectionHeader text={title} src={slugBanner}>
        <ProjectInfo />
      </SectionHeader>

      <AboutProject />

      <GalleryGrid />

      <MoreProjectsSection projects={projects} />
    </main>
  );
};

export default WorkDetail;
