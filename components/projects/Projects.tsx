import ProjectCard from "@/components/projects/ProjectCard";
import { getAllProjects } from "@/lib/projects";
import SectionHeading from "@/components/tools/SectionHeading";

// Define the layout (Order + Size)
const PROJECT_LAYOUT = [
  { slug: "push-up-alarm-clock", size: "2x1" },
  { slug: "posture-police", size: "2x2" },
  { slug: "crc-taktik", size: "2x2" },
  { slug: "discord-stocks-bot", size: "2x1" },
  { slug: "arm-3d-print", size: "1x2" },
  { slug: "easy-list", size: "1x1" },
  { slug: "edi-ai-chatbot", size: "2x1" },
  { slug: "keypad-display", size: "1x1" },
  { slug: "crc-kryptik", size: "2x1" },
  { slug: "personal-website", size: "2x2" },
  { slug: "creative-archive", size: "1x1" },
  //{ slug: "crc-taktik", size: "2x2" },

  { slug: "pokemon-deckbox", size: "1x1" },
  { slug: "tilted-bridge", size: "1x1" },
  //{ slug: "yahboom-robot", size: "1x1" },
];

export default async function Projects() {
  const allProjects = await getAllProjects();
  const visibleProjects = allProjects.filter((p) => p.visible === true);
  const sortedProjects = visibleProjects
    .map((project) => {
      const layoutIndex = PROJECT_LAYOUT.findIndex((p) => p.slug === project.slug);
      const layoutConfig = PROJECT_LAYOUT[layoutIndex];

      return {
        ...project,
        size: layoutConfig ? layoutConfig.size : "1x1",
        order: layoutIndex !== -1 ? layoutIndex : 999,
      };
    })
    .sort((a, b) => a.order - b.order);

  return (
    <section id="projects" className="py-32 relative bg-neutral-950">
      <div className="md:px-12 max-w-[90rem] mx-auto">
        <SectionHeading
          title="Main "
          highlight="Campaigns"
          subtitle="A curated collection of projects I've completed over the years..."
          color="#ee1000"
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-8 grid-flow-dense">
          {sortedProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              size={project.size as "1x1" | "2x1" | "1x2" | "2x2"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
