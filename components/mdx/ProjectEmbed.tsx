import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

export default async function ProjectEmbed({ slug }: { slug: string }) {
  const projects = await getAllProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="p-4 border border-red-500/50 bg-red-900/20 text-red-400 rounded-lg font-mono text-sm">
        Project "{slug}" not found.
      </div>
    );
  }

  return (
    <Link href={`/projects/${project.slug}`} className="block my-8 group no-underline">
      <div className="relative flex items-center gap-6 bg-neutral-900/50 border border-white/10 p-4 rounded-2xl transition-all duration-300 hover:bg-neutral-900 hover:border-purple-500/50 hover:-translate-y-1">
        {/* Thumbnail */}
        <div className="relative w-24 h-24 mt-0 pt-0 shrink-0 rounded-xl overflow-hidden border border-white/5">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-1">Linked Project</p>
          <h4 className="text-xl font-bold text-white truncate group-hover:text-purple-300 transition-colors">
            {project.title}
          </h4>
          <p className="text-sm text-neutral-400 truncate">{project.description}</p>
        </div>

        {/* Arrow */}
        <div className="pr-4">
          <ArrowRight className="text-neutral-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
}
