"use client";
import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import { ProjectMetadata } from "@/lib/projects";

export default function ProjectCard({
  project,
  index,
  size,
}: {
  project: ProjectMetadata;
  index: number;
  size: string;
}) {
  const sizeClasses: Record<string, string> = {
    "1x1": "md:col-span-1 md:row-span-1",
    "2x1": "md:col-span-2 md:row-span-1",
    "1x2": "md:col-span-1 md:row-span-2",
    "2x2": "md:col-span-2 md:row-span-2",
  };

  const isWide = size.startsWith("2");

  return (
    <div className={`${sizeClasses[size] || sizeClasses["1x1"]} h-full`}>
      <FadeUp delay={index * 0.1} className="h-full">
        <Link
          href={`/projects/${project.slug}`}
          className="block h-full group relative overflow-hidden border-2 border-gray-600/40 rounded-3xl hover:border-purple-500/50 bg-neutral-900/50 hover:scale-[1.02] hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 ease-out"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
          </div>

          <div className="relative z-10 p-6 h-full flex flex-col justify-end">
            <h3
              className="text-xl md:text-2xl font-bold font-pixel uppercase line-clamp-2 mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,4)]"
              style={{
                textShadow: `0 0 10px ${project.color}100`,
              }}
            >
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4 overflow-hidden">
              {project.tags?.slice(0, 6).map((tag, i) => (
                <span
                  key={i}
                  className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-white/10 text-neutral-300 border border-white/10 backdrop-blur-sm ${
                    i >= 3 ? (isWide ? "hidden md:inline-block" : "hidden") : ""
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-neutral-300 font-bold text-[10px] md:text-sm line-clamp-2">{project.description}</p>
          </div>
        </Link>
      </FadeUp>
    </div>
  );
}
