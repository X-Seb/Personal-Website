import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/projects"; // Import the new function

export default async function Projects() {
  // 1. Fetch data from files
  const projects = await getAllProjects();

  return (
    <section id="projects" title="Quest Log" className="py-32 relative">
      <div className="md:px-12 max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
