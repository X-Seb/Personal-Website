import ProjectCard from "@/components/projects/ProjectCard";
import { getAllProjects, ProjectMetadata } from "@/lib/projects";
import SectionHeading from "@/components/tools/SectionHeading";

export default async function Projects() {
  const allProjects = await getAllProjects();
  const visibleProjects = allProjects.filter((p) => p.visible === true);
  // const shuffled = [...allProjects];
  // for (let i = shuffled.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  // }

  // const largeProjects = shuffled.filter((p) => p.size === "2x2");
  // const smallProjects = shuffled.filter((p) => p.size !== "2x2");
  // const sortedProjects: ProjectMetadata[] = [];

  // let smallIndex = 0;
  // for (let i = 0; i < largeProjects.length; i++) {
  //   sortedProjects.push(largeProjects[i]);
  //   if (smallIndex < smallProjects.length) sortedProjects.push(smallProjects[smallIndex++]);
  //   if (smallIndex < smallProjects.length) sortedProjects.push(smallProjects[smallIndex++]);
  // }

  // while (smallIndex < smallProjects.length) {
  //   sortedProjects.push(smallProjects[smallIndex++]);
  // } // Add all remaining small projects

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

        <div className="grid grid-cols-1 grid-flow-dense md:grid-cols-4 auto-rows-[300px] gap-8">
          {(visibleProjects || []).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
