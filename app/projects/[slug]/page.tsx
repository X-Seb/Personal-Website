import fs from "fs";
import path from "path";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import FadeUp from "@/components/animations/FadeUp";
import YouTube from "@/components/YouTubeMDX"

const components = {
  FadeUp,
  YouTube,
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content",
    "projects",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, frontmatter } = await compileMDX<{
    title: string;
    date: string;
    tags: string[];
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: components,
  });

  return (
    <article className="min-h-screen bg-neutral-950 text-white selection:bg-purple-500 selection:text-white pb-20">
      <div className="pt-32 pb-12 px-6 border-b border-white/10 bg-gradient-to-b from-black/20 to-transparent">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/#projects"
            className="text-sm text-neutral-400 hover:text-white transition mb-8 inline-block"
          >
            ← Return to Quest Log
          </Link>

          <FadeUp>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              {frontmatter.title}
            </h1>
            <div className="flex gap-4 items-center">
              <span className="text-neutral-400 font-mono text-sm">
                {frontmatter.date}
              </span>
              {frontmatter.tags && (
                <div className="flex gap-2">
                  {frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold px-2 py-1 bg-white/10 rounded text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-12">
        <div className="prose prose-invert prose-lg prose-headings:text-purple-400 prose-a:text-purple-400 hover:prose-a:text-purple-300">
          {content}
        </div>
      </div>
    </article>
  );
}
