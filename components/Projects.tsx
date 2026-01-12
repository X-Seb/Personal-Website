import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/projects";
import FadeUp from "@/components/animations/FadeUp";

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <section id="projects" title="Quest Log" className="py-32 relative">
      <div className="md:px-12 max-w-8xl mx-auto">
        <FadeUp className=" mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white font-pixel text-shadow-2xs">Quest Logs</h2>
          <p className="text-neutral-600 text-xl font-bold">
            My Projects and experiments. Click on any project to learn more!
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
