import ProjectCard from "./ProjectCard";
import { getAllProjects } from "../lib/projects"; // Import the new function

export default async function Projects() {
  // 1. Fetch data from files
  const projects = await getAllProjects();

  return (
    <section id="projects" title="Quest Log">
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
        
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.slug} 
            project={project}
            index={index}
          />
        ))}

      </div>
    </section>
  );
}