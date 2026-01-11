"use client";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../lib/projects"; // Note the curly braces!

export default function Projects() {
  return (
    <section id="projects" title="Quest Log">
      {/* THE BENTO GRID 
         - auto-rows-[300px]: Forces every "cell" to be 300px tall. 
         - Tall cards (row-span-2) become 600px + gap.
      */}
      <div>
        <h2 className="font-extrabold align-middle">My Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4 grid-flow-dense">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id} // Use ID instead of title for safety
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
