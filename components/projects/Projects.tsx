import ProjectCard from "@/components/projects/ProjectCard";
import { getAllProjects } from "@/lib/projects";
import FadeUp from "@/components/animations/FadeUp";
import SectionHeading from "@/components/general/SectionHeading";

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <section id="projects" title="Quest Log" className="py-32 relative bg-neutral-950">
      <div className="md:px-12 max-w-8xl mx-auto">
        <SectionHeading
          title={"Main "}
          highlight={"Campaigns"}
          subtitle={"A curated collection of projects I've completed over the years..."}
          color={"#ee1000"}
          align={"left"}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
