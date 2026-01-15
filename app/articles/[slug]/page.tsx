import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import FadeUp from "@/components/animations/FadeUp";
import VideoEmbed from "@/components/mdx/YouTubeEmbed";
import ImageEmbed from "@/components/mdx/ImageEmbed";
import LinkEmbed from "@/components/mdx/LinkEmbed";
import ItemEmbed from "@/components/mdx/ItemEmbed";
import { formatDate } from "@/lib/projects";
import ProjectEmbed from "@/components/mdx/ProjectEmbed";
import { ArticleMetadata, getAllArticles } from "@/lib/articles";

const components = {
  FadeUp,
  Video: VideoEmbed,
  Image: ImageEmbed,
  Link: LinkEmbed,
  Item: ItemEmbed,
  Project: ProjectEmbed, // Use: <Project slug="my-cool-project" />
};

const DEFAULT_COLOR = "#3b82f6";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", "articles", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, frontmatter } = await compileMDX<ArticleMetadata>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: components,
  });
  const accentColor = frontmatter.color || DEFAULT_COLOR;
  const allArticles = await getAllArticles();
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);
  const nextArticle = allArticles[currentIndex - 1]; // Newest is 0, so prev index is newer
  const prevArticle = allArticles[currentIndex + 1];

  return (
    <article className="min-h-screen bg-neutral-950 text-white selection:bg-white/20 pb-20">
      {/* A. BANNER (Optional) */}
      {frontmatter.banner && (
        <div className="w-full h-[70vh] relative z-0">
          <Image
            src={frontmatter.banner}
            alt="Banner"
            fill
            className="object-cover opacity-70" // Slightly brighter than 60
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/0 via-neutral-950/60 to-neutral-950" />
        </div>
      )}

      {/* B. HEADER */}
      <div className={`px-6 ${frontmatter.banner ? "-mt-32 relative z-10" : "pt-32"}`}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp delay={0}>
            <Link
              href="/quest-log"
              className="text-xs font-bold tracking-widest uppercase text-neutral-500 hover:text-white transition mb-6 inline-block border border-white/5 bg-white/5 px-4 py-2 rounded-full"
            >
              ← Back to Quest Log
            </Link>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1
              className="text-4xl md:text-6xl font-pixel font-bold mb-6 tracking-tight leading-tight"
              style={{ textShadow: `0 0 40px ${accentColor}40`, color: `${accentColor}` }}
            >
              {frontmatter.title}
            </h1>
          </FadeUp>

          <FadeUp
            delay={0.3}
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-neutral-400 font-mono mb-12"
          >
            {/* Date */}
            <span className={"font-bold"}>{formatDate(frontmatter.publishedDate)}</span>

            {/* Separator (Hidden on mobile) */}
            <span className="hidden md:inline text-neutral-600">•</span>

            {/* Nice Badges */}
            <div className="flex flex-wrap justify-center gap-2">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* C. MAIN CONTENT */}
      <div className="max-w-3xl mx-auto px-6">
        <div
          className="prose prose-invert prose-lg prose-headings:font-bold prose-p:text-neutral-300 prose-li:text-neutral-300 prose-img:rounded-xl prose-img:border prose-img:border-white/10"
          style={
            {
              "--tw-prose-headings": accentColor,
              "--tw-prose-links": accentColor,
              "--tw-prose-quotes": accentColor,
              "--tw-prose-bold": "white",
            } as React.CSSProperties
          }
        >
          {content}
        </div>

        {/* BOTTOM */}
        <div className="mt-20 pt-12 border-t border-white/10 flex justify-between items-center">
          <div className="flex gap-4">
            {/* Simple Next/Prev Navigation */}
            {prevArticle && (
              <Link
                href={`/articles/${prevArticle.slug}`}
                className="text-sm text-neutral-500 hover:text-white transition"
              >
                ← Older Quest
              </Link>
            )}
            {nextArticle && (
              <Link
                href={`/articles/${nextArticle.slug}`}
                className="text-sm text-neutral-500 hover:text-white transition"
              >
                Newer Quest →
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
