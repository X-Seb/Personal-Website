"use client";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import { ProjectMetadata } from "@/lib/projects"; // Import the interface

export default function ProjectCard({ project, index }: { project: ProjectMetadata; index: number }) {
  const sizeClasses: Record<string, string> = {
    "1x1": "md:col-span-1 md:row-span-1",
    "2x1": "md:col-span-2 md:row-span-1",
    "1x2": "md:col-span-1 md:row-span-2",
    "2x2": "md:col-span-2 md:row-span-2",
  };

  return (
    <div className={`${sizeClasses[project.size] || sizeClasses["1x1"]} h-full`}>
      <FadeUp delay={index * 0.1} className="h-full">
        <Link
          href={`/projects/${project.slug}`}
          className="block h-full group relative overflow-hidden border-2 border-gray-600 rounded-3xl bg-neutral-900/50 transition-colors duration-500"
        >
          <div className="absolute inset-0 z-0">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          </div>

          <div className="relative z-10 p-6 h-full flex flex-col justify-end">
            <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-neutral-400 text-sm line-clamp-2">{project.description}</p>
          </div>
        </Link>
      </FadeUp>
    </div>
  );
}
