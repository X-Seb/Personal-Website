import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import FadeUp from "@/components/animations/FadeUp";
import ProjectVideo from "@/components/projects/ProjectVideo";
import ProjectImage from "@/components/projects/ProjectImage";
import ProjectLink from "@/components/projects/ProjectLink";
import { getAllProjects, formatDate, ProjectMetadata, StatusColors } from "@/lib/projects";

const components = {
  FadeUp,
  ProjectVideo,
  ProjectImage,
  ProjectLink,
};

const RPG_MAIN_COLOR = "#a855f7";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", "projects", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");

  // 1. Parse Frontmatter
  const { content, frontmatter } = await compileMDX<ProjectMetadata>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: components,
  });

  // 2. Fetch Related Projects
  const allProjects = await getAllProjects();
  const currentTags = frontmatter.tags || [];

  const relatedProjects = allProjects
    .filter((p) => p.slug !== slug && Array.isArray(p.tags) && p.tags.some((t) => currentTags.includes(t)))
    .slice(0, 3);

  const accentColor = frontmatter.color || RPG_MAIN_COLOR;
  const statusClass =
    frontmatter.status && StatusColors[frontmatter.status]
      ? StatusColors[frontmatter.status]
      : "bg-neutral-500/10 text-neutral-400 border-neutral-500/20";

  return (
    <article className="min-h-screen bg-neutral-950 text-white selection:bg-white/20 pb-20">
      {/* A. BANNER IMAGE */}
      {frontmatter.banner && (
        <div className="w-full h-[70vh] relative">
          <Image src={frontmatter.banner} alt="Banner" fill className="object-cover opacity-70" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/0 via-neutral-950/60 to-neutral-950" />
        </div>
      )}

      {/* B. HEADER SECTION */}
      <div
        className={`px-6 border-b border-white/10 ${
          frontmatter.banner
            ? "-mt-32 relative z-10 border-none"
            : "pt-32 pb-12 bg-gradient-to-b from-black/20 to-transparent"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <FadeUp delay={0}>
            <Link href="/#projects" className="text-sm text-neutral-400 hover:text-white transition mb-8 inline-block">
              ← Return to Quest Log
            </Link>
          </FadeUp>

          <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between pb-8">
            <div className="flex-1 w-full">
              <FadeUp delay={0.2}>
                <h1
                  className="text-4xl md:text-6xl font-bold mb-8 tracking-tight"
                  style={{ color: accentColor, textShadow: `0 0 40px ${accentColor}30` }}
                >
                  {frontmatter.title}
                </h1>
              </FadeUp>
              <FadeUp delay={0.4}>
                {/* META ROW: Date | Tags | Tech Stack */}
                <div className="flex flex-wrap items-center gap-3 text-neutral-400 font-mono text-sm mb-4">
                  {/* Date */}
                  <span className="mr-2">
                    {formatDate(frontmatter.startDate)}
                    {frontmatter.endDate ? ` — ${formatDate(frontmatter.endDate)}` : ""}
                  </span>

                  {/* Standard Tags (Grey) */}
                  {frontmatter.tags &&
                    frontmatter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-bold px-2 py-1 bg-white/10 rounded-md text-neutral-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}

                  {/* Tech Stack (Accent Color) */}
                  {frontmatter.techStack &&
                    frontmatter.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-bold px-2 py-1 rounded-md border bg-white/5"
                        style={{
                          color: accentColor,
                          borderColor: `${accentColor}40`, // 40 hex is about 25% opacity
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </FadeUp>

              {/* ROLE AND STATUS */}
              <FadeUp delay={0.6} className="grid grid-cols-2 gap-8 border-b-4 pb-8 border-white/10 pt-6 max-w-lg">
                {frontmatter.status && (
                  <div>
                    <span className="block text-neutral-400 font-bold uppercase tracking-wider text-xs mb-2">
                      Project Status
                    </span>
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${statusClass}`}>
                      {frontmatter.status}
                    </span>
                  </div>
                )}
                {frontmatter.role && (
                  <div>
                    <span className="block text-neutral-400 font-bold uppercase tracking-wider text-xs mb-2">Role</span>
                    <span className="text-white font-medium">{frontmatter.role}</span>
                  </div>
                )}
              </FadeUp>
            </div>

            {/* C. THUMBNAIL */}
            {!frontmatter.banner && frontmatter.thumbnail && (
              <FadeUp delay={0.3} className="w-full md:w-1/3 hidden md:block">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image src={frontmatter.thumbnail} alt={frontmatter.title} fill className="object-cover" />
                </div>
              </FadeUp>
            )}
          </div>
        </div>
      </div>

      {/* D. MAIN CONTENT */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <div
          className="prose prose-invert prose-lg prose-headings:font-bold prose-img:rounded-xl prose-img:border prose-img:border-white/10"
          style={
            {
              "--tw-prose-headings": accentColor,
              "--tw-prose-links": accentColor,
              "--tw-prose-quotes": accentColor,
            } as React.CSSProperties
          }
        >
          {content}
        </div>
      </div>

      {/* E. FOOTER: RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <div className="border-t border-white/10 bg-neutral-900/30 py-20 mt-20">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-2xl font-bold mb-8 text-white font-pixel">Similar Quests</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group block bg-neutral-900 border border-white/5 rounded-xl overflow-hidden hover:border-white/20 transition-all"
                >
                  <div className="h-40 relative">
                    <Image
                      src={p.thumbnail}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4
                      className="font-bold text-white group-hover:text-purple-400 transition-colors"
                      style={{ "--hover-color": accentColor } as React.CSSProperties}
                    >
                      {p.title}
                    </h4>
                    {p.tags && (
                      <p className="text-xs text-neutral-500 font-mono mt-1">{p.tags.slice(0, 2).join(", ")}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM NAV */}
      <FadeUp delay={0.4} className="py-24 text-center">
        <Link
          href="/#projects"
          className="inline-block px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all text-sm font-bold tracking-widest uppercase"
        >
          Back to Quest Log
        </Link>
      </FadeUp>
    </article>
  );
}
